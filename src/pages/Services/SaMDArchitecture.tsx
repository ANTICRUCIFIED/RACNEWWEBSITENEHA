import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Code2, ShieldCheck, Zap, Laptop, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function SaMDArchitecture() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="SaMD Development & IEC 62304 Compliance | RAC Forge" 
        description="Engineering high-integrity SaMD solutions with IEC 62304 lifecycle design, cybersecurity risk assessments, and robust V&V protocols."
        keywords="SaMD, Software as a Medical Device, IEC 62304, regulatory-compliant by design, medical software architecture, digital health validation, SUGAM, CDSCO, cybersecurity medical devices"
        canonical="/services/samd-architecture-development"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="SaMD Architecture & Development | RAC Forge" title="SaMD Architecture & Development"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-1xl text-xl md:text-2xl lg:text-3xl font-black text-white mb-6 leading-tight tracking-tight">
              SaMD Architecture & Development
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Design, engineering, and lifecycle validation for Software as a Medical Device under IEC 62304.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Full-Lifecycle Software as a Medical Device (SaMD) Development</h2>
                <p className="text-lg">
                  At RAC Forge, we engineer SaMD solutions that are not only innovative but also regulatory-compliant by design. We specialize in navigating the complexities of <strong>IEC 62304</strong>, providing end-to-end support from initial software architecture to final validation. Our expertise ensures your digital health product meets global standards for safety, efficacy, and cybersecurity.
                </p>

                <div className="my-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-3xl border border-emerald-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm text-emerald-600">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Designed for Global Standardizations</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We don't just write code; we design reliable, modular, and containerized structures mapped explicitly to Class A, B, and C software safety criteria of IEC 62304.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Software Development Lifecycle (SDLC) Documentation", desc: "Rigorous planning, development, and release documentation aligned precisely with international safety classes." },
                    { title: "Cybersecurity Risk Assessment & Mitigation", desc: "Penetration support, architecture threat modeling, and robust protection systems for patient vitals." },
                    { title: "Code Validation and Verification (V&V) Protocols", desc: "Full unit, integration, and user-acceptance test (UAT) designs matching strict FDA and CE audit rules." },
                    { title: "AI/ML Diagnostic Software Compliance", desc: "Structured validation schemas highlighting clinical dataset performance, biases, and adaptive model controls." },
                    { title: "Technical Dossier Preparation for CDSCO and Global Submissions", desc: "Compile complex software data files for prompt registration across SUGAM, FDA eSTAR, and EUDAMED." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#0D9488]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Strategic Software Compliance</h3>
                <p>
                  As AI and Machine Learning integrate deeper into clinical operations, regulatory bodies require structured validation reports detailing training datasets, algorithmic boundaries, and validation parameters. We help software manufacturers translate software engineering terms into robust biological and clinical risk frameworks.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Engineering & R&D</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'Electrical Prototyping', path: '/services/electrical-medical-device-prototyping' },
                      { name: 'Cleanroom & Facility Design', path: '/services/facility-cleanroom-design' },
                    ].map((link) => (
                      <li key={link.name}>
                        <Link to={link.path} className="text-gray-600 hover:text-brand-teal font-bold flex items-center group">
                          <ArrowRight className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] text-brand-deep relative overflow-hidden border border-gray-200 shadow-xl">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 skew-x-12 translate-x-1/4"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4 text-brand-deep font-sans tracking-tight">Need Expert Help?</h4>
                    <p className="text-gray-600 text-sm mb-8 font-medium">
                      Our skilled technicians specialize in firmware, hardware, and deep clinical diagnostics architecture.
                    </p>
                    <Link to="/contact" className="block text-center bg-brand-deep text-white py-4 rounded-2xl font-bold hover:bg-brand-teal transition-all shadow-lg shadow-brand-deep/20">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
