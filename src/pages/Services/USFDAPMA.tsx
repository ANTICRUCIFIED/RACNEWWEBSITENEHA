import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function USFDAPMA() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="USFDA PMA Application" 
        description="Expert guidance for USFDA Premarket Approval (PMA) for high-risk (Class III) medical devices in the United States."
        canonical="/services/usfda-pma-application"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/usfdapma/1920/1080"
            alt="USFDA PMA Application"
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
            USFDA PMA Application
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating the premarket review process for Class III medical devices to ensure safety and effectiveness.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">The Gold Standard of USFDA Review: Premarket Approval (PMA)</h2>
                <p>
                  **Premarket Approval (PMA)** is the most stringent type of device marketing application required by the <InfoLink text="USFDA" />. It is the process of scientific and regulatory review to evaluate the safety and effectiveness of **Class III medical devices**. These are devices that support or sustain human life, are of substantial importance in preventing impairment of human health, or present a potential, unreasonable risk of illness or injury.
                </p>
                <p>
                  Unlike the 510(k) process, which relies on "substantial equivalence" to a predicate device, a PMA requires the manufacturer to provide **valid scientific evidence**—typically from well-controlled clinical trials—to demonstrate that the device is safe and effective for its intended use.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Modular vs. Traditional PMA</h4>
                    <p className="text-sm leading-relaxed">The **Modular PMA** allows for the submission of individual sections (modules) as they are completed, facilitating earlier feedback from the FDA. The **Traditional PMA** is a single, complete submission.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Pre-Approval Inspection (PAI)</h4>
                    <p className="text-sm leading-relaxed mb-4">The FDA will conduct a mandatory inspection of the manufacturing facility to ensure compliance with the **Quality System Regulation (21 CFR 820)** before a PMA can be approved.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our USFDA PMA Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Development of a comprehensive PMA strategy and timeline",
                    "Coordination of pre-submission meetings (Q-Sub) with FDA",
                    "Preparation of the PMA submission package (Modular or Traditional)",
                    "Scientific and clinical data analysis and presentation",
                    "Review of manufacturing processes and quality systems (21 CFR 820)",
                    "Management of FDA advisory committee meetings",
                    "Support for post-approval studies and annual reporting",
                    "Assistance with PMA supplements for device changes"
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
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Related USFDA Services</h4>
                  <ul className="space-y-4">
                    {[
                      { name: '510(k) Submission', path: '/services/usfda-510k-submission' },
                      { name: 'De Novo Classification', path: '/services/usfda-de-novo-classification' }
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
                    <h4 className="text-2xl font-bold mb-4">Need Expert Help?</h4>
                    <p className="text-gray-600 text-sm mb-8 font-medium">
                      Our regulatory team has extensive experience in complex USFDA PMA applications.
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
