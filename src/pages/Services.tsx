import React from 'react';
import { motion } from 'motion/react';
import { 
  Flag, 
  Shield, 
  Globe2, 
  CircleDollarSign, 
  Code2, 
  CheckCircle, 
  ArrowRight,
  Microscope,
  ClipboardCheck,
  Route
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoLink from '../components/InfoLink';

const SERVICES = [
  {
    title: "CDSCO India",
    icon: <Flag className="w-8 h-8 text-orange-600" />,
    bg: "bg-orange-50",
    description: "Comprehensive regulatory pathways for the Indian market under Medical Devices Rules 2017.",
    links: [
      { name: "Manufacturing License", path: "/services/cdsco-manufacturing-license" },
      { name: "Import License", path: "/services/cdsco-import-license" },
      { name: "Loan License", path: "/services/cdsco-loan-license" },
      { name: "Test License", path: "/services/cdsco-test-license" },
      { name: "Clinical Investigation", path: "/services/cdsco-clinical-investigation" }
    ]
  },
  {
    title: "USFDA (USA)",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50",
    description: "Strategic guidance for U.S. market entry, from classification to final clearance.",
    links: [
      { name: "510(k) Submission", path: "/services/usfda-510k-submission" },
      { name: "PMA Application", path: "/services/usfda-pma-application" },
      { name: "De Novo Classification", path: "/services/usfda-de-novo-classification" }
    ]
  },
  {
    title: "EU MDR (Europe)",
    icon: <Globe2 className="w-8 h-8 text-emerald-600" />,
    bg: "bg-emerald-50",
    description: "Expert transition and compliance services for the European Medical Device Regulations.",
    links: [
      { name: "EU MDR Compliance", path: "/services/eu-mdr-compliance" }
    ]
  },
  {
    title: "Anvisa (Brazil)",
    icon: <CircleDollarSign className="w-8 h-8 text-yellow-600" />,
    bg: "bg-yellow-50",
    description: "Navigating the Brazilian regulatory landscape with local expertise and alliances.",
    links: [
      { name: "Anvisa Approval", path: "/services/anvisa-brazil-approval" }
    ]
  },
  {
    title: "Development of Electrical Medical Devices & SaMD",
    icon: <Code2 className="w-8 h-8 text-purple-600" />,
    bg: "bg-purple-50",
    description: "End-to-end development, technical documentation, and strategy for Electrical Medical Devices, Software as a Medical Device (SaMD), and R&D projects.",
    links: [
      { name: "Development of Electrical Medical Devices & SaMD", path: "/services/rd-and-samd" }
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Medical Device Regulatory Services - USFDA, CDSCO, EU MDR" 
        description="Comprehensive regulatory consulting: CDSCO Manufacturing/Import licenses, USFDA 510k, EU MDR Technical Documentation, and Anvisa Brazil approvals."
        keywords="medical device services, CDSCO license consultant, USFDA 510k submission, EU MDR consulting, ANVISA approval Brazil, SaMD regulatory strategy, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/services"
      />

      {/* Services Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/racforge-services/1920/1080"
            alt="RAC Forge Private Limited Services" title="RAC Forge Private Limited Services"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            
          >
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Our Services
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            End-to-end regulatory solutions for medical device manufacturers worldwide. From initial R&D to final market approval.
          </motion.p>
        </div>
      </section>

      {/* Services Intro Content */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              We provide a comprehensive suite of services designed to navigate the complexities of global medical device regulations. Our approach is rooted in technical excellence and strategic foresight, ensuring that your products not only meet current standards but are also prepared for future regulatory shifts.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you are looking to enter the Indian market with a <InfoLink text="CDSCO" /> license, the U.S. market through a <InfoLink text="USFDA 510(k)" /> or <InfoLink text="PMA" />, or the European market under the <InfoLink text="EU MDR" />, our team has the expertise to guide you through every step of the process. We also specialize in Software as a Medical Device (<InfoLink text="SaMD" />) and technical <InfoLink text="R&D" /> strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${service.bg} p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full`}
              >
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-3xl font-extrabold text-brand-deep mb-6">{service.title}</h3>
                <p className="text-gray-600 mb-10 leading-relaxed flex-grow">
                  <InfoLink text={service.description} />
                </p>
                <div className="space-y-4">
                  {service.links.map((link, lIdx) => (
                    <Link 
                      key={lIdx} 
                      to={link.path}
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-brand-teal hover:shadow-md transition-all group"
                    >
                      <span className="font-bold text-brand-deep group-hover:text-brand-teal transition-colors">{link.name}</span>
                      <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-deep rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 skew-x-12 translate-x-1/4"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-white">Why Partner with RAC Forge Private Limited?</h2>
              <div className="grid grid-cols-1 gap-12 mt-12">
                <div className="flex items-start space-x-6">
                  <div className="bg-brand-teal p-3 rounded-2xl shrink-0"><CheckCircle size={24} className="text-white" /></div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2">Technical Expertise</h4>
                    <p className="text-white/70 text-lg leading-relaxed">10+ years of R&D experience means we understand your device's mechanics, not just the rules.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-brand-teal p-3 rounded-2xl shrink-0"><CheckCircle size={24} className="text-white" /></div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2">Thorough Documentation</h4>
                    <p className="text-white/70 text-lg leading-relaxed">We handle the heavy lifting of technical file assembly, GSPR checklists, and risk management.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-brand-teal p-3 rounded-2xl shrink-0"><CheckCircle size={24} className="text-white" /></div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2">Strategic Pathways</h4>
                    <p className="text-white/70 text-lg leading-relaxed">We identify the most efficient regulatory route to save you time and resources.</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="inline-block mt-16 bg-brand-teal text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-deep transition-all shadow-xl shadow-brand-teal/20">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
