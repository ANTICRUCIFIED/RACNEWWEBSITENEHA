import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ClipboardCheck, Shield, Award, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function ISO13485Certification() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="ISO 13485 & 9001 QMS Certification Consultant India | RAC Forge" 
        description="Achieve internationally recognized ISO 13485:2016 and ISO 9001:2015 certifications for medical devices. Full QMS implementation, quality manual drafting, SOP authoring, and audit readiness consulting."
        keywords="ISO 13485:2016 certification, ISO 9001:2015 medical devices, medical QMS consultant India, Quality Management System, gap analysis, SOP auditing, CDSCO manufacturer QMS, medical design control, CAPA implementation"
        canonical="/services/iso-13485-certification-audit"
      />

      {/* Hero */}
      <section className="relative h-[440px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="ISO 13485 and ISO 9001 Quality Management System Certification" 
            title="ISO 13485 and ISO 9001 QMS Certification Services"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-transparent z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <ClipboardCheck size={12} />
              <span>Accredited QMS Systems</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-1xl text-xl md:text-2xl lg:text-3xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Accredited ISO 13485 & 9001 Certification Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/85 leading-relaxed font-semibold max-w-2xl"
            >
              Deploy a robust, audit-proof Quality Management System tailored perfectly to medical hardware, software diagnostics, or active instruments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-black text-brand-deep tracking-tight">
              Establishing Globally Compliant Quality Management Systems (QMS)
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Implementing an internationally recognized Quality Management System (QMS) such as <strong>ISO 13485:2016</strong> and <strong>ISO 9001:2015</strong> represents the operational core of any successful medical device manufacturer. Under CDSCO regulations in India, as well as European CE MDR and USFDA parameters, a certified QMS is an absolute prerequisite for manufacturing clearance.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We design and implement custom, lightweight, and fully compliant standard operating systems from the ground up, avoiding bloated processes. From full Gap Analysis to SOP formulation, supplier auditing, and certification body liaison, we guarantee a direct pathway to your QMS accreditation.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Offered */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Comprehensive List of Services */}
              <div>
                <h3 className="text-3xl font-black text-brand-deep tracking-tight mb-8">
                  Our Complete QMS & Auditing Capabilities
                </h3>
                <p className="text-slate-650 leading-relaxed mb-10 text-lg">
                  We don't just provide fill-in-the-blank documentation templates. Our internal quality auditors, certified under IRCA standards, formulate and integrate tailored operational workflows directly into your hardware, software, or laboratory system:
                </p>

                <div className="space-y-8">
                  
                  {/* Category 1 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Layers size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">1. QMS Gap Analysis</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We perform an exhausting audit of your existing operational files, engineering logs, and manufacturing facility protocols against <strong>ISO 13485:2016</strong> and <strong>ISO 9001:2015</strong>. We map out precise, actionable milestones to bridge process gaps, optimizing resources and identifying regulatory risks before external auditors set foot on-site.
                    </p>
                  </div>

                  {/* Category 2 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <ClipboardCheck size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">2. Quality Manuals & Standard Operating Procedures (SOPs)</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      We author the complete set of required tier-1, tier-2, and tier-3 quality documents tailored to your specific product class and facility size:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm leading-relaxed">
                      <li><strong>Design and Development Controls:</strong> Establishing safe, traceable prototyping phases with verified input, output, review, and verification logs.</li>
                      <li><strong>Risk Management Files:</strong> Integration of formal ISO 14971-compliant FMEA matrices identifying and mitigating potential user risks.</li>
                      <li><strong>Device Master Record (DMR):</strong> Compilation of raw technical specifications, drawings, assembly, packaging, and functional test protocols.</li>
                      <li><strong>Process Validation (IQ/OQ/PQ):</strong> Comprehensive qualification sheets for vital machinery, software systems, and cleanroom air handling nodes (HVAC).</li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Shield size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">3. Supplier Audits & Supply Chain Control</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Your QMS is only as strong as its weakest vendor link. We design and implement complete supplier selection, qualification, and monitoring procedures. Our team coordinates third-party auditing programs to inspect critical material suppliers, ensuring they meet the stringent traceability requirements defined by CDSCO and ISO parameters.
                    </p>
                  </div>

                  {/* Category 4 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Award size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">4. CAPA Systems & Mock Internal Auditing</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We execute rigorous mock or simulated internal audits prior to your formal certification audit. Our consultants oversee the setup of robust Corrective and Preventive Action (CAPA) systems, ensuring non-conformities are structurally identified, Root-Cause Analysis is performed, and corrective responses are verified.
                    </p>
                  </div>

                  {/* Category 5 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <CheckCircle2 size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">5. External Certification Liaison & Logistics</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We manage the complete interaction and coordination with accredited Notified Bodies and Registrar agencies (such as TUV, BSI, SGS, and regional registrars). We represent your interest during Stage 1 and Stage 2 certification audits, guide your team through on-site interrogations, and coordinate precise responses to any minor or major findings raised.
                    </p>
                  </div>

                </div>
              </div>

              {/* The Foundation of Global Compliance */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-brand-deep tracking-tight">
                  The Foundation of Global Market Access
                </h3>
                <p className="text-slate-650 leading-relaxed">
                  An internationally certified Quality Management System serves as the platform for all further regulatory pathways—including USFDA 510(k) clearances, MDSAP (Medical Device Single Audit Program) targets, ANVISA Brazil, and EU MDR. Under our close guidance, you will secure an elegant system that drives operational safety while fueling explosive commercial scale.
                </p>
              </div>

              {/* Direct Inline Forms Codex */}
              <FormsHub 
                keys={['iso-13485', 'qms', 'smf', 'pmf', 'iso-14971']} 
                title="QMS Implementation & Regulatory Standards" 
              />

            </div>

            {/* Sidebar with Navigation / Action Triggers */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                {/* Related links */}
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-black text-brand-deep mb-4">Audit & Safety Hub</h4>
                  <ul className="space-y-3.5">
                    {[
                      { name: 'Biocompatibility Testing', path: '/services/biocompatibility-testing-iso-10993' },
                      { name: 'On-site Joint-Audit Readiness', path: '/services/regulatory-audit-readiness' },
                      { name: 'CDSCO SUGAM Portals', path: '/services/cdsco-manufacturing-license-md5-md9' },
                    ].map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.path} 
                          className="text-slate-600 hover:text-brand-teal text-sm font-bold flex items-center group transition-colors"
                        >
                          <ArrowRight className="mr-2 w-4 h-4 text-brand-teal opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Card */}
                <div className="bg-brand-deep p-10 rounded-[2.5rem] text-white relative overflow-hidden border border-brand-deep shadow-xl">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 skew-x-12 translate-x-1/4" />
                  <div className="relative z-10 space-y-6">
                    <h4 className="text-2xl font-black font-sans tracking-tight">Deploy an Audit-Proof QMS</h4>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                      Our ISO experts are ready to audit your files, draft lightweight compliant SOPs, coordinate mock runs, and secure your registration.
                    </p>
                    <Link 
                      to="/contact" 
                      className="block text-center bg-brand-teal text-white py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/15"
                    >
                      Connect with Consultants
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
