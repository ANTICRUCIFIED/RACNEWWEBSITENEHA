import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function EUAuthorizedRepresentative() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="European Authorized Representative (EAR) Services | RAC Forge" 
        description="Official European Authorized Representative (EAR) services in strategic partnership with PinnacleMed B.V. (Netherlands) forEU MDR 2017/745 compliance."
        keywords="EU Authorized Representative, EAR, PinnacleMed B.V., EU MDR 2017/745, non-EU manufacturer CE marking, EUDAMED registration, Notified Body communication"
        canonical="/services/eu-authorized-representative"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="European Authorized Representative | RAC Forge" title="European Authorized Representative"
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
              Your Legal Gateway to the European Market (EU MDR)
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed font-medium"
          >
            Seamless representation services in strategic partnership with <strong>PinnacleMed B.V. (Netherlands)</strong>.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Partnership with PinnacleMed B.V.</h2>
                <p className="text-lg animate-fade-in">
                  In strategic partnership with <strong>PinnacleMed B.V. (Netherlands)</strong>, RAC Forge provides a seamless pathway for non-EU manufacturers to comply with EU MDR 2017/745. We offer official European Authorized Representative (EAR) services, providing a legal entity within the EU to represent your interests, manage Notified Body communication, and ensure your products meet all regulatory obligations.
                </p>

                <div className="my-10 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 p-8 rounded-3xl border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm text-teal-600">
                      <Handshake size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">PinnacleMed B.V. Strategic Synergy</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Through our formal agreement, our clients gain immediate exposure to European compliance channels with localized, regulatory-expert representation based in the Netherlands.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Designated Legal Representation", desc: "Providing a verified physical registry address within the European Economic Area (EEA) for all labeling." },
                    { title: "Technical Documentation Hosting Solutions", desc: "Keeping absolute copies of your safety assessments ready for immediate, on-demand audits by European Competent Authorities." },
                    { title: "Verification of EU Declarations of Conformity", desc: "Auditing compliance declarations, CE cert registries, and product validation histories legally." },
                    { title: "Incident Reporting & Vigilance Management", desc: "Handling and routing field safety corrective actions (FSCA) or safety notifications cleanly and securely." },
                    { title: "EUDAMED Registration & Support", desc: "Direct input and regulatory upkeep of your device parameters inside the unified European database." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">The Role of an EU Rep</h3>
                <p>
                  Non-EU medical companies cannot legally distribute devices in Europe without appointing a physical representative based in the region. The rep bears shared legal liability for compliance parameters under EU MDR Annex IX/XI, making a technically sound partner like PinnacleMed B.V. essential.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-150 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Global Market Access</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'USFDA 510(k) & De Novo', path: '/services/usfda-510k-de-novo' },
                      { name: 'EU MDR & CE Marking', path: '/services/eu-mdr-ce-marking' },
                      { name: 'Anvisa Brazil Registration', path: '/services/anvisa-brazil-registration' }
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
                      Our international market access team has steered multiple diagnostic systems and implants to successful FDA clearances.
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
