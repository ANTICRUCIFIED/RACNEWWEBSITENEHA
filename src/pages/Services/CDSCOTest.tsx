import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Microscope, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function CDSCOTest() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Test License (MD-13) Support | RAC Forge" 
        description="Obtain Form MD-13 test license for import & manufacturing of medical device testing and clinical evaluations. Expert assistance on the SUGAM portal."
        keywords="CDSCO Test License, Form MD-13, Form MD-12 application, medical device testing, R&D import India, SUGAM audit"
        canonical="/services/cdsco-test-license-md13"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="CDSCO Test License | RAC Forge" title="CDSCO Test License"
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
              Obtain a CDSCO Test License (Form MD-13) for R&D
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Form MD-13 licenses for import or local manufacturing of medical devices strictly for testing, evaluation, or demonstrations.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Securing Test Licenses (MD-13) for Laboratory Analyses</h2>
                <p className="text-lg">
                  Before launching any clinical study or official lab testing, you must secure a Test License. We provide full-lifecycle support to acquire Form MD-13, allowing the import and manufacturing of limited medical devices strictly for testing, evaluation, anatomical demonstration, or training.
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <Microscope size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Pre-Commercial Evaluation</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Form MD-13 permits developers to legally clear customs for novel medical technologies, enabling bench-testing evaluations across Indian labs safely.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Preparation of Form MD-12 Application", desc: "Setting up administrative details describing the chemical, electrical, and structural dimensions of imported models." },
                    { title: "Detailing Testing Protocols & Rationale", desc: "Crafting technical justifications specifying physical or performance evaluations scheduled for execution." },
                    { title: "SUGAM Portal Submissions & Tracking", desc: "Direct upload and management of testing configurations to ensure rapid administrative processing." },
                    { title: "Verification of Import Quantity Limits", desc: "Safely maintaining batch sizes below legal thresholds allowed by central auditors for R&D." },
                    { title: "Coordination with Accredited Labs", desc: "Facilitating device transfers and testing execution with authorized local testing systems." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Strict Custody Tracking</h3>
                <p>
                  As devices imported under Form MD-13 are not licensed for sell-through or clinical treatment, strict records of lab testing custody, waste disposal, and return-shipment schedules must be maintained to avoid heavy administrative actions during subsequent commercial license requests.
                </p>

                {/* Direct Inline Forms Codex */}
                <FormsHub 
                  keys={['md-16', 'md-17', 'sugam']} 
                  title="Test License Forms & Specifications" 
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
