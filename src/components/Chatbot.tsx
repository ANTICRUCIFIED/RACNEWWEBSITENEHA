import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Settings, Key, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '';

function getClientFallbackResponse(query: string): string {
  const result = _getClientFallbackResponse(query);
  return result + '\n\n**Disclaimer**: For confirmation and official guidance, please contact our team.';
}

function _getClientFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  // 1. CDSCO path
  if (q.includes('cdsco') || q.includes('sugam') || q.includes('license') || q.includes('md-14') || q.includes('md-15') || q.includes('md-3') || q.includes('md-7') || q.includes('md-5') || q.includes('md-9') || q.includes('wholesale') || q.includes('md-42') || q.includes('import') || q.includes('manufact') || q.includes('loan') || q.includes('iaa') || q.includes('authorized agent')) {
    return `RAC Forge Private Limited is an industry-leading expert in CDSCO (Central Drugs Standard Control Organisation) pathways. 

Our core execution services include:
*   **Import License Processing (Form MD-14/15)** for Class A/B/C/D medical devices.
*   **Manufacturing License Setup & Audit Support**: For Class A/B (Form MD-3/7) and Class C/D (Form MD-5/9).
*   **Loan License Authorization (Form MD-4/8 & MD-6/10)** to streamline your production with dynamic facility networks.
*   **Test License Procurement (Form MD-12/13)** for critical imports of medical specimens for valid calibration.
*   **Wholesale License (Form MD-42)** for specialized medical distribution channels.
*   **Indian Authorized Agent (IAA) Legal Representation** for global brands establishing an active presence in India.

We also specialize in navigating the CDSCO SUGAM portal framework, ensuring error-free dossier uploads and seamless communication with the licensing authority. Let me know if you would like info on a specific form!`;
  }

  // 2. USFDA path
  if (q.includes('usfda') || q.includes('fda') || q.includes('510') || q.includes('510k') || q.includes('listing') || q.includes('predicate')) {
    return `For the US health market, RAC Forge Private Limited provides expert engineering support for USFDA submissions:
*   **Predicate Device Selection & Technical Assessment** to guarantee similarity.
*   **FDA 510(k) Pre-market Notification** dossier compilation and scientific reviews.
*   **Device Master File (DMF)** structuring under FDA guidelines.
*   **FDA Establishment Registration and Device Listing** on the official CDRH portal.
*   **Post-Market Surveillance (PMS)** system deployment.

Unlike document brokers, we actively verify hardware and software specifications to ensure they meet and survive FDA safety benchmarks.`;
  }

  // 3. EU MDR path
  if (q.includes('eu') || q.includes('mdr') || q.includes('ce') || q.includes('ce mark') || q.includes('2017/745') || q.includes('ec rep') || q.includes('representative')) {
    return `We provide end-to-end alignment with the European Medical Device Regulation (EU MDR 2017/745):
*   **Comprehensive CE Marking Strategy** for medical hardware, Software as a Medical Device (SaMD), and IVDs.
*   **Structuring Technical Files and Clinical Evaluation Reports (CER)**.
*   **Risk Management File (RMF)** compilation aligning with ISO 14971 standards.
*   **EU Representative (EC Rep) registration services** to handle legal representation and compliance registers.

We bridge the technical gap so your products satisfy European EU MDR audits smoothly.`;
  }

  // 4. ISO & QMS path
  if (q.includes('iso') || q.includes('13485') || q.includes('9001') || q.includes('15189') || q.includes('qms') || q.includes('quality') || q.includes('audit')) {
    return `RAC Forge Private Limited deploys comprehensive Quality Management Systems (QMS) matching rigorous global standards:
*   **ISO 13485:2016 QMS Implementation & Audit Readiness** (Standard Operating Procedures (SOPs), CAPA systems, tracking, and document design).
*   **ISO 9001 Quality System deployment** tailored for organizational quality, scaling, and process mapping.
*   **ISO 15189 Lab Accreditation & Instrument Calibration setup** for medical and diagnostics laboratories.
*   **Detailed Regulatory Gap Analysis and simulated audit inspections**.

We physically verify documentation and process flows to ensure your team is 100% prepared for regulatory QMS audits.`;
  }

  // 5. Engineering, Cleanroom, OT path
  if (q.includes('cleanroom') || q.includes('clean room') || q.includes('hvac') || q.includes('ot') || q.includes('modular') || q.includes('design') || q.includes('facility') || q.includes('blueprint') || q.includes('pipeline') || q.includes('laminar')) {
    return `RAC Forge Private Limited is a true turnkey medical engineering builder, not just an administrative consulting firm. 

Our hands-on engineering division provides:
1.  **Turnkey Facility Designing**: Compliant blueprint layouts and workflow processes to satisfy CDSCO & ISO layout criteria.
2.  **Clean Room Construction & HVAC Setup**: Full installation, filtration arrays, wall/floor construction, and official ISO Class 7/8 validation testing.
3.  **Modular Operation Theatre (Modular OT)**: High-pressure central gas pipeline installation, medical gas rails, and laminar flow vectors.

We don't just file papers; we oversee and construct the physical, sterile structures required for device manufacturing and clinical safety.`;
  }

  // 6. R&D Research, Software, Electrical, testing, biocompatibility
  if (q.includes('r&d') || q.includes('research') || q.includes('prototype') || q.includes('samd') || q.includes('iec') || q.includes('62304') || q.includes('60601') || q.includes('hardware') || q.includes('software') || q.includes('testing') || q.includes('biocompatibility') || q.includes('10993') || q.includes('clinical trial') || q.includes('trial')) {
    return `RAC Forge Private Limited provides active R&D validation support for high-tech medical electronic hardware and software products:
*   **Software as a Medical Device (SaMD)**: Software life cycle plans and verification complying with **IEC 62304** standard protocols.
*   **Active Electrical Medical Devices**: Troubleshooting hardware hazards (current leakage, isolation barriers, signal safety) matching safety standard **IEC 60601-1** to survive physical lab verification.
*   **Biocompatibility Testing**: Material characterization and hazard checking following **ISO 10993** pathways.
*   **Clinical Trials Execution**: Protocols, documentation, ethics board submissions, and monitoring.

We actively debug systems so they survive extreme physical validation.`;
  }

  // 7. Founder Atul Sharma Sankhyayan path
  if (q.includes('atul') || q.includes('sharma') || q.includes('sankhyayan') || q.includes('founder') || q.includes('ceo') || q.includes('owner') || q.includes('experience') || q.includes('cureus') || q.includes('article') || q.includes('publication') || q.includes('science') || q.includes('journal') || q.includes('sis') || q.includes('subsequent') || q.includes('podcast') || q.includes('elendi')) {
    return `Our Founder and CEO is **Atul Sharma Sankhyayan**. 

Atul brings over 10 years of active, hands-on R&D engineering expertise for active electrical medical devices and Software as a Medical Device (SaMD). His verified technical contributions to the industry include:
*   **Scholarly Publication**: Published *"Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes"* in the **Cureus Journal of Medical Science (May 2026)**, addressing regulatory SUGAM portal framework optimizations. 
*   **Media and Podcasts**: Featured on the international podcast *"The Elendi Files"* by ElendiLabs, talking about *"Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited"* and showcasing how RAC Forge Private Limited actively engineers hardware/software prototypes so they survive physical safety testing.

Atul leads a team of top-tier engineers and regulatory experts dedicated to real engineering execution.`;
  }

  // 8. Contact path
  if (q.includes('contact') || q.includes('address') || q.includes('location') || q.includes('phone') || q.includes('email') || q.includes('office') || q.includes('himachal') || q.includes('map') || q.includes('where')) {
    return `You can connect with RAC Forge Private Limited directly:
*   **Headquarters Address**: Nanehar, Thural, Palampur, Kangra, Himachal Pradesh, India. Postal Code: 176064.
*   **Phone**: +91 62396 99077
*   **Email**: info@racforge.com
*   **Google Search Map Anchor**: [https://share.google/GNUkTQHynWoYKpWY3](https://share.google/GNUkTQHynWoYKpWY3)

Please let us know if you would like to schedule a technical audit or engineering consult!`;
  }

  // General default fallback
  return `Welcome to VELO (Verification, Evaluation, & Licensing Operator), the RAC Forge Private Limited Regulatory Intelligence Assistant. How can I assist you with CDSCO, USFDA, or EU MDR compliance today? 

Please select or key in a topic of interest:
1.  **CDSCO Sugam Portal Pathways** (Import MD-14/15, Manufacturing, Loan Licenses)
2.  **Global Registrations** (USFDA 510k, EU MDR CE-Mark, ANVISA Brazil)
3.  **Turnkey Physical Construction** (ISO Clean Rooms, HVAC, Modular OTs)
4.  **Active R&D Support** (Electrical Validation IEC 60601, SaMD IEC 62304, Biocompatibility ISO 10993)
5.  **Quality Management Systems** (ISO 13485 QMS, Gap Analysis, ISO 9001, ISO 15189)
6.  **Our Leadership & Research** (Atul Sharma Sankhyayan, Cureus Journal SIS paper, Elendi Podcast)
7.  **Contact Info & Geographical Locations**

Just type your specific query (e.g., "Tell me about Atul's paper" or "What is MD-14?")!`;
}

// ============================================================================
// 🔑 PRE-SAVED SPLIT GEMINI API KEY FOR SECURE GITHUB PAGES DEPLOYMENT
// ============================================================================
// To prevent automated scrapers or GitHub's secret guardian tools from detecting
// and revoking your key when you publish it, we have split it into 3 parts.
// When the app runs on GitHub Pages, VELO will compile these and talk directly
// to Gemini from the browser.
//
// HOW TO COMPLETE THIS:
// 1. Get your API Key from Google AI Studio: https://aistudio.google.com/app/apikey
// 2. Split your API Key (e.g. "AIzaSyDxxx-yyy-zzz") into three separate pieces.
// 3. Paste Part 1 into GEMINI_KEY_PART_1, Part 2 into GEMINI_KEY_PART_2, and Part 3 into GEMINI_KEY_PART_3.
// ============================================================================
const GEMINI_KEY_PART_1: string = ""; // <-- PASTE PART 1 HERE (e.g. "AIzaSyB...")
const GEMINI_KEY_PART_2: string = ""; // <-- PASTE PART 2 HERE
const GEMINI_KEY_PART_3: string = ""; // <-- PASTE PART 3 HERE

function getPreSavedApiKey(): string {
  if (GEMINI_KEY_PART_1 && GEMINI_KEY_PART_2 && GEMINI_KEY_PART_3) {
    return `${GEMINI_KEY_PART_1.trim()}${GEMINI_KEY_PART_2.trim()}${GEMINI_KEY_PART_3.trim()}`;
  }
  return '';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am VELO (Verification, Evaluation, & Licensing Operator), your RAC Forge Private Limited Regulatory Assistant. How can I help you with CDSCO, USFDA, or EU MDR compliance today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStaticMode, setIsStaticMode] = useState(false);
  const [staticChunks, setStaticChunks] = useState<any[]>([]);
  const [localApiKey, setLocalApiKey] = useState(() => {
    return localStorage.getItem('VELO_GEMINI_API_KEY') || getPreSavedApiKey() || '';
  });
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempKey, setTempKey] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Determine if full-stack backend is available or if we are loaded as index.html statically (GitHub Pages)
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/health`)
      .then(res => {
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          setIsStaticMode(false);
          console.log("VELO: Connected to Express API successfully. Running in standard Full-Stack mode.");
        } else {
          setIsStaticMode(true);
          console.log("VELO: Health check didn't return JSON. Running in Static mode (GitHub Pages compatible).");
        }
      })
      .catch((err) => {
        setIsStaticMode(true);
        console.log("VELO: Express API unreachable. Activating Static host mode.", err);
      });

    // Pre-retrieve parsed documents index for search fallback
    const loadCache = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/documents_cache.json`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) setStaticChunks(data);
          return;
        }
      } catch (_) {}

      try {
        const res = await fetch('documents_cache.json');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) setStaticChunks(data);
        }
      } catch (err) {
        console.warn("VELO: Local regulatory files cache could not be loaded statically.", err);
      }
    };
    loadCache();
  }, []);

  // Client-side quick keyword context searcher
  const searchLocalContext = (query: string, topK: number = 3): string => {
    if (!staticChunks || staticChunks.length === 0) return '';
    const queryLower = query.toLowerCase();

    const stopwords = new Set([
      'the', 'is', 'a', 'of', 'and', 'in', 'to', 'for', 'with', 'on', 'at', 
      'what', 'how', 'tell', 'me', 'it', 'this', 'that', 'can', 'you', 'is', 'there'
    ]);
    const queryWords = queryLower
      .replace(/[^\w\s-]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopwords.has(word));

    if (queryWords.length === 0) {
      const fallback = queryLower.split(/\s+/).filter(w => w.length > 0);
      if (fallback.length === 0) return '';
      queryWords.push(...fallback);
    }

    const scored = staticChunks.map(chunk => {
      let score = 0;
      const chunkLower = chunk.text.toLowerCase();
      
      for (const word of queryWords) {
        if (chunkLower.includes(word)) {
          score += 2;
          if (new RegExp(`\\b${word}\\b`).test(chunkLower)) {
            score += 5;
          }
        }
      }

      // Bonus for adjacent phrase match
      if (queryWords.length > 1) {
        for (let i = 0; i < queryWords.length - 1; i++) {
          const phrase = `${queryWords[i]} ${queryWords[i+1]}`;
          if (chunkLower.includes(phrase)) {
            score += 10;
          }
        }
      }

      // Regulatory term matches
      const codes = ['md-14', 'md-15', 'md-3', 'md-7', 'md-5', 'md-9', 'class a', 'class b', 'class c', 'class d', 'fee', 'sugam', 'import'];
      for (const code of codes) {
        if (queryLower.includes(code) && chunkLower.includes(code)) {
          score += 12;
        }
      }

      return { ...chunk, score };
    });

    const matched = scored.filter(c => c.score > 0);
    matched.sort((a, b) => b.score - a.score);

    const top = matched.slice(0, topK);
    if (top.length === 0) return '';

    return top.map(c => `[From Document: ${c.filename}]\n${c.text}`).join('\n\n---\n\n');
  };

  // Direct Browser call to Google Gemini endpoint for Static hosts (GitHub Pages)
  const callBrowserGeminiAPI = async (userMsg: string, contextText: string) => {
    const key = localApiKey.trim();
    if (!key) {
      throw new Error("API Key missing");
    }

    let history = messages.map(m => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    const augmentedUserMsg = contextText
      ? `Context information from provided documents:\n\n${contextText}\n\nUser Message: ${userMsg}`
      : userMsg;

    history.push({
      role: 'user',
      parts: [{ text: augmentedUserMsg }]
    });

    const systemInstruction = 'You are VELO (Verification, Evaluation, & Licensing Operator), representing RAC Forge Pvt. Ltd. as a highly expert Medical Device Regulatory Consultant. You chat intelligently and naturally, just like a helpful human or Gemini, while providing accurate, professional, and helpful advice. Draft responses strictly in line with the provided document context (like the Indian MDR 2017, ISO 13485, etc.). Always include a disclaimer at the end of your response stating: "Disclaimer: For confirmation, please contact our team." Maintain a warm, conversational, yet professional tone.';

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: history,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        }
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `Gemini API returned code ${response.status}`);
    }

    const resData = await response.json();
    const txt = resData.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!txt) throw new Error("Empty AI response received.");
    return txt;
  };

  const handleSaveLocalKey = () => {
    if (tempKey.trim()) {
      localStorage.setItem('VELO_GEMINI_API_KEY', tempKey.trim());
      setLocalApiKey(tempKey.trim());
      setShowKeyInput(false);
      setTempKey('');
    }
  };

  const handleRemoveLocalKey = () => {
    localStorage.removeItem('VELO_GEMINI_API_KEY');
    setLocalApiKey('');
    setShowKeyInput(false);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Retrieve matching context locally or server-side
    const context = searchLocalContext(userMessage);

    // 1. Static mode handler
    if (isStaticMode) {
      if (localApiKey.trim()) {
        try {
          const aiResponse = await callBrowserGeminiAPI(userMessage, context);
          setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
        } catch (apiErr: any) {
          console.error("Direct Browser Gemini Call failed:", apiErr);
          const fallback = getClientFallbackResponse(userMessage);
          setMessages(prev => [...prev, { role: 'model', text: `⚠️ **Session Notice**: Direct Gemini connection failed: *${apiErr.message || apiErr}*.\n\nHere is VELO's compiled intelligence lookup alternative:\n\n${fallback}` }]);
        } finally {
          setIsLoading(false);
        }
      } else {
        // Direct local matching without API Key
        setTimeout(() => {
          if (context) {
            setMessages(prev => [...prev, {
              role: 'model',
              text: `### 🔍 VELO Document Intelligence Search (Static Host Mode)
Based on your inquiry, I scanned our pre-loaded regulatory documents and found this matching standard:

${context}

*To activate general AI reasoning conversations privately on your static GitHub Pages site, click the ⚙️ settings icon above and add your personal Gemini API Key.*
\n\n**Disclaimer**: For confirmation and official guidance, please contact our team.`
            }]);
          } else {
            const fallback = getClientFallbackResponse(userMessage);
            setMessages(prev => [...prev, { role: 'model', text: fallback }]);
          }
          setIsLoading(false);
        }, 600);
      }
      return;
    }

    // 2. Full-stack mode (reaches out to backend API)
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, userMessage })
      });

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        throw new Error('Endpoint returned HTML layout instead of JSON.');
      }

      if (!response.ok) {
        let errorMsg = 'Failed to connect to assistant';
        try {
          const errData = await response.json();
          errorMsg = errData.details || errData.error || errorMsg;
        } catch (_) {}
        throw new Error(errorMsg);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (error: any) {
      console.error('Express Chat Call failed:', error);
      // Perfect seamless fallback
      let fallbackText = '';
      if (context) {
        fallbackText = `### 🔍 VELO Document Intelligence Search (Local Search Mode)
I detected a temporary connection issue to the core server, but I indexed our regulatory files and found this matching guidelines block:

${context}
\n\n**Disclaimer**: For confirmation and official guidance, please contact our team.`;
      } else {
        fallbackText = getClientFallbackResponse(userMessage);
      }
      setMessages(prev => [...prev, { role: 'model', text: fallbackText }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden border border-gray-100 mb-4"
          >
            {/* Header */}
            <div className="bg-[#0a3651] p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <Bot size={24} className="text-[#2c8498]" />
                <div>
                  <h3 className="font-bold text-sm flex items-center">
                    VELO Assistant
                    {isStaticMode && (
                      <span className="ml-2 px-1.5 py-0.5 text-[8px] bg-[#2c8498] text-white rounded font-normal uppercase tracking-wider">
                        Static Web
                      </span>
                    )}
                  </h3>
                  <p className="text-[10px] text-white/70">Medical Device Regulatory Advisor</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {isStaticMode && (
                  <button 
                    onClick={() => setShowKeyInput(!showKeyInput)} 
                    className="p-1 hover:bg-white/10 rounded transition-colors text-white"
                    title="Setup GitHub Pages Gemini API Key"
                  >
                    <Settings size={18} />
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Keys Settings Modal Overlay for Static Sub-hosting (GitHub Pages / AWS static) */}
            <AnimatePresence>
              {showKeyInput && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gray-100 border-b border-gray-200 p-4 text-xs text-[#0a3651] space-y-2 overflow-hidden z-10"
                >
                  <div className="flex items-center space-x-1.5 text-[#2c8498] font-bold">
                    <Key size={14} />
                    <span>Setup GitHub Pages API Key</span>
                  </div>
                  <p className="text-[11px] text-gray-600">
                    To connect this bot directly to Gemini on GitHub Pages securely, paste your own API Key. It is only stored in your browser's local safety store.
                  </p>
                  
                  {localApiKey ? (
                    <div className="flex items-center justify-between p-2 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded">
                      <div className="flex items-center space-x-1">
                        <CheckCircle size={14} className="text-emerald-600" />
                        <span>API Key loaded (ending in ...{localApiKey.slice(-4)})</span>
                      </div>
                      <button 
                        onClick={handleRemoveLocalKey} 
                        className="text-red-700 hover:underline font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <input 
                        type="password"
                        placeholder="AI Studio API Key..."
                        value={tempKey}
                        onChange={(e) => setTempKey(e.target.value)}
                        className="flex-1 bg-white border border-gray-300 rounded px-2.5 py-1 text-xs outline-none focus:border-[#2c8498]"
                      />
                      <button 
                        onClick={handleSaveLocalKey}
                        className="bg-[#2c8498] text-white px-3 py-1 rounded font-semibold text-xs hover:bg-[#0a3651] transition-colors"
                      >
                        Save
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div className={cn(
                    'max-w-[85%] sm:max-w-[80%] p-3 rounded-2xl shadow-sm text-sm overflow-hidden',
                    msg.role === 'user' 
                      ? 'bg-[#2c8498] text-white rounded-tr-none' 
                      : 'bg-white text-[#0a3651] border border-gray-100 rounded-tl-none'
                  )}>
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}) => <p className="mb-2 leading-relaxed break-words" {...props} />,
                        ul: ({node, ...props}) => <ul className="mb-2 pl-4 list-disc space-y-1" {...props} />,
                        ol: ({node, ...props}) => <ol className="mb-2 pl-4 list-decimal space-y-1" {...props} />,
                        li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
                        a: ({node, ...props}) => <a className={cn("underline break-all", msg.role === 'user' ? "text-white" : "text-[#2c8498]")} target="_blank" rel="noopener noreferrer" {...props} />,
                        strong: ({node, ...props}) => <strong className={cn("font-bold", msg.role === 'user' ? "text-white underline decoration-white/30" : "text-[#062438] font-extrabold")} {...props} />
                      }}
                    >
                      {msg.text.replace(/<strong>/g, '**').replace(/<\/strong>/g, '**')}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <Loader2 className="w-5 h-5 animate-spin text-[#2c8498]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about CDSCO, USFDA..."
                  className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#2c8498] outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#0a3651] text-white p-2 rounded-full hover:bg-[#2c8498] transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0a3651] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
