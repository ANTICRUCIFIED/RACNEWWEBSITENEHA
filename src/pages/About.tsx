

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
  Bookmark,
  Star,
  Quote,
  X,
  Printer,
  Percent
} from 'lucide-react';
import SEO from '../components/SEO';
import InfoLink from '../components/InfoLink';

export default function About() {
  const [activeCertId, setActiveCertId] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="About RAC Forge Private Limited" 
        description="RAC Forge Private Limited is a premier Medical Device Regulatory Consultant. Specialized in CDSCO, USFDA, EU MDR & ANVISA compliance."
        keywords="about RAC Forge Private Limited, medical device regulatory team, regulatory affairs consultants India, AiMeD members, IMDRRG members, Atul Sharma Sankhyayan, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/about"
      />

      {/* Hero Banner */}
      <section className="relative min-h-[450px] flex items-center pt-32 lg:pt-40 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 overflow-hidden border-b border-slate-800/50">
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
                className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {/* Research & Academic Contributions */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 bg-slate-100 text-slate-300 transform translate-x-4 -translate-y-4 opacity-50">
                      <Bookmark size={55} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <BookOpen size={18} className="text-emerald-600" />
                        Research & Academic Contributions
                      </h4>
                      <p className="text-slate-650 text-sm leading-relaxed mb-4">
                        A contributor to medical regulatory literature, Atul actively engages in academic discourse regarding policy and product safety.
                      </p>
                      <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-slate-800 text-sm leading-relaxed">
                          Latest Publication (May 2026): Authored "Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes" published in the <span className="text-emerald-700 italic">Cureus Journal of Medical Science</span> (Part of Springer Nature).
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/60">
                      <a
                        href="https://www.cureus.com/articles/489452-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes#!/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-600 transition-colors"
                      >
                        <span>Read on PubMed/Cureus</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Featured Spotify Podcast */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#1ED760]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.892-.982-.336.076-.67-.135-.746-.47-.077-.337.135-.67.472-.747 3.847-.88 7.14-.51 9.814 1.127.295.18.387.563.207.865zm1.224-2.72c-.226.367-.71.488-1.077.262-2.72-1.67-6.87-2.154-10.076-1.182-.413.125-.85-.107-.975-.522-.125-.413.107-.85.522-.975 3.666-1.11 8.243-.573 11.36 1.344.367.226.488.71.262 1.077zm.106-2.833C14.384 8.78 8.526 8.583 5.14 9.61c-.52.158-1.066-.134-1.224-.655-.158-.52.135-1.066.655-1.224 3.9-1.185 10.37-.96 14.43 1.45.47.28.62.89.34 1.36-.28.47-.89.62-1.36.34z"/>
                          </svg>
                          CEO's Spotify Podcast
                        </h4>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                          Featured Episode
                        </span>
                      </div>
                      <p className="text-slate-650 text-sm leading-relaxed mb-4">
                        Listen to our founder and CEO discuss state-of-the-art medical technology advancements, global compliance strategy, and startup regulations.
                      </p>
                      <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                        <iframe 
                          style={{ borderRadius: '0.75rem' }}
                          src="https://open.spotify.com/embed/episode/4ZEviANhOthe09s6NL8SrH?utm_source=generator" 
                          width="100%" 
                          height="152" 
                          frameBorder="0" 
                          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                          loading="lazy"
                          className="block"
                        ></iframe>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex flex-col gap-2">
                      <a
                        href="https://open.spotify.com/episode/4ZEviANhOthe09s6NL8SrH?si=SJ7too0SQFuQ3l4qSWQYTA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                      >
                        <span>Listen on Spotify App</span>
                        <ExternalLink size={12} />
                      </a>
                      <p className="text-xs text-slate-500 mt-1">
                        Featured on the international podcast <span className="italic">"The Elendi Files"</span>. Read more or join the marketplace on <a href="https://elendilabs.com/en" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">ElendiLabs Platform & Podcast Hub</a>.
                      </p>
                    </div>
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

      {/* Brands We Work With */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Brands We Are Proud to Work With
            </h2>
            <p className="mt-4 text-slate-650 text-base leading-relaxed">
              We provide strategic regulatory alignment and compliance architecture for premier global medical device brands, enabling smooth market authorizations across international borders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            {/* Left: Product Image Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center p-6 bg-white border border-slate-150 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full aspect-square"
              >
                <img 
                  src="https://anticrucified.github.io/MyWebP_Images/images/brand1.webp" 
                  alt="Centrix FluoroDose FDA and CDSCO Clearance" 
                  className="max-w-full max-h-[220px] object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
              
              <div className="mt-6 w-full text-center">
                <span className="inline-block text-[11px] font-mono tracking-wider font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-250">
                  CDSCO & FDA CLEARED PRODUCT
                </span>
                <p className="text-[11px] text-slate-400 mt-2 font-mono">
                  Product Identifier: FluoroDose® 5% NaF Varnish
                </p>
              </div>
            </div>

            {/* Right: Rich Brand & Regulatory Context */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-black text-emerald-700 tracking-wider uppercase bg-emerald-50 px-2.5 py-1 rounded-md">
                  Spotlight Partner: Centrix Inc. (USA)
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-3 tracking-tight">
                  FluoroDose® — The Clinical Gold Standard in Fluoride Treatment
                </h3>
              </div>

              <div className="space-y-4 text-slate-650 text-base leading-relaxed">
                <p>
                  For over fifty years, <strong>Centrix Inc. USA</strong> has been a global pioneer in developing specialized dental drug delivery platforms and innovative clinical consumables. Their flagship protective varnish, <strong>FluoroDose®</strong>, is an award-winning 5% Sodium Fluoride Varnish with Xylitol, repeatedly voted the <em>"Top Fluoride Varnish"</em> by Clinical Advisor and trusted by dentists worldwide.
                </p>
                <p>
                  As their regulatory counsel, RAC Forge has delivered comprehensive end-to-end medical device compliance strategies for Centrix products. We verified and structured the import dossiers, ensured compliance with Indian <strong>CDSCO Medical Device Rules (MDR) 2017</strong>, and established the quality management system structures needed to sustain legal, high-volume healthcare distributions.
                </p>
              </div>

              {/* Technical Specifications and Quality Attributes */}
              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-3 bg-emerald-500 rounded" />
                  Technical Quality & Safety Credentials
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-150 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Regulatory Status</span>
                    <p className="text-sm font-bold text-slate-850">USFDA 510(k) Cleared & CDSCO MD-15 Registered</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-150 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Sterility & Safety</span>
                    <p className="text-sm font-bold text-slate-850">Single-unit Dose Lollitray™ (Hygienic Execution)</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-150 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Quality Standard</span>
                    <p className="text-sm font-bold text-slate-850">ISO 13485 Certified Medical Manufacturing</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-150 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Biocompatibility</span>
                    <p className="text-sm font-bold text-slate-850">Conforms to ISO 10993 Systemic Toxicity standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Feedback Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left md:flex md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-emerald-450 font-extrabold tracking-widest uppercase text-xs mb-3 block">Verified Appraisals</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Peerless Customer Feedback
              </h2>
              <p className="mt-3 text-slate-650 text-base md:text-lg">
                Transparent and comprehensive appraisals from industry executives confirming our commitment to quality.
              </p>
            </div>
            <div className="mt-4 md:mt-0 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-700 text-xs font-bold inline-flex items-center gap-1.5 self-start whitespace-nowrap">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Verified Digital Records</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Feedback 1: Anonymous CEO of NSE Listed Company */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/85 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative Big Quote */}
              <div className="absolute right-6 top-6 text-slate-100 pointer-events-none">
                <Quote size={100} className="opacity-40" />
              </div>

              <div className="relative z-10">
                {/* Meta Row: Date and Stars */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="text-slate-400 font-mono text-xs font-semibold">
                    Customer Feedback: 19/2/2026 (Anonymous Record)
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>

                {/* Main Quote Content */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-8">
                  <p>
                    "We would like to acknowledge and appreciate the strong understanding and structured approach demonstrated towards regulatory affairs and compliance requirements."
                  </p>
                  <p>
                    "The team has consistently shown clarity in interpreting applicable regulations, maintaining required documentation, and aligning operational processes with relevant statutory and quality standards. Their proactive approach towards compliance, responsiveness to evolving regulatory frameworks, and commitment to maintaining transparent and well-documented systems reflects a mature and responsible business practice."
                  </p>
                  <p>
                    "Particularly noteworthy is their ability to integrate regulatory requirements into day-to-day business operations without compromising efficiency, ensuring that quality, safety, and compliance remain central to all activities. The organization demonstrates a clear awareness of global compliance expectations and maintains readiness to adapt to new regulatory developments as required."
                  </p>
                  <p className="font-semibold text-emerald-800">
                    "We believe this structured and disciplined approach towards regulatory affairs significantly strengthens their operational reliability and credibility as a professional organization."
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-emerald-450 flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-base font-sans">C</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-extrabold text-base sm:text-lg leading-tight">CEO and Founder</h3>
                    <p className="text-emerald-700 font-bold text-xs uppercase tracking-wider mt-0.5">Under Strict Anonymity Protocol</p>
                    <p className="text-slate-400 text-[10px] uppercase font-bold mt-0.5 tracking-wider">A leading NSE listed dental venture & industry tycoon</p>
                  </div>
                </div>
                
                {/* NDA Disclaimer banner */}
                <div className="text-[10px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-150 font-normal leading-relaxed">
                  <strong>Anonymity Disclaimer</strong>: Under reciprocal Non-Disclosure Agreements (NDAs), the corporate name and executive identifiers are withheld. The original physical certified appraisal is cataloged and fully verifiable by regulatory auditors at our Corporate Headquarters.
                </div>
              </div>
            </motion.div>

            {/* Feedback 2: Ms. Tian Yiwen */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/85 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative Big Quote */}
              <div className="absolute right-6 top-6 text-slate-100 pointer-events-none">
                <Quote size={100} className="opacity-40" />
              </div>

              <div className="relative z-10">
                {/* Meta Row: Date and Stars */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="text-slate-400 font-mono text-xs font-semibold">
                    Customer Feedback: 2026/3/18
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>

                {/* Main Quote Content */}
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-6 space-y-4">
                  <p>
                    "RAC Forge Pvt. Ltd. provides top-tier regulatory support with a focus on efficiency and professionalism. Their team handles complex tasks promptly while remaining easy to communicate with and deeply reliable."
                  </p>
                  <p className="font-semibold text-emerald-800">
                    "We appreciate their dedicated approach and look forward to continuing our successful partnership."
                  </p>
                </div>

                {/* Embedded Context about Foshan Wenjian low/high speed handpieces & regulatory achievements */}
                <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-xs text-slate-650 space-y-2 mb-6">
                  <h4 className="font-bold text-emerald-900 border-b border-emerald-100/60 pb-1 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Foshan Wenjian Manufacturing Synergy
                  </h4>
                  <p>
                    <strong>Foshan Wenjian Medical Instrument Co., Ltd.</strong> is a high-technology dental engineering company revered for manufacturing precision low-speed micromotors and ultra-precise high-speed air turbine dental handpieces.
                  </p>
                  <p className="text-emerald-805 font-medium">
                    RAC Forge acted as legal compliance counsel, delivering successful <strong>USFDA Nice Enterprise (NE) registry filing</strong>, <strong>Certificate to Foreign Government (CFG)</strong> clearances, and Indian <strong>CDSCO registrations</strong> to assure unrestricted international trade compliance.
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 p-1 bg-slate-50/50">
                    <img 
                      src="https://anticrucified.github.io/MyWebP_Images/images/brand2.webp" 
                      alt="Foshan Wenjian Brand Logo" 
                      className="max-w-full max-h-full object-contain"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-extrabold text-base leading-tight">Ms. Tian Yiwen</h3>
                    <p className="text-emerald-700 font-bold text-xs uppercase tracking-wider mt-0.5">International Regulatory Manager</p>
                    <p className="text-slate-400 text-[10px] uppercase font-bold mt-0.5 tracking-wider">Foshan Wenjian Medical Instrument Co., Ltd.</p>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60 font-medium">
                  Verified Digital Record
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION: Our Collaborative Network */}
      <section className="py-20 bg-white border-b border-slate-200" id="collaborative-network">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0D9488] font-extrabold text-xs uppercase tracking-widest block font-mono mb-3">Synergistic Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Collaborative Network</h2>
            <p className="mt-4 text-slate-650 text-base leading-relaxed">
              We leverage an extensive global network of certified laboratories, ISO-accredited testing institutes, and clinical research teams to expedite our clients' certification pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Card 1: PINNACLEMED B.V. */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-250/60 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#0D9488]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-full h-32 bg-white rounded-2xl border border-slate-150 flex items-center justify-center p-1 shadow-sm overflow-hidden relative">
                  <img 
                    src="https://anticrucified.github.io/MyWebP_Images/images/pinacle.webp" 
                    alt="Pinacle - Pinnaclemed EU Rep Logo" 
                    className="max-w-full max-h-full object-contain scale-[1.75]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-extrabold tracking-wider uppercase bg-teal-50 text-teal-800 border border-teal-200/90 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                    EU Authorized Representative (EU Rep)
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">PINNACLEMED B.V.</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Pinnaclemed B.V. serves as our premier European Authorized Representative (EU Rep) partner based in the Netherlands. They represent global manufacturers before the EEA Competent Authorities, manage CE compliance documentation, handle safety vigilances, and secure long-term European market access under the rigorous EU MDR 2017/745.
                </p>
              </div>
            </div>

            {/* Card 2: Chromed Biosciences Pvt. Ltd. */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-250/60 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#0D9488]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-full h-32 bg-white rounded-2xl border border-slate-150 flex items-center justify-center p-4 shadow-sm">
                  <img 
                    src="https://anticrucified.github.io/MyWebP_Images/images/Cromed_Bio.webp" 
                    alt="Cromed_Bio - Chromed Biosciences Logo" 
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-extrabold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-200/90 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Preclinical & Clinical Validation
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">Chromed Biosciences</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Chromed Biosciences Pvt. Ltd. is our key laboratory partner for preclinical safety profiling, dynamic biocompatibility evaluations (conforming to ISO 10993 standards), and end-to-end clinical trial management. Their ISO/GLP-aligned diagnostic capabilities deliver rigorous medical device validation data necessary for seamless filings.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 mt-4">
                <a 
                  href="https://chromedbio.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-990 transition-colors"
                >
                  Visit Chromed Biosciences <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Card 3: ElendiLabs */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-250/60 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#0D9488]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-full h-32 bg-white rounded-2xl border border-slate-150 flex items-center justify-center p-4 shadow-sm">
                  <img 
                    src="https://anticrucified.github.io/MyWebP_Images/images/Elendilabs.webp" 
                    alt="Elendilabs - ElendiLabs Logo" 
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-extrabold tracking-wider uppercase bg-blue-50 text-blue-800 border border-blue-200/90 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    Chinese Market Strategic Partner
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">ElendiLabs</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  ElendiLabs serves as our key strategic gateway to the Chinese medical devices landscape. They coordinate crucial local clinical trials, direct NMPA registrations, and localized technical dossiers to ensure fully compliant entry into Asia's highly regulated healthcare sector.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 mt-4">
                <a 
                  href="https://elendilabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Visit ElendiLabs <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>

          {/* Partnership Perks/Notice Banners */}
          <div className="mb-12 p-6 bg-[#00f5d4]/5 rounded-3xl border border-[#0D9488]/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D9488]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md">
                <Percent size={22} className="animate-pulse" />
              </div>
              <div className="space-y-1 text-left">
                <span className="inline-block text-[10px] uppercase font-bold text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-md font-mono">Special Alliance Subsidies</span>
                <h4 className="text-base font-black text-slate-900">Partner Benefit Privilege</h4>
                <p className="text-xs text-slate-650 leading-relaxed max-w-2xl font-normal">
                  We look out for your project's overall economics. Contact us to avail special discount on the services from our partners.
                </p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-[#0D9488] hover:bg-[#0c857a] text-white text-xs font-black rounded-xl shadow-md transition-all uppercase tracking-wider shrink-0 text-center w-full md:w-auto hover:scale-[1.02]"
            >
              Claim Discount Rates
            </a>
          </div>

          {/* Collaborative NDA Protected Alliances Row */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D9488]/5 rounded-bl-full pointer-events-none" />
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-2.5 h-5 bg-[#0D9488] rounded-md" />
              Confidential Regulatory Alliances (Under Strict NDA)
            </h3>
            <p className="text-xs text-slate-650 leading-relaxed mb-6">
              To sustain global market authorization speed, we maintain additional reciprocal alliances mapped directly to international registrars. Under reciprocal Non-Disclosure Agreements, these specialized consultation pipelines handle:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/90 flex items-start gap-3">
                <span className="text-[#0D9488] font-bold text-base bg-[#0D9488]/10 w-6 h-6 rounded-lg flex items-center justify-center shrink-0">✓</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wide">ANVISA Alliance</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    Direct validation channels for rapid medical device registrations in the Brazilian market.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/90 flex items-start gap-3">
                <span className="text-[#0D9488] font-bold text-base bg-[#0D9488]/10 w-6 h-6 rounded-lg flex items-center justify-center shrink-0">✓</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wide">Notified Bodies Co-ordination</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    Direct pathways with peak European registrars to expedite CE mark compliance files.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/90 flex items-start gap-3">
                <span className="text-[#0D9488] font-bold text-base bg-[#0D9488]/10 w-6 h-6 rounded-lg flex items-center justify-center shrink-0">✓</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wide">Legal Consultancy & Services</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    Comprehensive legal support for safe cross-border technology transfers and IP protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Government Registries & Certification Licenses */}
      <section className="py-24 bg-white border-b border-slate-200" id="credentials-registries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#0D9488] font-extrabold text-xs uppercase tracking-widest block font-mono">Government Credentials Track</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Verifiable Corporate Registries</h2>
            <p className="text-slate-650 text-base font-medium">
              RAC Forge Private Limited is a fully authorized and incorporated legal entity complying with the Ministry of Corporate Affairs, Indian MSME rules, and CDSCO Medical Device Rules, 2017. View our active registration credentials below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cert 1: MCA COI */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-200 shadow-sm mb-6 font-mono">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  COI
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Certificate of Incorporation</h3>
                <p className="text-slate-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">Ministry of Corporate Affairs Code</p>
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 font-mono text-xs">
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">CIN:</span>
                    <span className="font-bold text-slate-800">U82990HP2025PTC012302</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Issued On:</span>
                    <span className="font-bold text-slate-850">30-December-2025</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  Pursuant to sub-section (2) of section 7 and sub-section (1) of section 8 of the Companies Act, 2013, validating RAC FORGE PRIVATE LIMITED.
                </p>
              </div>
              <button 
                onClick={() => setActiveCertId('mca')}
                className="w-full text-center py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span>Interactive Verifiable Sheet</span>
                <ArrowRight size={14} className="text-amber-400" />
              </button>
            </motion.div>

            {/* Cert 2: Form MD-42 CDSCO */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm mb-6 font-mono">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  MD-42
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Form MD-42 Medical Device License</h3>
                <p className="text-slate-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">Central Drugs Standard Control Organisation (CDSCO)</p>
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 font-mono text-xs">
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">License No.:</span>
                    <span className="font-bold text-slate-800">HP/KAN/MD42/2026/000003</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Approved On:</span>
                    <span className="font-bold text-slate-850">18-May-2026</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  Official drug and diagnostic registry enabling sale, stock, exhibition or offer for sale and distribution of medical devices of M/s RAC Forge.
                </p>
              </div>
              <button 
                onClick={() => setActiveCertId('cdsco')}
                className="w-full text-center py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span>Interactive Verifiable Sheet</span>
                <ArrowRight size={14} className="text-emerald-400" />
              </button>
            </motion.div>

            {/* Cert 3: Udyam MSME */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-cyan-50 text-cyan-800 border border-cyan-200 shadow-sm mb-6 font-mono">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                  MSME
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Udyam Registration Certificate</h3>
                <p className="text-slate-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">Ministry of Micro, Small & Medium Enterprises</p>
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 font-mono text-xs">
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">Registry No:</span>
                    <span className="font-bold text-slate-800">UDYAM-HP-04-0045033</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Classified On:</span>
                    <span className="font-bold text-slate-850">15-March-2026</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  Official classification category: Micro Enterprise under National Industry Classification Code 74909, guaranteeing structured regulatory tracks.
                </p>
              </div>
              <button 
                onClick={() => setActiveCertId('udyam')}
                className="w-full text-center py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span>Interactive Verifiable Sheet</span>
                <ArrowRight size={14} className="text-cyan-400" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL: High-Fidelity Replication Viewer */}
      {activeCertId && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity">
          
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Control Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-slate-200 bg-slate-50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#0D9488]">Official Verified Digital Document Replica</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  title="Print Verified Replica"
                >
                  <Printer size={14} />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>
                <button 
                  onClick={() => setActiveCertId(null)}
                  className="p-1 px-1.5 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-lg transition-colors"
                  title="Close Certificate Viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Document Content Viewport */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-100 flex justify-center items-start">
              
              <div id="printable-certificate-area" className="w-full max-w-3xl bg-white shadow-xl rounded-2xl border-2 border-slate-200 text-slate-900 font-sans p-6 sm:p-12 relative print:shadow-none print:border-0 overflow-x-auto min-w-[280px]">
                
                {/* 1. MCA COI Replica Layout */}
                {activeCertId === 'mca' && (
                  <div className="space-y-6">
                    {/* Double golden border border structure */}
                    <div className="border-4 border-double border-amber-600/40 p-4 sm:p-8 space-y-6">
                      
                      {/* Government crest representation */}
                      <div className="text-center space-y-2">
                        <div className="flex justify-center mb-1">
                          {/* Lion Capital Silhouette representation style SVG */}
                          <div className="w-12 h-16 border-2 border-slate-400 rounded-lg flex items-center justify-center font-serif text-[8px] font-black leading-none p-1 text-center text-slate-500 select-none">
                            GOI EMBLEM
                          </div>
                        </div>
                        <h4 className="text-sm font-black tracking-widest text-slate-800 uppercase">GOVERNMENT OF INDIA</h4>
                        <h3 className="text-xs font-bold text-slate-700 uppercase">MINISTRY OF CORPORATE AFFAIRS</h3>
                        <p className="text-[10px] font-semibold text-slate-500 uppercase">Central Registration Centre</p>
                        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-amber-600/55 to-transparent mx-auto my-3" />
                        <h2 className="text-lg sm:text-2xl font-serif font-bold text-slate-900 mt-2">Certificate of Incorporation</h2>
                        <p className="text-[9px] text-slate-500 italic max-w-md mx-auto leading-normal">
                          [Pursuant to sub-section (2) of section 7 and sub-section (1) of section 8 of the Companies Act, 2013 (18 of 2013) and rule 18 of the Companies (Incorporation) Rules, 2014]
                        </p>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-850 leading-relaxed font-serif space-y-4 pt-4">
                        <p className="indent-8 text-justify">
                          I hereby certify that <span className="font-bold text-slate-950 uppercase font-sans">RAC FORGE PRIVATE LIMITED</span> is incorporated on this <span className="font-bold">THIRTY day of DECEMBER TWO THOUSAND TWENTY FIVE</span> under the Companies Act, 2013 (18 of 2013) and that the company is Company limited by shares.
                        </p>
                      </div>

                      {/* Official Identifiers Table */}
                      <div className="border border-slate-300 rounded-lg overflow-hidden my-6">
                        <table className="w-full text-left text-xs border-collapse">
                          <tbody>
                            <tr className="border-b border-slate-300 bg-slate-50">
                              <td className="p-3 font-semibold text-slate-600 w-1/3 border-r border-slate-300">Corporate Identity Number (CIN)</td>
                              <td className="p-3 font-mono font-extrabold text-slate-950">U82990HP2025PTC012302</td>
                            </tr>
                            <tr className="border-b border-slate-300">
                              <td className="p-3 font-semibold text-slate-600 border-r border-slate-300">Permanent Account Number (PAN)</td>
                              <td className="p-3 font-mono font-bold text-slate-900">AAPCR3766A*</td>
                            </tr>
                            <tr className="bg-slate-50">
                              <td className="p-3 font-semibold text-slate-600 border-r border-slate-300">Tax Deduction Account Number (TAN)</td>
                              <td className="p-3 font-mono font-bold text-slate-900">PTLR20887G*</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="text-xs leading-relaxed text-slate-600 font-serif text-justify space-y-3">
                        <p>Given under my hand at Manesar this <span className="font-bold text-slate-800">THIRTY day of DECEMBER TWO THOUSAND TWENTY FIVE</span>.</p>
                        <p className="text-[10px] italic">Disclaimer: This certificate only evidences incorporation of the company on the basis of documents and declarations of the applicant(s). Registered as a Private Limited under Himachal Pradesh jurisdictions.</p>
                      </div>

                      {/* Signature Row */}
                      <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-slate-100">
                        {/* Digital Signature Box */}
                        <div className="border border-emerald-500 bg-emerald-50/50 rounded-lg p-3 max-w-[250px] relative font-mono text-[9px] text-emerald-800 space-y-1">
                          <div className="flex items-center gap-1.5 text-emerald-700 font-bold mb-1">
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-sans">✓</span>
                            <span>Digitally Signed</span>
                          </div>
                          <div>Signed by: DS Ministry of Corporate Affairs</div>
                          <div>Location: CRC Manesar 2</div>
                          <div>Date: 2025.12.30 14:49:42 IST</div>
                        </div>

                        {/* Officer block */}
                        <div className="text-center sm:text-right font-serif">
                          <p className="font-bold text-slate-900 text-sm">Pranavkumar Agja</p>
                          <p className="text-slate-500 text-[10px] uppercase font-bold leading-none mt-0.5">Assistant Registrar of Companies</p>
                          <p className="text-slate-400 text-[9px] italic">Central Registration Centre</p>
                        </div>
                      </div>

                      {/* MCA Footer */}
                      <div className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400 font-mono">
                        Valid verification status can be online-queried at <span className="font-bold text-slate-500">mca.gov.in</span>
                      </div>

                    </div>
                  </div>
                )}

                {/* 2. CDSCO FORM MD-42 Replica Layout */}
                {activeCertId === 'cdsco' && (
                  <div className="space-y-6">
                    <div className="border-2 border-slate-300 p-4 sm:p-8 space-y-6 font-sans">
                      
                      {/* Header block */}
                      <div className="text-center space-y-1 pb-4 border-b border-slate-200">
                        <div className="flex justify-center mb-1">
                          <div className="w-12 h-14 border border-slate-300 rounded flex items-center justify-center text-[8px] text-slate-400 font-black">
                            CREST
                          </div>
                        </div>
                        <h3 className="text-sm font-black text-slate-900 uppercase">FORM MD-42</h3>
                        <p className="text-[10px] text-slate-500 font-medium">[See sub-rule (4) of rule 87A and sub-rule (1) of rule 87C]</p>
                        <h2 className="text-xs sm:text-sm font-black text-slate-800 leading-tight uppercase px-4 max-w-xl mx-auto py-2 bg-slate-50 rounded border border-slate-200">
                          REGISTRATION CERTIFICATE TO SELL, STOCK, EXHIBIT OR OFFER FOR SALE OR DISTRIBUTE A MEDICAL DEVICE INCLUDING IN VITRO DIAGNOSTIC MEDICAL DEVICE
                        </h2>
                      </div>

                      {/* Document Meta Row */}
                      <div className="flex justify-between items-center text-xs font-mono font-bold py-2 border-b border-slate-100">
                        <span className="text-slate-500">Registration no:</span>
                        <span className="text-red-700 font-extrabold break-all text-sm">HP/KAN/MD42/2026/000003</span>
                      </div>

                      {/* Statement text */}
                      <div className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify space-y-4">
                        <p>
                          1. <span className="font-bold text-slate-900 uppercase">M/s RAC FORGE PVT. LTD.</span> situated at <span className="font-semibold text-slate-850">11,1 WARD NO. 3, NALEHAR, THURAL, Kangra, Himachal Pradesh-176107, India</span> Telephone No.: <span className="font-semibold">8219327704</span>, FAX: <span className="font-semibold">8219327704</span>, E-mail: <span className="font-semibold text-sky-700 underline">operations@racforge.com</span>, has been registered to cell, stack, exhibit or offer for sale or distribute a medical device including in vitro diagnostic medical device under the Medical Devices Rules, 2017.
                        </p>
                        <p className="font-semibold">
                          Constitution: <span className="text-slate-900 font-bold uppercase">Private Limited</span>
                        </p>
                      </div>

                      {/* Qualified Competent Person details table */}
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-900 uppercase">2. Name and qualification of competent person:</p>
                        <div className="border border-slate-300 rounded overflow-hidden">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-55 border-b border-slate-300 font-bold text-slate-700">
                                <th className="p-2 border-r border-slate-300 text-center w-12">S.No.</th>
                                <th className="p-2 border-r border-slate-300">Name</th>
                                <th className="p-2 border-r border-slate-300">Qualification</th>
                                <th className="p-2">Experience</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-slate-200">
                                <td className="p-2 border-r border-slate-300 text-center font-mono">1</td>
                                <td className="p-2 border-r border-slate-300 font-bold text-slate-900">Kuljeet Katoch</td>
                                <td className="p-2 border-r border-slate-300 font-semibold">B.Pharma</td>
                                <td className="p-2">1 Year</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="text-xs text-slate-650 leading-relaxed pt-3">
                        <p className="text-justify font-medium">
                          3. This registration is subject to the conditions as specified in the Drugs and Cosmetics Act, 1940 (23 of 1940) and the Medical Devices Rules, 2017.
                        </p>
                      </div>

                      {/* Stamp & ink signature layout */}
                      <div className="pt-8 flex flex-col sm:flex-row justify-between items-start gap-8 font-sans">
                        <div className="space-y-1.5 text-xs font-mono">
                          <p><span className="text-slate-400 font-bold">Place:</span> <span className="font-bold text-slate-850">Kangra, Himachal Pradesh</span></p>
                          <p><span className="text-slate-400 font-bold">Date:</span> <span className="font-bold text-slate-850">18-May-2026</span></p>
                        </div>

                        {/* Authority Signature Ink Stamp */}
                        <div className="text-center sm:text-right text-[11px] text-blue-700 font-serif border border-dashed border-blue-300 bg-blue-50/40 p-4 rounded-xl relative max-w-[280px]">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500/10 text-4xl font-extrabold border-4 border-emerald-500/10 rounded-full w-24 h-24 flex items-center justify-center -rotate-12 pointer-events-none select-none">
                            SEAL
                          </div>
                          <div className="font-sans italic text-blue-900 font-bold mb-2">Bhavna</div>
                          <div className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-wider mb-1.5">Approved Signature / Seal Stamp</div>
                          <p className="font-black">State Licensing Authority</p>
                          <p className="font-bold">Asstt. Drugs Controller Cum</p>
                          <p className="font-bold">Drug Licensing Authority</p>
                          <p className="text-[10px] text-blue-600 mt-1">Distt. Kangra at Dharamshala (H.P.)</p>
                        </div>
                      </div>

                      {/* CDSCO footer */}
                      <div className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400 font-mono">
                        Valid verification verification code and status online at <span className="font-bold text-slate-500">www.cdscodonline.gov.in</span>
                      </div>

                    </div>
                  </div>
                )}

                {/* 3. UDYAM REGISTRATION Replica Layout */}
                {activeCertId === 'udyam' && (
                  <div className="space-y-6">
                    <div className="border border-slate-350 p-4 sm:p-8 space-y-6 font-sans">
                      
                      {/* Top ribbon title */}
                      <div className="bg-[#003366] text-white p-4 rounded-xl text-center shadow-md relative">
                        <h2 className="text-base sm:text-lg font-black tracking-widest uppercase">UDYAM REGISTRATION CERTIFICATE</h2>
                      </div>

                      {/* Registry code row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-b border-slate-200 pb-4">
                        <div className="space-y-1 border-r border-slate-200 pr-4">
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">UDYAM REGISTRATION NUMBER</p>
                          <p className="font-mono font-extrabold text-slate-900 text-base">UDYAM-HP-04-0045033</p>
                        </div>
                        <div className="space-y-1 pl-0 sm:pl-4">
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">NAME OF ENTERPRISE</p>
                          <p className="font-black text-slate-950 text-sm uppercase">RAC FORGE PRIVATE LIMITED</p>
                        </div>
                      </div>

                      {/* Small Grid metrics columns */}
                      <div className="border border-slate-300 rounded overflow-hidden">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-300 font-bold text-slate-700">
                              <th className="p-2 border-r border-slate-300 text-center">SNo.</th>
                              <th className="p-2 border-r border-slate-300">Classification Year</th>
                              <th className="p-2 border-r border-slate-300">Enterprise Type</th>
                              <th className="p-2 text-center">Classification Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-slate-250">
                              <td className="p-2 border-r border-slate-300 text-center font-mono">1</td>
                              <td className="p-2 border-r border-slate-300 font-bold">2025-26</td>
                              <td className="p-2 border-r border-slate-300 font-bold text-emerald-800 bg-emerald-50 text-center">Micro</td>
                              <td className="p-2 text-center font-mono">15/03/2026</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Major Activity Green Banner */}
                      <div className="bg-[#008000] text-center text-white py-2.5 rounded font-black text-sm uppercase tracking-widest shadow-inner my-4">
                        MAJOR ACTIVITY: SERVICES
                      </div>

                      {/* Additional stats */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-800 pt-2">
                        <div className="space-y-2">
                          <div className="pb-1 border-b border-slate-250"><span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Social Category:</span> <span className="font-bold text-slate-900 float-right">GENERAL</span></div>
                          <div className="pb-1 border-b border-slate-250 font-sans"><span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Name of Unit(s):</span> <span className="font-bold text-slate-900 float-right">Headquarters</span></div>
                          <div className="pb-1 border-b border-slate-250"><span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Date of Incorporation:</span> <span className="font-bold text-slate-900 float-right">30/12/2025</span></div>
                          <div className="pb-1"><span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Commencement Date:</span> <span className="font-bold text-slate-900 float-right">30/12/2025</span></div>
                        </div>

                        <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl space-y-1.5 font-mono text-[11px] leading-relaxed">
                          <p className="font-bold text-slate-900 border-b border-slate-200 pb-1 uppercase tracking-wide font-sans">Official Business Address</p>
                          <p><span className="text-slate-400">Premises/Flat:</span> RAC FORGE PRIVATE LIMITED (11,1)</p>
                          <p><span className="text-slate-400">Road / Street:</span> Nalehar Road (Thural)</p>
                          <p><span className="text-slate-400">State / Pin:</span> Himachal Pradesh - Pin 176107</p>
                          <p><span className="text-slate-400">District:</span> Kangra (H.P.)</p>
                          <p><span className="text-slate-400">Contact Email:</span> racforge@gmail.com</p>
                        </div>
                      </div>

                      {/* National Industry Classification (NIC) Code Segment */}
                      <div className="space-y-2 pt-4">
                        <p className="text-xs font-bold text-slate-900 uppercase">National Industry Classification Code(s):</p>
                        <div className="border border-slate-350 rounded overflow-hidden">
                          <table className="w-full text-left text-[11px] border-collapse leading-tight font-serif">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-300 font-bold text-slate-700">
                                <th className="p-2 border-r border-slate-300 text-center w-12">SNo.</th>
                                <th className="p-2 border-r border-slate-300">NIC 2 Digit</th>
                                <th className="p-2 border-r border-slate-300">NIC 4 Digit</th>
                                <th className="p-2">NIC 5 Digit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 border-r border-slate-300 text-center font-mono">1</td>
                                <td className="p-2 border-r border-slate-300">74 - Other professional, scientific and technical activities</td>
                                <td className="p-2 border-r border-slate-300">7490 - Other professional, scientific and technical activities n.e.c.</td>
                                <td className="p-2 font-bold">74909 - Other professional, scientific and technical activities n.e.c. (Major Services Activities)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* MSME Footer credentials */}
                      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-sans">
                        <p className="text-center sm:text-left"><span className="text-slate-400 font-bold">District Industries Centre:</span> <span className="font-bold text-slate-850">KANGRA (HIMACHAL PRADESH)</span></p>
                        <p className="text-center sm:text-right"><span className="text-slate-400 font-bold">MSME-DFO Node:</span> <span className="font-bold text-slate-850">SOLAN (HIMACHAL PRADESH)</span></p>
                      </div>

                      {/* Printed declaration */}
                      <div className="pt-4 border-t border-slate-100 text-center text-[10px] text-slate-400">
                        *In case of graduation of status of an enterprise, the benefit of the Government Schemes will be availed as per guidelines. Printed from <a href="https://udyamregistration.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline text-slate-500">https://udyamregistration.gov.in</a>
                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Modal Control Footer */}
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 shrink-0">
              This interactive replica has been digitally formatted verbatim according to scanned official Government paper registries dated up to June 2026.
            </div>

          </div>
        </div>
      )}

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

