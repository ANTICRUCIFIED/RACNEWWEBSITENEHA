import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ClipboardCheck, ShieldAlert, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function RegulatoryAuditReadiness() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Regulatory Audit Readiness & QMS Preparation | RAC Forge" 
        description="Ensure effortless approval and zero severe non-conformities during CDSCO, USFDA, or Notified Body inspections. Expert mock audits and QMS reviews."
        keywords="regulatory audit readiness, CDSCO audit prep, USFDA inspection pre-audit, mock audit medical devices, QMS compliance, CAPA remediation"
        canonical="/services/regulatory-audit-readiness"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Regulatory Audit Readiness | RAC Forge" title="Regulatory Audit Readiness"
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
              Regulatory Audit Readiness & QMS Preparation
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Preparing operations, engineering documents, and personnel for official regulatory assessments with zero friction.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Gain 100% Assurance with Regulatory Audit Readiness</h2>
                <p className="text-lg">
                  Minimize the risk of audit failures and compliance findings. RAC Forge prepares your team, processes, and documentation for audits from Notified Bodies, FDA investigators, CDSCO auditors, or international regulators, ensuring immediate and smooth approval.
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <ClipboardCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Simulated Inspector Protocols</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We replicate live regulatory inspection processes down to individual document requests and mock developer interviews to bulletproof quality systems.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Simulated Mock Regulatory Audits", desc: "Rigorous trial run replicates FDA QSIT, CDSCO, or EU MDR Notified Body assessment methodologies." },
                    { title: "Clean QMS & Design History Reviews", desc: "Granular pre-audit file analysis verifying specifications, validation records, and material sourcing logs." },
                    { title: "Interaction & Staff Response Workshops", desc: "Preparing engineers and managers with proven interaction strategies, query response protocols, and presentation plans." },
                    { title: "Remediating Non-Conformities & CAPA", desc: "Proactive, rapid correction of underlying systemic design issues or previous auditing findings." },
                    { title: "Real-time Auditing Support (Remote/On-site)", desc: "Direct active support, document staging, and real-time defense assistance during official investigator site visits." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Active CAPA Resolution</h3>
                <p>
                  A previous auditing citation (Form 483, major non-conformities, etc.) requires immediate, reliable corrective actions. We work directly with quality leaders to structure robust correct/prevent (CAPA) trails that satisfy auditor expectations, restoring active registration states.
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
                      { name: 'ISO 13485 QMS Certification', path: '/services/iso-13485-certification-audit' },
                      { name: 'Biocompatibility Testing', path: '/services/biocompatibility-testing-iso-10993' }
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
