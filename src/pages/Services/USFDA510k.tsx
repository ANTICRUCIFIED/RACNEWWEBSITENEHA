import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function USFDA510k() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="USFDA 510(k) Submission & De Novo Classification | RAC Forge" 
        description="Navigate U.S. medical market pathways with confidence. Expert support for FDA 510(k) premarket notifications and De Novo classifications."
        keywords="USFDA 510k, De Novo classification, premarket notification fda, predicate medical device, Q-Sub pre-submission, RTA fda audit, medical QMS"
        canonical="/services/usfda-510k-de-novo"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="USFDA 510(k) & De Novo | RAC Forge" title="USFDA 510(k) & De Novo"
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
              USFDA 510(k) Submissions & De Novo Pathways
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Premarket Notifications (510k) and De Novo classifications managed with absolute technical accuracy.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Excel in USFDA 510(k) Submissions & De Novo Classification</h2>
                <p className="text-lg">
                  Entering the regulatory jurisdiction of the United States requires substantial evidence of safety and efficacy. RAC Forge structures complete Premarket Notifications (510k) to demonstrate substantial equivalence to a legally marketed predicate device, as well as De Novo classifications for novel devices without predicate models.
                </p>

                <div className="my-10 bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-8 rounded-3xl border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-blue-100 shadow-sm text-blue-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Comprehensive FDA Verification</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We streamline the tedious eSTAR submission templates and predicate device comparisons, protecting you from instant "Refuse to Accept" (RTA) results.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Predicate Device Identification & Analysis", desc: "Sourcing and evaluating existing FDA databases to define clear, legally-unassailable substantial equivalence parameters." },
                    { title: "GAP Analysis of Biological & Testing Logs", desc: "Reviewing physical, performance, electrical safety, and biocompatibility records against strict FDA guidance documents." },
                    { title: "Assembling FDA eSTAR & Traditional 510(k) Dossiers", desc: "Compiling advanced interactive technical files covering labeling, indications for use, validation tests, and structural criteria." },
                    { title: "Dynamic Q-Sub Meeting Coordination", desc: "Representing and managing pre-submission feedback sessions directly with FDA expert panels to lock in clinical parameters." },
                    { title: "Review Response & Audit Query Cleanups", desc: "Strategizing and answering additional information (AI) requests or major deficiencies with technical evidence." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#2563EB]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">The De Novo Classification Pathway</h3>
                <p>
                  If a medical system contains modern technological features that have no clear equivalent predicate in the US market, yet represent a low-to-moderate risk profile, we guide you through the De Novo pathway. This creates a brand-new classification regulation, unlocking rapid market access.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Global Market Access</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'EU MDR & CE Marking', path: '/services/eu-mdr-ce-marking' },
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
