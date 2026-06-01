import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Shield, Globe2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function UKCAMark() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="UKCA Mark Certification & MHRA Compliance | RAC Forge" 
        description="Comprehensive UKCA Mark consulting for Great Britain post-Brexit. Complete transition support from CE marking to MHRA registration."
        keywords="UKCA Mark, MHRA registration, Great Britain medical device compliance, CE mark UKCA transition, UK Responsible Person"
        canonical="/services/ukca-mark-certification"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="UKCA Mark Certification | RAC Forge" title="UKCA Mark Certification"
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
              UKCA Mark Certification & MHRA Compliance
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Navigating the post-Brexit Great Britain requirements, MHRA registrations, and the transition from EU MDR CE.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">UKCA Mark Requirements Overview</h2>
                <p className="text-lg">
                  Following the UK's departure from the European Union, the Medicines and Healthcare products Regulatory Agency (MHRA) established the UKCA (UK Conformity Assessed) mark as the mandatory product marking for medical devices placed on the market in Great Britain (England, Wales, and Scotland). Foreign manufacturers must carefully coordinate this separate pathway.
                </p>

                <div className="my-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-8 rounded-3xl border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-blue-100 shadow-sm text-blue-600">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">MHRA Compliance Hub</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We act as your regulatory liaison, ensuring all technical files comply with the UK Medical Devices Regulations 2002 and overseeing flawless MHRA submission.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "UK Responsible Person (UKRP)", desc: "Providing authorized local physical legal representation to register products and act as your MHRA anchor." },
                    { title: "Technical File Alignment (UK MDR 2002)", desc: "Adapting existing CE mark technical dossiers and GSPR documentation to UK national statutory regulatory requirements." },
                    { title: "MHRA SUGAM-Equiv Database Submissions", desc: "Coordinating complete device uploads with MHRA portal, paying fees, and securing registration letters." },
                    { title: "UK Conformity Assessment Coordination", desc: "Partnering with UK Approved Bodies to execute conformity checks, QMS inspections, and audits." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-indigo-600 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Transitioning from EU CE Marking</h3>
                <p>
                  While Great Britain temporarily recognizes valid EU CE marks under the current transitional arrangements, manufacturers must establish a secure UKRP and prepare their native UKCA submission to avoid trade stoppages as deadlines approach. Our specialists handle this process seamlessly.
                </p>

                {/* Forms & Concept Details Hub */}
                <FormsHub keys={['eu-mdr', 'udi', 'prrc', 'poa', 'qms']} title="UK & European Compliance Codex" />
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
                      { name: 'EU MDR & CE Marking', path: '/services/eu-mdr-ce-marking' },
                      { name: 'EU Authorized Representative', path: '/services/eu-authorized-representative' },
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
