import { GoogleGenAI } from '@google/genai';

const getGoogleGenAI = (customKey?: string) => {
  const apiKey = customKey || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not defined and no custom key provided.');
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: { headers: { 'User-Agent': 'vercel-build' } }
  });
};

export default async function handler(req: any, res: any) {
  // Setup CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

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

    // Reconstruct simplified config for Vercel edge/serverless function
    const modelConfig = {
      config: {
        systemInstruction: `You are RAAAHI (राही) — Regulatory Affairs And Approval Harmonized Intelligence, an advanced AI conversational agent representing RAC Forge Pvt. Ltd. as a highly expert Medical Device Regulatory Consultant. You chat intelligently, naturally, and professionally.
Always include a disclaimer at the end of your response stating: "Disclaimer: For confirmation, please contact our team." Maintain a warm, conversational, yet professional tone.`,
      },
      contents: messages.map((m: any) => ({
        role: m.role,
        parts: [{ text: m.text }]
      })).concat([{ role: 'user', parts: [{ text: userMessage }] }])
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      ...modelConfig,
    });

    res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error('Vercel API error:', error);
    res.status(500).json({ error: 'Failed to generate response', details: String(error) });
  }
}
