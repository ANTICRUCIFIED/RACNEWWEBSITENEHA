import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOLoan() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Loan License" 
        description="Expert guidance for obtaining CDSCO Loan Licenses (MD-4, MD-6, MD-8, MD-10) for medical devices in India."
        canonical="/services/cdsco-loan-license"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/image_rich_assets/page-service-loan.jpg"
            alt="CDSCO Loan License | RAC Forge Consulting" title="CDSCO Loan License"
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
            CDSCO Loan License
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating <InfoLink text="MD-4" />, <InfoLink text="MD-6" />, <InfoLink text="MD-8" />, and <InfoLink text="MD-10" /> pathways for medical device loan licenses in India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Leveraging Existing Infrastructure with Loan Licensing</h2>
                <p>
                  A <strong>Loan License</strong> is a strategic regulatory mechanism under the Medical Devices Rules, 2017, that allows a company (the "Loan Licensee") to manufacture medical devices using the licensed manufacturing facilities of another company (the "Host Manufacturer"). This model is particularly beneficial for startups, R&D-focused firms, and international companies looking to manufacture locally in India without the immediate capital expenditure of building their own facility.
                </p>
                <p>
                  The Loan Licensee remains responsible for the quality, safety, and performance of the devices, while the Host Manufacturer provides the infrastructure, equipment, and sometimes the personnel. A robust <strong>Quality Agreement</strong> and a <strong>Tripartite Agreement</strong> are essential to clearly define the roles and responsibilities of each party.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Class A & B Loan Licenses</h4>
                    <p className="text-sm font-bold mb-4">Form MD-4 & MD-6</p>
                    <p className="text-sm mb-4 leading-relaxed">Application (MD-4) and Grant (MD-6) of a loan license for Class A or Class B medical devices. These are typically managed by the State Licensing Authority (SLA).</p>
                    <p className="text-sm"><strong>Key Requirements:</strong> Verification of the host's valid manufacturing license (MD-5) and adequacy of their facility.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Class C & D Loan Licenses</h4>
                    <p className="text-sm font-bold mb-4">Form MD-8 & MD-10</p>
                    <p className="text-sm mb-4 leading-relaxed">Application (MD-8) and Grant (MD-10) of a loan license for Class C or Class D medical devices. These are managed by the Central Licensing Authority (CLA).</p>
                    <p className="text-sm"><strong>Audit & Inspection:</strong> Rigorous inspection of the host facility by CDSCO officials to ensure compliance with QMS requirements.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Loan License Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Identification and audit of potential contract manufacturing sites",
                    "Preparation of tripartite agreements and quality agreements",
                    "Technical File and Site Master File review for the loan site",
                    "Verification of existing manufacturing license of the host site",
                    "Application submission and follow-up on SUGAM portal",
                    "Compliance monitoring and audit support"
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
                      Our regulatory team has extensive experience in CDSCO loan license applications.
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
