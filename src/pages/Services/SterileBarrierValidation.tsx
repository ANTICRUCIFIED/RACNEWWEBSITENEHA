import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function SterileBarrierValidation() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Sterile Barrier Validation & Cleanrooms | RAC Forge" 
        description="Comprehensive sterile barrier packaging validation (ISO 11607) and cleanroom design audits. Complete sterilization safety validation and compliance."
        keywords="sterile barrier validation, ISO 11607 medical device, cleanroom design auditing, packaging sterilization validation"
        canonical="/services/sterile-barrier-validation"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Sterile Barrier Validation | RAC Forge" title="Sterile Barrier Validation"
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
              Sterile Barrier Validation & Cleanrooms
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Aligning critical packaging elements with ISO 11607, verifying cleanroom classifications, and auditing terminal sterilization procedures.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-[#7C3AED] mb-6">Packaging and Sterilization under ISO 11607</h2>
                <p className="text-lg">
                  Single-use and sterile-implanted medical systems must preserve their sterile barrier throughout shipping, distribution, and storage. ISO 11607 mandates extensive package sealing, drop-testing, and biological challenge validations to prove barrier persistence.
                </p>

                <div className="my-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-8 rounded-3xl border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-blue-105 shadow-sm text-blue-600">
                      <Thermometer size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">ISO ISO 11607 & HVAC Design</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We configure cleanroom routing structures, select barrier films, and establish validation protocols that satisfy national CDSCO and Notified Body reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Sterilization Support Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "ISO 11607 Packaging Protocols", desc: "Setting up package seal strength validations, visual dye-penetration checks, and accelerated aging studies." },
                    { title: "Cleanroom Classification (ISO 14644)", desc: "Auditing HVAC particle counts, microbial bioburden rates, pressure differentials, and sanitation schedules." },
                    { title: "Sterilization Validation Support (EtO / Gamma)", desc: "Determining biological indicators (Bacillus atrophaeus / pumilus), bioburden baselines, and dosing rates." },
                    { title: "HVAC & Cleanroom floor Layouts", desc: "Designing material locks, personnel locks, and pressure gradients to eliminate airborne cross-contamination." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Guarding Against Contamination Risks</h3>
                <p>
                  Sterility failure represents one of the most critical triggers for medical safety recalls. Our cleanroom audits verify environmental and structural integrity, ensuring that terminal sterilization procedures remain fully compliant over the long term.
                </p>

                <FormsHub keys={['smf', 'pmf', 'iso-13485', 'qms']} title="Sterile and Facility Standards" />
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
