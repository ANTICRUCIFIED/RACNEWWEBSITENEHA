import { GoogleGenAI } from '@google/genai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Lazy-initialize Gemini client to avoid crashes if the key isn't loaded yet
let aiClient: any = null;
function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY is missing from environment variables.');
    }
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set up standard CORS headers for GitHub Pages origin
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages body.' });
    }

    const ai = getAiClient();
    
    // System instructions for VELO
    const systemInstruction = `You are VELO (Verification, Evaluation, & Licensing Operator), representing RAC Forge Pvt. Ltd. (https://www.racforge.com). Answer accurately, professionally, and warmly. Citing or outputting direct download URLs whenever users request standards, PDFs, and official CDSCO guidance is critical. Always append this exact disclaimer at the end of every response: "Disclaimer: For confirmation, please contact our team."`;

    // Map history to standard Gemini SDK format
    const formattedContents = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.2,
      }
    });

    const replyText = response.text || "I am currently processing your request. Please contact our technical team directly.";
    return res.status(200).json({ text: replyText });

  } catch (error: any) {
    console.error('Error contacting Gemini API:', error);
    return res.status(500).json({ 
      error: 'Failed to generate response.', 
      details: error.message 
    });
  }
}
