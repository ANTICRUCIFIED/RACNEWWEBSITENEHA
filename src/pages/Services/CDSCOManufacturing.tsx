import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOManufacturing() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Manufacturing License India - MD-3, MD-5, MD-7, MD-9" 
        description="Top CDSCO consultant for Medical Device Manufacturing Licenses in India. Expert support for Form MD-5, MD-9 applications & SUGAM portal management."
        keywords="CDSCO manufacturing license, Form MD-5 license, Form MD-9 license India, SUGAM portal medical device, CDSCO consultant Delhi, SLA audit help, CLA compliance, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/services/cdsco-manufacturing-license"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/manufacturing/1920/1080"
            alt="CDSCO Manufacturing License | RAC Forge Consulting" title="CDSCO Manufacturing License"
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
            CDSCO Manufacturing License
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating <InfoLink text="MD-3" />, <InfoLink text="MD-5" />, <InfoLink text="MD-7" />, and <InfoLink text="MD-9" /> pathways for Indian medical device manufacturing.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Understanding CDSCO Manufacturing Licenses</h2>
                <p>
                  In India, the Central Drugs Standard Control Organization (<InfoLink text="CDSCO" />) is the national regulatory body for pharmaceuticals and medical devices. Under the Medical Devices Rules (<InfoLink text="MDR" />) 2017, all medical devices are classified based on risk into four categories: Class A (Low Risk), Class B (Low-Moderate Risk), Class C (Moderate-High Risk), and Class D (High Risk).
                </p>
                <p>
                  Obtaining a manufacturing license is a multi-step process that involves rigorous documentation, facility audits, and technical file reviews. For Class A and B devices, the State Licensing Authority (<InfoLink text="SLA" />) is primarily responsible, while Class C and D devices fall under the Central Licensing Authority (<InfoLink text="CLA" />).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Class A & B Devices (SLA)</h4>
                    <p className="text-sm mb-4 leading-relaxed">Class A includes non-invasive devices like surgical dressings and Class B includes moderately invasive devices like hypodermic needles. These require an audit by a Notified Body before the SLA grants the license.</p>
                    <ul className="space-y-4 text-sm">
                      <li className="flex items-center"><CheckCircle2 className="text-brand-teal mr-2 shrink-0" size={16} /> <strong>Form MD-3 (Application):</strong> The initial application submitted via the SUGAM portal.</li>
                      <li className="flex items-center"><CheckCircle2 className="text-brand-teal mr-2 shrink-0" size={16} /> <strong>Form MD-5 (License):</strong> The final license issued by the SLA after successful audit.</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Class C & D Devices (CLA)</h4>
                    <p className="text-sm mb-4 leading-relaxed">Class C includes high-risk devices like hemodialyzers and Class D includes critical devices like cardiac stents. These require a direct audit by CDSCO officials (CLA).</p>
                    <ul className="space-y-4 text-sm">
                      <li className="flex items-center"><CheckCircle2 className="text-brand-teal mr-4 shrink-0" size={16} /> <strong>Form MD-7 (Application):</strong> Requires extensive clinical evidence and performance data.</li>
                      <li className="flex items-center"><CheckCircle2 className="text-brand-teal mr-4 shrink-0" size={16} /> <strong>Form MD-9 (License):</strong> Issued by the CLA (DCGI) for high-risk devices.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">The SUGAM Portal & Application Process</h3>
                <p>
                  All applications are processed through the <InfoLink text="SUGAM" /> online portal. This digital interface facilitates the submission, tracking, and approval of licenses. Our team manages the entire portal interaction, ensuring that all technical files, site master files, and plant master files are uploaded correctly to avoid queries and delays.
                </p>

                <h3 className="text-2xl font-bold text-brand-deep mb-6 mt-12">Our Deliverables</h3>
                <ul className="space-y-4">
                  {[
                    "Preparation of Site Master File (SMF) and Plant Master File (PMF)",
                    "Technical File assembly including Device Description and Specification",
                    "Risk Management Report as per ISO 14971",
                    "Performance Evaluation Report (PER) and Clinical Evidence",
                    "QMS Documentation and Internal Audit Support",
                    "Online Application Management on SUGAM Portal"
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
                      { name: 'Import License', path: '/services/cdsco-import-license' },
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
                      Our regulatory team has a 100% success rate in CDSCO manufacturing license applications.
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
