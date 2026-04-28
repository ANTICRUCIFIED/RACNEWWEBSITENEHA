import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOImport() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Import License" 
        description="Expert guidance for obtaining CDSCO Import Licenses (MD-14, MD-15) for medical devices in India."
        canonical="/services/cdsco-import-license"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/import/1920/1080"
            alt="CDSCO Import License"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            CDSCO Import License
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating <InfoLink text="MD-14" /> and <InfoLink text="MD-15" /> pathways for medical device imports into India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Navigating the CDSCO Import Process</h2>
                <p>
                  For foreign manufacturers looking to enter the Indian market, the regulatory landscape is governed by the Central Drugs Standard Control Organization (<InfoLink text="CDSCO" />). The primary requirement for importing medical devices is the appointment of an **Indian Authorized Agent (IAA)**. This agent must hold a valid wholesale license and is responsible for all regulatory interactions with the CDSCO on behalf of the foreign manufacturer.
                </p>
                <p>
                  The import process is centered around the **Form MD-14** application and the subsequent **Form MD-15** license. This ensures that the devices being imported meet the same safety and quality standards as those manufactured domestically in India.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">The Import Licensing Framework</h4>
                    <p className="text-sm mb-4">The application process requires a comprehensive set of documents from the foreign manufacturing site, including proof of quality management and product safety.</p>
                    <ul className="space-y-4 text-sm font-bold">
                      <li className="flex items-center"><CheckCircle2 className="text-brand-teal mr-2 shrink-0" size={16} /> Form MD-14 (Application)</li>
                      <li className="flex items-center"><CheckCircle2 className="text-brand-teal mr-2 shrink-0" size={16} /> Form MD-15 (License)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">The Role of the IAA</h4>
                    <p className="text-sm leading-relaxed">The IAA acts as the legal representative in India. Their responsibilities include submitting the MD-14 application, managing post-market surveillance (PMS), handling adverse event reporting, and ensuring compliance with the labeling requirements of the Medical Devices Rules, 2017.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Essential Documentation for MD-14</h3>
                <p className="mb-6">A successful MD-14 application requires several critical documents from the global manufacturing site:</p>
                <ul className="space-y-4">
                  {[
                    "Power of Attorney (PoA) documentation for Indian Authorized Agent",
                    "Free Sale Certificate (FSC) from the country of origin",
                    "Device Master File (DMF) and Plant Master File (PMF) review",
                    "ISO 13485 Quality Management System certification review",
                    "Labeling and Instructions for Use (IFU) compliance with Indian rules",
                    "Post-Market Surveillance (PMS) reporting support"
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
                      { name: 'Loan License', path: '/services/cdsco-loan-license' },
                      { name: 'Test License', path: '/services/cdsco-test-license' },
                      { name: 'Clinical Investigation', path: '/services/cdsco-clinical-investigation' }
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
                      Our regulatory team has a 100% success rate in CDSCO import license applications.
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
