import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldAlert, ShieldCheck, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function EUAuthorizedRepresentative() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="European Authorized Representative (EAR) Services | RAC Forge" 
        description="Official European Authorized Representative (EAR) legal proxy representation services for non-EU medical manufacturers to achieve compliance under EU MDR 2017/745. EUDAMED registration and Notified Body liaison."
        keywords="EU Authorized Representative, EAR legal representative, EU MDR 2017/745 compliance, European representative medical devices, CE marking representative, EUDAMED registration, Notified Body contact proxy, technical documentation hosting"
        canonical="/services/eu-authorized-representative"
      />

      {/* Hero */}
      <section className="relative h-[440px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="European Authorized Representative Services Legal Gateway" 
            title="European Authorized Representative Services legal gateway"
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
              <Globe size={12} />
              <span>European Market Entry</span>
            </motion.div>
            <h1 className="text-1xl text-xl md:text-2xl lg:text-3xl font-black text-white mb-6 leading-tight tracking-tight">
              European Authorized Representative (EAR) Proxy Representation
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed font-semibold max-w-2xl">
              Official physical representation and certified legal proxy hosting inside the European Union under EU MDR 2017/745.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-black text-brand-deep tracking-tight">
              Legal EU Representative Proxy for Global Manufacturers
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              If your medical manufacturing operations are located outside the European Economic Area (EEA), appointing an official <strong>European Authorized Representative (EAR)</strong> is a strict legal requirement under Article 11 of the <strong>European Union Medical Device Regulation (EU MDR 2017/745)</strong> before you can market or apply a CE mark to your products.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our comprehensive physical and legal proxy services provide your firm with a qualified EU address, act as the primary liaison with Competent Authorities and Notified Bodies, register your device parameters inside the unified <InfoLink text="EUDAMED" /> database, and host your mandatory Technical Files securely to fulfill and maintain long-term compliance.
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
              
              {/* Comprehensive List of Representation Services */}
              <div>
                <h3 className="text-3xl font-black text-brand-deep tracking-tight mb-8">
                  Our Official European Representative Functionalities
                </h3>
                <p className="text-slate-650 leading-relaxed mb-10 text-lg">
                  We don't just act as a mail-drop address. We assume the mandatory joint legal liabilities mandated under EU MDR systems, ensuring that your European technical files, declarations of conformity, and post-market safety records are completely flawless:
                </p>

                <div className="space-y-8">
                  
                  {/* Category 1 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <ShieldCheck size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">1. Designated Physical & Legal Representative Address</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We provide non-EU manufacturers with an official physical corporate address within the European Economic Area to be printed directly on your device labeling, user manuals, custom packaging, and trade boxes in absolute compliance with EU labeling requirements.
                    </p>
                  </div>

                  {/* Category 2 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Layers size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">2. Secure Technical Documentation Hosting</h4>
                    </div>
                    <p className="text-slate-605 text-sm leading-relaxed mb-4">
                      As your representative, we host and maintain absolute copies of your comprehensive CE technical file:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm leading-relaxed">
                      <li><strong>Technical File Auditing:</strong> Keeping complete, up-to-date documentation (Clinical Evaluation Reports, Risk Plans, Validation records) immediately available for inspection by any EU member state Competent Authority.</li>
                      <li><strong>Declaration of Conformity Maintenance:</strong> Verification and co-signature of official compliance declarations legally confirming adherence to EU MDR guidelines.</li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <Globe size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">3. EUDAMED Database Registration Support</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We manage the submission of your Single Registration Number (SRN) requests, register your physical legal entity, and key in all mandatory Basic UDI-DI parameters and device specifications inside the unified EUDAMED European database to ensure flawless custom clearance across all EU member states.
                    </p>
                  </div>

                  {/* Category 4 */}
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 bg-brand-deep text-white rounded-xl">
                        <ShieldAlert size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-brand-deep">4. Incidents & Vigilance Reporting Proxy</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      If safety incidents, user complaints, or adverse events occur within the European market, we handle the official representation and coordination. We verify files, map out Field Safety Corrective Actions (FSCA), report directly to Competent Authorities, and ensure that your system stays pristine and legally protected.
                    </p>
                  </div>

                </div>
              </div>

              {/* Legal Joint Liability Under MDR */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-brand-deep tracking-tight">
                  High-Trust Representation and Compliance Verification
                </h3>
                <p className="text-slate-650 leading-relaxed">
                  Under strict EU MDR parameters, the European Rep shares co-liability if a distributed device exhibits performance or safety failures. Because of this high-risk mandate, you need an expert, technically sound entity that audits your documentation carefully before submitting filings. Our regulatory representatives maintain clinical and engineering backgrounds to protect your brand thoroughly.
                </p>
              </div>

              {/* Direct Inline Forms Codex */}
              <FormsHub 
                keys={['eu-mdr', 'prrc', 'poa', 'udi', 'eudamed']} 
                title="European Representative Compliance Codex" 
              />

            </div>

            {/* Sidebar with Navigation / Action Triggers */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                {/* Related Global Access Links */}
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm animate-fade-in">
                  <h4 className="text-lg font-black text-brand-deep mb-4">Global Market Access</h4>
                  <ul className="space-y-3.5">
                    {[
                      { name: 'USFDA 510(k) Clearance', path: '/services/usfda-510k-de-novo' },
                      { name: 'EU MDR & CE Marking Support', path: '/services/eu-mdr-ce-marking' },
                      { name: 'Anvisa Brazil Registration', path: '/services/anvisa-brazil-registration' },
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
                    <h4 className="text-2xl font-black font-sans tracking-tight">Secure EU Market Access</h4>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                      Establish an official high-trust European Authorized Representative. Host technical files and register devices seamlessly.
                    </p>
                    <Link 
                      to="/contact" 
                      className="block text-center bg-brand-teal text-white py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/15"
                    >
                      Connect with EAR Experts
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
