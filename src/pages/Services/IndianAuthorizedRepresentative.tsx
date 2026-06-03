import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ArrowRight, 
  FileCheck, 
  UserCheck, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  DollarSign, 
  BookOpen, 
  ChevronRight,
  Globe,
  PieChart,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function IndianAuthorizedRepresentative() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="Indian Authorized Representative & Business Incubation Services | RAC Forge" 
        description="Establish your medical device business in India with 100% commercial control. Secure MD-15 Import Authorization and launch your own local WOS base."
        keywords="Indian Authorized Representative, CDSCO MD-15, Wholly Owned Subsidiary India, medical device business incubation India, regulatory legal representative India"
        canonical="/services/indian-authorized-representative"
      />

      {/* Hero */}
      <section className="relative h-[480px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Indian Authorized Representative & Business Incubation | RAC Forge" title="Indian Authorized Representative"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy" />
        </div>
        
        {/* Decorative backdrop blobs */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left">
          <div className="max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Building2 size={13} />
              <span>Incubation & Regulatory Landing Program</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-1xl text-xl md:text-2xl lg:text-3xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Establish Your Medical Device Business in India with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-indigo-300">100% Control</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium"
            >
              Transition seamlessly from a legal representative model to an autonomous Wholly Owned Subsidiary (WOS). Avoid distributor lock-in.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Section 1: The Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Section 1 / Market Entry Challenge</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep tracking-tight mb-4">
                  The Distributor Dilemma: Why the Traditional Entry Model Fails
                </h2>
                
                <p className="text-slate-750 text-lg leading-relaxed">
                  India represents one of the fastest-growing MedTech markets in the world, but for foreign manufacturers, market entry is filled with complexity. The traditional approach of appointing a local distributor often leads to significant challenges that limit your growth and profitability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {[
                    {
                      title: "Loss of Pricing Control",
                      desc: "Distributors add their own steep markups, inflating your product's final price and reducing its market competitiveness."
                    },
                    {
                      title: "Brand Dilution",
                      desc: "Your brand identity is in the hands of a third party whose marketing efforts may not align with your global strategy."
                    },
                    {
                      title: "Complex Regulatory Burden",
                      desc: "You remain heavily dependent on your distributor for regulatory compliance, creating a single, potential point of failure."
                    },
                    {
                      title: "Lack of Market Transparency",
                      desc: "You have limited direct access to market data, strategic customer feedback, and real-time sales analytics."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-150 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />
                      <h4 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-[#0D9488]/5 rounded-2xl border border-[#0D9488]/20 mt-8">
                  <p className="text-slate-800 font-bold text-base leading-relaxed">
                    RAC Forge offers a modern, strategic alternative that puts you in the driver's seat of your corporate trajectory.
                  </p>
                </div>
              </motion.div>

              {/* Section 2: The Solution: The RAC Forge Strategic Pathway */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Section 2 / Custom Incubation Solution</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep tracking-tight mb-4">
                    Our 3-Step Pathway to Your Autonomous Indian Business
                  </h2>
                  <p className="text-slate-705 text-lg leading-relaxed">
                    We transition your global operations smoothly through structural corporate stages to ensure complete legal compliance and direct market participation.
                  </p>
                </div>

                {/* Steps Visual Layout */}
                <div className="space-y-8">
                  
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-150 relative">
                    <div className="absolute top-4 right-4 text-slate-200 font-black text-6xl select-none leading-none">01</div>
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center shrink-0">
                      <UserCheck size={24} />
                    </div>
                    <div className="space-y-3 relative z-10 max-w-xl">
                      <h4 className="text-xl font-extrabold text-slate-900">
                        Step 1: The Legal Anchor (Securing Your MD-15 Import License)
                      </h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed">
                        We begin by establishing your legal footprint in India. RAC Forge acts as your official, legally appointed Indian Authorized Representative (AR). In this role, we interface directly with the CDSCO on your behalf to manage all regulatory formalities and secure the critical MD-15 Import License, giving you the legal right to bring your products into the country.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-150 relative">
                    <div className="absolute top-4 right-4 text-slate-200 font-black text-6xl select-none leading-none">02</div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/10 border border-[#0D9488]/20 text-[#0D9488] flex items-center justify-center shrink-0">
                      <Building2 size={24} />
                    </div>
                    <div className="space-y-3 relative z-10 max-w-xl">
                      <h4 className="text-xl font-extrabold text-slate-900">
                        Step 2: Corporate Incubation (Establishing Your Own Indian Entity)
                      </h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed">
                        Once your import license is secured, we help you transition from being a foreign entity to having your own operational base in India. We provide full support for incorporating your Wholly Owned Subsidiary (WOS) or a local Indian Branch. This move gives you a direct corporate presence, allowing you to manage operations, hire staff, and conduct business on your own terms.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-150 relative">
                    <div className="absolute top-4 right-4 text-slate-200 font-black text-6xl select-none leading-none">03</div>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 flex items-center justify-center shrink-0">
                      <Layers size={24} />
                    </div>
                    <div className="space-y-3 relative z-10 max-w-xl">
                      <h4 className="text-xl font-extrabold text-slate-900">
                        Step 3: Shared Administrative Backend (Focus on Growth, Not Paperwork)
                      </h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-4">
                        With your Indian entity established, we provide a seamless, integrated administrative backend to handle all operational complexities. This allows your team to focus 100% on sales, marketing, and business development.
                      </p>
                      
                      <div className="pt-4 border-t border-slate-200">
                        <h5 className="font-bold text-slate-900 text-sm uppercase mb-3">Our shared services include:</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            "Corporate Registrations & Filings",
                            "GST Registration & Ongoing Compliance",
                            "Routine Accounting & Financial Reporting",
                            "Continuous CDSCO PMS & Audit Support"
                          ].map((serv, index) => (
                            <li key={index} className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                              <ShieldCheck size={14} className="text-teal-500 shrink-0" />
                              {serv}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* Section 3: Visualizing Your India Entry */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Section 3 / Interactive Roadmap</span>
                  <h2 className="text-3xl font-extrabold text-brand-deep tracking-tight mb-4">
                    Visualizing Your India Market Access Sequence
                  </h2>
                  <p className="text-slate-700 text-base">
                    This schematic details how RAC Forge secures, protects, and incubates your physical operations, ensuring full independence.
                  </p>
                </div>

                {/* Workflow Diagram */}
                <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Infographic Steps Container */}
                  <div className="flex flex-col gap-6 relative z-10">
                    
                    {/* Node 1 */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5 text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-extrabold text-white text-base">Your Company (Foreign OEM)</h5>
                        <p className="text-slate-400 text-xs">Originates advanced technology designs & global clearances.</p>
                      </div>
                    </div>

                    {/* Arrow DOWN */}
                    <div className="pl-6 h-6 flex items-center">
                      <div className="w-0.5 h-full bg-gradient-to-b from-teal-500/60 to-emerald-500/60" />
                      <span className="text-[10px] text-slate-500 font-bold ml-4 uppercase tracking-widest">Appoints AR</span>
                    </div>

                    {/* Node 2 */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                        <FileCheck className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-extrabold text-white text-base">RAC Forge Pvt Ltd (Indian AR Anchor)</h5>
                        <p className="text-slate-400 text-xs">Interfaces with CDSCO to secure legal MD-15 Import Authorization.</p>
                      </div>
                    </div>

                    {/* Arrow DOWN */}
                    <div className="pl-6 h-6 flex items-center">
                      <div className="w-0.5 h-full bg-gradient-to-b from-emerald-500/60 to-indigo-500/60" />
                      <span className="text-[10px] text-slate-500 font-bold ml-4 uppercase tracking-widest">Establishes Entity</span>
                    </div>

                    {/* Node 3 */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-extrabold text-white text-base flex items-center gap-2">
                          Your New Indian WOS / local Branch
                          <span className="bg-emerald-500/10 text-emerald-400 font-bold text-[9px] px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">100% Commercial Control</span>
                        </h5>
                        <p className="text-slate-400 text-xs">Direct market corporate node allowing recruitment, branding, and billing.</p>
                      </div>
                    </div>

                    {/* Arrow DOWN */}
                    <div className="pl-6 h-6 flex items-center">
                      <div className="w-0.5 h-full bg-indigo-500/60" />
                      <span className="text-[10px] text-slate-500 font-bold ml-4 uppercase tracking-widest font-mono">Backend Integration</span>
                    </div>

                    {/* Node 4 */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                        <Layers className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-extrabold text-white text-base">RAC Forge Shared Services Backend</h5>
                        <p className="text-slate-400 text-xs">Routine Accounting, Continuous Post-Market Surveillance (PMS), GST filings, and Audit upkeep.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>

              {/* Section 4: Complete Commercial Freedom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-8 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-3xl border border-teal-500/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-2 block">Section 4 / Complete Autonomy</span>
                  <h3 className="text-2xl font-extrabold text-brand-deep tracking-tight mb-4">
                    Your Product. Your Price. Your Strategy.
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    The RAC Forge pathway is designed for one purpose: to give you complete autonomy. Unlike the distributor model, our incubation service ensures that you retain 100% control over:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Product Pricing", desc: "Set your own high-yield margins without unnecessary local distributor markup hikes." },
                      { title: "Sales & Distribution", desc: "Directly assemble your own field sales nodes and local dealership channels without restriction." },
                      { title: "Brand Identity", desc: "Perfectly execute your global medical communication strategies and protect brand consistency." },
                      { title: "Market Data Preservation", desc: "Keep absolute legal ownership of all market diagnostics, patient registers, and customer feedback data." }
                    ].map((item, id) => (
                      <div key={id} className="p-5 bg-white rounded-xl border border-slate-150 shadow-sm flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600">
                          <CheckCircle2 className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h5>
                          <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Section 5: Who is this pathway for */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Section 5 / Target Manufacturers</span>
                <h2 className="text-3xl font-extrabold text-brand-deep tracking-tight mb-4">
                  Who Is This Pathway Created For?
                </h2>
                <p className="text-slate-705 text-lg leading-relaxed">
                  Our Indian Authorized Representative and premium Incubation service is exclusively tailored for:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Global Medical Device Manufacturers",
                      desc: "Holding active USFDA clearances, CE Marking, or recognized ANVISA approvals, seeking rapid entry under CDSCO."
                    },
                    {
                      title: "Growth-focused Corporate Entities",
                      desc: "Intending to scale and anchor physical footprints inside India rather than relying on inconsistent distributor chains."
                    },
                    {
                      title: "Intellectual Property Innovators",
                      desc: "Seeking to protect absolute design safety, proprietary manufacturing layers, and brand valuation from local dilution."
                    }
                  ].map((target, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-slate-50 border border-slate-150 rounded-2.5xl">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-slate-900 text-base mb-1">{target.title}</h5>
                        <p className="text-slate-600 text-sm leading-relaxed">{target.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Direct Inline Forms Codex */}
              <FormsHub 
                keys={['iaa', 'md-14', 'md-15', 'poa', 'fsc', 'sugam']} 
                title="Indian Authorized Agent & CDSCO Codex" 
              />

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                {/* Global Market Navigation widget */}
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Market Expansion Pathways</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'CDSCO Manufacturing License', path: '/services/cdsco-manufacturing-license-md5-md9' },
                      { name: 'CDSCO Import License', path: '/services/cdsco-import-license-md14' },
                      { name: 'USFDA 510(k) Submission', path: '/services/usfda-510k-de-novo' },
                      { name: 'EU MDR Compliance', path: '/services/eu-mdr-ce-marking' }
                    ].map((link) => (
                      <li key={link.name}>
                        <Link to={link.path} className="text-gray-650 hover:text-brand-teal font-bold flex items-center group transition-colors">
                          <ArrowRight className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-teal-500" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Premium Card */}
                <div className="bg-white p-10 rounded-[2.5rem] text-brand-deep relative overflow-hidden border border-slate-200 shadow-xl">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 skew-x-12 translate-x-1/4" />
                  <div className="relative z-10 flex flex-col justify-between">
                    <h4 className="text-2xl font-bold mb-4 text-brand-deep tracking-tight">Need Incubation?</h4>
                    <p className="text-gray-600 text-sm mb-8 font-medium leading-relaxed">
                      Our corporate incubation division manages formal incorporation, CDSCO physical site approvals, and GST registry filing cycles with 100% legal reliability.
                    </p>
                    <Link 
                      to="/contact" 
                      className="block text-center bg-brand-deep text-white py-4 rounded-2xl font-bold hover:bg-brand-teal transition-all shadow-lg shadow-brand-deep/20 hover:scale-[1.02]"
                    >
                      Establish Your Entity
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Take Control / CTA Banner */}
      <section className="py-24 bg-brand-deep text-white relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="text-teal-400 font-extrabold tracking-widest uppercase text-xs block">Section 6 / Take Control</span>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Your Independent Indian Business?
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Schedule a strategy call with our incubation consultants to map your corporate formation, register your branch, and secure direct import licenses.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base transition-all duration-300 shadow-lg shadow-teal-500/20 hover:scale-105 uppercase tracking-wide"
            >
              <span>Schedule Your Strategic Consultation</span>
              <ArrowRight size={18} className="text-slate-950 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple internal icon proxy for missing CheckCircle2 import fallback
function CheckCircle2(props: { className?: string, size?: number }) {
  return (
    <svg 
      className={props.className} 
      width={props.size || 18} 
      height={props.size || 18} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
