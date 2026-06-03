import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function CDSCOLoan() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Loan License (MD-6/10) Applications | RAC Forge" 
        description="Optimize your Indian distribution strategy by leveraging certified manufacturers. Expert assistance securing Form MD-6 & MD-10 loan licenses."
        keywords="CDSCO Loan License, Form MD-6, Form MD-10, Medical Device Loan License India, third-party manufacturing contract, SUGAM login"
        canonical="/services/cdsco-loan-license-md6-md10"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="CDSCO Loan License | RAC Forge" title="CDSCO Loan License"
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
              Acquire Your CDSCO Loan License (Form MD-6 & MD-10)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Form MD-6 (Class A & B) and Form MD-10 (Class C & D) licenses for strategic manufacturing alliances in India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Understanding CDSCO Loan Licenses (MD-6/10)</h2>
                <p className="text-lg">
                  For businesses looking to manufacture medical devices without setting up their own physical infrastructure, a loan license is the ideal route. RAC Forge guides you through obtaining Form MD-6 (Class A & B) and Form MD-10 (Class C & D) loan licenses, letting you leverage pre-existing, licensed facilities seamlessly.
                </p>

                <div className="my-10 bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-8 rounded-3xl border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-blue-100 shadow-sm text-blue-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Cost-Efficient Production</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Avoid capital-heavy cleanroom builds. Lean on partner facilities having active MD-5 or MD-9 registrations to accelerate your product entry.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Licensed Facility Feasibility & Audit", desc: "Assessing potential host manufacturing units to ensure they meet CDSCO cleanroom parameters." },
                    { title: "Contract Design & Legal Agreement Assembly", desc: "Setting up solid tripartite or contract manufacturing frameworks outlining ownership and quality guidelines." },
                    { title: "Technical Loan Dossier Compilation", desc: "Collating material safety files, specification checklists, and manufacturing SOP alterations." },
                    { title: "SUGAM Online Application Submissions", desc: "Comprehensive management of Form MD-6 and MD-10 templates on government web nodes." },
                    { title: "State and Central Level Regulatory Liaison", desc: "Tracking application pathways, resolving administrative queries, and representing interests consistently." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Strategic Licensing Advantages</h3>
                <p>
                  Loan licensing provides startups and foreign organizations a highly safe, rapid, and budget-friendly distribution launch in India. Since host plants are pre-audited, the timeline to secure a final grant certificate is often cut by 50% compared to custom plant installations.
                </p>

                {/* Direct Inline Forms Codex */}
                <FormsHub 
                  keys={['md-4', 'md-6', 'md-8', 'md-10', 'sugam', 'qms']} 
                  title="Loan License Forms & Specifications" 
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
