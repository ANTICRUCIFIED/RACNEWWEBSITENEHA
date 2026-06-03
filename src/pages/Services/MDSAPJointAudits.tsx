import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import FormsHub from '../../components/FormsHub';

export default function MDSAPJointAudits() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="MDSAP Joint Auditing Program Support | RAC Forge" 
        description="Comprehensive guidance and audit staging for MDSAP (Medical Device Single Audit Program). Seamless compliance across five major global jurisdictions."
        keywords="MDSAP auditing program, medical device single audit, global market access QMS, FDA MDSAP, ISO 13485 multi-jurisdiction"
        canonical="/services/mdsap-joint-audits"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt="MDSAP Joint Audits | RAC Forge" title="MDSAP Joint Audits"
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
              MDSAP Joint Audits & Compliance
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-7xl leading-relaxed font-medium"
          >
            Streamlining quality management audits to concurrently satisfy USFDA, Health Canada, ANVISA Brazil, TGA Australia, and MHLW Japan.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Global Compliance via a Single Audit</h2>
                <p className="text-lg">
                  The Medical Device Single Audit Program (MDSAP) facilitates a comprehensive joint regulatory audit of a manufacturer's QMS that satisfies multiple global regulatory jurisdictions. Participating countries include the United States, Brazil, Canada, Japan, and Australia.
                </p>

                <div className="my-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 rounded-3xl border border-emerald-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-2xl border border-emerald-150 shadow-sm text-emerald-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans tracking-tight">Audit Consolidation</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Rather than hosting five separate regulatory visits, we design and coordinate your ISO 13485 QMS matrix to cover all MDSAP jurisdictional parameters in one go.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our MDSAP Support Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Gap Analysis & Mapping", desc: "Cross-referencing 21 CFR Part 820, ANVISA RDC 665/2022, and ISO 13485 standard structures to identify systemic gaps." },
                    { title: "MDSAP-Compliant Process Overhauls", desc: "Refining quality manuals, training systems, supplier management, and device tracking workflows." },
                    { title: "Mock Audit Staging", desc: "Simulating on-site auditing sequences under the MDSAP Companion Document checklist protocols." },
                    { title: "Deficiency Remediation (NCs)", desc: "Drafting rapid corrective responses to resolve non-conformances identified during audits safely." }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#10B981]/90 text-base mb-2 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          {service.title}
                        </h4>
                        <p className="text-slate-650 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Accelerated Global Entry</h3>
                <p>
                  MDSAP-certified facilities bypass routine inspections in participant nations. For example, ANVISA Brazil waives BGMP audits for qualifying systems, drastically shortening registration times. We manage this preparation structure meticulously.
                </p>

                <FormsHub keys={['iso-13485', 'bgmp', 'usfda', 'qms']} title="MDSAP Core Regulatory Standards" />
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
                      { name: 'EU Authorized Representative', path: '/services/eu-authorized-representative' },
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
