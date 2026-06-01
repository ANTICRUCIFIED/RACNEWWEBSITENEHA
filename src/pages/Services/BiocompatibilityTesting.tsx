import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Microscope, Zap, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function BiocompatibilityTesting() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="ISO 10993 Biocompatibility Testing Coordination | RAC Forge" 
        description="End-to-end biological and material evaluation of medical devices inside GLP accredited labs. Strategic partnership with Chromed Biosciences to pass regulatory criteria."
        keywords="ISO 10993 biocompatibility testing, biological evaluation report, toxicological risk assessment, Chromed Biosciences partnership, cytotoxicity genotoxicity testing, medical design"
        canonical="/services/biocompatibility-testing-iso-10993"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="ISO 10993 Biocompatibility Testing | RAC Forge" title="ISO 10993 Biocompatibility Testing"
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
              ISO 10993 Biocompatibility Testing Coordination
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            End-to-end biological validation, material characterization and toxicological evaluation in partnership with <strong>Chromed Biosciences</strong>.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Partnership with Chromed Biosciences</h2>
                <p className="text-lg animate-fade-in">
                  Ensuring your device is safe for patient use is non-negotiable. In collaboration with <strong>Chromed Biosciences</strong>, we manage the complete biological evaluation of your medical device as per ISO 10993. We coordinate a full suite of tests, including Cytotoxicity, Genotoxicity, Systemic Toxicity, and Implantation studies, delivering the robust data required for regulatory submission.
                </p>

                <div className="my-10 bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-8 rounded-3xl border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-blue-100 shadow-sm text-blue-600">
                      <Handshake size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Chromed Biosciences MOU Synergy</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        This formal collaboration enables our developers to guide material screening and biological validation directly with accredited lab technicians.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Biological Evaluation Plan (BEP)", desc: "Analyzing device materials and patient contact surfaces to optimize test selections and budget." },
                    { title: "Sourcing GLP-Compliant Labs", desc: "Overseeing test configurations inside fully certified, globally accredited laboratory networks." },
                    { title: "Material Characterization & Testing", desc: "Coordinating detailed chemical, physical, and extractable/leachable analyses of raw layers." },
                    { title: "Toxicological Risk Assessments", desc: "Comprehensive risk quantification drafting under ISO 10993-17/18 guidelines by credentialed toxicologists." },
                    { title: "Biological Evaluation Report (BER)", desc: "Structuring of critical, formal summary assessment reports confirming material safety thresholds." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">ISO 10993 Structural Requirements</h3>
                <p>
                  Because any surface contact can trigger biological safety issues, regulatory auditors expect a rigorous material tracing history. Our team manages chemical extractable tracking and animal testing coordinating efforts so that the final dossier contains no ambiguous data gaps that trigger administrative delays.
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
