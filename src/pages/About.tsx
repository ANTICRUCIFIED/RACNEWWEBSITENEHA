import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Zap, ShieldCheck, Microscope, Globe, FileText, Route } from 'lucide-react';
import SEO from '../components/SEO';
import InfoLink from '../components/InfoLink';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="About RAC Forge - Your Trusted Regulatory Partner" 
        description="Learn about RAC Forge, a premier global medical device regulatory consultancy with 10+ years of R&D excellence. Expert guidance for CDSCO, USFDA, and EU MDR market access."
        keywords="racforge, rac forge, medical device consulting expertise, AiMeD member, regulatory story, regulatory affairs team"
        canonical="/about"
      />

      {/* About Banner */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://racforge.com/wp-content/uploads/2025/10/Expert-Medical-Device-Regulatory-Consulting-for-Global-Market-Access.png"
            alt="About RAC Forge"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            10+ Years of Excellence in Medical Device R&D and Regulatory Affairs. We bridge the gap between innovation and compliance.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-8 leading-tight">
                A Decade of Innovation and Regulatory Mastery
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  RAC Forge Pvt. Ltd. was founded on the principle that regulatory compliance should be an enabler of innovation, not a barrier. Our journey began over 10 years ago in the research and development labs, where we experienced firsthand the challenges of bringing complex medical technologies to life while meeting stringent safety standards.
                </p>
                <p>
                  Today, we are a premier global regulatory consultancy, specializing in the medical device sector. Our unique "R&D-First" approach sets us apart. We don't just understand the rules; we understand the devices. This deep technical insight allows us to build robust technical files and clinical evidence that stand up to the highest level of scrutiny from bodies like the <InfoLink text="CDSCO" />, <InfoLink text="USFDA" />, <InfoLink text="Anvisa" />, and European Notified Bodies.
                </p>
                <p>
                  Based in India, with a strong presence in Himachal Pradesh and New Delhi, we serve a global clientele. We are proud associate members of **AiMeD (Association of Indian Medical Device Industry)** and active participants in the **IMDRRG (International Medical Device Regulatory Research Group)**, ensuring our clients always benefit from the latest regulatory intelligence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8"
            >
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                  <Microscope size={32} />
                </div>
                <h4 className="text-2xl font-bold text-brand-deep mb-4">Scientific Foundation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team consists of engineers and scientists who have spent years in medical device R&D, providing a level of technical depth that traditional consultancies lack.
                </p>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-brand-deep/10 rounded-2xl flex items-center justify-center text-brand-deep mb-6">
                  <Award size={32} />
                </div>
                <h4 className="text-2xl font-bold text-brand-deep mb-4">Uncompromising Quality</h4>
                <p className="text-gray-600 leading-relaxed">
                  We adhere to <InfoLink text="ISO 13485" /> standards in our own processes, ensuring that every deliverable we provide meets the highest quality benchmarks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Precision", desc: "We believe in meticulous attention to detail, ensuring that every submission is accurate and complete." },
              { title: "Integrity", desc: "We act as an ethical partner, providing honest assessments and transparent communication throughout the regulatory process." },
              { title: "Innovation", desc: "We embrace new technologies and methodologies to streamline compliance and support the next generation of medical devices." },
              { title: "Partnership", desc: "We view our clients' success as our own, working collaboratively to achieve long-term regulatory goals." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-deep mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Memberships Section */}
      <section className="py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-6">Industry Memberships & Authority</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are active participants in the global medical device community, ensuring we stay at the forefront of regulatory changes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Associate Member", value: "AiMeD" },
              { label: "Member", value: "IMDRRG" },
              { label: "10+ Years", value: "R&D Excellence" },
              { label: "ISO 13485", value: "Quality Certified" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-2xl md:text-4xl font-black text-brand-deep mb-2">{item.value}</div>
                <div className="text-brand-teal font-bold uppercase tracking-widest text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-6">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* CDSCO */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-teal border-b border-gray-200 pb-4">CDSCO India Regulations</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Understanding of the Indian MDR (Medical Devices Rules, 2017).</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Knowledge across all 12 chapters and 8 schedules.</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Familiarity with over 40 MDR forms and submission requirements.</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Insights into device classification (<InfoLink text="Class A" />, <InfoLink text="Class B" />, <InfoLink text="Class C" />, <InfoLink text="Class D" />) and essential principles.</li>
              </ul>
            </div>

            {/* USFDA */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-teal border-b border-gray-200 pb-4">USFDA Requirements</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Risk-based classification expertise (Class I, II, III).</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Specialization in 510(k) <InfoLink text="USFDA" />, <InfoLink text="PMA" />, and FDA <InfoLink text="De Novo" /> pathways.</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Quality System Regulation (QSR/QMSR) compliance, aligned with <InfoLink text="ISO 13485" />.</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> <InfoLink text="eSTAR" /> submission skills.</li>
              </ul>
            </div>

            {/* EU MDR */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-teal border-b border-gray-200 pb-4">EU MDR Compliance</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Complete CE Marking process under the <InfoLink text="EU MDR" /> 2017/745.</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Technical Documentation requirements (Annex II & III), covering <InfoLink text="GSPR" />.</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Clinical Evaluation Report (<InfoLink text="CER" />) writing.</li>
                <li className="flex items-start"><CheckCircle2 className="text-brand-teal mr-3 shrink-0 mt-1" size={18} /> Post-Market Surveillance (<InfoLink text="PMS" />) and Vigilance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-6">Our Approach</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At RAC Forge Pvt. Ltd., we believe successful regulatory strategy starts with thorough documentation. Our approach includes:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Strategic Assessment", desc: "Evaluating your device and identifying the best regulatory pathways." },
              { title: "Documentation Planning", desc: "Developing detailed plans for technical file assembly." },
              { title: "Authoring Excellence", desc: "Creating complete, submission-ready documents." },
              { title: "Submission Management", desc: "Guiding you through the approval process." },
              { title: "Post-Market Support", desc: "Ensuring ongoing compliance and monitoring." },
              { title: "Partnership Approach", desc: "Supporting every stage from concept to approval." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-6 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <div className="w-10 h-10 bg-brand-teal text-white rounded-xl flex items-center justify-center shrink-0 font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-deep mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-8 leading-tight">
                Why We're Different
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Unlike testing labs or general consulting firms, RAC Forge focuses solely on regulatory documentation and strategy. We excel in creating the evidence needed to show your device's safety and effectiveness to regulatory authorities like <InfoLink text="CDSCO" /> and the <InfoLink text="USFDA" />.
              </p>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h4 className="text-2xl font-bold text-brand-deep mb-6">Company Legal Status Confirmation</h4>
                <p className="text-gray-600 mb-8">Certifies that the company is a legally established entity with the right to conduct business activities as per Indian law.</p>
                <img 
                  src="https://racforge.com/wp-content/uploads/2026/01/certificate.jpg" 
                  alt="Certificate" 
                  className="w-full rounded-2xl shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://racforge.com/wp-content/uploads/2025/10/Expert-Medical-Device-Regulatory-Consulting-for-Global-Market-Access2.png" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-deep/20"></div>
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-10 rounded-[2rem]">
                <h4 className="text-2xl font-bold text-brand-deep mb-4">Our Team</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team consists of regulatory affairs professionals with extensive experience in medical device regulations in various jurisdictions. Each member offers specialized knowledge in specific regulatory areas, ensuring all your compliance needs are met.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
