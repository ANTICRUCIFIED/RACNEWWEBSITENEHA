import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldAlert, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function PostMarketSurveillance() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Post-Market Surveillance (PMS) & Vigilance | RAC Forge" 
        description="Comprehensive PMS plans, PMCF studies, and vigilance systems for EU MDR and CDSCO. Seamlessly manage clinical data and complaint tracking loops."
        keywords="post-market surveillance PMS, PMCF clinical follow up, medical device vigilance, PSUR report EU MDR, complaint tracking"
        canonical="/services/post-market-surveillance-pms"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Post-Market Surveillance | RAC Forge" title="Post-Market Surveillance"
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
              Post-Market Surveillance (PMS) & Vigilance
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Drafting systematic PMS plans, managing PMCF registries, compiling periodic safety updates (PSUR), and structuring global regulatory vigilance.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Continuous Verification and Compliance Monitoring</h2>
                <p className="text-lg">
                  Patient safety oversight must continue long after design and registration steps are completed. Post-Market Surveillance (PMS) represents an active, statutory loop that requires continuous observation of device performance, complaint logging, and systematic feedback analysis.
                </p>

                <div className="my-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-3xl border border-emerald-50 program">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm text-emerald-600">
                      <HeartHandshake size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">Active Lifecycle Reviews</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We transition risk management from a static paper document into a dynamic quality loop integrated with user complaint databases and feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our PMS & Vigilance Support Includes:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "PMS Plan & Protocol Drafting", desc: "Setting up a tailored monitoring matrix outlining data gathering and analysis methods." },
                    { title: "Post-Market Clinical Follow-up", desc: "Designing patient diaries, registry studies, and scientific surveys to collect live safety parameters." },
                    { title: "Periodic Safety Update Reports", desc: "Aggregating global safety profiles and calculating risk rates to satisfy regulatory oversight." },
                    { title: "Vigilance & Recall Support", desc: "Formulating strict protocols for adverse event reporting, field safety corrective actions, and CDSCO/MDR filings." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Regulatory Review Integration</h3>
                <p>
                  Both European Notified Bodies and CDSCO state inspectors verify the links between your ISO 14971 risk files and post-market safety trends. Our structured files ensure clear, consistent compliance loops that pass technical audits with flying colors.
                </p>

                <FormsHub keys={['pms', 'pmcf', 'psur', 'eudamed', 'udi']} title="Post-Market Regulatory Standards" />
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
