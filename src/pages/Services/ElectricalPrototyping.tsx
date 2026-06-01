import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function ElectricalPrototyping() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Active Medical Device Engineering & Prototyping | RAC Forge" 
        description="Providing end-to-end prototyping, electrical design controls, verification & validation, and IEC 60601 testing coordination."
        keywords="Active medical devices, medical electronics prototyping, IEC 60601 electrical safety, design controls, ISO 14971 risk management, DHF compilation"
        canonical="/services/electrical-medical-device-prototyping"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Electrical Medical Device Prototyping | RAC Forge" title="Electrical Medical Device Prototyping"
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
              Electrical Medical Device Prototyping
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Active medical device hardware design controls, engineering, prototyping, and IEC 60601 certification.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Engineering & Prototyping for Active Electrical Medical Devices</h2>
                <p className="text-lg">
                  We bridge the critical gap between concept and commercialization for active medical devices. With deep expertise in electrical engineering, our team provides full-scale prototyping, testing, and validation services. We specialize in ensuring your hardware is robust, safe, and fully compliant with stringent standards like <strong>IEC 60601</strong>.
                </p>

                <div className="my-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-8 rounded-3xl border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-blue-100 shadow-sm text-blue-600">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Hardware Compliance Driven</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Under active device guidelines, we ensure all components, circuitry layout, insulating layers, and electrical relays conform perfectly to fundamental performance safety norms.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Hardware Design Control & Prototyping", desc: "Schematics formulation, PCB multi-layer layouts, casing iterations, and functional physical mockups." },
                    { title: "Verification & Validation (V&V) Engineering", desc: "Rigorous testing of thermal response, structural durability, and baseline energy distribution limits." },
                    { title: "Electrical Safety & Performance Testing Coordination (IEC 60601)", desc: "Navigate standard compliance verification including electromagnetic compatibility (EMC) with NABL accredited labs." },
                    { title: "Technical File & Design History File (DHF) Compilation", desc: "Detailed records tracing product specifications, revisions, sourcing credentials, and manufacturing guidelines." },
                    { title: "Risk Management as per ISO 14971", desc: "Systematic hazards assessment, hazard mitigation reports, fallback procedures, and safety verification tracking." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Rigorous Design History Compilation</h3>
                <p>
                  For any active electrical device, building the physical prototype is only half the battle. Regulatory auditors inspect the entire DHF trail to see how requirements are traced to mechanical modules, electrical protections, and safety mitigations. Our team ensures that your design process leaves a pristine, unassailable audit trail.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Engineering & R&D</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'SaMD Architecture', path: '/services/samd-architecture-development' },
                      { name: 'Cleanroom & Facility Design', path: '/services/facility-cleanroom-design' },
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
                      Our skilled technicians specialize in firmware, hardware, and deep clinical diagnostics architecture.
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
