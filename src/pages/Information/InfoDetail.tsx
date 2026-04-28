import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

const INFO_DATA: Record<string, { title: string; content: string }> = {
  'md-16': {
    title: 'Form MD-16',
    content: 'Form MD-16 is the official application required for obtaining permission to import medical devices into India for clinical investigation, testing, evaluation, demonstration, or training purposes under the Medical Devices Rules, 2017. Regulated by the Central Drugs Standard Control Organization (CDSCO), Form MD-16 is essential for manufacturers, importers, and research organizations seeking approval for investigational use of medical devices. It ensures compliance with Indian regulatory requirements, safety standards, and clinical evaluation guidelines.'
  },
  'md-17': {
    title: 'Form MD-17',
    content: 'Form MD-17 is the official license issued for the import of medical devices into India for clinical investigation, testing, evaluation, demonstration, or training purposes under the Medical Devices Rules, 2017. Granted by the Central Drugs Standard Control Organization (CDSCO), Form MD-17 authorizes manufacturers and importers to legally bring investigational medical devices into India. It ensures compliance with regulatory requirements, safety standards, and clinical evaluation guidelines set by Indian authorities.'
  },
  'md-3': {
    title: 'Form MD-3',
    content: 'Form MD-3 is the official application used to obtain a manufacturing license for Class A and Class B medical devices in India under the Medical Devices Rules, 2017. Regulated by the Central Drugs Standard Control Organization (CDSCO), this form is submitted by manufacturers to the State Licensing Authority for approval. Form MD-3 ensures that medical devices meet required safety, quality, and regulatory compliance standards before being manufactured for sale or distribution in India.'
  },
  'md-5': {
    title: 'Form MD-5',
    content: 'Form MD-5 is the official manufacturing license issued for Class A and Class B medical devices in India under the Medical Devices Rules, 2017. Granted by the State Licensing Authority in coordination with the Central Drugs Standard Control Organization (CDSCO), Form MD-5 authorizes manufacturers to legally produce, sell, and distribute low to moderate risk medical devices. It ensures compliance with Indian regulatory standards, quality requirements, and safety guidelines for medical device manufacturing.'
  },
  'md-7': {
    title: 'Form MD-7',
    content: 'Form MD-7 is the official application required to obtain a manufacturing license for Class C and Class D medical devices in India under the Medical Devices Rules, 2017. Regulated by the Central Drugs Standard Control Organization (CDSCO), this form is submitted to the Central Licensing Authority for approval. Form MD-7 is essential for manufacturers dealing with moderate to high-risk medical devices and ensures strict compliance with safety standards, quality requirements, and regulatory guidelines before production and distribution.'
  },
  'md-9': {
    title: 'Form MD-9',
    content: 'Form MD-9 is the official manufacturing license issued for Class C and Class D medical devices in India under the Medical Devices Rules, 2017. Granted by the Central Licensing Authority under the Central Drugs Standard Control Organization (CDSCO), Form MD-9 authorizes manufacturers to produce, sell, and distribute moderate to high-risk medical devices. It ensures strict compliance with Indian regulatory standards, safety requirements, and quality guidelines, making it essential for companies manufacturing critical medical devices.'
  },
  'md-14': {
    title: 'Form MD-14',
    content: 'Form MD-14 is the official application required to obtain an import license for medical devices in India under the Medical Devices Rules, 2017. Regulated by the Central Drugs Standard Control Organization (CDSCO), this form is submitted by importers or authorized agents to the Central Licensing Authority for approval. Form MD-14 is essential for ensuring that imported medical devices meet Indian safety standards, quality requirements, and regulatory compliance before entering the market.'
  },
  'md-15': {
    title: 'Form MD-15',
    content: 'Form MD-15 is the official import license issued for medical devices in India under the Medical Devices Rules, 2017. Granted by the Central Licensing Authority under the Central Drugs Standard Control Organization (CDSCO), Form MD-15 authorizes importers to legally import, distribute, and market medical devices in India. It ensures that all imported devices comply with Indian regulatory standards, safety requirements, and quality guidelines before being made available in the market.'
  },
  'class-a': {
    title: 'Class A Medical Device',
    content: 'Class A Medical Devices are categorized as low-risk devices under the Medical Devices Rules, 2017 in India. Regulated by the Central Drugs Standard Control Organization (CDSCO), these devices typically have minimal impact on patient health and require basic regulatory controls. Common examples include surgical dressings, tongue depressors, alcohol swabs, and simple hospital equipment. Manufacturers of Class A medical devices must still comply with quality standards and registration requirements, but the approval process is simpler compared to higher-risk categories. These devices are subject to general safety and performance guidelines to ensure safe usage in healthcare settings.'
  },
  'class-b': {
    title: 'Class B Medical Device',
    content: 'Class B Medical Devices are categorized as low to moderate risk devices under the Medical Devices Rules, 2017 in India. Regulated by the Central Drugs Standard Control Organization (CDSCO), these devices have a moderate impact on patient health and therefore require stricter regulatory control compared to Class A devices. Common examples include hypodermic needles, suction equipment, and blood pressure monitors. Manufacturers must obtain proper licensing, follow quality management systems, and ensure compliance with CDSCO regulations to maintain safety, performance, and effectiveness standards in the Indian healthcare market.'
  },
  'class-c': {
    title: 'Class C Medical Device',
    content: 'Class C Medical Devices are categorized as moderate to high-risk devices under the Medical Devices Rules, 2017 in India. Regulated by the Central Drugs Standard Control Organization (CDSCO), these devices have a significant impact on patient health and therefore require strict regulatory approval, detailed technical documentation, and clinical evaluation. Common examples include infusion pumps, bone cements, and hemodialyzers. Manufacturers must comply with rigorous quality management systems and obtain approval from the Central Licensing Authority to ensure safety, performance, and effectiveness before these devices can be marketed in India.'
  },
  'class-d': {
    title: 'Class D Medical Device',
    content: 'Class D Medical Devices are categorized as high-risk devices under the Medical Devices Rules, 2017 in India. Regulated by the Central Drugs Standard Control Organization (CDSCO), these devices are critical to patient survival and require the highest level of regulatory scrutiny, clinical evaluation, and approval. Common examples include cardiac stents, heart valves, implantable defibrillators, and life-supporting devices. Manufacturers must undergo rigorous approval processes, including detailed clinical trials, quality audits, and strict compliance with CDSCO guidelines to ensure maximum safety, effectiveness, and performance before entering the Indian market.'
  },
   'iso-13485': {
    title: 'ISO 13485',
    content: 'ISO 13485 is an internationally recognized quality management system (QMS) standard specifically designed for the medical device industry. It outlines the requirements for manufacturers to consistently design, develop, produce, and deliver medical devices that meet regulatory and customer expectations. ISO 13485 focuses on risk management, process control, regulatory compliance, and product traceability throughout the lifecycle of a medical device. It is widely adopted across global markets and is often a mandatory requirement for regulatory approvals by authorities such as the Central Drugs Standard Control Organization (CDSCO), USFDA, and EU MDR. Certification to ISO 13485 demonstrates a company’s commitment to quality, safety, and continuous improvement in medical device manufacturing.'
  },
    'iso-14971': {
    title: 'ISO 14971',
    content: 'ISO 14971 is an internationally recognized standard for risk management in the medical device industry. It provides a structured framework for identifying, evaluating, controlling, and monitoring risks associated with medical devices throughout their entire lifecycle. ISO 14971 is essential for ensuring patient safety and regulatory compliance, as it requires manufacturers to analyze potential hazards, assess risk levels, implement mitigation measures, and maintain continuous risk evaluation. It is widely accepted by global regulatory authorities such as the Central Drugs Standard Control Organization (CDSCO), USFDA, and EU MDR, making it a critical requirement for medical device approval and market access worldwide.'
  },
      'iec-62304': {
    title: 'IEC 62304',
    content: 'IEC 62304 is an international standard that defines the software life cycle requirements for medical device software and Software as a Medical Device (SaMD). It provides a structured framework for the development, maintenance, risk management, and quality assurance of medical software throughout its lifecycle. IEC 62304 is essential for ensuring that medical software is safe, reliable, and compliant with global regulatory requirements. It classifies software into safety classes (Class A, B, and C) based on risk and requires strict documentation, validation, and testing processes. The standard is widely recognized by regulatory authorities such as the Central Drugs Standard Control Organization (CDSCO), USFDA, and EU MDR, making it critical for software-based medical device approvals worldwide.'
  },
       'iec-62366-1': {
    title: 'IEC 62366-1',
    content: 'IEC 62366-1 is an international standard that focuses on the application of usability engineering to medical devices. It provides a structured framework for identifying, analyzing, and minimizing use-related risks to ensure that medical devices are safe and easy to operate for intended users. IEC 62366-1 emphasizes human factors engineering, user interface design, and usability validation throughout the product lifecycle. It requires manufacturers to evaluate how users interact with devices, reduce the risk of user errors, and improve overall device safety and performance. This standard is widely recognized by global regulatory authorities such as the Central Drugs Standard Control Organization (CDSCO), USFDA, and EU MDR, making it essential for regulatory compliance and market approval of medical devices.'
  },
     'estar': {
    title: 'eSTAR (electronic Submission Template And Resource)',
    content: 'eSTAR (electronic Submission Template And Resource) is an interactive submission template developed by the U.S. Food and Drug Administration (FDA) to streamline the preparation and submission of medical device applications such as 510(k), De Novo, and Pre-Submissions. It is designed to guide manufacturers through the regulatory process by ensuring that all required information is provided in a structured and standardized format. eSTAR helps improve submission quality, reduce review time, and minimize deficiencies by incorporating built-in validation checks and automated formatting. It supports efficient communication between applicants and regulators, making it an essential tool for companies seeking medical device approval in the United States. eSTAR aligns with FDA regulatory requirements and is becoming a mandatory format for many device submissions.'
  },
     'pma': {
    title: 'PMA (Premarket Approval)',
    content: 'PMA (Premarket Approval) is the most stringent regulatory pathway used by the U.S. Food and Drug Administration (FDA) for approving high-risk (Class III) medical devices. It requires manufacturers to provide comprehensive scientific evidence demonstrating the safety, effectiveness, and clinical performance of a device before it can be marketed in the United States. The PMA process involves detailed technical documentation, clinical trial data, risk analysis, and manufacturing information. It includes a rigorous review by the FDA to ensure that the benefits of the device outweigh potential risks. PMA approval is mandatory for life-supporting, life-sustaining, or high-risk medical devices, making it a critical step for market entry in the U.S. healthcare system.'
  },
    'gspr': {
    title: 'GSPR (General Safety and Performance Requirements)',
    content: 'GSPR (General Safety and Performance Requirements) refers to the essential set of requirements defined under the EU Medical Device Regulation (EU MDR 2017/745) that all medical devices must meet before being placed on the European market. GSPR ensures that devices are designed and manufactured to be safe, effective, and perform as intended throughout their lifecycle. GSPR covers key aspects such as risk management, clinical evaluation, biocompatibility, usability, labeling, and post-market surveillance. Manufacturers must demonstrate compliance by preparing a detailed GSPR checklist and supporting technical documentation. Meeting GSPR requirements is mandatory for CE marking and is a critical step in achieving regulatory approval in the European Union.'
  },
      'cer': {
    title: 'CER (Clinical Evaluation Report)',
    content: 'CER (Clinical Evaluation Report) is a critical document required under the EU Medical Device Regulation (EU MDR 2017/745) that demonstrates the safety, performance, and clinical benefits of a medical device. It is prepared by systematically analyzing clinical data from scientific literature, clinical investigations, and post-market surveillance. The CER evaluates whether a medical device achieves its intended purpose while ensuring patient safety and minimizing risks. It includes clinical evidence, risk-benefit analysis, and compliance with applicable regulatory requirements. Preparing a comprehensive CER is mandatory for CE marking and is essential for gaining approval to market medical devices in the European Union.'
  },
        'pms': {
    title: 'PMS (Post-Market Surveillance)',
    content: 'PMS (Post-Market Surveillance) refers to the systematic process of monitoring the safety, performance, and effectiveness of medical devices after they have been released into the market. It is a key requirement under global regulations such as EU MDR 2017/745 and is also recognized by authorities like the Central Drugs Standard Control Organization (CDSCO) and USFDA. PMS involves collecting and analyzing real-world data, including customer feedback, complaints, adverse events, and device performance trends. It helps manufacturers identify risks, implement corrective actions, and ensure continuous compliance with regulatory standards. A robust PMS system is essential for maintaining product safety, improving quality, and supporting long-term market approval of medical devices.'
  },
        'pmcf': {
    title: 'PMCF (Post-Market Clinical Follow-up)',
    content: 'PMCF (Post-Market Clinical Follow-up) is a continuous process of collecting and evaluating clinical data on a medical device after it has been placed on the market. It is a key requirement under the EU Medical Device Regulation (EU MDR 2017/745) and supports ongoing clinical evaluation and safety monitoring. PMCF focuses on gathering real-world evidence to confirm the device’s safety, performance, and clinical benefits over time. It includes activities such as clinical studies, patient follow-ups, surveys, and data analysis. PMCF works as part of the broader PMS (Post-Market Surveillance) system and helps manufacturers identify risks, improve product quality, and maintain regulatory compliance. Authorities like the Central Drugs Standard Control Organization (CDSCO) and global regulators also recognize the importance of continuous clinical monitoring for high-risk devices.'
  },
        'psur': {
    title: 'PSUR (Periodic Safety Update Report',
    content: 'PSUR (Periodic Safety Update Report) is a regulatory document required under the EU Medical Device Regulation (EU MDR 2017/745) for monitoring the ongoing safety and performance of medical devices after they are placed on the market. It is part of the Post-Market Surveillance (PMS) system and is mandatory for Class IIa, IIb, and III medical devices. The PSUR compiles and analyzes data such as adverse events, customer complaints, trend analysis, and corrective actions. It provides a comprehensive summary of a device’s benefit-risk profile and ensures that manufacturers maintain continuous compliance with regulatory requirements. Regular submission and updating of PSUR help demonstrate product safety, improve device performance, and support long-term market approval. Authorities like the Central Drugs Standard Control Organization (CDSCO) and global regulators emphasize the importance of ongoing safety monitoring for medical devices.'
  },
  'eu-mdr': {
    title: 'EU MDR (Medical Device Regulation)',
    content: 'EU MDR (Medical Device Regulation 2017/745) is the comprehensive regulatory framework governing medical devices in the European Union. It replaces the earlier Medical Device Directive (MDD) and introduces stricter requirements for safety, clinical evaluation, risk management, and post-market surveillance. EU MDR ensures that all medical devices placed on the EU market meet high standards of quality, safety, and performance. It applies to manufacturers, importers, and distributors, requiring detailed technical documentation, clinical evidence, and conformity assessments through notified bodies. The regulation also emphasizes transparency, traceability, and continuous monitoring of devices throughout their lifecycle.'
  },
  'anvisa': {
    title: 'Anvisa (Agência Nacional de Vigilância Sanitária)',
    content: 'ANVISA (Agência Nacional de Vigilância Sanitária) is Brazil’s national health regulatory authority responsible for ensuring the safety, quality, and effectiveness of drugs, medical devices, food products, and cosmetics. Operating under the Brazilian Ministry of Health, ANVISA plays a key role in protecting public health through strict regulatory oversight and compliance enforcement. For medical devices, ANVISA regulates product registration, clinical evaluation, manufacturing standards, and post-market surveillance. It requires companies to meet Brazilian Good Manufacturing Practices (BGMP) and obtain proper approvals before marketing products in Brazil. ANVISA is recognized globally for its rigorous regulatory framework and alignment with international standards.'
  },
  'usfda': {
    title: 'USFDA (U.S. Food and Drug Administration)',
    content: 'USFDA (U.S. Food and Drug Administration) is the primary regulatory authority in the United States responsible for ensuring the safety, effectiveness, and security of drugs, medical devices, biologics, and food products. Operating under the U.S. Department of Health and Human Services, the USFDA plays a critical role in protecting public health through strict regulatory oversight. For medical devices, the USFDA regulates product approval, clinical trials, manufacturing standards, and post-market surveillance. It requires manufacturers to comply with quality system regulations (QSR), submit premarket approvals (PMA) or 510(k) clearances, and maintain ongoing compliance to ensure device safety and performance in the U.S. market.'
  },
  'cdsco': {
    title: 'CDSCO (Central Drugs Standard Control Organization) ',
    content: 'The Central Drugs Standard Control Organization (CDSCO) is the official drug regulatory authority in India responsible for the approval and regulation of drugs, medical devices, and cosmetics. Operating under the Ministry of Health and Family Welfare, CDSCO ensures that all healthcare products meet required safety, quality, and effectiveness standards. Key functions of CDSCO include new drug approval, clinical trial supervision, drug import regulation, and enforcement of the Drugs and Cosmetics Act. It plays a vital role in maintaining public health and ensuring safe medical practices in India.'
  },
  'samd': {
    title: 'SaMD (Software as a Medical Device)',
    content: 'SaMD (Software as a Medical Device) refers to software that is intended to perform medical functions without being part of a physical medical device. It can run on computers, mobile apps, or cloud platforms and is used for diagnosis, monitoring, treatment, or prevention of diseases. In India, SaMD is regulated under the Central Drugs Standard Control Organization (CDSCO) as per the Medical Devices Rules, 2017, depending on its risk classification. Globally, regulatory bodies like the USFDA and EU MDR also provide guidelines for SaMD to ensure safety, clinical performance, cybersecurity, and data protection. Manufacturers must comply with quality standards, clinical validation, and regulatory requirements before deploying SaMD solutions in healthcare.'
  }
};

export default function InfoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? INFO_DATA[slug.toLowerCase()] : null;

  if (!data) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-brand-deep">Information Not Found</h1>
        <Link to="/" className="text-brand-teal hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <SEO 
        title={data.title} 
        description={data.content.substring(0, 160)} 
        canonical={`/information/${slug}`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-brand-teal font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="mr-2" size={20} /> Back to Home
        </Link>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <h1 className="text-4xl font-extrabold text-brand-deep mb-8">{data.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{data.content}</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-brand-deep mb-4">Need Regulatory Assistance?</h3>
            <p className="text-gray-600 mb-6">Our experts at RAC Forge can help you navigate the complexities of {data.title} and other regulatory requirements.</p>
            <Link to="/contact" className="inline-block bg-brand-deep text-white px-8 py-3 rounded-full font-bold hover:bg-brand-teal transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
