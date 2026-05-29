import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import sharp from 'sharp';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Image optimization middleware
  app.get('/image_rich_assets/:filename', async (req, res, next) => {
    try {
      const filename = req.params.filename;
      const ext = path.extname(filename).toLowerCase();
      
      const isImage = ['.jpg', '.jpeg', '.png'].includes(ext);
      
      if (isImage) {
        const acceptsWebp = req.get('accept')?.includes('image/webp');
        if (acceptsWebp) {
          const isDev = process.env.NODE_ENV !== 'production';
          const baseDir = isDev 
            ? path.join(process.cwd(), 'public', 'image_rich_assets')
            : path.join(process.cwd(), 'dist', 'image_rich_assets');
            
          const originalPath = path.join(baseDir, filename);
          const webpFilename = filename.replace(new RegExp(`${ext}$`, 'i'), '.webp');
          const webpPath = path.join(baseDir, webpFilename);
          
          if (fs.existsSync(originalPath)) {
            if (!fs.existsSync(webpPath)) {
              await sharp(originalPath)
                .webp({ quality: 80 })
                .toFile(webpPath);
            }
            res.setHeader('Content-Type', 'image/webp');
            return res.sendFile(webpPath);
          }
        }
      }
      next();
    } catch (err) {
      console.error('Image optimization error:', err);
      next();
    }
  });

  let aiClient: GoogleGenAI | null = null;
  const getGoogleGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not defined. Please ensure your API key has been added in the Settings > Secrets panel of your AI Studio visual environment.');
    }
    if (!aiClient) {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  };

  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      
      const ai = getGoogleGenAI();
      
      // Filter out any leading model messages to guarantee the history starts with a user turn
      let startIndex = 0;
      while (startIndex < messages.length && messages[startIndex].role === 'model') {
        startIndex++;
      }

      const contents = messages.slice(startIndex).map((m: any) => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      contents.push({ role: 'user', parts: [{ text: userMessage }] });

      const modelConfig = {
        config: {
          systemInstruction: 'You are a highly expert Medical Device Regulatory Consultant for RAC Forge Pvt. Ltd. Your goal is to provide accurate, professional, and helpful advice regarding CDSCO (India), USFDA (USA), and EU MDR (Europe) regulations. Be concise but thorough. Always maintain a professional tone.',
        },
        contents: contents,
      };

      let result;
      try {
        result = await ai.models.generateContent({
          model: 'gemini-3.5-flash',
          ...modelConfig,
        });
      } catch (primaryError: any) {
        console.warn('Primary model gemini-3.5-flash failed, attempting fallback to gemini-flash-latest...', primaryError);
        try {
          result = await ai.models.generateContent({
            model: 'gemini-flash-latest',
            ...modelConfig,
          });
        } catch (secondaryError: any) {
          console.error('Secondary model fallback failed as well:', secondaryError);
          throw new Error(`Gemini API Error: ${primaryError.message || primaryError}`);
        }
      }

      res.json({ text: result.text });
    } catch (error: any) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: 'Failed to generate response', details: error.message || String(error) });
    }
  });

  app.post('/api/generate-image', async (req, res) => {
    try {
      const { prompt, size } = req.body;
      const ai = getGoogleGenAI();

      const modelConfig = {
        contents: {
          parts: [
            {
              text: `Generate a professional, high-quality technical illustration or diagram for a medical device regulatory context. Subject: ${prompt}`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: '16:9',
            imageSize: size || '1K',
          },
        },
      };

      let result;
      try {
        result = await ai.models.generateContent({
          model: 'gemini-3-pro-image-preview',
          ...modelConfig,
        });
      } catch (primaryError: any) {
        console.warn('Primary image model gemini-3-pro-image-preview failed, attempting fallback to gemini-2.5-flash-image...', primaryError);
        try {
          result = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            ...modelConfig,
          });
        } catch (secondaryError: any) {
          console.error('Image model fallback failed:', secondaryError);
          throw new Error(`Image API Error: ${primaryError.message || primaryError}`);
        }
      }

      const imagePart = result.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData);
      
      if (imagePart?.inlineData?.data) {
        res.json({ base64: imagePart.inlineData.data });
      } else {
        res.status(400).json({ error: 'No image was generated. Please try a different prompt.' });
      }
    } catch (error: any) {
      console.error('Image API Error:', error);
      res.status(500).json({ error: 'Failed to generate image', details: error.message || String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    
    // Explicitly serve sitemap and robots.txt
    app.get('/sitemap.xml', (req, res) => {
      res.sendFile(path.join(distPath, 'sitemap.xml'));
    });
    app.get('/robots.txt', (req, res) => {
      res.sendFile(path.join(distPath, 'robots.txt'));
    });

    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
