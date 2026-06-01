import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Flag, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOImport() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Import License (MD-14) for Foreign OEMs | RAC Forge" 
        description="Streamlined CDSCO Form MD-14 Import License acquisition. Strategic support for foreign OEMs entering the Indian healthcare market."
        keywords="CDSCO Import License, Form MD-14, Foreign OEMs India compliance, SUGAM import registration, Authorized Agent CDSCO"
        canonical="/services/cdsco-import-license-md14"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="CDSCO Import License | RAC Forge" title="CDSCO Import License"
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
              CDSCO Import License (Form MD-14)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Assisting foreign medical device manufacturers in establishing legal compliance anchors and importing successfully to India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Streamlined CDSCO Import License (Form MD-14) for Global Manufacturers</h2>
                <p className="text-lg">
                  Entering the Indian market requires a deep understanding of its import regulations. We act as your strategic partner, facilitating the acquisition of the Form MD-14 Import License. Our services are designed for foreign OEMs who need a reliable legal anchor in India to manage their regulatory submissions and compliance.
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Global Manufacturer Support</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We represent foreign OEMs, coordinating file collection in accordance with ISO 13485 standards and executing CDSCO compliance benchmarks flawlessly.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Foreign Site Documentation Review", desc: "Verifying Device History Files, design histories, standard credentials, and localized testing procedures." },
                    { title: "Preparation & Submission of Form MD-14 e-Dossier", desc: "Systematic curation and upload of critical technical portfolios via the secure SUGAM portal." },
                    { title: "Liaison with CDSCO Central Licensing Authority", desc: "Proactive tracking of application updates, prompt response to official queries, and tracking final certificates." },
                    { title: "Authorized Agent Selection Support", desc: "Helping you screen, appoint, and maintain reliable localized agents legally authorized to import your device range." },
                    { title: "Post-Market Update Tracking & Renewals", desc: "Long-term monitoring of registration updates, material modifications, and compliance renewals." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Why Form MD-14 Registration is Essential</h3>
                <p>
                  Any foreign manufacturer wanting to distribute medical range Class A, B, C, or D systems in India must secure a Form MD-14 through an Authorized Indian Agent. This registry links your production facilities globally to a local physical distribution node, ensuring that risk management, complaints handling, and post-market tracking loops remain unbroken.
                </p>
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
                      { name: 'Loan License (MD-6/10)', path: '/services/cdsco-loan-license-md6-md10' },
                      { name: 'Test License (MD-13)', path: '/services/cdsco-test-license-md13' },
                      { name: 'Clinical Investigation', path: '/services/cdsco-clinical-investigation' }
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
