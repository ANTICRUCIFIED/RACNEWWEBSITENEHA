import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldAlert, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function GCPAudit() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Good Clinical Practices (GCP) Auditing | RAC Forge" 
        description="Comprehensive Good Clinical Practices (GCP) auditing and clinical trials monitoring. Full clinical site auditing and safety assurance."
        keywords="GCP audit medical device, clinical trial monitoring GCP, CDSCO clinical audit, clinical investigator site verification"
        canonical="/services/gcp-audit"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="GCP Audits | RAC Forge" title="GCP Audits"
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
              Good Clinical Practices (GCP) Audit
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Verifying clinical trial compliance under ISO 14155, auditing investigative sites, reviewing case report files, and qualifying clinical data.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Clinical Trial Integrity Auditing</h2>
                <p className="text-lg">
                  Demonstrating compliance with Good Clinical Practices (GCP) and ISO 14155 is essential to support global submissions (CDSCO SEC, USFDA PMA, or European CERs). We systematically audit clinical trial centers, coordinate review processes, and analyze investigator log folders.
                </p>

                <div className="my-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-8 rounded-3xl border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-blue-105 shadow-sm text-blue-600">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">ISO 14155 Clinical Alignment</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We confirm that patient registries, consent trackers, and investigator logs match ISO 14155 guidelines exactly to secure unquestionable data packages.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our GCP Auditing Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Clinical Site Qualification Audits", desc: "Inspecting testing sites, verifying investigator qualifications, and reviewing diagnostic calibration logs." },
                    { title: "Trial Design & Dossier Checks", desc: "Auditing Clinical Investigation Plans (CIP), Investigator's Brochures (IB), and Informed Consent Documents (ICD)." },
                    { title: "Case Report Form (CRF) Reviews", desc: "Cross-analyzing source patient medical logs against digital CRF files to trace data discrepancies." },
                    { title: "Clinical Trial Master File (TMF) Audits", desc: "Evaluating TMF folder organization, protocol amendments, safety reports, and regulatory approvals." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Ensuring Regulatory Approvals</h3>
                <p>
                  Any discrepancy in clinical research files can lead to CDSCO, SEC or FDA committees rejecting entire diagnostic data columns. Our specialized audit checks provide a robust safety buffer, maintaining clinical data validity throughout the review cycle.
                </p>

                <FormsHub keys={['cip', 'ib', 'crf', 'icd', 'gcp']} title="GCP and Clinical Compliance Hub" />
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
