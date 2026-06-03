import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function EUMDRCompliance() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="EU MDR CE Marking and Technical Documentation | RAC Forge" 
        description="Transition successfully to EU MDR (2017/745). Expert drafting of GSPR, Clinical Evaluation Reports (CER), post-market surveillance systems, and EUDAMED registration."
        keywords="EU MDR transition, CE Marking medical devices, GSPR checklist compliance, Clinical Evaluation Report CER, Post Market Surveillance PMS, EUDAMED"
        canonical="/services/eu-mdr-ce-marking"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="EU MDR Compliance | RAC Forge" title="EU MDR Compliance"
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
              EU MDR (2017/745) & CE Marking Compliance
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Structural transitions, GSPR checklists, and comprehensive medical technical files mapped to modern European directives.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Fully Transition to EU MDR (2017/745) and CE Marking</h2>
                <p className="text-lg">
                  The European Medical Device Regulation (EU MDR 2017/745) introduced far stricter parameters for safety compliance, clinical evaluations, and post-market tracking. We provide precise structural revisions to align your technical documentation with these stringent standards, paving the way for smooth CE audits.
                </p>

                <div className="my-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-3xl border border-emerald-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm text-emerald-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Rigorous Auditing Thresholds</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Under European MDR, self-declaration is restricted. Almost all risk classes demand a thorough technical file audit by an accredited Notified Body.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Systematic Drafting of GSPR Checklists", desc: "Mapping of General Safety & Performance Requirements to physical and operational evidence vectors." },
                    { title: "Clinical Evaluation Plans & Reports (CEP/CER)", desc: "Deep literature search and clinical analysis matching state-of-the-art medical standards as per MEDDEV guidelines." },
                    { title: "Formulating Post-Market Surveillance (PMS/PMCF)", desc: "Developing periodic safety update reports (PSUR) and proactive clinical follow-up frameworks to track issues." },
                    { title: "Liaison & Coordination with Notified Bodies", desc: "Setting up audit files, preparing managers, and representing manufacturers during conformity assessments." },
                    { title: "EUDAMED Registrations & UDI Pathways", desc: "Direct support applying for Single Registration Numbers (SRN), generating barcodes, and registering inventories." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#0D9488]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Navigating Notified Body Backlogs</h3>
                <p>
                  With major backlogs across European Notified Bodies, preparing an unassailable, robust technical dossier on your first submission is critical to avoiding years of delay. We coordinate with regulatory leads to complete structural and documentation reviews beforehand.
                </p>

                {/* Direct Inline Forms Codex */}
                <FormsHub 
                   keys={['eu-mdr', 'gspr', 'cer', 'pms', 'pmcf', 'psur', 'eudamed', 'udi', 'prrc']} 
                   title="EU MDR CE Marking & Technical Dossier Codex" 
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Global Market Access</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'USFDA 510(k) & De Novo', path: '/services/usfda-510k-de-novo' },
                      { name: 'EU Authorized Rep (EAR)', path: '/services/eu-authorized-representative' },
                      { name: 'Anvisa Brazil Registration', path: '/services/anvisa-brazil-registration' }
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
                      Our international market access team has steered multiple diagnostic systems and implants to successful FDA clearances.
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
