import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function ISORiskManagement() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="ISO 14971 Medical Device Risk Management | RAC Forge" 
        description="Providing expert ISO 14971 medical device risk management files development. Complete risk benefit analysis, safety logs, and audits integration."
        keywords="ISO 14971 dynamic risk management, medical device hazard analysis, benefit risk assessment, safety matrix log"
        canonical="/services/iso-14971-risk-management"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="ISO 14971 Risk Management | RAC Forge" title="ISO 14971 Risk Management"
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
              ISO 14971 Risk Management
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Formulating systematic hazard logs, safety matrices, overall risk-benefit analyses, and passing MDR/FDA auditor expectations.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Verifying Safety Integrity under ISO 14971</h2>
                <p className="text-lg">
                  Applying medical-grade risk management is a mandatory requirement for every single medical product globally. ISO 14971 defines a complete lifecycle strategy to identify, catalog, and mitigate device hazards throughout the design, production, and clinical usage stages.
                </p>

                <div className="my-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-3xl border border-emerald-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-emerald-150 shadow-sm text-emerald-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">Active Lifecycle Reviews</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We transition risk management from a static paper document into a dynamic quality loop integrated with user complaint databases and feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our ISO 14971 Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Risk Management Plan (RMP)", desc: "Establishing custom risk acceptance criteria, assigning engineering roles, and outlining the verification matrices." },
                    { title: "Hazard Identification & Analysis (FMEA)", desc: "Conducting systematic Failure Modes and Effects Analyses for mechanical, electrical, and software sub-elements." },
                    { title: "Risk Mitigation & Control Actions", desc: "Formulating physical design controls, audible/visual alarms, and warning instructions to minimize hazardous scenarios." },
                    { title: "Overall Risk-Benefit Analysis (RBA)", desc: "Comparing cumulative device risks against patient clinical gains to declare clear safety clearance." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#10B981]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-655 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Integration with QMS Systems</h3>
                <p>
                  As both European Notified Bodies and CDSCO auditors verify the links between ISO 14971 risk files and design history files, maintaining strict traceability is essential. Our team audits this interface to eliminate common non-conformances.
                </p>

                <FormsHub keys={['iso-14971', 'pms', 'smf', 'pmf']} title="Risk & Safety Codex" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Certifications & Audits</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'ISO 13485 & 9001 Certification', path: '/services/iso-13485-certification-audit' },
                      { name: 'Regulatory Audit Readiness', path: '/services/regulatory-audit-readiness' }
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
