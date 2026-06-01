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
    title: "Engineering & R&D",
    icon: <Code2 className="w-8 h-8 text-purple-600" />,
    bg: "bg-purple-100/30",
    description: "Innovative engineering and regulatory-compliant R&D services for active hardware, firmware, and digital health Software as a Medical Device (SaMD) solutions.",
    links: [
      { name: "SaMD Architecture", path: "/services/samd-architecture-development" },
      { name: "Electrical Device Prototyping", path: "/services/electrical-medical-device-prototyping" },
      { name: "Facility & Cleanroom Design", path: "/services/facility-cleanroom-design" },
      { name: "Embedded Medical Firmware", path: "/services/embedded-medical-firmware" },
      { name: "Usability Engineering (IEC 62366)", path: "/services/usability-engineering-iec-62366" },
      { name: "Hardware V&V Protocols", path: "/services/hardware-vv-protocols" }
    ]
  },
  {
    title: "CDSCO India Regulatory",
    icon: <Flag className="w-8 h-8 text-orange-600" />,
    bg: "bg-orange-100/30",
    description: "Complete pathways for Class A, B, C, & D licensing under the Indian Medical Device Rules 2017 via the SUGAM portal.",
    links: [
      { name: "Manufacturing License (MD-5/9)", path: "/services/cdsco-manufacturing-license-md5-md9" },
      { name: "Import License (MD-14)", path: "/services/cdsco-import-license-md14" },
      { name: "Indian Authorized Representative", path: "/services/indian-authorized-representative" },
      { name: "Loan License (MD-6/10)", path: "/services/cdsco-loan-license-md6-md10" },
      { name: "Test License (MD-13)", path: "/services/cdsco-test-license-md13" },
      { name: "Clinical Investigation", path: "/services/cdsco-clinical-investigation" }
    ]
  },
  {
    title: "Global Market Access",
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-100/30",
    description: "Reliable strategic submission pathways for major worldwide systems including USFDA, European CE Mark, and Latin America.",
    links: [
      { name: "USFDA 510(k) & De Novo", path: "/services/usfda-510k-de-novo" },
      { name: "EU MDR & CE Marking", path: "/services/eu-mdr-ce-marking" },
      { name: "EU Authorized Representative", path: "/services/eu-authorized-representative" },
      { name: "Anvisa Brazil Registration", path: "/services/anvisa-brazil-registration" },
      { name: "UKCA Mark Certification", path: "/services/ukca-mark-certification" },
      { name: "MDSAP Joint Audits", path: "/services/mdsap-joint-audits" }
    ]
  },
  {
    title: "Preclinical & Clinical Trials",
    icon: <Microscope className="w-8 h-8 text-indigo-600" />,
    bg: "bg-indigo-100/30",
    description: "End-to-end biological safety, toxicology risk assessments, characterization studies, clinical trial management, and GCP audit readiness validation.",
    links: [
      { name: "Biocompatibility Testing (ISO 10993)", path: "/services/biocompatibility-testing-iso-10993" },
      { name: "Preclinical Safety & Evaluation", path: "/services/preclinical-safety-evaluation" },
      { name: "Clinical Trials & SEC Presentation", path: "/services/cdsco-clinical-investigation" },
      { name: "Toxicological Risk Assessment", path: "/services/toxicological-risk-assessment" },
      { name: "Extractables & Leachables (E&L)", path: "/services/extractables-leachables" },
      { name: "Good Clinical Practices (GCP) Audit", path: "/services/gcp-audit" }
    ]
  },
  {
    title: "Certification & Audits",
    icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
    bg: "bg-emerald-100/30",
    description: "Quality management systems (QMS), internal auditing, process validation (IQ/OQ/PQ), and preparation to pass official on-site inspections.",
    links: [
      { name: "ISO 13485 & 9001 Certification", path: "/services/iso-13485-certification-audit" },
      { name: "Regulatory Audit Readiness", path: "/services/regulatory-audit-readiness" },
      { name: "IEC 60601-1 Electrical Safety", path: "/services/iec-60601-electrical-safety" },
      { name: "ISO 14971 Risk Management", path: "/services/iso-14971-risk-management" },
      { name: "Sterile Barrier Validation", path: "/services/sterile-barrier-validation" },
      { name: "Post-Market Surveillance (PMS)", path: "/services/post-market-surveillance-pms" }
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
          <img src="https://anticrucified.github.io/MyWebP_Images/images/service-banner.png"
            alt="RAC Forge Private Limited Services | RAC Forge Consulting" title="RAC Forge Private Limited Services"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                <p className="text-gray-600 mb-10 leading-relaxed">
                  <InfoLink text={service.description} />
                </p>
                <div className="space-y-4 mt-auto">
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

      {/* The 25-Location National SEO Network directory */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#0D9488] font-extrabold text-xs uppercase tracking-widest block font-mono">Geographic Support Pipeline</span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-deep tracking-tight">Our 25-Location National Support Network</h2>
            <p className="text-slate-600 text-base font-medium">
              Providing localized on-site audit readiness, regulatory coordination, facility design, and joint-licensing support across India's key industrial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Zone 1 */}
            <div className="space-y-4 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
              <h4 className="font-extrabold text-brand-deep text-sm border-b border-slate-200 pb-2 uppercase tracking-wider">Zone 1: Northern Belt</h4>
              <ul className="space-y-2">
                {[
                  { name: "Chandigarh, Mohali & CDSCO Sub-Zonal", path: "/locations/chandigarh-mohali" },
                  { name: "Nalagarh Mega Park (Baddi & Solan)", path: "/locations/baddi-solan-nalagarh" },
                  { name: "Delhi NCR, Gurugram & Faridabad (Haryana)", path: "/locations/delhi-ncr" },
                  { name: "Ludhiana Forgings & Northern IVD Hubs", path: "/locations/ludhiana-jalandhar" },
                  { name: "Haridwar & customs Port Clearance", path: "/locations/haridwar-dehradun" }
                ].map((loc) => (
                  <li key={loc.path}>
                    <Link to={loc.path} className="text-slate-600 hover:text-brand-teal text-xs font-semibold block py-1 transition-colors">
                      • {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zone 2 */}
            <div className="space-y-4 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
              <h4 className="font-extrabold text-brand-deep text-sm border-b border-slate-200 pb-2 uppercase tracking-wider">Zone 2: Western Power</h4>
              <ul className="space-y-2">
                {[
                  { name: "Ahmedabad, Sanand & CDSCO Zonal", path: "/locations/ahmedabad-sanand" },
                  { name: "Mumbai, Thane & Nhava Sheva Maritime Port", path: "/locations/mumbai-thane" },
                  { name: "Pune Electronic Hardware & SaMD Cluster", path: "/locations/pune" },
                  { name: "Rajkot, Vadodara & Western IVD Hubs", path: "/locations/rajkot-vadodara" }
                ].map((loc) => (
                  <li key={loc.path}>
                    <Link to={loc.path} className="text-slate-600 hover:text-brand-teal text-xs font-semibold block py-1 transition-colors">
                      • {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zone 3 */}
            <div className="space-y-4 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
              <h4 className="font-extrabold text-brand-deep text-sm border-b border-slate-200 pb-2 uppercase tracking-wider">Zone 3: Southern Parks</h4>
              <ul className="space-y-2">
                {[
                  { name: "Visakhapatnam (AMTZ Flagship Park)", path: "/locations/visakhapatnam-amtz" },
                  { name: "Bengaluru SaMD & Dedicated IVD segment", path: "/locations/bengaluru" },
                  { name: "Hyderabad Genome Valley & CDSCO Zonal", path: "/locations/hyderabad-genome-valley" },
                  { name: "Chennai Imaging & Maritime Port Hubs", path: "/locations/chennai-kanchipuram" },
                  { name: "Kerala Biomaterials & Specialized Implants", path: "/locations/thiruvananthapuram-kochi" }
                ].map((loc) => (
                  <li key={loc.path}>
                    <Link to={loc.path} className="text-slate-600 hover:text-brand-teal text-xs font-semibold block py-1 transition-colors">
                      • {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zone 4 */}
            <div className="space-y-4 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
              <h4 className="font-extrabold text-brand-deep text-sm border-b border-slate-200 pb-2 uppercase tracking-wider">Zone 4: Tactical Gateways</h4>
              <ul className="space-y-2">
                {[
                  { name: "Indore, Ujjain Park & MP Corridor", path: "/locations/ujjain-indore" },
                  { name: "Kolkata Node, Bihar & East Port Gateways", path: "/locations/kolkata" },
                  { name: "Jaipur Molding & North-West Port Clusters", path: "/locations/jaipur" },
                  { name: "Assam, Odisha & North-East Trade Hubs", path: "/locations/kolkata" }
                ].map((loc) => (
                  <li key={loc.path}>
                    <Link to={loc.path} className="text-slate-600 hover:text-brand-teal text-xs font-semibold block py-1 transition-colors">
                      • {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zone 5 */}
            <div className="space-y-4 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
              <h4 className="font-extrabold text-brand-deep text-sm border-b border-slate-200 pb-2 uppercase tracking-wider">Zone 5: State Rules</h4>
              <ul className="space-y-2">
                {[
                  { name: "Gujarat Registry & SLA Dual-Inspections", path: "/india/gujarat-regulatory-compliance" },
                  { name: "Maharashtra Licensing & IVD Frameworks", path: "/india/maharashtra-medtech-licensing" },
                  { name: "Karnataka SaMD & CDSCO Guidelines", path: "/india/karnataka-samd-guidelines" },
                  { name: "Tamil Nadu Board & AMTZ Partnerships", path: "/india/tamil-nadu-device-registration" },
                  { name: "Telangana Lab & Medical Device Park", path: "/india/telangana-biomedical-frameworks" },
                  { name: "UP Strategy & YEIDA MedTech Park (Jewar)", path: "/india/uttar-pradesh-manufacturing-consultant" },
                  { name: "Himachal Nalagarh Mega Park Pathway", path: "/india/himachal-punjab-regional-pathways" },
                  { name: "Uttarakhand & East Region SLA Licensing", path: "/india/uttarakhand-regulatory-compliance" }
                ].map((loc) => (
                  <li key={loc.path}>
                    <Link to={loc.path} className="text-slate-600 hover:text-brand-teal text-xs font-semibold block py-1 transition-colors">
                      • {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
