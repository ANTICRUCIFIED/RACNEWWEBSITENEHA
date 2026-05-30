import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

function getClientFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  // 1. CDSCO path
  if (q.includes('cdsco') || q.includes('sugam') || q.includes('license') || q.includes('md-14') || q.includes('md-15') || q.includes('md-3') || q.includes('md-7') || q.includes('md-5') || q.includes('md-9') || q.includes('wholesale') || q.includes('md-42') || q.includes('import') || q.includes('manufact') || q.includes('loan') || q.includes('iaa') || q.includes('authorized agent')) {
    return `RAC Forge Private Limited is an industry-leading expert in CDSCO (Central Drugs Standard Control Organisation) pathways. 

Our core execution services include:
• <strong>Import License Processing (Form MD-14/15)</strong> for Class A/B/C/D medical devices.
• <strong>Manufacturing License Setup & Audit Support</strong>: For Class A/B (Form MD-3/7) and Class C/D (Form MD-5/9).
• <strong>Loan License Authorization (Form MD-4/8 & MD-6/10)</strong> to streamline your production with dynamic facility networks.
• <strong>Test License Procurement (Form MD-12/13)</strong> for critical imports of medical specimens for valid calibration.
• <strong>Wholesale License (Form MD-42)</strong> for specialized medical distribution channels.
• <strong>Indian Authorized Agent (IAA) Legal Representation</strong> for global brands establishing an active presence in India.

We also specialize in navigating the CDSCO SUGAM portal framework, ensuring error-free dossier uploads and seamless communication with the licensing authority. Let me know if you would like info on a specific form!`;
  }

  // 2. USFDA path
  if (q.includes('usfda') || q.includes('fda') || q.includes('510') || q.includes('510k') || q.includes('listing') || q.includes('predicate')) {
    return `For the US health market, RAC Forge Private Limited provides expert engineering support for USFDA submissions:
• <strong>Predicate Device Selection & Technical Assessment</strong> to guarantee similarity.
• <strong>FDA 510(k) Pre-market Notification</strong> dossier compilation and scientific reviews.
• <strong>Device Master File (DMF)</strong> structuring under FDA guidelines.
• <strong>FDA Establishment Registration and Device Listing</strong> on the official CDRH portal.
• <strong>Post-Market Surveillance (PMS)</strong> system deployment.

Unlike document brokers, we actively verify hardware and software specifications to ensure they meet and survive FDA safety benchmarks.`;
  }

  // 3. EU MDR path
  if (q.includes('eu') || q.includes('mdr') || q.includes('ce') || q.includes('ce mark') || q.includes('2017/745') || q.includes('ec rep') || q.includes('representative')) {
    return `We provide end-to-end alignment with the European Medical Device Regulation (EU MDR 2017/745):
• <strong>Comprehensive CE Marking Strategy</strong> for medical hardware, Software as a Medical Device (SaMD), and IVDs.
• <strong>Structuring Technical Files and Clinical Evaluation Reports (CER)</strong>.
• <strong>Risk Management File (RMF)</strong> compilation aligning with ISO 14971 standards.
• <strong>EU Representative (EC Rep) registration services</strong> to handle legal representation and compliance registers.

We bridge the technical gap so your products satisfy European EU MDR audits smoothly.`;
  }

  // 4. ISO & QMS path
  if (q.includes('iso') || q.includes('13485') || q.includes('9001') || q.includes('15189') || q.includes('qms') || q.includes('quality') || q.includes('audit')) {
    return `RAC Forge Private Limited deploys comprehensive Quality Management Systems (QMS) matching rigorous global standards:
• <strong>ISO 13485:2016 QMS Implementation & Audit Readiness</strong> (Standard Operating Procedures (SOPs), CAPA systems, tracking, and document design).
• <strong>ISO 9001 Quality System deployment</strong> tailored for organizational quality, scaling, and process mapping.
• <strong>ISO 15189 Lab Accreditation & Instrument Calibration setup</strong> for medical and diagnostics laboratories.
• <strong>Detailed Regulatory Gap Analysis and simulated audit inspections</strong>.

We physically verify documentation and process flows to ensure your team is 100% prepared for regulatory QMS audits.`;
  }

  // 5. Engineering, Cleanroom, OT path
  if (q.includes('cleanroom') || q.includes('clean room') || q.includes('hvac') || q.includes('ot') || q.includes('modular') || q.includes('design') || q.includes('facility') || q.includes('blueprint') || q.includes('pipeline') || q.includes('laminar')) {
    return `RAC Forge Private Limited is a true turnkey medical engineering builder, not just an administrative consulting firm. 

Our hands-on engineering division provides:
1. <strong>Turnkey Facility Designing</strong>: Compliant blueprint layouts and workflow processes to satisfy CDSCO & ISO layout criteria.
2. <strong>Clean Room Construction & HVAC Setup</strong>: Full installation, filtration arrays, wall/floor construction, and official ISO Class 7/8 validation testing.
3. <strong>Modular Operation Theatre (Modular OT)</strong>: High-pressure central gas pipeline installation, medical gas rails, and laminar flow vectors.

We don't just file papers; we oversee and construct the physical, sterile structures required for device manufacturing and clinical safety.`;
  }

  // 6. R&D Research, Software, Electrical, testing, biocompatibility
  if (q.includes('r&d') || q.includes('research') || q.includes('prototype') || q.includes('samd') || q.includes('iec') || q.includes('62304') || q.includes('60601') || q.includes('hardware') || q.includes('software') || q.includes('testing') || q.includes('biocompatibility') || q.includes('10993') || q.includes('clinical trial') || q.includes('trial')) {
    return `RAC Forge Private Limited provides active R&D validation support for high-tech medical electronic hardware and software products:
• <strong>Software as a Medical Device (SaMD)</strong>: Software life cycle plans and verification complying with <strong>IEC 62304</strong> standard protocols.
• <strong>Active Electrical Medical Devices</strong>: Troubleshooting hardware hazards (current leakage, isolation barriers, signal safety) matching safety standard <strong>IEC 60601-1</strong> to survive physical lab verification.
• <strong>Biocompatibility Testing</strong>: Material characterization and hazard checking following <strong>ISO 10993</strong> pathways.
• <strong>Clinical Trials Execution</strong>: Protocols, documentation, ethics board submissions, and monitoring.

We actively debug systems so they survive extreme physical validation.`;
  }

  // 7. Founder Atul Sharma Sankhyayan path
  if (q.includes('atul') || q.includes('sharma') || q.includes('sankhyayan') || q.includes('founder') || q.includes('ceo') || q.includes('owner') || q.includes('experience') || q.includes('cureus') || q.includes('article') || q.includes('publication') || q.includes('science') || q.includes('journal') || q.includes('sis') || q.includes('subsequent') || q.includes('podcast') || q.includes('elendi')) {
    return `Our Founder, Owner, and CEO is <strong>Atul Sharma Sankhyayan</strong>. 

Atul brings over 10 years of active, hands-on R&D engineering expertise for active electrical medical devices and Software as a Medical Device (SaMD). His verified technical contributions to the industry include:
• <strong>Scholarly Publication</strong>: Published *"Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes"* in the <strong>Cureus Journal of Medical Science (May 2026)</strong>, addressing regulatory SUGAM portal framework optimizations. 
• <strong>Media and Podcasts</strong>: Featured on the international podcast *"The Elendi Files"* by ElendiLabs, talking about *"Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited"* and showcasing how RAC Forge Private Limited actively engineers hardware/software prototypes so they survive physical safety testing.

Atul leads a team of top-tier engineers and regulatory experts dedicated to real engineering execution.`;
  }

  // 8. Contact path
  if (q.includes('contact') || q.includes('address') || q.includes('location') || q.includes('phone') || q.includes('email') || q.includes('office') || q.includes('himachal') || q.includes('map') || q.includes('where')) {
    return `You can connect with RAC Forge Private Limited directly:
• <strong>Headquarters Address</strong>: Nanehar, Thural, Palampur, Kangra, Himachal Pradesh, India. Postal Code: 176064.
• <strong>Phone</strong>: +91 62396 99077
• <strong>Email</strong>: info@racforge.com
• <strong>Google Search Map Anchor</strong>: https://share.google/GNUkTQHynWoYKpWY3

Please let us know if you would like to schedule a technical audit or engineering consult!`;
  }

  // General default fallback
  return `Welcome to the RAC Forge Private Limited Regulatory Intelligence Assistant. 

Even though we are currently operating in offline-compatibility mode on AWS Amplify, I have full knowledge of our core turnkey services. How can I assist you today? 

Please select or key in a topic of interest:
1. <strong>CDSCO Sugam Portal Pathways</strong> (Import MD-14/15, Manufacturing, Loan Licenses)
2. <strong>Global Registrations</strong> (USFDA 510k, EU MDR CE-Mark, ANVISA Brazil)
3. <strong>Turnkey Physical Construction</strong> (ISO Clean Rooms, HVAC, Modular OTs)
4. <strong>Active R&D Support</strong> (Electrical Validation IEC 60601, SaMD IEC 62304, Biocompatibility ISO 10993)
5. <strong>Quality Management Systems</strong> (ISO 13485 QMS, Gap Analysis, ISO 9001, ISO 15189)
6. <strong>Our Leadership & Research</strong> (Atul Sharma Sankhyayan, Cureus Journal SIS paper, Elendi Podcast)
7. <strong>Contact Info & Geographical Locations</strong>

Just type your specific query (e.g., "Tell me about Atul's paper" or "What is MD-14?")!`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am your RAC Forge Private Limited Regulatory Assistant. How can I help you with CDSCO, USFDA, or EU MDR compliance today?' }
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
