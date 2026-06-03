import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  FileText, 
  ClipboardList, 
  Microscope, 
  Route, 
  Code2, 
  Award, 
  Users, 
  Zap, 
  CheckSquare, 
  Search, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import SEO from '../components/SEO';
import InfoLink from '../components/InfoLink';

const BLOG_POSTS = [
  {
    id: 'sterilization-validation',
    title: 'Sterilization Validation for Medical Devices',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-sterilization.webp',
    date: '12 Oct'
  },
  {
    id: 'biocompatibility-testing',
    title: 'Biocompatibility Testing Strategies for Medical Devices',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp',
    date: '11 Oct'
  },
  {
    id: 'mastering-eu-mdr',
    title: 'Mastering EU MDR Technical Documentation',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-eu-mdr.webp',
    date: '10 Oct'
  },
  {
    id: 'navigating-usfda-510k',
    title: 'Navigating USFDA’s 510(k) Submission Process',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-usfda-510k.webp',
    date: '10 Oct'
  },
  {
    id: 'understanding-cdsco-rules',
    title: 'Understanding CDSCO’s Medical Devices Rules, 2017',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-cdsco-rules.webp',
    date: '10 Oct'
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server responded with an error');
      }

      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitError(err.message || 'Form submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Best Medical Device Regulatory Consultancy" 
        description="RAC Forge Private Limited is the premier global Medical Device Regulatory Consultant for CDSCO India, USFDA USA, EU MDR & ANVISA Brazil. Specialized in Manufacturing & Import licenses."
        keywords="RAC Forge Private Limited, USFDA consulting, CDSCO manufacturing license, EU MDR compliance, medical device regulatory experts, FDA 510k submission India, ANVISA approval, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/"
      />

      {/* Banner Section */}
      <section className="relative min-h-screen flex items-center pt-32 sm:pt-40 lg:pt-48 pb-12 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/home-banner.webp"
            alt="RAC Forge Private Limited - Premier Medical Device Regulatory Consulting & Engineering Experts for CDSCO, USFDA, EU MDR | RAC Forge Consulting"
            title="Global Medical Device Regulatory Consulting Services"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-teal font-extrabold tracking-widest uppercase text-xl mb-4"
            >
              RAC Forge Private Limited
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                Medical Device Regulatory Consulting & Engineering Experts
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-brand-teal mb-6">
                Navigating <InfoLink text="CDSCO" />, <InfoLink text="USFDA" />, <InfoLink text="Anvisa" /> and <InfoLink text="EU MDR" /> Compliance with Precision and Expertise.
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80 mb-10 leading-relaxed"
            >
              Your Global Medical Device Regulatory Partner. Strategic guidance and thorough documentation services for successful market entry in India, USA, EU, and Brazil.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-brand-teal text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-deep transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-teal/20">
                Schedule Consultation
              </Link>
              <Link to="/expertise" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95">
                Explore Expertise
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-8"
            >
              <div className="flex items-center space-x-3 text-white/80">
                <Zap className="text-brand-teal" size={24} />
                <span className="font-bold">10+ Years R&D Experience</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Award className="text-brand-teal" size={24} />
                <span className="font-bold">AiMeD Associate Member</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/10 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Experience & Expertise</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-8 leading-tight">
                10+ Years of Excellence in Medical Device R&D and Regulatory Affairs
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <strong>RAC Forge Private Limited</strong> is a premier global regulatory consultancy dedicated to the medical device industry. With over a decade of specialized experience in Research & Development (R&D) and Regulatory Affairs, we bridge the gap between complex engineering and stringent compliance. Our mission at RAC Forge Private Limited is to streamline the path to market for innovative medical technologies, ensuring they meet the highest safety and efficacy standards across diverse jurisdictions.
                </p>
                <p>
                  We don't just provide documentation; we offer strategic partnership. Our deep understanding of the lifecycle of a medical device—from initial concept and prototyping to clinical validation and post-market surveillance—allows us to anticipate regulatory hurdles before they arise. Whether you are a startup seeking your first <InfoLink text="CDSCO" /> license or a multinational navigating <InfoLink text="EU MDR" /> transitions, our expertise ensures precision at every step.
                </p>
                <p>
                  Our R&D-first approach means we understand the "why" behind the regulations. We help manufacturers build quality into their products from the start, rather than treating compliance as an afterthought. This proactive strategy reduces the risk of non-compliance, minimizes time-to-market, and enhances the overall quality of the medical devices.
                </p>
                <p>
                  By integrating regulatory requirements into the early stages of product design and development, we help our clients avoid costly redesigns and delays. This approach is particularly beneficial for complex devices, such as those incorporating software (<InfoLink text="SaMD" />), artificial intelligence (<InfoLink text="AI" />), or novel materials. Our team works closely with your R&D engineers to ensure that every design decision is supported by the necessary regulatory evidence.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center mt-10 text-brand-teal font-bold group">
                Learn More About Our Story <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8"
            >
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                  <Microscope size={32} />
                </div>
                <h4 className="text-2xl font-bold text-brand-deep mb-4">In-house R&D Excellence</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team brings over a decade of hands-on experience in medical device development, ensuring your technical files are built on a solid scientific foundation.
                </p>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-brand-deep/10 rounded-2xl flex items-center justify-center text-brand-deep mb-6">
                  <Globe size={32} />
                </div>
                <h4 className="text-2xl font-bold text-brand-deep mb-4">Global Market Access</h4>
                <p className="text-gray-600 leading-relaxed">
                  From Himachal Pradesh to New Delhi, and across the globe to Brazil and the EU, we bridge the gap between innovation and compliance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Compliance is Critical Section */}
      <section className="py-24 bg-brand-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Why Regulatory Compliance is Critical</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              In the medical device industry, compliance is not just a legal requirement—it's a commitment to patient safety and market integrity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Patient Safety First",
                desc: "Regulatory frameworks like EU MDR and USFDA 21 CFR Part 820 are designed to ensure that every device is safe for its intended use, minimizing risks to patients and healthcare providers."
              },
              {
                title: "Global Market Access",
                desc: "Compliance opens doors to international markets. Obtaining a CE Mark or USFDA clearance is often a prerequisite for global distribution and commercial success."
              },
              {
                title: "Brand Reputation",
                desc: "Adhering to high regulatory standards builds trust with clinicians, hospitals, and end-users, establishing your brand as a reliable leader in medical technology."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 text-brand-teal font-black text-4xl opacity-50">
                  {idx + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Regulatory Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Global Solutions</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep leading-tight">Core Regulatory Services</h2>
            </div>
            <Link to="/services" className="bg-brand-deep text-white px-8 py-4 rounded-full font-bold hover:bg-brand-teal transition-all shadow-lg shadow-brand-deep/20">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CDSCO */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-brand-deep mb-6">CDSCO India</h3>
              <ul className="space-y-3 text-gray-600 mb-10 flex-grow">
                <li>Manufacturing License</li>
                <li>Import License</li>
                <li>Loan License</li>
                <li>Test License</li>
                <li>Clinical Investigation</li>
              </ul>
              <Link to="/services/cdsco-manufacturing-license" className="text-brand-teal font-bold flex items-center group">
                View All Licenses <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* USFDA */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-brand-deep mb-6">USFDA</h3>
              <ul className="space-y-3 text-gray-600 mb-10 flex-grow">
                <li>510(k) Premarket Notification</li>
                <li>PMA Applications</li>
                <li>De Novo Classification</li>
              </ul>
              <Link to="/services/usfda-510k-submission" className="text-brand-teal font-bold flex items-center group">
                View USFDA Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* EU MDR */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-brand-deep mb-6">EU MDR</h3>
              <ul className="space-y-3 text-gray-600 mb-10 flex-grow">
                <li>Technical Documentation</li>
                <li>CE Marking Strategy</li>
                <li>Notified Body Coordination</li>
              </ul>
              <Link to="/services/eu-mdr-compliance" className="text-brand-teal font-bold flex items-center group">
                View EU MDR Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Anvisa */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-brand-deep mb-6">Anvisa Brazil</h3>
              <ul className="space-y-3 text-gray-600 mb-10 flex-grow">
                <li>Expedited Approval Pathways</li>
                <li>Local Alliance Coordination</li>
                <li>BGMP Compliance</li>
              </ul>
              <Link to="/services/anvisa-brazil-approval" className="text-brand-teal font-bold flex items-center group">
                View Anvisa Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Global Regulatory Consulting Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="https://anticrucified.github.io/MyWebP_Images/images/strategic-consulting.webp" 
                alt="Strategic Consulting | RAC Forge Consulting" title="Strategic Consulting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               loading="lazy" />
              <div className="absolute inset-0 bg-brand-deep/20"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">What Makes Us Different</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-8 leading-tight">Strategic Global Regulatory Consulting</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
                <p>
                  We specialize in strategic regulatory consulting and creating documentation packages to meet every Essential Requirement. We coordinate with top international test facilities to manage outsourced testing services for our clients, ensuring a seamless path to compliance.
                </p>
                <p>
                  Our global reach combined with local expertise allows us to provide tailored solutions that meet the unique requirements of each market. We are committed to helping you achieve your regulatory goals and bring life-saving medical technologies to patients worldwide. Our expertise extends to the most complex medical device classifications and software applications.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Zap size={24} />, title: "Testing Coordination", desc: "Partnerships with global ISO 17025 accredited laboratories for technical validation." },
                  { icon: <FileText size={24} />, title: "Technical File Assembly", desc: "Meticulous documentation packages including GSPR checklists and Risk Management." },
                  { icon: <Route size={24} />, title: "Anvisa Regulatory Pathway", desc: "Optimized strategies for Brazil market entry through established local alliances." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="text-brand-teal shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-brand-deep mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expedited EU MDR & SaMD Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* EU MDR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <span className="text-brand-teal font-bold tracking-widest uppercase text-xs mb-4 block">What Makes Us Different</span>
              <h3 className="text-3xl font-extrabold text-brand-deep mb-6">Expedited EU MDR Approvals</h3>
              <h4 className="text-xl font-bold text-brand-teal mb-4">Fast-Track Certification</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our knowledge transfer collaboration with Notified Bodies ensures your technical files are built precisely to their requirements, significantly expediting the approval process.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-teal mr-3" size={20} /> Pre-submission Notified Body meetings
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-teal mr-3" size={20} /> Technical file gap analysis
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-teal mr-3" size={20} /> Clinical evaluation consulting
                </li>
              </ul>
              <Link to="/services/eu-mdr-compliance" className="inline-block bg-brand-deep text-white px-8 py-4 rounded-full font-bold hover:bg-brand-teal transition-all">
                Get EU MDR Support
              </Link>
            </motion.div>

            {/* SaMD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <span className="text-brand-teal font-bold tracking-widest uppercase text-xs mb-4 block">Development & Engineering</span>
              <h3 className="text-3xl font-extrabold text-brand-deep mb-6">Electrical Devices & SaMD</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Benefit from our in-house R&D team with over 10 years of experience. We offer active development of Electrical Medical Devices and <InfoLink text="SaMD" /> (Software as a Medical Device). We don't just achieve software validation; we build and engineer robust solutions.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-teal mr-3" size={20} /> Active Development of Electrical Devices
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-teal mr-3" size={20} /> <InfoLink text="IEC 62304" /> Software Lifecycle
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-teal mr-3" size={20} /> Cybersecurity & AI/ML compliance
                </li>
              </ul>
              <Link to="/services/rd-and-samd" className="inline-block bg-brand-deep text-white px-8 py-4 rounded-full font-bold hover:bg-brand-teal transition-all">
                Explore Engineering Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                <div className="text-2xl md:text-3xl font-black text-brand-deep mb-2">{item.value}</div>
                <div className="text-brand-teal font-bold uppercase tracking-widest text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Slider Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Direct from the blog</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep leading-tight">News & Articles</h2>
            </div>
            <Link to="/blogs/resources" className="text-brand-teal font-bold flex items-center group">
              View All Articles <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {BLOG_POSTS.map((post) => (
              <SwiperSlide key={post.id}>
                <Link to={`/blogs/${post.id}`} className="block group">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 bg-brand-teal text-white px-4 py-1 rounded-full text-xs font-bold">
                        {post.date}
                      </div>
                    </div>
                    <div className="p-8">
                      <h4 className="text-xl font-bold text-brand-deep group-hover:text-brand-teal transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="mt-6 flex items-center text-brand-teal font-bold text-sm">
                        Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-white" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-8 leading-tight">
                Ready to Navigate Global Regulatory Compliance?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Contact our regulatory experts today for a consultation on your medical device approval pathway. Whether it's <InfoLink text="CDSCO" />, <InfoLink text="USFDA" />, <InfoLink text="EU MDR" />, or <InfoLink text="Anvisa" /> Brazil, we have the expertise to guide you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-lg">Headquarters</h4>
                    <p className="text-gray-600">RAC Forge Private Limited 11, 1 village Nanehar, Thural, Kangra, Jaisinghpur Kangra - 176107, Himachal Pradesh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-deep/10 rounded-xl flex items-center justify-center text-brand-deep shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-lg">Call Us</h4>
                    <p className="text-gray-600">+91 62396 99077</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-lg">Email Us</h4>
                    <p className="text-gray-600">info@racforge.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl"
            >
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal mx-auto">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-deep">Inquiry Submitted!</h3>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    Thank you. Our regulatory strategy team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-teal font-bold uppercase text-sm tracking-wider hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-deep">First Name *</label>
                      <input 
                        required 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-deep">Last Name *</label>
                      <input 
                        required 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-deep">Email Address *</label>
                      <input 
                        required 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-deep">Phone Number *</label>
                      <input 
                        required 
                        type="tel" 
                        name="phoneNumber" 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-deep">Regulatory Market Interest *</label>
                    <select 
                      required 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a market</option>
                      <option value="CDSCO India">CDSCO India</option>
                      <option value="USFDA">USFDA</option>
                      <option value="EU MDR">EU MDR</option>
                      <option value="Anvisa Brazil">Anvisa Brazil</option>
                      <option value="Multiple Markets">Multiple Markets</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-deep">Message *</label>
                    <textarea 
                      required 
                      name="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all resize-none bg-white"
                    ></textarea>
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm font-bold">{submitError}</p>
                  )}

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-brand-deep text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-teal transition-all shadow-lg shadow-brand-deep/20 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}