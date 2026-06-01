import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ClipboardCheck, Zap, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function ISO13485Certification() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="ISO 13485 & 9001 Certification Services | RAC Forge" 
        description="Achieve accredited internationally recognized ISO 13485:2016 and ISO 9001:2015 certifications. Comprehensive gap analysis and QMS drafting in partnership with DPPB Solutions."
        keywords="ISO 13485:2016, ISO 9001:2015 certification, medical QMS consultant, DPPB Solutions partnership, gap analysis, SOP auditing"
        canonical="/services/iso-13485-certification-audit"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="ISO 13485 & 9001 Certification | RAC Forge" title="ISO 13485 & 9001 Certification"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Achieve Accredited ISO 13485 & 9001 Certification
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Guided quality management implementation pathways for medical hardware or digital diagnostics in formal MOU alignment with <strong>DPPB Solutions</strong>.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Partnership with DPPB Solutions</h2>
                <p className="text-lg animate-fade-in">
                  Beyond consultancy, we deliver results. Through our formal MOU with <strong>DPPB Solutions</strong>, we provide a direct pathway to achieving internationally accredited ISO 13485:2016 (Medical Device QMS) and ISO 9001:2015 certifications. Our comprehensive service includes gap analysis, QMS implementation, documentation, and liaison with accredited certification bodies to ensure you pass your audit successfully.
                </p>

                <div className="my-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-3xl border border-emerald-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-emerald-110 shadow-sm text-emerald-600">
                      <Handshake size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">DPPB Solutions MOU Synergy</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        This strategic alignment combines our detailed regulatory drafting with accredited, internationally Recognized auditing pathways.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "QMS Gap Analysis against ISO Standards", desc: "Detailed mapping of operational files, tracing standard gaps and defining precise milestones to bridge them." },
                    { title: "Designing Custom Quality Manuals & SOPs", desc: "Tailoring clean protocols detailing risk evaluation, trace management, sourcing, and complaints handling processes." },
                    { title: "Strict Design Controls & Supplier Auditing", desc: "Implementing absolute verification chains ensuring that third parties hold required safety credentials." },
                    { title: "Internal Quality Auditing & CAPA Execution", desc: "Performing simulated test audits and resolving discrepancies beforehand with strong corrective actions." },
                    { title: "Accredited Audit Liaison & Support", desc: "Direct logistical representation, response mapping, and documentation coordination during official registration audits." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Why ISO Certification Matters</h3>
                <p>
                  An internationally verified QMS (ISO 13485) represents the underlying framework for all major pathways including USFDA 510(k), Anvisa Brazil, and EU MDR. It signals to international distributors and hospital purchasing committees that safety and operational quality guidelines are strictly followed.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Accredited Audits</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'Biocompatibility Testing', path: '/services/biocompatibility-testing-iso-10993' },
                      { name: 'Audit Readiness', path: '/services/regulatory-audit-readiness' }
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
                      Our skilled auditors maintain direct active credentials to map, deploy, and verify global QMS setups flawlessly.
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
