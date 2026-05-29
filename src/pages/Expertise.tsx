import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Zap, ShieldCheck, Microscope, Globe, FileText, Route, Search, Code2, Flag, Shield, CircleDollarSign } from 'lucide-react';
import SEO from '../components/SEO';
import InfoLink from '../components/InfoLink';

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "CDSCO India Regulations",
      icon: <Flag className="w-12 h-12 text-orange-600" />,
      image: "https://i.postimg.cc/RCWzCC3c/service1.png",
      items: [
        "In-depth understanding of the Indian MDR (Medical Devices Rules, 2017).",
        "Comprehensive knowledge across all 12 chapters and 8 schedules.",
        "Familiarity with over 40 MDR forms and submission requirements.",
        "Insights into device classification (Class A, B, C, D) and essential principles."
      ]
    },
    {
      title: "USFDA Requirements",
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      image: "https://i.postimg.cc/vH5kD4GW/service2.png",
      items: [
        "Risk-based classification expertise (Class I, II, III).",
        "Specialization in 510(k), PMA, and FDA De Novo pathways.",
        "Quality System Regulation (QSR/QMSR) compliance, aligned with ISO 13485.",
        "eSTAR submission skills and pre-submission (Q-Sub) strategies."
      ]
    },
    {
      title: "EU MDR Compliance",
      icon: <Globe className="w-12 h-12 text-emerald-600" />,
      image: "https://i.postimg.cc/SNZ86rQC/service3.png",
      items: [
        "Complete CE Marking process under the EU MDR 2017/745.",
        "Technical Documentation requirements (Annex II & III), covering GSPR.",
        "Clinical Evaluation Report (CER) writing and gap analysis.",
        "Post-Market Surveillance (PMS) and Vigilance reporting."
      ]
    },
    {
      title: "Anvisa Brazil Approval",
      icon: <CircleDollarSign className="w-12 h-12 text-yellow-600" />,
      image: "https://i.postimg.cc/sXtHgrqV/Avisa.png",
      items: [
        "Expedited approval pathways for the Brazilian market.",
        "Coordination with local alliances for seamless registration.",
        "BGMP compliance and INMETRO/ANATEL certification guidance.",
        "Strategic planning for high-risk device entry."
      ]
    },
    {
      title: "SaMD & R&D Strategy",
      icon: <Code2 className="w-12 h-12 text-purple-600" />,
      image: "https://i.postimg.cc/52hXgKZZ/service4.png",
      items: [
        "IEC 62304 Software Lifecycle and IEC 62366-1 Usability Engineering.",
        "Cybersecurity and AI/ML compliance for medical software.",
        "Technical documentation for innovative R&D projects.",
        "Strategic guidance for software-driven medical technologies."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Medical Device Regulatory Experts - CDSCO, USFDA, EU MDR" 
        description="Deep technical expertise in global medical device regulations. Specialist consulting for CDSCO (India), USFDA (USA), EU MDR, and Anvisa Brazil market entry."
        keywords="regulatory expertise, medical device consultants, USFDA regulatory affairs, CDSCO compliance experts, EU MDR specialists, Anvisa Brazil registration, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/expertise"
      />

      {/* Expertise Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://racforge.com/wp-content/uploads/revslider/slider-3/slider-51.jpg"
            alt="RAC Forge Private Limited Expertise | RAC Forge Consulting" title="RAC Forge Private Limited Expertise"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            
          >
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Our Expertise
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Deep technical knowledge and regulatory mastery across global markets.
          </motion.p>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {expertiseAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="mb-8 p-4 bg-gray-50 rounded-3xl inline-block">{area.icon}</div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-8 leading-tight">
                    {area.title}
                  </h2>
                  <div className="space-y-6">
                    {area.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start space-x-4">
                        <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={24} />
                        <p className="text-gray-600 text-lg leading-relaxed">
                          <InfoLink text={item} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className="absolute -inset-4 bg-brand-teal/5 rounded-[4rem] -rotate-3"></div>
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-deep rounded-[4rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 skew-x-12 translate-x-1/4"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-white">Industry Authority & Memberships</h2>
              <p className="text-white/70 text-xl leading-relaxed mb-16">
                We are active participants in the global medical device community, ensuring we stay at the forefront of regulatory changes and industry best practices.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Associate Member", value: "AiMeD" },
                  { label: "Member", value: "IMDRRG" },
                  { label: "10+ Years", value: "R&D Excellence" },
                  { label: "ISO 13485", value: "Quality Certified" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-2xl md:text-2xl font-black text-brand-teal mb-2">{item.value}</div>
                    <div className="text-white/50 font-bold uppercase tracking-widest text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
