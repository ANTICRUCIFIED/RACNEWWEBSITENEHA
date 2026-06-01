import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Microscope, Zap, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function CDSCOClinical() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Clinical Investigation Approval & Trial Management | RAC Forge" 
        description="Securing clinical trial permissions from CDSCO under Medical Devices Rules 2017. Clinical trial design, Subject Expert Committee presentation, and GCP compliance audits."
        keywords="CDSCO Clinical Investigation, clinical trials medical devices India, Subject Expert Committee SEC presentation, GCP compliance, trial protocol, Clinical Investigation Plan"
        canonical="/services/cdsco-clinical-investigation"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="CDSCO Clinical Investigation | RAC Forge" title="CDSCO Clinical Investigation"
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
              CDSCO Clinical Investigation Pathways
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Securing ethical, operational, and clinical test permissions from central authorities with flawless accuracy.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Navigate CDSCO Clinical Investigation Pathways with Expert Guidance</h2>
                <p className="text-lg">
                  Securing clinical trial permissions from CDSCO is complex and heavily audited. We manage the clinical investigation approval pipeline under the Medical Devices Rules 2017, ensuring safety protocols, ethical requirements, and experimental test structures are robust enough to earn regulatory clearance.
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <ClipboardCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Subject Expert Committee Presentations</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We don't just file papers; we prepare technical presentations defending investigational parameters and clinical benchmarks directly to CDSCO SEC panels.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Drafting of Clinical Investigation Plan (CIP)", desc: "Developing rigorous, statistical schemas matching trial cohorts, endpoints, and validation standards." },
                    { title: "Investigator's Brochure (IB) Preparation", desc: "Consolidating pre-clinical bench data, biocompatibility parameters, and animal studies into standard manuals." },
                    { title: "SUGAM Trial Application Submissions", desc: "Detailed administrative filing ensuring that all protocol templates are uploaded cleanly according to standard classifications." },
                    { title: "SEC Defense Presentation Support", desc: "Assembling medical evidence slide packs, structuring clinical defenses, and supporting teams during SEC hearings." },
                    { title: "GCP Compliance Audits for Trial Sites", desc: "Executing pre-audit reviews of trial sites, investigator logs, and informed consent (ICD) storage protocols." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">SEC Committee Alignment</h3>
                <p>
                  High-risk and innovative Class C or D medical systems usually require active human clinical performance statistics. SEC committees closely vet experimental endpoints to safeguard local users. Our specialists help bridge international research data with Indian clinical trial rules perfectly.
                </p>

                {/* Direct Inline Forms Codex */}
                <FormsHub 
                  keys={['md-22', 'md-23', 'md-24', 'md-25', 'md-26', 'md-27', 'md-28', 'md-29', 'gcp', 'sugam']} 
                  title="Clinical Trial Licensing Forms & Specifications" 
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">CDSCO India Pathways</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'Manufacturing License (MD-5/9)', path: '/services/cdsco-manufacturing-license-md5-md9' },
                      { name: 'Import License (MD-14)', path: '/services/cdsco-import-license-md14' },
                      { name: 'Loan License (MD-6/10)', path: '/services/cdsco-loan-license-md6-md10' },
                      { name: 'Test License (MD-13)', path: '/services/cdsco-test-license-md13' }
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
                      Our Indian regulatory specialists hold deep domain credentials with CDSCO processes and the SUGAM online platform.
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
