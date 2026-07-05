import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Cpu, 
  Search, 
  FileText, 
  ShieldCheck, 
  Workflow, 
  Bot, 
  Zap, 
  HelpCircle, 
  CornerDownRight, 
  ArrowRight,
  ChevronRight,
  Brain,
  MessageSquare,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import InfoLink from '../components/InfoLink';
import ConsultationButtons from '../components/ConsultationButtons';

export default function VeloPage() {
  const triggerChatbot = () => {
    window.dispatchEvent(new CustomEvent('open-velo-chatbot'));
  };

  const capabilities = [
    {
      icon: <Brain className="w-6 h-6 text-emerald-400" />,
      title: "CDSCO MDR 2017 Semantic Search",
      desc: "Instant sub-second semantic retrieval across Indian Medical Devices Rules 2017. Queries specific licensing clauses, Class A-D classification rules, and Sugam portal procedures.",
      badge: "Real-time"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: "USFDA 510(k) & PMA Compliance",
      desc: "Expert instructions on FDA compliance workflows, Substantial Equivalence demonstrations, pre-market notification rules, and product classification guidance.",
      badge: "FDA Guidance"
    },
    {
      icon: <FileText className="w-6 h-6 text-teal-400" />,
      title: "EU MDR (CE Marking) Advisory",
      desc: "Step-by-step guidance on constructing GSPR checklists, compiling Technical Files, Clinical Evaluation Plan (CEP) standards, and CE marking documentation.",
      badge: "CE Mark"
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-purple-400" />,
      title: "Regulatory Diagram Engineering",
      desc: "Harnessing embedded generative AI models to outline conceptual blueprints, cleanroom layouts, flow charts, or medical device process designs via prompt-based requests.",
      badge: "AI Drawing"
    },
    {
      icon: <Search className="w-6 h-6 text-orange-400" />,
      title: "Document Retrieval & Intelligence",
      desc: "Capable of browsing local repository indices and preloaded expert knowledge. Resolves specific regulatory questions and cross-references source regulations seamlessly.",
      badge: "Smart index"
    },
    {
      icon: <Workflow className="w-6 h-6 text-cyan-400" />,
      title: "Licensing Procedure Companion",
      desc: "Step-by-step breakdowns for manufacturing licenses (Form MD-5, MD-9), import licenses (Form MD-15), test licenses (Form MD-13), and loan licenses.",
      badge: "Full Pathways"
    }
  ];

  const faqs = [
    {
      q: "What does RAAAHI stand for?",
      a: "RAAAHI stands for Regulatory Affairs And Approval Harmonized Intelligence. 'Raahi' (राही) also represents a guide or traveler in Hindi, reflecting our mission to act as your expert navigator through complex regulatory pipelines, built directly by RAC Forge Pvt. Ltd."
    },
    {
      q: "How does RAAAHI help medical device manufacturers save time?",
      a: "Finding regulatory answers manually involves parsing thousands of pages of CDSCO Gazettes, FDA CFR Title 21, and EU MDR guidelines. RAAAHI uses advanced document intelligence (including RAG - Retrieval-Augmented Generation) to deliver accurate, cited, and contextual regulatory answers in seconds, reducing research status time by up to 90%."
    },
    {
      q: "Can RAAAHI assist with CDSCO Sugam Portal registrations in India?",
      a: "Yes. RAAAHI provides complete structured walkthroughs for both manufacturing (Form MD-3/5, MD-7/9) and import setups (Form MD-14/15) inside the Sugam Portal, explaining the required checklists, government fees, and typical inspection preparation needs."
    },
    {
      q: "How does RAAAHI's regulatory diagram generator work?",
      a: "RAAAHI includes an advanced, model-driven Image Generator that lets you describe mechanical regulatory blueprints or cleanroom layouts in natural language. It generates real-time diagrams and concept drawings to help you draft visual documents quickly."
    },
    {
      q: "Are my device specifications and regulatory queries secure?",
      a: "Absolutely. All analytical sessions are powered server-side over secure HTTPS APIs, and local private settings let you enter your own Gemini API keys for continuous, private, sandboxed regulatory research."
    }
  ];

  const complianceFramer = [
    { step: "Class A & B", type: "Low-moderate risk", portal: "State Licensing Authority (SLA)", timeline: "30-45 Days" },
    { step: "Class C & D", type: "Moderate-high risk", portal: "Central Licensing Authority (CLA)", timeline: "90-120 Days" },
    { step: "USFDA 510(k)", type: "Substantial equivalence", portal: "eSTAR FDA Portal", timeline: "90 Days Average" },
    { step: "EU MDR Class I-III", type: "CE Marking pathway", portal: "Eudamed / Notified Body", timeline: "Varies by Category" }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen">
      <SEO 
        title="RAAAHI: Regulatory Affairs & Approval Harmonized Intelligence Assistant" 
        description="Meet RAAAHI (राही), RAC Forge's Regulatory Affairs And Approval Harmonized Intelligence helper. The first dedicated assistant for CDSCO MDR 2017, USFDA 510(k), and EU MDR compliance, featuring real-time document search and diagram generation."
        keywords="RAAAHI, राही, medical device assistant, regulatory affairs client, CDSCO search, USFDA 510k submission, medical device compliance chatbot, RAC Forge premium regulatory assistant, EU MDR compliance helper, ISO 13485 consulting, CDSCO Sugam portal registration assistant, medical device manufacturing license consultant, verification evaluation licensing operator, medical dev regulatory affairs"
        canonical="/raahi-ai"
      />

      {/* Hero Header */}
      <section className="relative min-h-[600px] flex items-center pt-32 pb-20 bg-gradient-to-br from-[#0c2e43] via-[#0a3651] to-[#124d66] overflow-hidden">
        {/* Decorative Grid and Blurs */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2c8498_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#2c8498]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2c8498]/20 border border-[#2c8498]/30 text-teal-300 text-sm font-semibold tracking-wider uppercase"
              >
                <Bot size={16} className="text-teal-400" />
                <span>MEET RAAAHI — RAC FORGE REGULATORY INTELLIGENCE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight"
              >
                Regulatory Affairs & Approval <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-[#2c8498]">Harmonized Intelligence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed"
              >
                Accelerate global medical device and IVD market authorizations. RAAAHI (राही) combines RAC Forge's senior consultant precision with deep semantic search and instant technical diagram drafting.
              </motion.p>

              {/* Instant CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button
                  onClick={triggerChatbot}
                  className="bg-[#2c8498] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-500 hover:scale-105 transition-all flex items-center gap-3 shadow-lg shadow-[#2c8498]/20 cursor-pointer"
                >
                  <MessageSquare size={18} />
                  <span>Launch RAAAHI (राही)</span>
                </button>
                <Link
                  to="/contact"
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>Book Human Expert Session</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* Highlight Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-10"
              >
                <div>
                  <div className="text-3xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">MDR 2017 Compliant</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-teal-300">Under 2s</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Response Speed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#2c8498]">Zero-Limit</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Serverless Backend</div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full max-w-md bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2c8498] flex items-center justify-center text-white">
                      <Bot size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-md">RAAAHI Regulatory Core</h3>
                      <p className="text-xs text-slate-400">Online & Document Index Active</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Simulated AI Interface snippet to represent standard capability */}
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-2">
                    <p className="text-teal-300 text-xs font-mono">USER QUERY:</p>
                    <p className="text-sm text-slate-200">"What are the CDSCO requirements for a manufacturing license of Class B orthopaedic implants?"</p>
                  </div>

                  <div className="bg-[#2c8498]/10 rounded-2xl p-4 border border-[#2c8498]/20 space-y-2">
                    <p className="text-emerald-400 text-xs font-mono">RAAAHI CO-PILOT RESPONSE:</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "Under **CDSCO Medical Devices Rules 2017**, Class B orthopaedic implants require a manufacturing license on **Form MD-5**... Key checklists: ISO 13485 certification, Plant Layout Plan, device details, and proof of Sugam Portal fees... [Section 20]"
                    </p>
                  </div>
                </div>

                <button
                  onClick={triggerChatbot}
                  className="w-full text-center bg-white/5 hover:bg-[#2c8498]/20 text-[#2c8498] font-bold text-sm py-3 rounded-xl border border-[#2c8498]/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Interact with this demo</span>
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Structured Value Proposition - CDSCO, USFDA, EU-MDR */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-[#2c8498]">GLOBAL REGULATORY INTELLIGENCE OVERVIEW</h2>
          <p className="text-3xl md:text-4xl font-black text-[#0a3651] tracking-tight leading-tight">
            How RAAAHI (राही) Redefines Medical Compliance Workflows
          </p>
          <p className="text-gray-600">
            By combining advanced natural language architectures with expert vetted schemas, RAC Forge Pvt. Ltd. delivers an administrative-grade copilot to expedite commercial market clearances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-gray-100">{cap.icon}</div>
                  <span className="text-xs bg-[#2c8498]/10 text-[#2c8498] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{cap.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a3651]">{cap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cap.desc}</p>
              </div>
              
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-[#2c8498] hover:text-[#0a3651] cursor-pointer" onClick={triggerChatbot}>
                <span>Query {cap.title} in Chat</span>
                <CornerDownRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special SEO Table Matrix of Classes, Rules, and Timelines */}
      <section className="py-16 bg-[#0a3651]/5 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-5">
              <span className="text-xs font-black uppercase text-[#2c8498] tracking-widest">REGULATORY TIMELINE DEEP DIVE</span>
              <h2 className="text-3xl font-black text-[#0a3651] leading-tight">Structured Approvals Guidance</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Navigating distinct jurisdictional gates shouldn't be guesswork. RAAAHI (राही) holds the correct pathways for both Indian CDSCO licensing and global submissions.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                  <span>Verify correct risk classifications instantly.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                  <span>Obtain step-by-step documentation templates.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                  <span>Accelerate dossier drafts via AI assistance.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                <div className="p-6 bg-slate-50 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-[#0a3651] text-lg">Jurisdiction Comparison Matrix</h3>
                  <span className="text-xs bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full font-extrabold uppercase">Live Info Index</span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0a3651] text-white uppercase text-xs font-bold tracking-wider">
                      <tr>
                        <th className="p-4 pl-6">Device / Portal Gate</th>
                        <th className="p-4">Classification Risk Type</th>
                        <th className="p-4">Regulatory Portal</th>
                        <th className="p-4 pr-6">Avg Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium">
                      {complianceFramer.map((fram, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 pl-6 font-bold text-[#0a3651]">{fram.step}</td>
                          <td className="p-4 text-gray-600">{fram.type}</td>
                          <td className="p-4"><span className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md font-bold font-mono">{fram.portal}</span></td>
                          <td className="p-4 text-slate-900 pr-6 font-semibold">{fram.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-50 text-center text-xs text-gray-500 border-t border-gray-100">
                  Matrix data is dynamically mapped of actual guidelines. Ask RAAAHI (राही) for specific exceptions.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action Promoting Chatbot Feature */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0a3651] to-[#124d66] rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-white/10 text-center md:text-left">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#2c8498]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <span className="text-[#2c8498] text-xs font-black uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                <Sparkles size={14} className="animate-pulse" />
                No Setup Required • Available in Browser
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Instantly Start Asking Regulatory Queries
              </h2>
              <p className="text-slate-300 max-w-xl">
                Ready to bypass tedious index queries? Try out the interactive RAAAHI (राही) now. Simply tap below or click the conversation bubble in the bottom right.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <button
                onClick={triggerChatbot}
                className="bg-white text-[#0a3651] hover:bg-[#2c8498] hover:text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Launch RAAAHI Chatbot
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* RAAAHI Instant Support Channels Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#2c8498] font-bold tracking-widest uppercase text-xs mb-4 block">RAAAHI COMPLIANCE CONSULTATION</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a3651] mb-4">
            Connect with RAAAHI &amp; Senior Consultants
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            Get instant support from our regulatory advisors via WhatsApp, schedule dedicated calls, or connect with our interactive RAAAHI Voice Assistant.
          </p>
          <ConsultationButtons variant="grid" className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Smart FAQ Directory (Great for Search Crawling) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[#2c8498] text-xs uppercase font-extrabold tracking-widest flex items-center justify-center gap-2">
              <HelpCircle size={14} />
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <h3 className="text-3xl font-black text-[#0a3651]">RAAAHI (राही) Assistant Directory</h3>
            <p className="text-gray-500">
              Answers regarding our embedded compliance operator, indexing mechanisms, and precision support.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 space-y-3 hover:border-slate-200 transition-colors"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h4 className="text-lg font-black text-[#0a3651]" itemProp="name">
                  {faq.q}
                </h4>
                <div 
                  className="text-gray-600 text-sm leading-relaxed"
                  itemProp="acceptedAnswer" 
                  itemScope 
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
