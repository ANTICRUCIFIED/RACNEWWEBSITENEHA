import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function USFDADeNovo() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="USFDA De Novo Classification" 
        description="Expert guidance for USFDA De Novo Classification for novel, low-to-moderate risk medical devices with no predicate."
        canonical="/services/usfda-de-novo-classification"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/usfdadenovo/1920/1080"
            alt="USFDA De Novo Classification | RAC Forge Consulting" title="USFDA De Novo Classification"
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
            USFDA De Novo Classification
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating the classification process for novel, low-to-moderate risk medical devices with no predicate.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Pioneering Novel Device Clearance: The De Novo Pathway</h2>
                <p>
                  The <strong>De Novo classification process</strong> provides a pathway to classify novel medical devices that are low to moderate risk but for which there is no legally marketed predicate device. Traditionally, such devices would be automatically classified as Class III (high risk), requiring a <InfoLink text="PMA" />. The De Novo process allows them to be reclassified as Class I or Class II.
                </p>
                <p>
                  This pathway is essential for innovative technologies that don't fit into existing product codes. It requires a robust <strong>risk-benefit analysis</strong> to demonstrate that general controls, or general and <strong>special controls</strong>, provide reasonable assurance of safety and effectiveness.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Risk-Based Classification</h4>
                    <p className="text-sm leading-relaxed">The De Novo request must include a detailed identification of all risks and the specific controls (e.g., performance testing, labeling) used to mitigate them.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Establishing a New Predicate</h4>
                    <p className="text-sm leading-relaxed">Once a De Novo request is granted, the device can serve as a predicate for future 510(k) submissions, creating a new product classification.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our USFDA De Novo Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Strategic assessment of De Novo eligibility and risk profile",
                    "Preparation of the De Novo request submission package",
                    "Development of a comprehensive risk-benefit analysis",
                    "Support for pre-submission (Q-Sub) meetings with FDA",
                    "Assistance in proposing special controls for the new classification",
                    "Review of performance testing and clinical data",
                    "Management of FDA interactions and additional information requests",
                    "Support for subsequent 510(k) submissions for similar devices"
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
                      { name: 'PMA Application', path: '/services/usfda-pma-application' }
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
                      Our regulatory team has extensive experience in novel USFDA De Novo classifications.
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
