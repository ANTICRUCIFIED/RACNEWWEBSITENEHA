import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

function renderFormattedMessage(text: string, isUser: boolean) {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    let isBullet = false;
    let cleanLine = line;
    let listPrefix = '';

    const trimmed = line.trim();
    if (trimmed.startsWith('•')) {
      isBullet = true;
      cleanLine = trimmed.substring(1).trim();
      listPrefix = '• ';
    } else if (trimmed.startsWith('* ') && !trimmed.startsWith('**')) {
      isBullet = true;
      cleanLine = trimmed.substring(2);
      listPrefix = '• ';
    } else {
      const match = trimmed.match(/^(\d+\.)\s(.*)/);
      if (match) {
        isBullet = true;
        listPrefix = match[1] + ' ';
        cleanLine = match[2];
      }
    }

    // Parse links and bold spans in the clean line
    const parts: React.ReactNode[] = [];
    let currentText = cleanLine;
    let keyCounter = 0;

    // A simple link detection and bolding regex/loop
    while (currentText.length > 0) {
      const boldIndex = currentText.indexOf('**');
      const httpIndex = currentText.search(/https?:\/\/[^\s]+/);

      // Rule: Find whichever occurs first: bold syntax or link syntax
      if (boldIndex !== -1 && (httpIndex === -1 || boldIndex < httpIndex)) {
        // Handle text before bold
        if (boldIndex > 0) {
          parts.push(<span key={`text-${lineIdx}-${keyCounter++}`}>{currentText.substring(0, boldIndex)}</span>);
        }

        const closingIndex = currentText.indexOf('**', boldIndex + 2);
        if (closingIndex !== -1) {
          const boldText = currentText.substring(boldIndex + 2, closingIndex);
          parts.push(
            <strong 
              key={`bold-${lineIdx}-${keyCounter++}`} 
              className={cn("font-bold", isUser ? "text-white underline decoration-white/30" : "text-[#062438] font-extrabold")}
            >
              {boldText}
            </strong>
          );
          currentText = currentText.substring(closingIndex + 2);
        } else {
          parts.push(<span key={`text-err-${lineIdx}-${keyCounter++}`}>{currentText.substring(boldIndex)}</span>);
          currentText = '';
        }
      } else if (httpIndex !== -1) {
        // Handle text before URL
        if (httpIndex > 0) {
          parts.push(<span key={`text-${lineIdx}-${keyCounter++}`}>{currentText.substring(0, httpIndex)}</span>);
        }

        const remaining = currentText.substring(httpIndex);
        const urlMatch = remaining.match(/^(https?:\/\/[^\s,;)]+)/);
        if (urlMatch) {
          const url = urlMatch[1];
          parts.push(
            <a 
              key={`link-${lineIdx}-${keyCounter++}`} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "underline transition-colors breakdown-words", 
                isUser ? "text-white hover:text-white/80" : "text-[#2c8498] hover:text-[#0a3651] font-medium"
              )}
            >
              {url}
            </a>
          );
          currentText = remaining.substring(url.length);
        } else {
          parts.push(<span key={`text-errurl-${lineIdx}-${keyCounter++}`}>{remaining}</span>);
          currentText = '';
        }
      } else {
        // No bold or link left
        parts.push(<span key={`text-end-${lineIdx}-${keyCounter++}`}>{currentText}</span>);
        currentText = '';
      }
    }

    if (isBullet) {
      return (
        <div key={lineIdx} className="flex items-start space-x-2 my-1.5 pl-2 leading-relaxed">
          <span className={cn("select-none shrink-0 font-bold", isUser ? "text-white" : "text-[#2c8498]")}>{listPrefix}</span>
          <span className="flex-1 text-sm">{parts}</span>
        </div>
      );
    } else {
      if (trimmed === '') {
        return <div key={lineIdx} className="h-2.5" />;
      }
      return (
        <p key={lineIdx} className="my-1.5 leading-relaxed text-sm">
          {parts}
        </p>
      );
    }
  });
}

function getClientFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  // 1. CDSCO path
  if (q.includes('cdsco') || q.includes('sugam') || q.includes('license') || q.includes('md-14') || q.includes('md-15') || q.includes('md-3') || q.includes('md-7') || q.includes('md-5') || q.includes('md-9') || q.includes('wholesale') || q.includes('md-42') || q.includes('import') || q.includes('manufact') || q.includes('loan') || q.includes('iaa') || q.includes('authorized agent')) {
    return `RAC Forge Private Limited is an industry-leading expert in CDSCO (Central Drugs Standard Control Organisation) pathways. 

Our core execution services include:
• **Import License Processing (Form MD-14/15)** for Class A/B/C/D medical devices.
• **Manufacturing License Setup & Audit Support**: For Class A/B (Form MD-3/7) and Class C/D (Form MD-5/9).
• **Loan License Authorization (Form MD-4/8 & MD-6/10)** to streamline your production with dynamic facility networks.
• **Test License Procurement (Form MD-12/13)** for critical imports of medical specimens for valid calibration.
• **Wholesale License (Form MD-42)** for specialized medical distribution channels.
• **Indian Authorized Agent (IAA) Legal Representation** for global brands establishing an active presence in India.

We also specialize in navigating the CDSCO SUGAM portal framework, ensuring error-free dossier uploads and seamless communication with the licensing authority. Let me know if you would like info on a specific form!`;
  }

  // 2. USFDA path
  if (q.includes('usfda') || q.includes('fda') || q.includes('510') || q.includes('510k') || q.includes('listing') || q.includes('predicate')) {
    return `For the US health market, RAC Forge Private Limited provides expert engineering support for USFDA submissions:
• **Predicate Device Selection & Technical Assessment** to guarantee similarity.
• **FDA 510(k) Pre-market Notification** dossier compilation and scientific reviews.
• **Device Master File (DMF)** structuring under FDA guidelines.
• **FDA Establishment Registration and Device Listing** on the official CDRH portal.
• **Post-Market Surveillance (PMS)** system deployment.

Unlike document brokers, we actively verify hardware and software specifications to ensure they meet and survive FDA safety benchmarks.`;
  }

  // 3. EU MDR path
  if (q.includes('eu') || q.includes('mdr') || q.includes('ce') || q.includes('ce mark') || q.includes('2017/745') || q.includes('ec rep') || q.includes('representative')) {
    return `We provide end-to-end alignment with the European Medical Device Regulation (EU MDR 2017/745):
• **Comprehensive CE Marking Strategy** for medical hardware, Software as a Medical Device (SaMD), and IVDs.
• **Structuring Technical Files and Clinical Evaluation Reports (CER)**.
• **Risk Management File (RMF)** compilation aligning with ISO 14971 standards.
• **EU Representative (EC Rep) registration services** to handle legal representation and compliance registers.

We bridge the technical gap so your products satisfy European EU MDR audits smoothly.`;
  }

  // 4. ISO & QMS path
  if (q.includes('iso') || q.includes('13485') || q.includes('9001') || q.includes('15189') || q.includes('qms') || q.includes('quality') || q.includes('audit')) {
    return `RAC Forge Private Limited deploys comprehensive Quality Management Systems (QMS) matching rigorous global standards:
• **ISO 13485:2016 QMS Implementation & Audit Readiness** (Standard Operating Procedures (SOPs), CAPA systems, tracking, and document design).
• **ISO 9001 Quality System deployment** tailored for organizational quality, scaling, and process mapping.
• **ISO 15189 Lab Accreditation & Instrument Calibration setup** for medical and diagnostics laboratories.
• **Detailed Regulatory Gap Analysis and simulated audit inspections**.

We physically verify documentation and process flows to ensure your team is 100% prepared for regulatory QMS audits.`;
  }

  // 5. Engineering, Cleanroom, OT path
  if (q.includes('cleanroom') || q.includes('clean room') || q.includes('hvac') || q.includes('ot') || q.includes('modular') || q.includes('design') || q.includes('facility') || q.includes('blueprint') || q.includes('pipeline') || q.includes('laminar')) {
    return `RAC Forge is a true turnkey medical engineering builder, not just an administrative consulting firm. 

Our hands-on engineering division provides:
1. **Turnkey Facility Designing**: Compliant blueprint layouts and workflow processes to satisfy CDSCO & ISO layout criteria.
2. **Clean Room Construction & HVAC Setup**: Full installation, filtration arrays, wall/floor construction, and official ISO Class 7/8 validation testing.
3. **Modular Operation Theatre (Modular OT)**: High-pressure central gas pipeline installation, medical gas rails, and laminar flow vectors.

We don't just file papers; we oversee and construct the physical, sterile structures required for device manufacturing and clinical safety.`;
  }

  // 6. R&D Research, Software, Electrical, testing, biocompatibility
  if (q.includes('r&d') || q.includes('research') || q.includes('prototype') || q.includes('samd') || q.includes('iec') || q.includes('62304') || q.includes('60601') || q.includes('hardware') || q.includes('software') || q.includes('testing') || q.includes('biocompatibility') || q.includes('10993') || q.includes('clinical trial') || q.includes('trial')) {
    return `RAC Forge Private Limited provides active R&D validation support for high-tech medical electronic hardware and software products:
• **Software as a Medical Device (SaMD)**: Software life cycle plans and verification complying with **IEC 62304** standard protocols.
• **Active Electrical Medical Devices**: Troubleshooting hardware hazards (current leakage, isolation barriers, signal safety) matching safety standard **IEC 60601-1** to survive physical lab verification.
• **Biocompatibility Testing**: Material characterization and hazard checking following **ISO 10993** pathways.
• **Clinical Trials Execution**: Protocols, documentation, ethics board submissions, and monitoring.

We actively debug systems so they survive extreme physical validation.`;
  }

  // 7. Founder Atul Sharma Sankhyayan path
  if (q.includes('atul') || q.includes('sharma') || q.includes('sankhyayan') || q.includes('founder') || q.includes('ceo') || q.includes('owner') || q.includes('experience') || q.includes('cureus') || q.includes('article') || q.includes('publication') || q.includes('science') || q.includes('journal') || q.includes('sis') || q.includes('subsequent') || q.includes('podcast') || q.includes('elendi')) {
    return `Our Founder, Owner, and CEO is **Atul Sharma Sankhyayan**. 

Atul brings over 10 years of active, hands-on R&D engineering expertise for active electrical medical devices and Software as a Medical Device (SaMD). His verified technical contributions to the industry include:
• **Scholarly Publication**: Published *"Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes"* in the **Cureus Journal of Medical Science (May 2026)**, addressing regulatory SUGAM portal framework optimizations. 
• **Media and Podcasts**: Featured on the international podcast *"The Elendi Files"* by ElendiLabs, talking about *"Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited"* and showcasing how RAC Forge actively engineers hardware/software prototypes so they survive physical safety testing.

Atul leads a team of top-tier engineers and regulatory experts dedicated to real engineering execution.`;
  }

  // 8. Contact path
  if (q.includes('contact') || q.includes('address') || q.includes('location') || q.includes('phone') || q.includes('email') || q.includes('office') || q.includes('himachal') || q.includes('map') || q.includes('where')) {
    return `You can connect with RAC Forge Private Limited directly:
• **Headquarters Address**: Nanehar, Thural, Palampur, Kangra, Himachal Pradesh, India. Postal Code: 176064.
• **Phone**: +91 62396 99077
• **Email**: info@racforge.com
• **Google Search Map Anchor**: https://share.google/GNUkTQHynWoYKpWY3

Please let us know if you would like to schedule a technical audit or engineering consult!`;
  }

  // General default fallback
  return `Welcome to the RAC Forge Regulatory Intelligence Assistant. 

Even though we are currently operating in offline-compatibility mode on AWS Amplify, I have full knowledge of our core turnkey services. How can I assist you today? 

Please select or key in a topic of interest:
1. **CDSCO Sugam Portal Pathways** (Import MD-14/15, Manufacturing, Loan Licenses)
2. **Global Registrations** (USFDA 510k, EU MDR CE-Mark, ANVISA Brazil)
3. **Turnkey Physical Construction** (ISO Clean Rooms, HVAC, Modular OTs)
4. **Active R&D Support** (Electrical Validation IEC 60601, SaMD IEC 62304, Biocompatibility ISO 10993)
5. **Quality Management Systems** (ISO 13485 QMS, Gap Analysis, ISO 9001, ISO 15189)
6. **Our Leadership & Research** (Atul Sharma Sankhyayan, Cureus Journal SIS paper, Elendi Podcast)
7. **Contact Info & Geographical Locations**

Just type your specific query (e.g., "Tell me about Atul's paper" or "What is MD-14?")!`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am your RAC Forge Regulatory Assistant. How can I help you with CDSCO, USFDA, or EU MDR compliance today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      let response;
      try {
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: messages,
            userMessage: userMessage
          })
        });
      } catch (err) {
        // Network/CORS/Offline or Endpoint doesn't exist (e.g. AWS Amplify)
        console.warn('Network error or API endpoint not found. Flipped to client-side expert fallback.', err);
        const fallbackText = getClientFallbackResponse(userMessage);
        setMessages(prev => [...prev, { role: 'model', text: fallbackText }]);
        setIsLoading(false);
        return;
      }

      const contentType = response.headers.get('content-type') || '';
      
      // If we got static index.html or not success
      if (contentType.includes('text/html') || !response.ok) {
        if (contentType.includes('text/html')) {
          console.warn('Endpoint returned HTML layout (static router fallback). Using client-side expert fallback.');
          const fallbackText = getClientFallbackResponse(userMessage);
          setMessages(prev => [...prev, { role: 'model', text: fallbackText }]);
          setIsLoading(false);
          return;
        }

        let errorMsg = 'Failed to connect to assistant';
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

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.warn('Failed to parse response JSON. Using client-side expert fallback.', parseError);
        const fallbackText = getClientFallbackResponse(userMessage);
        setMessages(prev => [...prev, { role: 'model', text: fallbackText }]);
        setIsLoading(false);
        return;
      }

      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (error: any) {
      console.error('Chat Error:', error);
      const userFriendlyError = error?.message || 'Sorry, I am having trouble connecting right now. Please try again later.';
      setMessages(prev => [...prev, { role: 'model', text: userFriendlyError }]);
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
            <div className="bg-[#0a3651] p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2 text-white">
                <Bot size={24} className="text-[#2c8498]" />
                <div>
                  <h3 className="font-bold text-sm">Regulatory Assistant</h3>
                  <p className="text-[10px] text-white/70">Powered by Gemini AI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div className={cn(
                    'max-w-[85%] sm:max-w-[80%] p-3 rounded-2xl shadow-sm',
                    msg.role === 'user' 
                      ? 'bg-[#2c8498] text-white rounded-tr-none' 
                      : 'bg-white text-[#0a3651] border border-gray-100 rounded-tl-none'
                  )}>
                    {renderFormattedMessage(msg.text, msg.role === 'user')}
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
                  className="bg-[#0a3651] text-white p-2 rounded-full hover:bg-[#2c8498] transition-colors disabled:opacity-50"
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
