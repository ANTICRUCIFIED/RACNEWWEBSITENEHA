import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function CDSCOManufacturing() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Manufacturing License (MD-5/9) Support | RAC Forge" 
        description="Navigate CDSCO's approval process for Class A, B, C, & D medical devices. Complete support for obtaining Form MD-5 & MD-9 licenses on the SUGAM portal."
        keywords="CDSCO Manufacturing License, Form MD-5, Form MD-9, SUGAM portal medical devices, State Licensing Authority SLA, Central Licensing Authority CLA"
        canonical="/services/cdsco-manufacturing-license-md5-md9"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="CDSCO Manufacturing License | RAC Forge" title="CDSCO Manufacturing License"
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
              Secure Your CDSCO Manufacturing License (Form MD-5 & MD-9)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Form MD-5 (Class A & B) and Form MD-9 (Class C & D) licensing walkthroughs, auditing guidelines, and digital filings.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">CDSCO Manufacturing Approvals under Medical Device Rules 2017</h2>
                <p className="text-lg">
                  Navigate the CDSCO's rigorous approval process for medical device manufacturing with confidence. RAC Forge provides end-to-end support for obtaining Form MD-5 (Class A & B) and MD-9 (Class C & D) licenses. We manage everything from initial application on the SUGAM portal to final inspection readiness, ensuring a smooth and efficient approval.
                </p>

                <div className="my-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-8 rounded-3xl border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-orange-100 shadow-sm text-orange-600">
                      <Flag size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Centralized Digital Filings</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We configure and audit all files submitted via SUGAM, reducing the risk of procedural queries and technical objections that block project timelines.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Form MD-3 and Form MD-7 Application", desc: "Interactive mapping of application pathways for regional SLAs (Class A & B) or national CLA inspectors (Class C & D)." },
                    { title: "Drafting Site Master File (SMF) & Plant Master File (PMF)", desc: "Rigorous description vectors detail facility floor schematics, cleanrooms, and sanitation rules." },
                    { title: "Device Description & Technical Dossier", desc: "Compiling testing logs, biocompatibility assays, safety standards, and performance specifications." },
                    { title: "Performance Evaluation Reports (PER)", desc: "Validating clinical evaluations and medical trace files for robust compliance verification." },
                    { title: "Inspection Mapping & Mock Audits", desc: "Support, documentation staging, and responder training to confidently navigate onsite regulatory assessments." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#EA580C]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Navigating Audits (SLA & CLA)</h3>
                <p>
                  Obtaining a manufacturing license requires structural audits. Class A and B devices require Notified Body inspections overseen by the State Licensing Authority (SLA), while Class C and D devices require federal audits by the Central Licensing Authority (CLA). We sit down with your manufacturing team to align all workflows beforehand.
                </p>

                {/* Direct Inline Forms Codex */}
                <FormsHub 
                  keys={['md-3', 'md-5', 'md-7', 'md-9', 'pmf', 'smf', 'class-a', 'class-b', 'class-c', 'class-d', 'sugam']} 
                  title="Manufacturing License Forms & Specifications" 
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
                      { name: 'Import License (MD-14)', path: '/services/cdsco-import-license-md14' },
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
