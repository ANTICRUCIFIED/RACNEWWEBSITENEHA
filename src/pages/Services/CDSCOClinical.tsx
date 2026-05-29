import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOClinical() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Clinical Investigation" 
        description="Expert guidance for CDSCO Clinical Investigation (MD-22, MD-23) protocols and permissions for medical devices in India."
        canonical="/services/cdsco-clinical-investigation"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/clinical/1920/1080"
            alt="CDSCO Clinical Investigation | RAC Forge Consulting" title="CDSCO Clinical Investigation"
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
            CDSCO Clinical Investigation
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating <InfoLink text="MD-22" /> and <InfoLink text="MD-23" /> pathways for medical device clinical studies in India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Navigating Clinical Investigations in India</h2>
                <p>
                  Clinical investigation is the cornerstone of demonstrating the safety and performance of high-risk medical devices (Class C and D) and novel technologies. Under the Medical Devices Rules, 2017, the <InfoLink text="CDSCO" /> requires a rigorous and ethically sound process for conducting these studies. This involves not only the Central Licensing Authority (CLA) but also registered <strong>Ethics Committees (EC)</strong> and qualified investigators.
                </p>
                <p>
                  The process begins with the development of a comprehensive <strong>Clinical Investigation Plan (CIP)</strong> and an <strong>Investigator's Brochure (IB)</strong>. These documents must be reviewed and approved by both the Ethics Committee and the CDSCO before any subjects can be enrolled.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Investigational Medical Devices</h4>
                    <p className="text-sm font-bold mb-4">Form MD-22 & MD-23</p>
                    <p className="text-sm mb-4 leading-relaxed">Application (MD-22) and Grant (MD-23) of permission to conduct a clinical investigation of an investigational medical device. This is mandatory for devices that do not have a predicate in the Indian market.</p>
                    <p className="text-sm"><strong>Ethics Committee Approval:</strong> All clinical investigations must be approved by an Ethics Committee registered with the CDSCO to ensure the protection of human subjects.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">New In Vitro Diagnostics (IVDs)</h4>
                    <p className="text-sm font-bold mb-4">Form MD-24 & MD-25</p>
                    <p className="text-sm mb-4 leading-relaxed">Application (MD-24) and Grant (MD-25) of permission to conduct a performance evaluation of a new IVD. This focuses on analytical and clinical performance characteristics.</p>
                    <p className="text-sm"><strong>GCP Compliance:</strong> All studies must be conducted in accordance with Good Clinical Practice (GCP) guidelines to ensure data integrity and subject safety.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Clinical Investigation Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Preparation of Clinical Investigation Plan (CIP) and Investigator's Brochure (IB)",
                    "Support for Ethics Committee (EC) approval and registration",
                    "Preparation of Case Report Forms (CRFs) and Informed Consent Documents (ICDs)",
                    "Management of application for MD-22/23/24/25 on SUGAM portal",
                    "Coordination with Clinical Research Organizations (CROs) and trial sites",
                    "Support for clinical investigation reports and data analysis",
                    "Compliance with Good Clinical Practice (GCP) guidelines"
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
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Related CDSCO Services</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'Manufacturing License', path: '/services/cdsco-manufacturing-license' },
                      { name: 'Import License', path: '/services/cdsco-import-license' },
                      { name: 'Loan License', path: '/services/cdsco-loan-license' },
                      { name: 'Test License', path: '/services/cdsco-test-license' }
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
                      Our regulatory team has extensive experience in CDSCO clinical investigation protocols.
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
