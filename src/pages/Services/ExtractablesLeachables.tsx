import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FlaskConical, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function ExtractablesLeachables() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Extractables & Leachables (E&L) Testing Support | RAC Forge" 
        description="Comprehensive analytical testing and chemical characterization (ISO 10993-18) support. Track extractable and leachable compounds safely."
        keywords="extractables and leachables, E&L testing medical device, ISO 10993-18 compliance, GC-MS HPLC analytical testing, chemical characterisation"
        canonical="/services/extractables-leachables"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Extractables & Leachables Testing | RAC Forge" title="Extractables & Leachables Testing"
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
              Extractables & Leachables (E&L) Testing Support
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Coordinating robust chemical characterization studies under ISO 10993-18 and compiling analytical library reports for CDSCO & USFDA.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Chemical Characterization under ISO 10993-18</h2>
                <p className="text-lg">
                  Patient contact devices (such as syringes, inhalers, or vascular tubes) can release trace chemicals during normal clinical operation. ISO 10993-18 mandates structured Extractables & Leachables (E&L) analytical studies to scan for and catalog these compounds under GC-MS, LC-MS, and ICP-MS diagnostics.
                </p>

                <div className="my-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-3xl border border-emerald-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-emerald-150 shadow-sm text-emerald-600">
                      <FlaskConical size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">Analytical Chemistry Mastery</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We define test solvents, coordinate extraction rates, and audit target Analytical Evaluation Thresholds (AET) to prevent audit queries.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our E&L Support Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "E&L Protocol Formulation", desc: "Setting up custom extraction schedules and matching solvent ranges (polar, semi-polar, non-polar) based on contact metrics." },
                    { title: "HPLC/GC-MS Coordination", desc: "Coordinating with ISO 17025 chemical testing labs to execute high-resolution spectral scans." },
                    { title: "AET Calculations & Audits", desc: "Computing precise Analytical Evaluation Thresholds (AET) custom-tailored to patient exposure envelopes." },
                    { title: "Technical Dossier Curation", desc: "Incorporating analytical spectra, expert assessments, and material characterization reports into your technical files." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Securing Material Compliance</h3>
                <p>
                  Because chemical characterization can bypass animal testing loops when executed robustly under ISO 10993-18, a well-defined E&L profile represents both a cost-effective and highly professional regulatory route. We construct your dossier to reflect clean compliance.
                </p>

                <FormsHub keys={['iso-13485', 'dmf', 'pmf', 'smf']} title="Analytical & Quality Standards" />
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
