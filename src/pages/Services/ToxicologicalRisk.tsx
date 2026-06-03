import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Skull, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function ToxicologicalRisk() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Toxicological Risk Assessment (ISO 10993-17) | RAC Forge" 
        description="Providing expert toxicological risk assessments (ISO 10993-17) and chemical characterisation. Clear safety margins (TTC / MOS) calculated."
        keywords="toxicological risk assessment, chemical characterization medical device, ISO 10993-17, extractable leachable toxicology, MOS threshold"
        canonical="/services/toxicological-risk-assessment"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Toxicological Risk Assessment | RAC Forge" title="Toxicological Risk Assessment"
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
              Toxicological Risk Assessment (ISO 10993-17)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Evaluating chemical extractables, calculating Margin of Safety profiles, and drafting expert toxicology evaluation files.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-[#7C3AED] mb-6">Scientific Chemical Hazard Profiling</h2>
                <p className="text-lg">
                  When a medical device has indirect or direct biological contact, establishing its worst-case chemical emission footprint is necessary. We evaluate complex laboratory chemical profiling datasets and calculate clear Margins of Safety (MOS) and Tolerable Intake values under ISO 10993-17 benchmarks.
                </p>

                <div className="my-10 bg-gradient-to-r from-red-500/10 to-amber-500/10 p-8 rounded-3xl border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-red-105 shadow-sm text-red-600">
                      <Skull size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">MOS Calculations & Thresholds</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We define worst-case chemical exposure profiles, set reliable Threshold of Toxicological Concern (TTC) bounds, and draft clear safety clearances.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Toxicological Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Tolerable Intake (TI) Derivation", desc: "Sourcing published toxicology databases to define peer-reviewed safety limits for custom plastic additives or metal ions." },
                    { title: "Margin of Safety (MOS) Computation", desc: "Interpreting complex analytical chemistry logs to establish mathematical safety clearances for patient contact." },
                    { title: "ISO 10993-17 Dossier Compilation", desc: "Constructing rigorous risk assessments detailing testing methods, results, database citations, and bio-expert signatures." },
                    { title: "Worst-Case Release Staging", desc: "Assessing extreme chemical degradation scenarios for long-term implants or multi-use systems." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#DC2626]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Expert Sign-Off Requirements</h3>
                <p>
                  Our toxicology files are drafted and finalized by certified, regulatory-experienced toxicologists. These files satisfy the rigorous review parameters enforced by European Notified Bodies and CDSCO technical committees.
                </p>

                <FormsHub keys={['iso-13485', 'qms', 'gcp', 'cip']} title="Toxicological Compliance Standards" />
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
