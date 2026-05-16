import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function AnvisaBrazil() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Anvisa Brazil Medical Device Approval & Registration" 
        description="Expert guidance for Anvisa Brazil medical device approval. We help with BGMP (RDC 665/2022) compliance, technical dossiers, and BRH representation."
        keywords="Anvisa Brazil approval, Brazilian medical device registration, BGMP compliance, RDC 665/2022, ANVISA consultant, medical device market Brazil, BRH service"
        canonical="/services/anvisa-brazil-approval"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/anvisa/1920/1080"
            alt="Anvisa Brazil Approval"
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
            Anvisa Brazil Approval
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating the Brazilian regulatory landscape with local expertise and expedited approval pathways.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Unlocking the Brazilian Market with Anvisa Approval</h2>
                <p>
                  Entering the South American market begins with the <InfoLink text="Anvisa" /> (Agência Nacional de Vigilância Sanitária) in Brazil. The regulatory environment in Brazil is unique, requiring foreign manufacturers to appoint a **Brazilian Registration Holder (BRH)**—a local company that acts as the legal representative and host for product registrations.
                </p>
                <p>
                  Compliance with the Brazilian Good Manufacturing Practices (**BGMP**), specifically **RDC 665/2022**, is a prerequisite for most registrations. Anvisa may conduct on-site inspections for high-risk (Class III and IV) devices to verify BGMP compliance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">INMETRO & ANATEL Certifications</h4>
                    <p className="text-sm leading-relaxed">Medical electrical equipment often requires **INMETRO** certification for safety, while devices with wireless communication (Bluetooth, Wi-Fi) require **ANATEL** approval. We coordinate with local laboratories to facilitate these processes.</p>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h4 className="text-xl font-bold text-brand-deep mb-4">Registration Pathways</h4>
                    <p className="text-sm leading-relaxed mb-4">Low-risk devices (Class I and II) follow the **Notification** pathway, while high-risk devices (Class III and IV) require a full **Registration** (Registro) with more extensive data review.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Our Anvisa Brazil Consulting Services</h3>
                <ul className="space-y-4">
                  {[
                    "Selection and management of a Brazilian Registration Holder (BRH)",
                    "Preparation of the technical dossier for Anvisa submission",
                    "Support for BGMP (RDC 665/2022) compliance and readiness audits",
                    "Coordination of INMETRO and ANATEL certification processes",
                    "Gap analysis of existing data against Anvisa requirements",
                    "Translation of technical documents and labeling into Portuguese",
                    "Management of Anvisa interactions and RFI (Request for Information) responses",
                    "Assistance with product renewals and amendments"
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
                      { name: 'SaMD Strategy', path: '/services/rd-and-samd' }
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
                      Our regulatory team has extensive experience in Anvisa Brazil approvals and local alliances.
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
