import multer from 'multer';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

export interface DocumentChunk {
  id: string;
  filename: string;
  chunkIndex: number;
  text: string;
}

export const documentStore: DocumentChunk[] = [];

function writeStaticCache() {
  const data = JSON.stringify(documentStore, null, 2);
  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
    fs.writeFileSync(path.join(publicDir, 'documents_cache.json'), data);
  } catch (e) {
    console.warn('Could not update static documents cache in public', e);
  }
  try {
    const distDir = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, 'documents_cache.json'), data);
    }
  } catch (e) {
    console.warn('Could not update static documents cache in dist', e);
  }
}

/**
 * Appends continuous learning knowledge from chat interactions.
 */
export async function appendLearnedKnowledge(query: string, response: string) {
  try {
    const docsDir = path.join(process.cwd(), 'documents');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }
    const learningFile = path.join(docsDir, 'continuous_learning.txt');
    
    // Create learning chunk
    const learnedText = `[Learned Interaction - ${new Date().toISOString()}]\nUser Query: ${query}\nRAAAHI Expert Answer: ${response}\n`;
    
    fs.appendFileSync(learningFile, `\n\n---\n\n${learnedText}`);

    // Add to in-memory store dynamically to be available immediately offline or online
    const newChunk: DocumentChunk = {
      id: `learned-${Date.now()}-${documentStore.length}`,
      filename: 'continuous_learning.txt',
      chunkIndex: documentStore.length,
      text: learnedText.trim()
    };
    
    documentStore.push(newChunk);
    
    writeStaticCache();
  } catch (err) {
    console.error('Failed to append learned knowledge:', err);
  }
}

/**
 * Preloads and parses static medical/regulatory documents from the /documents folder.
 * Uses local fast parsing so we don't call text-embedding API, leaving 100% of your
 * Gemini API quota for chat responses and guaranteeing zero-interruption service.
 */
export async function preloadStaticDocuments(aiClient?: GoogleGenAI) {
  if (documentStore.length > 0) return documentStore.length; // Already preloaded
  
  const docsDir = path.join(process.cwd(), 'documents');
  if (!fs.existsSync(docsDir)) {
    console.log('No static documents directory found at /documents');
    return 0;
  }

  const files = fs.readdirSync(docsDir);
  console.log('VELO RAG: Found documents in /documents:', files);
  let totalChunks = 0;

  for (const filename of files) {
    if (filename.startsWith('.') || filename.startsWith('..')) continue;
    
    const filePath = path.join(docsDir, filename);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) continue;

    console.log(`VELO RAG: Local indexing static document: ${filename}`);
    try {
      const buffer = fs.readFileSync(filePath);
      let text = '';
      if (filename.toLowerCase().endsWith('.pdf')) {
        console.warn('PDF parsing is disabled. Skipping PDF file.');
        continue;
      } else {
        text = buffer.toString('utf8');
      }

      if (!text || text.trim().length === 0) {
        console.warn(`VELO RAG: Warning: Document "${filename}" extracted text was completely empty.`);
        continue;
      }

      // Chunking by paragraph/page-size blocks to preserve clean logical context
      const chunkSize = 1200;
      const chunks: string[] = [];
      
      // Try to split on clean paragraph breaks first if possible
      const paragraphs = text.split(/\n\s*\n/);
      let currentChunk = '';
      
      for (const p of paragraphs) {
        if ((currentChunk + p).length > chunkSize) {
          if (currentChunk.trim()) {
            chunks.push(currentChunk.trim());
          }
          currentChunk = p;
        } else {
          currentChunk += (currentChunk ? '\n\n' : '') + p;
        }
      }
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }

      // If paragraph-based chunking didn't yield anything, fallback to character slicing
      if (chunks.length === 0) {
        for (let i = 0; i < text.length; i += chunkSize) {
          chunks.push(text.slice(i, i + chunkSize));
        }
      }

      // Add clean chunks to our store instantly without slow, rate-limited embedding API calls!
      for (let i = 0; i < chunks.length; i++) {
        documentStore.push({
          id: `${filename.replace(/\.[^/.]+$/, "")}-chunk-${i}`,
          filename: filename,
          chunkIndex: i,
          text: chunks[i]
        });
      }

      totalChunks += chunks.length;
      console.log(`VELO RAG: Completed local indexing for ${filename}. Created ${chunks.length} chunks.`);
    } catch (e) {
      console.error(`VELO RAG: Failed to index document "${filename}":`, e);
    }
  }

    writeStaticCache();

  return totalChunks;
}

export const upload = multer({ storage: multer.memoryStorage() });

/**
 * Handles uploaded documents dynamically (kept as helper for on-demand processing)
 */
export async function processDocument(file: Express.Multer.File, aiClient?: GoogleGenAI) {
  let text = '';
  if (file.mimetype === 'application/pdf') {
    text = ''; // PDF parsing disabled
  } else {
    text = file.buffer.toString('utf8');
  }

  // Paragraph-based structured chunking
  const chunkSize = 1200;
  const chunks: string[] = [];
  const paragraphs = text.split(/\n\s*\n/);
  let currentChunk = '';
  
  for (const p of paragraphs) {
    if ((currentChunk + p).length > chunkSize) {
      if (currentChunk.trim()) chunks.push(currentChunk.trim());
      currentChunk = p;
    } else {
      currentChunk += (currentChunk ? '\n\n' : '') + p;
    }
  }
  if (currentChunk.trim()) chunks.push(currentChunk.trim());

  if (chunks.length === 0) {
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
    }
  }

  const addedChunks: DocumentChunk[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = {
      id: `uploaded-${Date.now()}-${i}`,
      filename: file.originalname,
      chunkIndex: i,
      text: chunks[i]
    };
    documentStore.push(chunk);
    addedChunks.push(chunk);
  }

  writeStaticCache();

  return addedChunks.length;
}

/**
 * High-speed local keyword, regex, and exact code matching algorithm.
 * Bypasses embedding model entirely, ensuring zero latency, zero quota drain,
 * and perfect search matching for exact form numbers or codes (e.g. "MD-14", "Class B", "Form 5").
 */
export async function retrieveRelevantContext(query: string, aiClient?: GoogleGenAI, topK: number = 4) {
  if (documentStore.length === 0) return '';
  
  try {
    const queryLower = query.toLowerCase();
    
    // Stopwords list to extract high-signal terms
    const stopwords = new Set([
      'the', 'is', 'a', 'of', 'and', 'in', 'to', 'for', 'with', 'on', 'at', 
      'what', 'how', 'tell', 'me', 'it', 'this', 'that', 'from', 'by', 'an', 
      'are', 'was', 'were', 'be', 'or', 'as', 'can', 'you', 'about', 'is', 'there'
    ]);
    
    // Extract tokens
    const queryWords = queryLower
      .replace(/[^\w\s-]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopwords.has(word));

    if (queryWords.length === 0) {
      const fallbackWords = queryLower.split(/\s+/).filter(word => word.length > 0);
      if (fallbackWords.length === 0) return '';
      queryWords.push(...fallbackWords);
    }

    const scored = documentStore.map(doc => {
      let score = 0;
      const docLower = doc.text.toLowerCase();

      // Look for exact word/regex match
      for (const word of queryWords) {
        if (docLower.includes(word)) {
          score += 2; // Match score
          
          // Huge bonus for exact regulatory code match or boundary matches
          const exactReg = new RegExp(`\\b${word}\\b`, 'i');
          if (exactReg.test(docLower)) {
            score += 5;
          }
        }
      }

      // Bonus for phrase/consecutive match
      if (queryWords.length > 1) {
        for (let i = 0; i < queryWords.length - 1; i++) {
          const phrase = `${queryWords[i]} ${queryWords[i+1]}`;
          if (docLower.includes(phrase)) {
            score += 10;
          }
        }
      }

      // Bonus for specialized regulatory terms that match (e.g. CDSCO, MD-14, MDC, etc.)
      const specializedCodes = ['md-14', 'md-15', 'md-3', 'md-7', 'md-5', 'md-9', 'class a', 'class b', 'class c', 'class d', 'fee', 'sugam', 'wholesale', 'import'];
      for (const code of specializedCodes) {
        if (queryLower.includes(code) && docLower.includes(code)) {
          score += 12;
        }
      }

      return { ...doc, score };
    });

    // Sort descending and keep matched chunks (require a high barrier like 5 to avoid partial word matches)
    const matched = scored.filter(item => item.score >= 5);
    matched.sort((a, b) => b.score - a.score);

    const topChunks = matched.slice(0, topK);
    if (topChunks.length === 0 || topChunks[0].score < 5) {
      // Return empty if no strictly relevant chunks match
      return '';
    }

    return topChunks.map(c => `[Excerpt from document file: ${c.filename}]\n${c.text}`).join('\n\n---\n\n');
  } catch (e) {
    console.error('Local retrieval algorithm error:', e);
    // Silent fail safe
    return '';
  }
}
