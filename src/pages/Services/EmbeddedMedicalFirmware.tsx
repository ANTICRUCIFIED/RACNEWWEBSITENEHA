import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function EmbeddedMedicalFirmware() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Embedded Medical Device Firmware Engineering | RAC Forge" 
        description="Expert medical firmware development conforming to IEC 62304. Robust embedded architectures, validation, and documentation for active medical products."
        keywords="embedded medical firmware, IEC 62304 verification, medical software lifecycle, active device software, firmware V&V"
        canonical="/services/embedded-medical-firmware"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Embedded Medical Firmware Lifecycle | RAC Forge" title="Embedded Medical Firmware Lifecycle"
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
              Embedded Medical Device Firmware
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            IEC 62304 compliant software lifecycle integration, firmware architecture, cybersecurity audits, and micro-controller software verification.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Firmware Lifecycle & CDSCO Alignment</h2>
                <p className="text-lg">
                  Active medical devices require robust, low-level micro-controller systems that execute clinical features under strictly structured error-handling envelopes. We construct codebases that prevent runtime lockups, execute real-time self-tests, and strictly compile with IEC 62304 software development workflows.
                </p>

                <div className="my-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-3xl border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-purple-100 shadow-sm text-purple-600">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Class A, B & C Software Integrity</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        From simple optical sensors to complex defibrillators, we isolate safety loops in firmware and establish continuous unit testing coverage.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Engineering Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "IEC 62304 Software Architecture", desc: "Formulating software release master plans, mapping Class A/B/C elements, and compiling detailed technical dossiers." },
                    { title: "Firmware Verification & Validation (V&V)", desc: "Writing unit test harnesses, integration tests, dynamic logic audits, and hardware-in-the-loop validation." },
                    { title: "CBOM & Vulnerability Audits", desc: "Cataloging all open-source libraries, RTOS dependencies, and third-party modules to address modern cybersecurity parameters." },
                    { title: "Static Code Analysis (MISRA C/C++)", desc: "Validating your C/C++ embedded application logic to guarantee error-free, safe memory allocation and runtime properties." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#7C3AED]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#8B5CF6] shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Robust Technical Documentation</h3>
                <p>
                  A major failure mode in modern active device submissions is missing cybersecurity or software engineering master files. We translate firmware states, state machine diagrams, and software requirements specifications (SRS) into highly descriptive dossiers that pass CDSCO and USFDA reviews.
                </p>

                <FormsHub keys={['iec-62304', 'cbom', 'samd', 'ai-ml']} title="Digital Health & Embedded Codex" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Engineering Hub</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'SaMD Architecture', path: '/services/samd-architecture-development' },
                      { name: 'Electrical Device Prototyping', path: '/services/electrical-medical-device-prototyping' },
                      { name: 'Facility & Cleanroom Design', path: '/services/facility-cleanroom-design' }
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
