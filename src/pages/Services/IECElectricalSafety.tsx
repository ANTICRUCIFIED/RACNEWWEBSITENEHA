import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Activity, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function IECElectricalSafety() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="IEC 60601-1 Medical Electrical Safety | RAC Forge" 
        description="Providing comprehensive support for IEC 60601-1 medical electrical safety compliance. Complete test protocols, hardware checks, and validation."
        keywords="IEC 60601-1, medical electrical safety testing, EMC compliance active devices, medical hardware safety standard"
        canonical="/services/iec-60601-electrical-safety"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="IEC 60601-1 Safety | RAC Forge" title="IEC 60601-1 Safety"
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
              IEC 60601-1 Medical Electrical Safety (EMC)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Aligning active devices with rigorous global electrical, mechanical, thermal, and electromagnetic compatibility thresholds.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-[#7C3AED] mb-6">Electrical Safety & EMC under IEC 60601-1 Series</h2>
                <p className="text-lg">
                  Active medical devices must satisfy rigorous safety margins to protect patients and operators from electrical shocks, thermal burns, and electromagnetic interference. We provide key engineering guidance, draft testing protocols, and oversee compliance checking against IEC 60601-1 and 60601-1-2 (EMC).
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">Active Device Validation</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We map insulation coordinates, design creepage and clearance margins, and pre-screen devices at external accredited testing labs to reduce fail risks.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Electrical Safety Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Insulation Coordination & Mapping", desc: "Setting up solid isolation paths (MOPP / MOOP) aligned with applied part configurations." },
                    { title: "EMC Mitigation support", desc: "Troubleshooting circuit layouts, shield structures, and electrical filtering to pass electromagnetic emission limits and immune ratings." },
                    { title: "Test Plan Formulation & Witnessing", desc: "Coordinating testing schedules and reviewing final analytical laboratory records step-by-step." },
                    { title: "Essential Performance Auditing", desc: "Synthesizing safe failure properties and alarm behaviors under extreme active device stresses." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Avoiding Testing Loop Failures</h3>
                <p>
                  Failing an accredited electrical safety compliance check can delay launch cycles by several months. Our pre-compliance engineering review screens and resolves critical design flaws inside device housings, power lines, and RF layers before official testing begins.
                </p>

                <FormsHub keys={['iso-13485', 'qms', 'iec-62304']} title="Electrical and Quality Standards" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Certifications & Audits</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'ISO 13485 & 9001 Certification', path: '/services/iso-13485-certification-audit' },
                      { name: 'Regulatory Audit Readiness', path: '/services/regulatory-audit-readiness' }
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
