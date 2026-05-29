import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function EUMDRCompliance() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="EU MDR 2017/745 Compliance & CE Marking Experts" 
        description="Get expert support for EU Medical Device Regulation (MDR) 2017/745 transitions. We specialize in Annex II/III Technical Documentation, CER, & PRRC support."
        keywords="EU MDR compliance, CE Marking consultant, MDR 2017/745 transition, technical documentation Annex II, CER Clinical Evaluation Report, PRRC regulatory, EUDAMED registration, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/services/eu-mdr-compliance"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/eumdr/1920/1080"
            alt="EU MDR Compliance | RAC Forge Consulting" title="EU MDR Compliance"
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
            EU MDR Compliance
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating the transition and compliance requirements for the EU Medical Device Regulation 2017/745.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Navigating the EU MDR 2017/745 Transition</h2>
                <p>
                  The European Medical Device Regulation (<InfoLink text="EU MDR" />) 2017/745 replaced the previous Medical Device Directive (MDD) and Active Implantable Medical Device Directive (AIMDD). This shift has introduced more stringent requirements for clinical evidence, post-market surveillance, and transparency across the European Union.
                </p>
                <p>
                  One of the most significant changes is the reclassification of many devices and the increased scrutiny from <strong>Notified Bodies</strong>. Manufacturers must now provide more robust <strong>Clinical Evaluation Reports (CER)</strong> and implement a comprehensive <strong>Post-Market Clinical Follow-up (PMCF)</strong> system.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Technical Documentation (Annex II & III)</h4>
                    <p className="text-sm leading-relaxed">The MDR requires a more detailed Technical File (Annex II) and a Technical File for Post-Market Surveillance (Annex III). We specialize in assembling these complex dossiers to ensure compliance with the latest standards.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">EUDAMED & UDI Implementation</h4>
                    <p className="text-sm leading-relaxed">The European Database on Medical Devices (<strong>EUDAMED</strong>) and the Unique Device Identification (<strong>UDI</strong>) system are central to MDR transparency. We assist in registration and data management for these critical systems.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">The Role of the PRRC</h3>
                <p>
                  Under Article 15 of the MDR, every manufacturer must have at least one <strong>Person Responsible for Regulatory Compliance (PRRC)</strong>. This individual is responsible for ensuring that the conformity of the devices is appropriately checked, that technical documentation is kept up-to-date, and that post-market surveillance obligations are met. We provide strategic consulting to help your PRRC navigate these responsibilities.
                </p>

                <h3 className="text-2xl font-bold text-brand-deep mb-6 mt-12">Our EU MDR Compliance Services</h3>
                <ul className="space-y-4">
                  {[
                    "Gap analysis of existing MDD/AIMDD technical files",
                    "Preparation of MDR-compliant Technical Documentation (Annex II & III)",
                    "Clinical Evaluation Report (CER) updates and gap analysis",
                    "Post-Market Surveillance (PMS) and PMCF plan development",
                    "Periodic Safety Update Report (PSUR) preparation",
                    "UDI implementation and EUDAMED registration support",
                    "Quality Management System (QMS) updates for ISO 13485:2016",
                    "Person Responsible for Regulatory Compliance (PRRC) support",
                    "Coordination with Notified Bodies for conformity assessment"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                      <span className="font-bold text-brand-deep">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Related Services</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'USFDA Compliance', path: '/services/usfda-510k-submission' },
                      { name: 'Anvisa Brazil', path: '/services/anvisa-brazil-approval' },
                      { name: 'Development of Electrical Medical Devices & SaMD', path: '/services/rd-and-samd' }
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
                    <h4 className="text-2xl font-bold mb-4 text-brand-deep">Need Expert Help?</h4>
                    <p className="text-gray-600 text-sm mb-8 font-medium">
                      Our regulatory team has extensive experience in EU MDR transitions and compliance.
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
