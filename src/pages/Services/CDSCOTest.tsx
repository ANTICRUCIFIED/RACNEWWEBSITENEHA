import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOTest() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Test License" 
        description="Expert guidance for obtaining CDSCO Test Licenses (MD-16, MD-17) for medical devices in India."
        canonical="/services/cdsco-test-license"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/test/1920/1080"
            alt="CDSCO Test License | RAC Forge Consulting" title="CDSCO Test License"
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
            CDSCO Test License
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating <InfoLink text="MD-16" /> and <InfoLink text="MD-17" /> pathways for medical device testing and evaluation in India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Facilitating Research and Development with Test Licenses</h2>
                <p>
                  Before a medical device can be manufactured or imported for sale, it often requires testing, evaluation, or clinical investigation. A <strong>Test License</strong> allows for these activities under the Medical Devices Rules, 2017. This is a critical step for manufacturers to validate their designs, conduct performance testing, and gather the necessary data for a full manufacturing or import license.
                </p>
                <p>
                  The test license is strictly for the purposes of clinical investigations, testing, evaluation, demonstration, or training. Devices imported or manufactured under this license <strong>cannot be sold</strong> or used for commercial purposes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Manufacturing for Test & Evaluation</h4>
                    <p className="text-sm font-bold mb-4">Form MD-12 & MD-13</p>
                    <p className="text-sm mb-4 leading-relaxed">Application (MD-12) and Grant (MD-13) of a license to <strong>manufacture</strong> medical devices for the purposes of clinical investigations, test, evaluation, demonstration, or training.</p>
                    <p className="text-sm"><strong>Key Requirements:</strong> Detailed protocols for the proposed testing and justification for the quantity of devices to be manufactured.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Importing for Test & Evaluation</h4>
                    <p className="text-sm font-bold mb-4">Form MD-16 & MD-17</p>
                    <p className="text-sm mb-4 leading-relaxed">Application (MD-16) and Grant (MD-17) of a license to <strong>import</strong> medical devices for the purposes of clinical investigations, test, evaluation, demonstration, or training.</p>
                    <p className="text-sm"><strong>Customs Clearance:</strong> The MD-17 license is essential for the smooth customs clearance of test samples arriving from international manufacturers.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Test License Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Preparation of application for MD-16 and MD-17",
                    "Justification for the quantity of devices required for testing",
                    "Review of testing protocols and evaluation plans",
                    "Coordination with testing laboratories and clinical sites",
                    "Management of import/manufacture records as per CDSCO rules",
                    "Support for subsequent clinical investigation applications"
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
                      Our regulatory team has a 100% success rate in CDSCO test license applications.
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
