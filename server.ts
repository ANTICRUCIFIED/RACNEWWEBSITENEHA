import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      
      const history = messages.map((m: any) => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const result = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        config: {
          systemInstruction: 'You are a highly expert Medical Device Regulatory Consultant for RAC Forge Pvt. Ltd. Your goal is to provide accurate, professional, and helpful advice regarding CDSCO (India), USFDA (USA), and EU MDR (Europe) regulations. Be concise but thorough. Always maintain a professional tone.',
        },
        contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      });

      res.json({ text: result.text });
    } catch (error: any) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: 'Failed to generate response', details: error.message });
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
