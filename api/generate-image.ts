import { GoogleGenAI } from '@google/genai';

const getGoogleGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not defined.');
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: { headers: { 'User-Agent': 'vercel-build' } }
  });
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
        throw new Error(`Image API Error: ${primaryError.message || primaryError}`);
      }
    }

    const imagePart = result?.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData);
    
    if (imagePart?.inlineData?.data) {
      res.status(200).json({ base64: imagePart.inlineData.data });
    } else {
      res.status(500).json({ error: 'No image data returned from model' });
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to generate image', details: String(error) });
  }
}
