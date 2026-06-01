import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Home, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function FacilityCleanroom() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Medical Device Facility & Cleanroom Design | RAC Forge" 
        description="Providing turnkey, regulatory-compliant architectural design, cleanroom validations (Class 10,000 / 100,000), HVAC engineering, and Site Master File support."
        keywords="Cleanroom design medical devices, Class 10000 cleanroom, Schedule M compliance, plant layout medical devices, CDSCO compliant facility, ISO cleanroom validation"
        canonical="/services/facility-cleanroom-design"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Facility & Cleanroom Design | RAC Forge" title="Facility & Cleanroom Design"
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
              Facility & Cleanroom Design
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Turnkey architectural layout engineering and high-purity cleanroom design for sterile medical device packaging.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Turnkey Design for Compliant Manufacturing Facilities</h2>
                <p className="text-lg">
                  A compliant product begins with a compliant facility. RAC Forge offers expert consultancy for the architectural design of medical device manufacturing units. We design facilities that meet <strong>CDSCO</strong>, <strong>ISO</strong>, and international standards from day one, ensuring your infrastructure is an asset, not a liability.
                </p>

                <div className="my-10 bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-8 rounded-3xl border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-orange-100 shadow-sm text-orange-600">
                      <Home size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Architectural Integrity</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We model personnel entry locks, material flow pathways, pressure differentials, and sterilization lines to prevent cross-contamination and ensure effortless regulatory audits.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Class 10,000 & 100,000 Cleanroom Architecture", desc: "Design, structural integration, laminar flow mapping, and particle verification parameters." },
                    { title: "HVAC System Design and Validation", desc: "Pressure zoning, humidity control, HEPA filtration layouts, and temperature stabilization modeling." },
                    { title: "Quality Control Laboratory Setup", desc: "Dedicated testbeds for bioburden testing, structural assessment, and analytical chemistry investigations." },
                    { title: "Site Master File (SMF) Preparation", desc: "Drafting complete site description portfolios, equipment catalogs, organizational structures, and maintenance records." },
                    { title: "Compliance with Schedule M and Good Manufacturing Practices (GMP)", desc: "Direct mapping of operational floor flows to statutory CDSCO Schedule M rules and cleanroom hygiene norms." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#D97706]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Cleanroom Particle Audits</h3>
                <p>
                  Sterile packaging and high-risk classifications necessitate strict containment. We structure HVAC layouts and filtration thresholds so that cleanroom validation certificates are issued securely without delays by certified testing authorities.
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
                      { name: 'Electrical Prototyping', path: '/services/electrical-medical-device-prototyping' },
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
