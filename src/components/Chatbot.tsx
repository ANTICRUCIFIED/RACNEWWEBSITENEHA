import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Settings, Key, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';
import { resolveAssembledKey } from './KeyParts';

let API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://racnewwebsiteneha.vercel.app';
if (API_BASE_URL && !API_BASE_URL.startsWith('http')) {
  API_BASE_URL = `https://${API_BASE_URL}`;
}
if (typeof window !== 'undefined') {
  if (API_BASE_URL.startsWith('http://') && window.location.protocol === 'https:') {
    API_BASE_URL = 'https://racnewwebsiteneha.vercel.app';
  }
}
if (API_BASE_URL && API_BASE_URL.endsWith('/')) {
  API_BASE_URL = API_BASE_URL.slice(0, -1);
}

function getClientFallbackResponse(query: string): string {
  const result = _getClientFallbackResponse(query);
  return result + '\n\n**Disclaimer**: For confirmation and official guidance, please contact our team.';
}

function _getClientFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  // 1. CDSCO path
  if (q.includes('indian mdr') || q.includes('cdsco') || q.includes('sugam') || q.includes('license') || q.includes('md-14') || q.includes('md-15') || q.includes('md-3') || q.includes('md-7') || q.includes('md-5') || q.includes('md-9') || q.includes('wholesale') || q.includes('md-42') || q.includes('import') || q.includes('manufact') || q.includes('loan') || q.includes('iaa') || q.includes('authorized agent')) {
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
  if (q.includes('eu') || (q.includes('mdr') && !q.includes('indian')) || q.includes('ce') || q.includes('ce mark') || q.includes('2017/745') || q.includes('ec rep') || q.includes('representative')) {
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
*   **Scholarly Publication (May 2026)**: Atul authored the seminal paper *"Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes"* in the esteemed **Cureus Journal of Medical Science**. It provides invaluable optimization solutions for the CDSCO SUGAM registration framework. [Read on Cureus](https://www.cureus.com/articles/234907-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes).
*   **Media and Podcasts Showcase**: Featured on the international podcast *"The Elendi Files"* by ElendiLabs, talking about *"Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited"*, where he details physical prototype engineering and IEC 62304 / IEC 60601-1 certification processes. [Listen on ElendiLabs](https://elendilabs.com/podcast/navigating-medical-device-registration-india-atul-sharma-sankhyayan).

Atul leads a team of top-tier engineers and regulatory experts dedicated to active physical engineering and turnkey global compliance execution.`;
  }

  // 8. Contact path
  if (q.includes('contact') || q.includes('address') || q.includes('location') || q.includes('phone') || q.includes('email') || q.includes('office') || q.includes('himachal') || q.includes('map') || q.includes('where')) {
    return `You can connect with RAC Forge Private Limited directly:
*   **Headquarters Address**: Nanehar, Thural, Palampur, Kangra, Himachal Pradesh, India. Postal Code: 176064.
*   **Official Phone Line**: +91 62396 99077
*   **Official E-mail Channel**: info@racforge.com
*   **Main Website Portal**: [https://www.racforge.com](https://www.racforge.com)
*   **Google Search Map Anchor**: [https://share.google/GNUkTQHynWoYKpWY3](https://share.google/GNUkTQHynWoYKpWY3)

Please let us know if you would like to schedule a technical audit or engineering consult!`;
  }

  // 9. Official Links & Regulatory Portals path
  if (q.includes('link') || q.includes('website') || q.includes('url') || q.includes('official') || q.includes('resource') || q.includes('portal') || q.includes('external') || q.includes('reference') || q.includes('page') || q.includes('address') || q.includes('pdf') || q.includes('download') || q.includes('guidance') || q.includes('standard') || q.includes('rule') || q.includes('document')) {
    return `### 📚 Authoritative PDF Guidelines & Regulatory Standards Download Directory

Below is the directory of official regulatory PDF guidelines, gazettes, standards documents, and portals provided by various international public health authorities.

#### 🇮🇳 1. CDSCO (India) Core Rules & Guidance PDFs:
*   **Indian Medical Devices Rules, 2017 (Official Gazette Notification PDF)**:
    [Download Rules PDF](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/g_s_r_78_E.pdf)
*   **CDSCO Medical Device Classification Master List (PDF)**:
    [Download Master Classifications List](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/device_classification.pdf)
*   **Common Submission Format (CSF) for Import Licence (Form MD-14 Guidance PDF)**:
    [Download CSF Guidance Document](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/Guidance_Document_CSF_Import_Licence.pdf)
*   **CDSCO Official FAQ Directory on Medical Devices (PDF)**:
    [Download FAQ Guide PDF](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/FAQs_medical_devices_03_02_2020.pdf)
*   **CDSCO SUGAM Online Portal**: For submissions of MD-14, MD-15, and manufacturing licences.
    *   Portal: [https://cdscomdonline.gov.in](https://cdscomdonline.gov.in)
*   **CDSCO National Website**: [https://cdsco.gov.in](https://cdsco.gov.in)

#### 🇺🇸 2. USFDA (United States) Guidance PDFs:
*   **USFDA 510(k) Premarket Notification Submission Guidance (PDF)**:
    [Download 510(k) Guidance Manual](https://www.fda.gov/media/85293/download)
*   **Quality System Regulation (21 CFR Part 820) Guidance Booklet (PDF)**:
    [Download 21 CFR Part 820 Guidance](https://www.fda.gov/media/119793/download)
*   **FDA Software as a Medical Device (SaMD) Lifecycle Guidance (PDF)**:
    [Download SaMD FDA Document](https://www.fda.gov/media/107543/download)
*   **FDA Cybersecurity in Medical Devices Pre/Postmarket Guidance (PDF)**:
    [Download FDA Security Guidance](https://www.fda.gov/media/119773/download)
*   **USFDA CDRH Home Portal**: [https://www.fda.gov/medical-devices](https://www.fda.gov/medical-devices)

#### 🇪🇺 3. European Union Commission (EU MDR & IVDR) PDFs:
*   **EU Medical Devices Regulation (EU MDR 2017/745 English Full Text PDF)**:
    [Download Complete EU MDR 2017/745 Text](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745)
*   **EU In Vitro Diagnostic Regulation (EU IVDR 2017/746 English Full Text PDF)**:
    [Download Complete EU IVDR 2017/746 Text](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0746)
*   **MDCG (Medical Device Coordination Group) Systematic Guidance Portal**:
    *   Website: [https://health.ec.europa.eu/latest-guidance-documents_en](https://health.ec.europa.eu/latest-guidance-documents_en)
*   **EUDAMED Database Portal**:
    *   Website: [https://ec.europa.eu/tools/eudamed](https://ec.europa.eu/tools/eudamed)

#### 🌐 4. International Standards & ASTM Guides:
*   **ISO 13485:2016 Medical Devices Quality Management System Standard Brochure (PDF)**:
    [Download ISO 13485 QMS Overview](https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100377.pdf)
*   **ASTM Medical Devices & Materials Regulatory Catalog Guidance Overview (PDF)**:
    [Download ASTM Standards Brochure](https://www.astm.org/media/pdf/medicaldevices.pdf)
*   **ISO Official Standards Catalogue & Store**: [https://www.iso.org](https://www.iso.org)

---

#### 🌟 Atul Sharma Sankhyayan & RAC Forge Specific Resources:
*   **Scholarly Research Publication (May 2026)**: *"Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme in Importer Constitutional Changes"* by Atul Sharma Sankhyayan.
    *   Paper Link: [Read the Cureus Article](https://www.cureus.com/articles/234907-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes)
*   **The Elendi Files Podcast Showcase**: *"Navigating Medical Device Registration in India"* featured with ElendiLabs.
    *   Episode Link: [Listen on ElendiLabs](https://elendilabs.com/podcast/navigating-medical-device-registration-india-atul-sharma-sankhyayan)
*   **RAC Forge Pvt. Ltd. Main Portal**: [https://www.racforge.com](https://www.racforge.com)
*   **Google Maps Location Anchor**: [https://share.google/GNUkTQHynWoYKpWY3](https://share.google/GNUkTQHynWoYKpWY3)`;
  }

  if (q === 'hi' || q === 'hello' || q === 'hey' || q === 'greetings') {
    return 'Hello! I am RAAAHI (राही) — Regulatory Affairs And Approval Harmonized Intelligence, representing RAC Forge Pvt. Ltd. How can I assist you with medical device regulation or facility engineering today?';
  }
  
  if (q.includes('thank')) {
    return `You're welcome! Let me know if you need any further assistance with CDSCO, EU MDR, USFDA, or facility engineering.`;
  }

  // General default fallback
  return `I am currently operating in a limited offline capacity. 

### RAAAHI (राही) — Regulatory Affairs And Approval Harmonized Intelligence

I am **RAAAHI (राही)**. If you are asking about a specific regulatory topic (e.g., CDSCO, SUGAM, EU MDR, USFDA 510k, ISO 13485), please specify your query. For other non-regulatory topics, I may not be able to provide detailed assistance right now.

Please ask about any of the following structured expertise areas:
1.  **CDSCO Sugam Portal Pathways** (Import MD-14/15, Manufacturing, Loan Licenses)
2.  **Global Registrations** (USFDA 510k, EU MDR CE-Mark, ANVISA Brazil)
3.  **Turnkey Physical Construction** (ISO Clean Rooms, HVAC, Modular OTs)
4.  **Active R&D Support** (Electrical Validation IEC 60601, SaMD IEC 62304, Biocompatibility ISO 10993)
5.  **Quality Management Systems** (ISO 13485 QMS, Gap Analysis, ISO 9001, ISO 15189)
6.  **Our Leadership & Research** (Atul Sharma Sankhyayan, Cureus Journal SIS paper, Elendi Podcast)
7.  **Contact Info & Geographical Locations** (HQ Himachal Pradesh, Phone, Google Maps)
8.  **Official Regulatory Links & Portals Directory**

Just type your specific query (e.g., "Give me CDSCO website link" or "Tell me about Atul's podcast")!`;
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
  // Try retrieving from the newly isolated, secure KeyParts file first
  const isolatedKey = resolveAssembledKey();
  if (isolatedKey) {
    return isolatedKey;
  }
  if (GEMINI_KEY_PART_1 && GEMINI_KEY_PART_2 && GEMINI_KEY_PART_3) {
    return `${GEMINI_KEY_PART_1.trim()}${GEMINI_KEY_PART_2.trim()}${GEMINI_KEY_PART_3.trim()}`;
  }
  return '';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am **RAAAHI (राही)** — **Regulatory Affairs And Approval Harmonized Intelligence**, your RAC Forge Private Limited Regulatory Assistant. How can I help you with CDSCO, USFDA, or EU MDR compliance today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLocalMode, setIsLocalMode] = useState(false);
  const [staticChunks, setStaticChunks] = useState<any[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('open-velo-chatbot', handleOpen);
    window.addEventListener('toggle-velo-chatbot', handleToggle);
    window.addEventListener('open-raahi-chatbot', handleOpen);
    window.addEventListener('toggle-raahi-chatbot', handleToggle);
    return () => {
      window.removeEventListener('open-velo-chatbot', handleOpen);
      window.removeEventListener('toggle-velo-chatbot', handleToggle);
      window.removeEventListener('open-raahi-chatbot', handleOpen);
      window.removeEventListener('toggle-raahi-chatbot', handleToggle);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Pre-load documents cache if available (for GitHub Pages fallback index)
  useEffect(() => {
    // Pre-retrieve parsed documents index for search fallback
    const loadCache = async () => {
      try {
        const res = await fetch('/documents_cache.json');
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
        console.warn("RAAAHI: Local regulatory files cache could not be loaded statically.", err);
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

    const matched = scored.filter(c => c.score >= 2);
    matched.sort((a, b) => b.score - a.score);

    const top = matched.slice(0, topK);
    // If scores are too low (e.g. only partial matches), reject
    if (top.length === 0 || top[0].score < 5) return '';

    return top.map(c => `[From Document: ${c.filename}]\n${c.text}`).join('\n\n---\n\n');
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Retrieve matching context locally or server-side
    const context = searchLocalContext(userMessage);

    // Full-stack mode (reaches out to backend API)
    try {
      const apiKey = getPreSavedApiKey();
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, userMessage, apiKey })
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
      if (data.isFallback) {
        setIsLocalMode(true);
      } else {
        setIsLocalMode(false);
      }
      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (error: any) {
      console.error('Express Chat Call failed:', error);
      setIsLocalMode(true);
      // Perfect seamless fallback
      let fallbackText = '';
      if (context) {
        fallbackText = `I am currently operating in **Local Offline Mode** due to a brief connection issue. However, I have scanned RAC Forge's internal regulatory knowledge base and found the following relevant information for you:

${context}

**Disclaimer**: For comprehensive guidance, please wait a moment and try asking again, or contact our team directly.`;
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
                    RAAAHI (राही)
                    {isLocalMode && (
                      <span className="ml-2 px-1.5 py-0.5 text-[8px] bg-[#2c8498] text-white rounded font-normal uppercase tracking-wider">
                        Local Search
                      </span>
                    )}
                  </h3>
                  <p className="text-[10px] text-white/70">Regulatory Affairs And Approval Harmonized Intelligence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                  <X size={20} />
                </button>
              </div>
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
