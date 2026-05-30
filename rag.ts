import multer from 'multer';
import * as pdfParseModule from 'pdf-parse';
const pdfParse: any = (pdfParseModule as any).default || pdfParseModule;
import { GoogleGenAI } from '@google/genai';

export interface DocumentChunk {
  id: string;
  filename: string;
  chunkIndex: number;
  text: string;
  embedding: number[];
}

export const documentStore: DocumentChunk[] = [];

export const upload = multer({ storage: multer.memoryStorage() });

export async function processDocument(file: Express.Multer.File, aiClient: GoogleGenAI) {
  let text = '';
  if (file.mimetype === 'application/pdf') {
    const data = await pdfParse(file.buffer);
    text = data.text;
  } else {
    text = file.buffer.toString('utf8');
  }

  // Chunking
  const chunkSize = 1000;
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  // Embedding
  const newChunks: DocumentChunk[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunkText = chunks[i];
    try {
      const response = await aiClient.models.embedContent({
        model: 'text-embedding-004',
        contents: chunkText
      });
      const embedding = response.embeddings?.[0]?.values;
      if (embedding) {
        newChunks.push({
          id: Math.random().toString(36).substring(7),
          filename: file.originalname,
          chunkIndex: i,
          text: chunkText,
          embedding
        });
      }
    } catch(e) {
       console.error('Embedding error', e);
    }
  }

  documentStore.push(...newChunks);
  return newChunks.length;
}

function cosineSimilarity(a: number[], b: number[]) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function retrieveRelevantContext(query: string, aiClient: GoogleGenAI, topK: number = 3) {
  if (documentStore.length === 0) return '';
  
  try {
    const response = await aiClient.models.embedContent({
      model: 'text-embedding-004',
      contents: query
    });
    const queryEmbedding = response.embeddings?.[0]?.values;
    if (!queryEmbedding) return '';

    const scored = documentStore.map(doc => ({
      ...doc,
      score: cosineSimilarity(queryEmbedding, doc.embedding)
    }));

    scored.sort((a, b) => b.score - a.score);
    const topChunks = scored.slice(0, topK);

    return topChunks.map(c => `Excerpt from ${c.filename}:\n${c.text}`).join('\n\n');
  } catch (e) {
    console.error('Retrieval error', e);
    return '';
  }
}
