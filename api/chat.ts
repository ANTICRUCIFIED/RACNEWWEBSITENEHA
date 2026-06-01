import { GoogleGenAI } from '@google/genai';

const getGoogleGenAI = (customKey?: string) => {
  const apiKey = customKey || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not defined.');
  }
  return new GoogleGenAI({
    apiKey: apiKey,
  });
};

export default async function handler(req: any, res: any) {
  // Setup CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, userMessage, apiKey } = req.body;
    const ai = getGoogleGenAI(apiKey);

    // Filter messages up to the valid context
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
        systemInstruction: `You are RAAAHI (राही)... (Shortened for Vercel Serverless Function.)`,
      },
      contents: contents,
    };

    let result = null;
    const modelsToTry = [
      'gemini-3.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-3.1-pro-preview',
      'gemini-flash-latest'
    ];

    for (const modelInstance of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelInstance,
          ...modelConfig,
        });
        if (response && response.text) {
          result = response;
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelInstance} failed.`);
      }
    }

    if (result && result.text) {
      res.json({ text: result.text });
    } else {
      res.status(500).json({ error: 'All models failed.' });
    }
  } catch (error: any) {
    console.error('API Error:', error);
    res.status(500).json({ error: error.message || 'Unknown error' });
  }
}
