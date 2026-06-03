import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, UserCheck, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function UsabilityEngineering() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Usability Engineering & IEC 62366-1 | RAC Forge" 
        description="Providing human factors and usability engineering (IEC 62366-1) alignment. Complete risk assessments, test protocols, and design solutions for medical systems."
        keywords="usability engineering, IEC 62366-1 medical device, human factors engineering, use error risk assessment, clinical workflow validation"
        canonical="/services/usability-engineering-iec-62366"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Usability Engineering Lifecycle | RAC Forge" title="Usability Engineering Lifecycle"
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
              Usability Engineering & Human Factors (IEC 62366-1)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Formulating systematic usability specifications, analyzing user interfaces, assessing risk, and executing robust human validation trials.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-[#7C3AED] mb-6">User Interface & Safety Under IEC 62366-1</h2>
                <p className="text-lg">
                  Patient and clinician safety is heavily dependent on intuitive interface designs. Under IEC 62366-1, medical device manufacturers must apply usability engineering to identify use-related hazards, design mitigation profiles, and test the user interface with real clinical workflows.
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Mitigating Use Errors</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We map clinical user environments, define user personas, and document potential misuse vectors systematically to secure USFDA-approvable risk profiles.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Usability Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Usability Engineering File (UEF)", desc: "Drafting complete technical dossiers outlining user interface specifications, hazard identifications, and risk logs." },
                    { title: "Formative & Summative Evaluations", desc: "Setting up focus groups, coordinating design mockups, and executing final clinical test trials under simulated environments." },
                    { title: "Use-Related Risk Analysis (URRA)", desc: "Integrating usability hazards directly into your primary ISO 14971 risk management spreadsheets." },
                    { title: "IU/IFU & Labelling Optimization", desc: "Refining user instruction booklets, quick-start guides, and digital UI prompts to prevent operator errors." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Regulatory Review Integration</h3>
                <p>
                  Both the CDSCO and FDA require complete Usability Engineering dossiers for active imaging devices, hemodialysis channels, infusion setups, and mobile apps. Our human factors engineering process aligns your project with global usability thresholds seamlessly.
                </p>

                <FormsHub keys={['iec-62366-1', 'iso-14971', 'qms', 'samd']} title="Usability & Risk Standards" />
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
