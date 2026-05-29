import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function RDandSaMD() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Development of Electrical Medical Devices & SaMD" 
        description="Expert technical development, documentation, and regulatory strategy for Electrical Medical Devices, Software as a Medical Device (SaMD), and R&D projects."
        canonical="/services/rd-and-samd"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/samd/1920/1080"
            alt="Development of Electrical Medical Devices & SaMD" title="Development of Electrical Medical Devices & SaMD"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            
          >
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Development of Electrical Medical Devices & SaMD
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Full-cycle engineering, technical documentation, and regulatory strategy for Electrical Medical Devices and Software as a Medical Device.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Bridging Innovation and Compliance</h2>
                <p>
                  At RAC Forge Private Limited, we believe that regulatory compliance should be integrated into the product development lifecycle from day one. Our <strong>Engineering & R&D</strong> services focus on aligning your innovation goals with global regulatory requirements, ensuring a smooth path from concept to market. We don't just provide consulting; we offer active development of Electrical Medical Devices and SaMDs.
                </p>
                <p>
                  We specialize in <strong>Software as a Medical Device (SaMD)</strong>, providing expert guidance on software development lifecycles (SDLC) that comply with <strong>IEC 62304</strong> and <strong>ISO 13485</strong>. Whether you are building a diagnostic algorithm or a complex health platform, we ensure your software is robust, secure, and ready for regulatory scrutiny.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Cybersecurity for Medical Devices</h4>
                    <p className="text-sm leading-relaxed">With the increasing connectivity of medical devices, cybersecurity is a top priority for regulators. We provide comprehensive support for <strong>Cybersecurity Risk Management</strong>, following FDA guidance and NIST frameworks to protect patient data and device integrity.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">AI/ML and Novel Technologies</h4>
                    <p className="text-sm leading-relaxed mb-4">Artificial Intelligence and Machine Learning (AI/ML) present unique regulatory challenges. We help you navigate the evolving landscape of <strong>SaMD AI/ML</strong> regulations, focusing on algorithm transparency and change management protocols.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our R&D and SaMD Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Regulatory strategy for SaMD and AI/ML enabled devices",
                    "Software development lifecycle (SDLC) consulting for IEC 62304",
                    "Software validation and verification (V&V) support",
                    "Cybersecurity risk assessment and management",
                    "Preparation of Software Technical Files for global submissions",
                    "Strategic R&D planning and technology assessment",
                    "Support for interoperability and data privacy standards",
                    "Guidance on Change Control and Post-Market software updates"
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
                      { name: 'EU MDR Compliance', path: '/services/eu-mdr-compliance' },
                      { name: 'Anvisa Brazil', path: '/services/anvisa-brazil-approval' }
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
                      Our regulatory team has extensive experience in SaMD and innovative R&D projects.
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
