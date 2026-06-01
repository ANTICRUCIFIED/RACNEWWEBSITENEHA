import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Activity, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function HardwareVVProtocols() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Hardware Verification & Validation (V&V) | RAC Forge" 
        description="Comprehensive testing protocols and hardware verification (IQ/OQ/PQ) for active medical devices. Complete reliability and performance validation."
        keywords="medical hardware verification, V&V testing protocols, active device validation, IQ OQ PQ electrical compliance"
        canonical="/services/hardware-vv-protocols"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Hardware V&V Protocols | RAC Forge" title="Hardware V&V Protocols"
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
              Hardware Verification & Validation (V&V)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Formulating physical reliability metrics, environmental testing parameters, fatigue studies, and complete IQ/OQ/PQ installation setups.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Physical Testing and Verification Protocols</h2>
                <p className="text-lg">
                  Before any active diagnostic system enters clinical usage, its mechanical, structural, and electrical limits must be thoroughly compiled under rigid environmental stress loops. We compose high-fidelity Hardware Verification and Validation (V&V) files that substantiate complete structural integrity.
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Rigorous Traceability Loops</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We link physical device requirements specifications directly to test cases and resulting technical logs to guarantee structural audit passing.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Hardware V&V Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Test Plan Formulation", desc: "Setting up test schedules, defining critical safety requirements, and outlining stress validation margins." },
                    { title: "IQ/OQ/PQ Machinery Layouts", desc: "Verifying that hardware behaves robustly during installation, normal operation, and extreme power loads." },
                    { title: "Environmental & Burn-In Checks", desc: "Coordinating thermal cycle tests, package drop-tests, humidity runs, and system lifetime stress profiles." },
                    { title: "Traceability Matrix (RTM) Generation", desc: "Securing full structural traceability between input system parameters and final laboratory verification outputs." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">ISO Compliance Integration</h3>
                <p>
                  Our testing methodologies align strictly with ISO 13485 QMS expectations, ensuring that any external lab measurements are fully documented and integrated with your technical master file.
                </p>

                <FormsHub keys={['iso-13485', 'qms', 'dmf', 'pmf']} title="System Validation Standards" />
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
