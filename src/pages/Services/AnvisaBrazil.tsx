import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';
import FormsHub from '../../components/FormsHub';

export default function AnvisaBrazil() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Anvisa Brazil Regulatory Registration | RAC Forge" 
        description="Providing end-to-end support for Anvisa Brazil medical device approvals. Complete BGMP (RDC 665/2022) audit prep and Brazilian Registration Holder representation."
        keywords="Anvisa Brazil registration, medical device Brazil, BGMP compliance RDC 665/2022, Brazilian Registration Holder BRH, INMETRO certified"
        canonical="/services/anvisa-brazil-registration"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="Anvisa Brazil Registration | RAC Forge" title="Anvisa Brazil Registration"
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
              Complete Anvisa Registration for the Brazil Medical Market
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Streamlining classification, BGMP audits, and Brazilian market entry for physical or digital health solutions.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Expert Anvisa Registration Support</h2>
                <p className="text-lg">
                  Navigate Latin America's largest medical market with confidence. RAC Forge handles the complete Anvisa registration process, assisting with regulatory classification, Portuguese dossier compilation, and the coordination of the Brazilian Good Manufacturing Practices (BGMP) audits.
                </p>

                <div className="my-10 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 p-8 rounded-3xl border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-yellow-105 shadow-sm text-yellow-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">BGMP (RDC 665/2022) Alignment</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Anvisa requires active certification for Class III and IV devices. We align quality manuals directly with RDC 665/2022 to pass inspections.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Cost-Effective Device Classification", desc: "Verifying exact Anvisa risk categories (Class I to IV) and estimating submission fee budgets accurately." },
                    { title: "Technical Dossier Compilation in Portuguese", desc: "High-fidelity translation and structuring of safety profiles, instructions for use, and performance parameters." },
                    { title: "INMETRO & ANATEL Certification Coordination", desc: "Setting up and passing mandatory local testing checks for electric medical systems or communication modules." },
                    { title: "Brazilian Registration Holder (BRH) Representation", desc: "Serving as your localized legal anchor or assisting you in configuring and maintaining a fully independent BRH node." },
                    { title: "BGMP Audit Documentation Prep", desc: "Comprehensive training and folder auditing to align local operations with South American inspection guidelines." }
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

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Strategic Local Entry</h3>
                <p>
                  As Brazil requires extensive testing on-site for various electrical and battery-powered medical systems, matching international ISO 14971 risk profiles with INMETRO standards upfront is essential. Our team maps this process to minimize unexpected project delays.
                </p>

                {/* Direct Inline Forms Codex */}
                <FormsHub 
                  keys={['anvisa', 'bgmp', 'inmetro', 'anatel', 'aia', 'poa', 'fsc']} 
                  title="ANVISA Brazil Registration Codex" 
                />
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
                      { name: 'EU Authorized Rep (EAR)', path: '/services/eu-authorized-representative' }
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
                      Our international market access team has steered multiple diagnostic systems and implants to successful clearances.
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
