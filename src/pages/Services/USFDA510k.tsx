import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function USFDA510k() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="USFDA 510(k) Submission Consulting & eSTAR Experts" 
        description="Top-rated USFDA 510(k) consulting. We help medical device manufacturers with substantial equivalence, technical files, and mandatory eSTAR submissions."
        keywords="USFDA 510k consultant, FDA 510k submission help, medical device clearance USA, eSTAR template expert, FDA predicate device identification, USFDA regulatory affairs, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/services/usfda-510k-submission"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/usfda510k/1920/1080"
            alt="USFDA 510(k) Submission | RAC Forge Consulting" title="USFDA 510(k) Submission"
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
            USFDA 510(k) Submission
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating the Premarket Notification process to demonstrate substantial equivalence for the U.S. market.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Understanding the 510(k) Premarket Notification</h2>
                <p>
                  A 510(k) is a premarket submission made to the <InfoLink text="FDA" /> to demonstrate that a medical device is <strong>substantially equivalent (SE)</strong> to a legally marketed device (known as a <strong>predicate device</strong>) that is not subject to Premarket Approval (<InfoLink text="PMA" />). Demonstrating substantial equivalence means the new device is as safe and effective as the predicate.
                </p>
                <p>
                  The 510(k) pathway is the most common route for Class II medical devices to enter the U.S. market. It requires a detailed comparison of the new device's intended use and technological characteristics with those of the predicate device.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Types of 510(k) Submissions</h4>
                    <ul className="space-y-4 text-sm">
                      <li><CheckCircle2 className="text-brand-teal inline mr-2" size={16} /> <strong>Traditional:</strong> The standard submission for any new device.</li>
                      <li><CheckCircle2 className="text-brand-teal inline mr-2" size={16} /> <strong>Abbreviated:</strong> Relies on FDA guidance documents or special controls.</li>
                      <li><CheckCircle2 className="text-brand-teal inline mr-2" size={16} /> <strong>Special:</strong> For modifications to the manufacturer's own cleared device.</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">The eSTAR Requirement</h4>
                    <p className="text-sm leading-relaxed mb-4">As of October 1, 2023, all 510(k) submissions must be submitted electronically using the <InfoLink text="eSTAR" /> (electronic Submission Template And Resource) PDF.</p>
                    <p className="text-sm font-bold text-brand-teal">Our team is fully proficient in this mandatory format.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Key Components of a 510(k) Submission</h3>
                <p>
                  A successful 510(k) requires more than just a comparison. It must include performance testing (bench testing), biocompatibility data, software validation (if applicable), and clear labeling. We provide a comprehensive gap analysis to ensure your data meets <InfoLink text="FDA" />'s rigorous standards before submission, minimizing the risk of "Refuse to Accept" (RTA) or "Additional Information" (AI) requests.
                </p>

                <h3 className="text-2xl font-bold text-brand-deep mb-6 mt-12">Our 510(k) Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Identification of appropriate predicate device(s)",
                    "Preparation of the 510(k) submission package using eSTAR",
                    "Performance testing data review and gap analysis",
                    "Biocompatibility and sterilization validation review",
                    "Software validation and cybersecurity documentation",
                    "Labeling and Instructions for Use (IFU) review",
                    "Management of FDA interactions and RTA (Refuse to Accept) responses",
                    "Support for AI/ML enabled medical devices"
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
                      { name: 'PMA Application', path: '/services/usfda-pma-application' },
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
                    <h4 className="text-2xl font-bold mb-4 text-brand-deep">Need Expert Help?</h4>
                    <p className="text-gray-600 text-sm mb-8 font-medium">
                      Our regulatory team has a proven track record in successful USFDA 510(k) submissions.
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
