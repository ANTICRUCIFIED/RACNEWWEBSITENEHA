import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Layers, 
  ExternalLink, 
  BookOpen, 
  Linkedin, 
  FileText, 
  ArrowRight,
  Sparkles,
  Fingerprint,
  Cpu,
  Bookmark
} from 'lucide-react';
import SEO from '../components/SEO';
import InfoLink from '../components/InfoLink';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="About RAC Forge Private Limited" 
        description="RAC Forge Private Limited is a premier Medical Device Regulatory Consultant. Specialized in CDSCO, USFDA, EU MDR & ANVISA compliance."
        keywords="about RAC Forge Private Limited, medical device regulatory team, regulatory affairs consultants India, AiMeD members, IMDRRG members, Atul Sharma Sankhyayan, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/about"
      />

      {/* Hero Banner */}
      <section className="relative min-h-[450px] flex items-center pt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/about-bg.webp"
            alt="Medical Laboratory background | RAC Forge Consulting" title="Medical Laboratory background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           loading="lazy" />
        </div>
        
        {/* Abstract graphic accents */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-semibold mb-6"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span>Premier Regulatory & Engineering Architects</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                
              >
<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Architects of Medical Device <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Compliance & Innovation</span>
              </h1>
</motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-slate-350 max-w-2xl leading-relaxed text-slate-350"
              >
                Over a decade of deep R&D precision combined with absolute mastery of global regulatory frameworks.
              </motion.p>
            </div>
            
            <div className="w-full lg:w-1/3 max-w-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 shadow-2xl relative"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full blur-xl pointer-events-none" />
                <h3 className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-1.5">
                  <Fingerprint size={14} className="text-emerald-400" />
                  RAC Forge Private Limited Identity
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">Entity Status</span>
                    <span className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2 py-0.5 rounded">Active Ltd.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">Industrial Track</span>
                    <span className="text-teal-300 font-semibold text-sm">10+ Years R&D</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400 text-sm">HQ Jurisdiction</span>
                    <span className="text-slate-300 font-semibold text-sm">Himachal Pradesh</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Our Corporate Profile & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-3 block">Section 01 / Corporate Profile</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Our Mission: Engineering Trust, Ensuring Safety
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-normal">
                <p>
                  RAC Forge Private Limited is a premier regulatory and engineering firm with 10+ years of intensive R&D and industrial experience in the lifecycle management of Electrical Medical Devices and Software as a Medical Device (SaMD). Incorporated in Himachal Pradesh, we serve as a critical bridge between complex engineering protocols and stringent international regulatory frameworks.
                </p>
                <p>
                  Our mission is to empower medical innovators—from ambitious startups to established global manufacturers—by providing a seamless, scientifically-backed pathway from initial concept and prototyping to full global market approval. We don't just consult; we build the architectural foundation for your success.
                </p>
              </div>

              <div className="p-6 bg-slate-900 text-white rounded-2xl relative overflow-hidden shadow-lg border border-slate-800">
                <div className="absolute right-0 bottom-0 opacity-10 translate-x-3 translate-y-3">
                  <Cpu size={160} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">Our Engineering Rigor</h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    By embedding raw hardware/software debugging capabilities within traditional compliance services, our clients enjoy unmatched first-time authorization rates. We survive safety tests because we prototype-verify your deliverables.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Widget/Sidebar Column */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-xl font-bold tracking-tight text-white mb-6 pb-4 border-b border-slate-800/80 flex items-center gap-2">
                  <Award size={20} className="text-emerald-400 shrink-0" />
                  Our Corporate & Industry Standing
                </h3>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="group flex gap-4 p-4 rounded-xl bg-slate-850 border border-slate-800 hover:border-slate-700/60 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                      <Layers size={18} />
                    </div>
                    <div>
                      <h4 className="text-slate-300 font-bold text-sm uppercase tracking-wide">Associate Member</h4>
                      <p className="text-slate-100 font-semibold mt-1">Association of Indian Medical Device Industry (AiMeD)</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="group flex gap-4 p-4 rounded-xl bg-slate-850 border border-slate-800 hover:border-slate-700/60 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-slate-300 font-bold text-sm uppercase tracking-wide">Globally Recognized</h4>
                      <p className="text-teal-300 font-bold font-mono mt-1 text-sm tracking-widest">D-U-N-S® Number: 771970978</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="group flex gap-4 p-4 rounded-xl bg-slate-850 border border-slate-800 hover:border-slate-700/60 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="text-slate-300 font-bold text-sm uppercase tracking-wide">Government of India Certified</h4>
                      <p className="text-slate-100 font-semibold mt-1">Udyam MSME Registration (NIC Code): 74909</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-center">
                  <p className="text-slate-400 text-xs">
                    Completely aligned with CDSCO, ISO 13485 QMS registries, and legal verification systems.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2: Executive Leadership & Scientific Architect */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-3 block">Section 02 / Leadership</span>
            <h2 className="text-3.5xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Executive Leadership & Scientific Architect
            </h2>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-200/60 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Photo Column */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden aspect-square w-full max-w-[280px] md:max-w-xs shadow-lg relative border-4 border-slate-50 group bg-slate-100"
                >
                  <img src="https://anticrucified.github.io/MyWebP_Images/images/about-founder.webp"
                    alt="Atul Sharma Sankhyayan - Founder & CEO | RAC Forge Consulting" title="Atul Sharma Sankhyayan - Founder & CEO"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                   loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-center z-10 lg:hidden">
                    <p className="text-white font-bold text-lg">Atul Sharma Sankhyayan</p>
                    <p className="text-emerald-350 text-xs font-semibold uppercase tracking-wider mt-0.5">Founder & CEO</p>
                  </div>
                </motion.div>
                
                <div className="hidden lg:block mt-6 text-center">
                  <h3 className="text-slate-900 font-black text-xl mb-1">Atul Sharma Sankhyayan</h3>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest text-emerald-600 mb-2">Founder & CEO</p>
                  <p className="text-slate-400 text-xs max-w-xs italic mx-auto">
                    Chief Executive Officer (CEO) & Medical Technology Strategist
                  </p>
                </div>
              </div>

              {/* Text Context Column */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 pb-2 border-b border-slate-100">
                    Our Founder: Atul Sharma Sankhyayan
                  </h3>
                  <p className="text-emerald-600 text-sm font-bold tracking-wide uppercase mt-2">Professional Biography</p>
                </div>

                <div className="text-slate-700 text-base md:text-lg leading-relaxed space-y-5">
                  <p className="leading-relaxed">
                    Atul Sharma Sankhyayan is a distinguished Medical Technology Strategist and Regulatory Architect specializing in the intersection of product safety, global compliance, and rigorous quality assurance. A seasoned regulatory professional and engineer with a career built on the foundation of electrical and electronics engineering, he is widely recognized for his ability to navigate the Central Drugs Standard Control Organisation (CDSCO) guidelines and international regulatory architectures, ensuring that medical innovations meet the highest global standards before reaching the market.
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Cpu size={18} className="text-emerald-600" />
                    Core Competencies & Technical Expertise
                  </h4>
                  <p className="text-slate-650 text-base font-normal leading-relaxed">
                    Atul’s expertise encompasses the full lifecycle of medical device development, from mechanical durability testing to regulatory dossier preparation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 text-emerald-700">Regulatory Compliance & Documentation</h5>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Expertise in drafting and managing Device Master Files and 510(k) dossiers to facilitate smooth regulatory approvals. Specialist in CDSCO protocols and international market access strategies.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 text-emerald-700">Quality Assurance</h5>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        ISO 13485 Certified: Proven proficiency in maintaining quality management systems specific to the medical device industry.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 text-teal-700">Mechanical Testing Standards</h5>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Conducts comprehensive reliability testing under ASTM F382 (Metallic Bone Plates), ASTM F1264 (Intramedullary Fixation Devices), and ASTM F543 (Metallic Medical Bone Screws) to ensure mechanical durability.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 text-teal-700">Electrical Safety Testing</h5>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Specializes in safety evaluations under IEC 60601 (Medical electrical equipment safety) and IS 13450 Part 1, protecting both patients and healthcare practitioners.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-slate-100 text-slate-300 transform translate-x-4 -translate-y-4">
                    <Bookmark size={55} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-emerald-600" />
                    Research & Academic Contributions
                  </h4>
                  <p className="text-slate-650 text-sm leading-relaxed mb-4">
                    A contributor to medical regulatory literature, Atul actively engages in academic discourse regarding policy and product safety.
                  </p>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                      Latest Publication (May 2026): Authored "Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes" published in the <span className="text-emerald-700 italic">Cureus Journal of Medical Science</span> (Part of Springer Nature).
                    </p>
                  </div>
                </div>

                {/* Professional buttons */}
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Authority Links & Professional Profiles</h4>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    
                    <a
                      href="https://www.cureus.com/articles/489452-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes#!/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all duration-300 shadow-md group hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <FileText size={16} className="text-emerald-400" />
                      <span>View Full Publication on PubMed/Cureus</span>
                      <ExternalLink size={14} className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href="https://www.researchgate.net/profile/Atul-Sankhyayan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-850 font-bold text-sm transition-all duration-300 border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <BookOpen size={16} className="text-emerald-600" />
                      <span>Explore Profile on ResearchGate</span>
                      <ExternalLink size={14} className="text-slate-500" />
                    </a>

                    <a
                      href="https://in.linkedin.com/in/atul-sharma-sankhyayan-36065ab1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-850 font-bold text-sm transition-all duration-300 border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                    >
                      <Linkedin size={16} className="text-blue-600" />
                      <span>Connect on LinkedIn</span>
                      <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Partner with a Proven Leader */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-955 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 blur-sm pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-emerald-400 font-extrabold tracking-widest uppercase text-xs mb-4 block">Section 03 / Engagement</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Ready to Accelerate Your Market Access?
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Navigating the complexities of medical device registration requires more than just a consultant—it requires an architect. Partner with a firm that understands both the engineering that goes into your product and the regulatory landscape that governs it.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 shadow-emerald-500/10 scale-100 hover:scale-[1.03] active:scale-100 uppercase tracking-wider block sm:inline-flex"
          >
            <span>Start Your Project with Us</span>
            <ArrowRight size={18} className="text-slate-950" />
          </Link>
        </div>
      </section>
    </div>
  );
}

