import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function PreclinicalSafety() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Preclinical Safety & Biocompatibility Evaluation | RAC Forge" 
        description="Comprehensive preclinical safety profiling and biological risk evaluations conforming to ISO 10993 standards. End-to-end device trials data."
        keywords="preclinical safety, medical device biological evaluation, ISO 10993 toxicology validation, animal studies protocols"
        canonical="/services/preclinical-safety-evaluation"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Preclinical Safety Evaluation | RAC Forge" title="Preclinical Safety Evaluation"
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
              Preclinical Safety Evaluation
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Systematic physical and biological hazard assessment, in-vivo/in-vitro performance trials, and ISO 10993 regulatory file prep.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Rigorous Preclinical Biological Assessments</h2>
                <p className="text-lg">
                  Demonstrating that material contact is physiologically safe represents a foundational pillar of modern medical device filings. In partnership with ISO/GLP-aligned laboratories, we plan, draft, and validate full pre-clinical evaluation profiles that withstand demanding regulatory audits.
                </p>

                <div className="my-10 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-8 rounded-3xl border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-indigo-150 shadow-sm text-indigo-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">GLP Laboratory Alignment</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We coordinate with international laboratory nodes to execute animal modeling and validation runs, adhering strictly to GLP guidelines.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Preclinical Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Biological Evaluation Plans (BEP)", desc: "Mapping device body contact paths, establishing risk categorizations, and defining physical test metrics." },
                    { title: "GLP Study Staging & Protocol Audits", desc: "Formulating strict protocols for systemic toxicity, implantation, and genotoxicity evaluations." },
                    { title: "Preclinical Data Verification", desc: "Analyzing laboratory test reports and compiling definitive biological evaluation summaries." },
                    { title: "Biological Evaluation Reports (BER)", desc: "Synthesizing test outputs and expert opinions to construct audit-ready, definitive risk sign-offs." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Navigating Material Safety Queries</h3>
                <p>
                  Reviewers intensely examine biocompatibility profiles for complex implants, vascular grids, and multi-lumen lines. Upfront testing alignment based on the latest FDA and European checklists reduces the odds of expensive review stops or request holds.
                </p>

                <FormsHub keys={['gcp', 'cip', 'ib', 'crf']} title="Preclinical & Trial Guidelines" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Preclinical & Trials</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'Biocompatibility Testing (ISO 10993)', path: '/services/biocompatibility-testing-iso-10993' },
                      { name: 'Clinical Trials & SEC Presentation', path: '/services/cdsco-clinical-investigation' }
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
