import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Microscope, Shield, Layers, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function BiocompatibilityTesting() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="Preclinical ISO 10993 Biocompatibility Testing & Clinical Trials | RAC Forge" 
        description="Complete preclinical safety validation, GLP-compliant ISO 10993 biocompatibility testing, material characterization, and GCP-compliant clinical trials coordination in India."
        keywords="ISO 10993 biocompatibility testing, biological evaluation report, clinical trials medical devices India, toxicological risk assessment, clinical investigation plan, GCP compliance audits, cytotoxicity testing, extractables and leachables analysis, medical device safety validation"
        canonical="/services/biocompatibility-testing-iso-10993"
      />

      {/* Hero */}
      <section className="relative h-[440px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="ISO 10993 Biocompatibility Testing, Biological Safety, and Clinical Investigations" 
            title="ISO 10993 Biocompatibility Testing & Clinical Trials Validation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-transparent z-1" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Microscope size={12} />
              <span>Preclinical & Clinical Trials</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Preclinical Safety & Clinical Trials Validation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/85 leading-relaxed font-semibold max-w-2xl"
            >
              End-to-end biological safety evaluations, ISO 10993 testing, material characterization, and professional Good Clinical Practices (GCP) trial monitoring and execution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-black text-brand-deep tracking-tight">
              Rigorous Biological Evaluation for Medical Devices & Implants
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Before any medical device can be commercialized or cleared for patient clinical trials under the <InfoLink text="CDSCO" /> in India, the <InfoLink text="USFDA" /> in the United States, or through an <InfoLink text="EU MDR" /> Notified Body, demonstrating biological safety is non-negotiable. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our comprehensive preclinical suite coordinates the entire spectrum of <InfoLink text="ISO 10993" /> requirements. We leverage state-of-the-art analytical chemistry and biological models to deliver raw, robust, trace-verified validation data. By evaluating potential risks proactively, we eliminate administrative bottlenecks and audit queries before they occur.
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
                  Our Comprehensive Biological Safety & Testing Suite
                </h3>
                <p className="text-slate-650 leading-relaxed mb-10 text-lg">
                  We don't just act as custom coordinators—we oversee and execute the technical development of your biological safety portfolio from initial Material Risk Assessment to final Biological Evaluation Report validation. Below is our direct list of specialized medical device testing and assessment services:
                </p>

                <div className="space-y-8">
                  
                  {/* Category 1 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Layers size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">1. Pre-Study Risk Mapping & Planning</h4>
                    </div>
                    <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                      <li>
                        <strong>Biological Evaluation Plan (BEP):</strong> Structural evaluation of material formulations and continuous patient contact duration (e.g., transient, prolonged, permanent) to select only scientifically defensible testing endpoints, avoiding redundant trials and cutting lead times by up to 40%.
                      </li>
                      <li>
                        <strong>Material Sourcing Risk Profiling:</strong> In-depth historical data auditing of raw resins, metals, colorants, and medical polymers to screen for potential extractable impurities early in prototyping.
                      </li>
                    </ul>
                  </div>

                  {/* Category 2 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Microscope size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">2. In Vitro Biological Testing (ISO 10993)</h4>
                    </div>
                    <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                      <li>
                        <strong>Cytotoxicity Testing (ISO 10993-5):</strong> Quantitative and qualitative evaluations using mammalian cell lines (typically L929 fibroblasts) to screen device extractables for toxicity or cell viability impacts.
                      </li>
                      <li>
                        <strong>Genotoxicity Assays (ISO 10993-3):</strong> Investigating cell mutagens via bacterial reverse mutation assays (Ames), chromosomal aberration, and eukaryotic cell tests.
                      </li>
                      <li>
                        <strong>Hemocompatibility Profiling (ISO 10993-4):</strong> Crucial for blood-contacting hardware. Includes hemolytic rate assays, coagulation cascade checks, human complement activation, and platelet activation studies.
                      </li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Shield size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">3. In Vivo Compatibility & Systemic Studies</h4>
                    </div>
                    <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                      <li>
                        <strong>Sensitization & Irritation Tests (ISO 10993-10 / 10993-23):</strong> Local skin responses and intracutaneous reactivity evaluations to verify that device extracts do not provoke allergic reactions or localized inflammation.
                      </li>
                      <li>
                        <strong>Systemic Toxicity Assessments (ISO 10993-11):</strong> Sub-acute, sub-chronic, and chronic animal safety studies observing neurological, physiological, and hematological health over extended intervals.
                      </li>
                      <li>
                        <strong>Local Implantation Studies (ISO 10993-6):</strong> Suture, implant, and bone-screw evaluations analyzing surgical site response, muscular containment, tissue integration, and local degradation kinetics.
                      </li>
                      <li>
                        <strong>Material-Mediated Pyrogenicity (USP &lt;151&gt;):</strong> Rabbit pyrogen and bacterial endotoxins (LAL) testing to confirm the device does not trigger systemic febrile reactions.
                      </li>
                    </ul>
                  </div>

                  {/* Category 4 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Layers size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">4. Chemical Characterization & Extractables (E&L)</h4>
                    </div>
                    <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                      <li>
                        <strong>ISO 10993-18 Chemical Profiling:</strong> Advanced separation and mass spectrometry scanning (Gas Chromatography-MS, Liquid Chromatography-MS, ICP-OES/MS for heavy metals) to pinpoint and quantify chemical elements leaching from device surfaces.
                      </li>
                      <li>
                        <strong>Toxicological Risk Assessment (ISO 10993-17):</strong> Full toxicological reviews identifying specific extractable residues, deriving formal Tolerable Intake (TI) limits, and validating system margin of safety models.
                      </li>
                    </ul>
                  </div>

                  {/* Category 5 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <CheckCircle2 size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">5. Clinical Investigation Plan (CIP) & Protocol Engineering</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      For high-risk Class C & D medical devices or structural implants, we draft fully integrated, scientifically sound clinical investigation frameworks ready for central committee audits:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm leading-relaxed">
                      <li><strong>Clinical Protocol Drafting:</strong> Engineering statistical schemas, blind trial criteria, eligibility profiles, primary/secondary endpoints, and data security algorithms in complete compliance with ISO 14155.</li>
                      <li><strong>Investigator’s Brochure (IB) Synthesis:</strong> Gathering structural laboratory data, material parameters, mechanical endurance metrics, and toxicology reports into cohesive dossiers for clinical study sites.</li>
                      <li><strong>Informed Consent Document (ICD) Building:</strong> Authoring user-friendly, legally compliant informed consent logs in multiple regional Indian languages to pass ethical audits easily.</li>
                    </ul>
                  </div>

                  {/* Category 6 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Microscope size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">6. Clinical Trial Operations, Monitoring & Site Audits</h4>
                    </div>
                    <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                      <li>
                        <strong>Site Feasibility & Investigator Selection:</strong> Screening and qualifying premium hospital systems and specialty research facilities equipped with accredited ethical committees (SEC/IRB).
                      </li>
                      <li>
                        <strong>GCP-Compliant Trial Monitoring:</strong> Conducting rigorous, on-site clinical trial audits, verify electronic case report forms (eCRF), monitor source data accuracy (SDV), and maintain strict compliance with global Good Clinical Practices (GCP).
                      </li>
                      <li>
                        <strong>Pharmacovigilance & Adverse Event Management:</strong> Developing real-time safety tracking plans, investigating Serious Adverse Events (SAE), and coordinating swift, compliant reports to CDSCO within regulatory timelines.
                      </li>
                    </ul>
                  </div>

                  {/* Category 7 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Layers size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">7. Dossier Synthesis & Biological Evaluation Report (BER)</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Compilation of the official, multidisciplinary <strong>Biological Evaluation Report (BER)</strong> conforming to 10993-1. Drafted by credentialed toxicologists and regulatory physicians, our BER summarizes raw testing results, justifies the omission of unnecessary animal trials, and provides the ultimate compliance sign-off needed for successful domestic CDSCO SUGAM submissions or international CE/USFDA files.
                    </p>
                  </div>

                </div>
              </div>

              {/* Step-by-Step Strategic Validation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-brand-deep tracking-tight">
                  Pro-Active Compliance Architecture
                </h3>
                <p className="text-slate-650 leading-relaxed">
                  Under strict Google and regulatory advisory policies, we prevent thin content errors by offering bespoke biological safety pathways. We build fully documented, verifiable raw testing datasets and analytical characterization sheets that align with global expectations. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-extrabold text-brand-deep mb-2">Zero Redundant Animal Testing</h5>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      We prioritize advanced chemical characterization and in-vitro analytical alternatives to satisfy regulatory mandates, adhering to ethical parameters while minimizing validation expenses.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-extrabold text-brand-deep mb-2">Regulatory Audit Liaison</h5>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      When auditing bodies or technical reviewers issue additional information (AI) requests during application cycles, our toxicologists defend files directly to ensure safe clearance.
                    </p>
                  </div>
                </div>

                {/* Direct Inline Forms Codex */}
                <FormsHub 
                  keys={['iso-13485', 'dmf', 'pmf', 'smf', 'qms']} 
                  title="Biocompatibility & Master File Standards" 
                />
              </div>

            </div>

            {/* Sidebar with Navigation / Action Triggers */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                {/* Internal Section links */}
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm animate-fade-in">
                  <h4 className="text-lg font-black text-brand-deep mb-4">Quality & Certification</h4>
                  <ul className="space-y-3.5">
                    {[
                      { name: 'ISO 13485 QMS Design', path: '/services/iso-13485-certification-audit' },
                      { name: 'Audit & Joint Inspection', path: '/services/regulatory-audit-readiness' },
                      { name: 'Facility & Cleanroom Layout', path: '/services/facility-cleanroom-design' },
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

                {/* Direct Help Card */}
                <div className="bg-brand-deep p-10 rounded-[2.5rem] text-white relative overflow-hidden border border-brand-deep shadow-xl">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 skew-x-12 translate-x-1/4" />
                  <div className="relative z-10 space-y-6">
                    <h4 className="text-2xl font-black font-sans tracking-tight">Validate Your Device Safely</h4>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                      Our skilled validation engineers and analytical toxicologists will verify your device formulation, optimize testing costs, and author clean, robust biological dossiers.
                    </p>
                    <Link 
                      to="/contact" 
                      className="block text-center bg-brand-teal text-white py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/15"
                    >
                      Speak with an Expert
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
