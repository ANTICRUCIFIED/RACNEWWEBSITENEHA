import React, { useState } from 'react';
import { Image as ImageIcon, Wand2, Download, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

let API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
if (typeof window !== 'undefined') {
  if (API_BASE_URL.startsWith('http://') && window.location.protocol === 'https:') {
    API_BASE_URL = '';
  }
  if (window.location.hostname.includes('.run.app') || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    API_BASE_URL = '';
  }
}
if (API_BASE_URL && API_BASE_URL.endsWith('/')) {
  API_BASE_URL = API_BASE_URL.slice(0, -1);
}

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setError(null);
    setImageUrl(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          size: size,
        }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to generate image';
        try {
          const errData = await response.json();
          if (errData && errData.details) {
            errorMsg = errData.details;
          } else if (errData && errData.error) {
            errorMsg = errData.error;
          }
        } catch (_) {}
        throw new Error(errorMsg);
      }

      const data = await response.json();
      if (data && data.base64) {
        setImageUrl(`data:image/png;base64,${data.base64}`);
      } else {
        throw new Error('No image was generated. Please try a different prompt.');
      }
    } catch (err: any) {
      console.error('Image Gen Error:', err);
      setError(err?.message || 'Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651] mb-4">Technical Visualizer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Generate high-quality technical diagrams and regulatory flowcharts using AI to assist in your documentation process.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Controls */}
            <div className="p-8 lg:p-12 space-y-8 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="space-y-4">
                <label className="block text-sm font-bold text-[#0a3651] uppercase tracking-wider">
                  Visual Description
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A flowchart showing the CDSCO MD-14 import license application process for Class B medical devices..."
                  className="w-full h-32 bg-gray-50 border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-[#2c8498] outline-none transition-all resize-none"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-[#0a3651] uppercase tracking-wider">
                  Resolution
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {(['1K', '2K', '4K'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={cn(
                        'py-3 rounded-xl font-bold transition-all border-2',
                        size === s 
                          ? 'bg-[#0a3651] text-white border-[#0a3651]' 
                          : 'bg-white text-gray-400 border-gray-100 hover:border-[#2c8498]'
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={generateImage}
                disabled={isGenerating || !prompt.trim()}
                className="w-full bg-[#2c8498] text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-[#0a3651] transition-all disabled:opacity-50 shadow-lg shadow-[#2c8498]/20"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Generating Visual...</span>
                  </>
                ) : (
                  <>
                    <Wand2 size={20} />
                    <span>Generate Visual</span>
                  </>
                )}
              </button>

              {error && (
                <div className="flex items-center space-x-2 text-red-500 bg-red-50 p-4 rounded-xl">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}
            </div>

            {/* Preview */}
            <div className="bg-gray-900 flex items-center justify-center min-h-[400px] relative group">
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt="Generated technical visual" title="Generated technical visual"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <a
                    href={imageUrl}
                    download="technical-visual.png"
                    className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                  >
                    <Download size={20} />
                  </a>
                </>
              ) : (
                <div className="text-center space-y-4 text-white/30">
                  <ImageIcon size={64} className="mx-auto" />
                  <p className="font-medium">Your visual will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
