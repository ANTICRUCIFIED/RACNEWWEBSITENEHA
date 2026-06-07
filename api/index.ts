import os from 'os';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import admin from 'firebase-admin';
import dotenv from 'dotenv';
import fs from 'fs';
import nodemailer from 'nodemailer';
import { upload, processDocument, retrieveRelevantContext, documentStore, preloadStaticDocuments, appendLearnedKnowledge } from './rag.js';
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'sterilization-validation',
    title: 'Sterilization Validation for Medical Devices',
    excerpt: 'Sterilization validation is essential for sterile medical devices. Understanding sterilization methods and validation requirements is crucial for ensuring regulatory compliance (CDSCO, USFDA, EU MDR) and patient safety.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-sterilization.webp',
    date: '25 Oct 2025',
    category: 'Technical',
    author: 'RAC Forge Private Limited Team',
    tags: ['Sterilization validation', 'Medical device sterilization', 'ISO 13485', 'Risk Management', 'IQ OQ PQ', 'Biological Evaluation', 'Essential Requirement', 'Medical Devices'],
    content: `
Sterilization validation is essential for sterile medical devices. Understanding sterilization methods and validation requirements is crucial for ensuring regulatory compliance (CDSCO, USFDA, EU MDR) and patient safety.

## Sterility Assurance Level (SAL)
The basis of sterilization validation is achieving a Sterility Assurance Level of 10⁻⁶. This means there is a one-in-a-million chance of a viable microorganism surviving sterilization.

## Common Sterilization Methods

### Ethylene Oxide (EO) Sterilization
- Suitable for heat-sensitive devices
- Requires thorough aeration to remove residues
- Validation according to ISO 11135
- Must address EO residues according to ISO 10993-7

### Radiation Sterilization
- Gamma or E-beam irradiation
- Suitable for single-use devices
- Validation according to ISO 11137 series
- Material compatibility considerations

### Moist Heat Sterilization
- Steam sterilization in autoclaves
- Suitable for heat-stable devices
- Validation according to ISO 17665 series
- Commonly used for reusable devices

### Vaporized Hydrogen Peroxide
- Low-temperature alternative
- Limited to certain device types
- Validation according to ISO 22441
- Material compatibility considerations

## Validation Process (IQ/OQ/PQ)
The validation process is a cornerstone of a quality system compliant with ISO 13485.

### Installation Qualification (IQ)
- Equipment installation verification
- Calibration and documentation review
- Utility requirements confirmation

### Operational Qualification (OQ)
- Process parameter verification
- Empty chamber studies
- Confirmation of equipment functionality

### Performance Qualification (PQ)
- Product-specific validation
- Biological indicator studies
- Multiple successful runs to ensure reproducibility

## Packaging Validation
Sterile barrier system validation according to ISO 11607:
- Material qualification
- Package integrity testing
- Distribution simulation
- Seal strength validation

## Documentation Requirements
Complete sterilization validation as part of your Risk Management file includes:
- Validation protocols and reports
- Biological indicator data
- Process parameter records
- Equipment qualification documents
- Routine monitoring procedures

## Ongoing Monitoring and Control
Post-validation requirements:
- Routine process monitoring
- Biological indicator testing
- Parameter range verification
- Change control procedures
- Annual validation review
    `
  },
  {
    id: 'biocompatibility-testing',
    title: 'Biocompatibility Testing Strategies for Medical Devices',
    excerpt: 'Biocompatibility assessment, or Biological Evaluation, is a key Essential Requirement for medical device regulatory approval. Knowing ISO 10993 standards and using effective testing strategies is crucial for successful submissions.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp',
    date: '24 Oct 2025',
    category: 'Testing',
    author: 'RAC Forge Private Limited Team',
    tags: ['Biocompatibility Testing', 'Biological Evaluation', 'Essential Requirement', 'ISO 13485', 'Medical Device Compliance', 'Medical Device Safety', 'Risk Management'],
    content: `
Biocompatibility assessment, or Biological Evaluation, is a key Essential Requirement for medical device regulatory approval. Knowing ISO 10993 standards and using effective testing strategies is crucial for successful submissions.

## The ISO 10993 Framework
The ISO 10993 series offers a systematic approach for Biological Evaluation of medical devices. Part 1 sets up the risk-based framework for determining what testing is needed based on:
- Nature of body contact
- Duration of contact
- Device material composition

## Device Categorization

### By Nature of Contact:
- **Surface devices** (skin, mucous membranes)
- **Externally communicating devices** (blood path, tissue/bone)
- **Implant devices** (tissue, bone, blood)

### By Duration of Contact:
- **Limited** (≤24 hours)
- **Prolonged** (>24 hours to 30 days)
- **Permanent** (>30 days)

## Testing Endpoint Matrix
The ISO 10993-1 matrix shows necessary biological evaluations:
- Cytotoxicity
- Sensitization
- Irritation or intracutaneous reactivity
- Systemic toxicity
- Genotoxicity
- Implantation effects
- Hemocompatibility

## Chemical Characterization (ISO 10993-18)
The modern approach to Biological Evaluation focuses on chemical characterization:
- Material composition analysis
- Extractables and leachables studies
- Risk-based assessment
- Reduced animal testing

## Testing Strategy Development
Effective biocompatibility strategies consider:
- Device materials and manufacturing processes
- Clinical use conditions
- Available historical data
- Chemical characterization results
- Risk Analysis outcomes

## Common Testing Requirements

### Basic Tests:
- Cytotoxicity (ISO 10993-5)
- Sensitization (ISO 10993-10)
- Irritation (ISO 10993-23)
- Systemic toxicity (ISO 10993-11)

### Advanced Tests (as needed):
- Genotoxicity (ISO 10993-3)
- Implantation (ISO 10993-6)
- Hemocompatibility (ISO 10993-4)
- Carcinogenicity (ISO 10993-3)

## Documentation Requirements
Complete Biological Evaluation documentation includes:
- Biological evaluation plan
- Test protocols and reports
- Chemical characterization data
- Risk assessment documentation
- Biological evaluation report

## Conclusion
A well-planned biocompatibility strategy, backed by thorough documentation as part of your Risk Management process, ensures regulatory compliance while making the most of testing resources and timelines.
    `
  },
  {
    id: 'mastering-eu-mdr',
    title: 'Mastering EU MDR Technical Documentation',
    excerpt: 'The European Union’s EU MDR (Medical Device Regulation 2017/745) sets strict rules for technical documentation. Knowing these rules is important for getting CE Marking and accessing markets in Europe.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-eu-mdr.webp',
    date: '23 Oct 2025',
    category: 'Regulatory',
    author: 'RAC Forge Private Limited Team',
    tags: ['CE Marking', 'Clinical Evaluation Report', 'EU MDR', 'GSPR', 'Medical Device Documentation', 'Regulatory Compliance', 'Risk Management', 'User Manual'],
    content: `
The European Union’s EU MDR (Medical Device Regulation 2017/745) sets strict rules for technical documentation. Knowing these rules is important for getting CE Marking and accessing markets in Europe.

## The Technical Documentation Structure
EU MDR Technical Documentation must be organized according to Annex II and III, covering:
- Device description and specifications
- Information provided by the manufacturer
- Design and manufacturing information
- General Safety and Performance Requirements (GSPR)
- Benefit-risk analysis
- Product verification and validation

## Device Description Requirements
Complete device information must include:
- Intended purpose and indications
- Principles of operation
- Technical specifications
- Variants and accessories
- Reference to earlier versions

## General Safety and Performance Requirements (GSPR)
The GSPR checklist (which replaces the previous Essential Requirements) must show compliance with all relevant requirements from Annex I, including:
- Chemical, physical, and biological properties
- Infection and microbial contamination control
- Device design and environmental properties
- Devices with diagnostic or measuring functions
- Protection against radiation
- Electronic programmable systems
- Active devices and connected devices

## Clinical Evaluation Report (CER)
The CER is an essential component that shows:
- Clinical evaluation plan and methodology
- Current knowledge and state of the art
- Analysis of relevant literature
- Evaluation of clinical data
- Conclusions on safety and performance

## Risk Management Documentation
Complete Risk Management according to ISO 13485 and ISO 14971 must include:
- Risk Management plan
- Risk Analysis for all life-cycle phases
- Risk evaluation and control measures
- Evaluation of overall residual risk
- Risk management report

## Post-Market Surveillance
Technical documentation must include plans for:
- Post-market surveillance system
- Post-market clinical follow-up (PMCF)
- Periodic safety update reports (PSUR)
- Vigilance reporting procedures

## Conclusion
Well-prepared technical documentation not only ensures compliance with EU MDR but also shows your commitment to device safety and performance. This builds trust with regulators, notified bodies, and end-users.
    `
  },
  {
    id: 'navigating-usfda-510k',
    title: 'Navigating USFDA’s 510(k) Submission Process',
    excerpt: 'The 510(k) USFDA premarket notification is the most common pathway for Class II medical devices seeking USFDA clearance. Knowing this process is vital for successful market entry in the United States.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-usfda-510k.webp',
    date: '22 Oct 2025',
    category: 'Regulatory',
    author: 'RAC Forge Private Limited Team',
    tags: ['510K USFDA', 'Clinical Evaluation Report (CER)', 'Medical Device Documentation', 'Medical Devices', 'Regulatory Compliance', 'Risk Analysis', 'USFDA'],
    content: `
The 510(k) USFDA premarket notification is the most common pathway for Class II medical devices seeking USFDA clearance. Knowing this process is vital for successful market entry in the United States.

## What is a 510(k)?
A 510(k) is a submission to show that a device is substantially equivalent to a legally marketed predicate device. This pathway requires proving similar intended use and technological characteristics without raising new safety or effectiveness issues.

## The Substantial Equivalence Standard
To establish substantial equivalence, manufacturers must show:
- Same intended use as the predicate
- Same technological characteristics, or
- Different technological characteristics that do not raise new safety questions
- Proof of same safety and effectiveness

## Key Submission Components
A complete 510(k) USFDA submission includes:
- Device description and specifications
- Substantial equivalence comparison
- Performance testing data
- Biological Evaluation information
- Software validation (if applicable)
- Sterilization validation
- Labeling and instructions for use (User Manual)

## The eSTAR Program
Since October 2023, all 510(k) submissions must use the electronic Submission Template And Resource (eSTAR). This interactive PDF:
- Standardizes submission format
- Ensures completeness
- Enables automated verification
- Streamlines USFDA review process

## Common Pitfalls to Avoid
- Insufficient predicate device comparison
- Incomplete performance testing data
- Poorly documented software validation
- Inadequate Risk Analysis
- Non-compliant labeling

## Timeline and Review Process
The USFDA’s statutory review timeline is 90 days, although this may extend with additional information requests. Understanding this timeline helps manufacturers plan their market entry strategy.

## Conclusion
A well-prepared 510(k) submission, backed by thorough documentation and a strategic choice of predicate devices, significantly increases the chances of USFDA clearance and successful market entry.
    `
  },
  {
    id: 'understanding-cdsco-rules',
    title: 'Understanding CDSCO’s Medical Devices Rules, 2017',
    excerpt: 'The Indian MDR (Medical Devices Rules, 2017) set by India’s Central Drugs Standard Control Organization (CDSCO) create a complete regulatory framework for medical devices. Knowing this framework is essential for manufacturers seeking market access in India.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-cdsco-rules.webp',
    date: '21 Oct 2025',
    category: 'Regulatory',
    author: 'RAC Forge Private Limited Team',
    tags: ['CDSCO', 'Import License', 'Indian MDR', 'ISO 13485', 'Loan License', 'Manufacturing License', 'MD-15', 'MD-3', 'MD-5', 'MD-7', 'MD-9', 'Medical Devices', 'Medical Devices Rules 2017', 'Regulatory Compliance', 'Test License'],
    content: `
The Indian MDR (Medical Devices Rules, 2017) set by India’s Central Drugs Standard Control Organization (CDSCO) create a complete regulatory framework for medical devices. Knowing this framework is essential for manufacturers seeking market access in India.

## The Structure of MDR 2017
The Indian MDR 2017 is organized into 12 chapters, 8 schedules, and contains 97 rules with over 40 forms. This organized approach ensures a systematic regulation of medical devices from classification to post-market monitoring.

## Key Chapters Overview
- **Chapter I:** Preliminary definitions and commencement
- **Chapter II:** Device classification and essential principles
- **Chapter III:** Regulatory authorities and bodies
- **Chapter IV:** Manufacturing License requirements
- **Chapter V:** Import License regulations and procedures
- **Chapter VI:** Labeling requirements
- **Chapter VII:** Clinical investigation protocols

## Device Classification System
CDSCO divides medical devices into four risk-based categories:
- **Class A medical Device:** Low risk (e.g., surgical dressings)
- **Class B medical Device:** Low-moderate risk (e.g., hypodermic needles)
- **Class C medical Device:** Moderate-high risk (e.g., bone cements)
- **Class D Medical Device:** High risk (e.g., heart valves)

## Essential Documentation Requirements
Successful CDSCO submissions require thorough documentation including:
- Device Master File (DMF)
- Plant Master File (PMF)
- Quality Management System certificates (e.g., ISO 13485)
- Clinical evidence
- Stability and performance data

## Common Challenges and Solutions
Manufacturers often deal with challenges such as:
- Understanding specific form requirements
- Compiling thorough technical documentation
- Navigating the approval timeline
- Maintaining compliance after approval

## Conclusion
The Indian MDR framework, though comprehensive, offers a clear path for medical device approval in India. With the right understanding and expert guidance, manufacturers can effectively navigate this regulatory landscape.
    `
  },
  {
    id: 'fda-510k-indian-medtech',
    title: 'Why Designing for the U.S. FDA 510(k) Is the Cheapest Way to Win the Indian MedTech Market',
    excerpt: 'Break down the myth that FDA compliance is an expensive luxury for local MSMEs. Explain how a "harmonized dossier" lowers the Total Cost of Ownership (TCO) by eliminating CDSCO rejections and query loops.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-usfda-510k.webp',
    date: '15 Jan 2026',
    category: 'Strategy',
    author: 'RAC Forge Private Limited Team',
    tags: ['USFDA 510k', 'CDSCO', 'Indian MedTech', 'Total Cost of Ownership', 'Harmonized Dossier', 'MSMEs'],
    content: `
Deep inside the Indian medical device ecosystem, an expensive misconception has quietly taken root: that preparing for U.S. FDA 510(k) clearance is an extravagant luxury reserved only for well-funded multinationals or venture-backed enterprises. Local Micro, Small, and Medium Enterprises (MSMEs) consistently view CDSCO licensing as the lower-cost, primary milestone, intending to tackle international regulators only when their bank accounts have grown.

But when you analyze the real economics of a regulatory lifecycle, the opposite is true. Designing and documenting for the U.S. FDA 510(k) from day one is actually the most cost-effective way to secure and dominate the Indian market.

## The Total Cost of Ownership (TCO) of Regulatory Approvals

The traditional approach involves rushing a basic prototype through basic CDSCO documentation checklists. While this looks cheaper on paper, it triggers a cascade of hidden costs:
- **Query Loops & Clarifications:** CDSCO auditors have systematically upgraded their technical capabilities. Simple checklists have been replaced by rigorous scientific reviews. An inadequate dossier triggers multi-month clarification loops, dragging out commercial launch dates.
- **Repeat Testing:** If your initial laboratory assays lack the rigorous protocols (e.g., specific biocompatibility endpoints or electromagnetic compatibility margins) required by the FDA or ISO standards, Indian regulators will reject the reports or ask for fresh, expensive testing.
- **Engineering Debt:** Discovering that your system architecture fails to document software life cycle processes (like IEC 62304) after shipping means expensive, post-market code refactoring.

## How a "Harmonized Dossier" Solves the Equation

A harmonized dossier is a single, robust scientific repository designed to satisfy both international and domestic requirements under a single unified engineering process. By elevating your testing protocols to match FDA guidelines from the start, you obtain a golden dossier. 

When the CDSCO reviews an application supported by a pre-validated, FDA-grade dossier, the submission sails through with zero or minimal technical queries. You bypass the devastating loop of re-testing, re-drafting, and re-submitting—reducing your ultimate time-to-market.

## Building for the Future

For an MSME, every month of delayed commercialization represents lost revenue and burned capital. Investing slightly more upfront in robust software validation protocols, risk assessments (ISO 14971), and biocompatibility plans pays massive dividends in avoiding CDSCO query cycles. When you design for the highest common regulatory denominator, local success is practically guaranteed.
`
  },
  {
    id: 'master-technical-file-global-access',
    title: 'The Multiplier Effect: How to Build One Master Technical File for Global Market Access',
    excerpt: 'A practical guide for R&D teams to bake global standards directly into initial design controls, allowing them to deploy the same technical file across India, Europe, and GHWP markets.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-eu-mdr.webp',
    date: '28 Jan 2026',
    category: 'R&D',
    author: 'RAC Forge Private Limited Team',
    tags: ['Master Technical File', 'Design Controls', 'Global Market Access', 'EU MDR', 'CDSCO', 'GHWP'],
    content: `
For any medical device engineering team, the ultimate efficiency is the "compile once, deploy everywhere" principle. Yet, in regulatory affairs, companies routinely build entirely disconnected files: one for the Indian CDSCO, another for the European Union (EU MDR), and yet another for Global Harmonization Working Party (GHWP) markets. 

This siloed approach is a heavy drain on engineering bandwidth and quality system compliance. To break this loop, R&D teams must harness the multiplier effect by creating a single Master Technical File.

## The Core Concept: Integrated Design Controls

A Master Technical File is not built by copy-pasting documents after a device has been finished. Instead, it is baked directly into the initial product design controls using a unified matrix.

### Phase 1: Harmonized Standards Mapping
Determine the union of all applicable testing standards across target jurisdictions:
- **Electrical Safety:** IEC 60601-1 (including national deviations for US and EU)
- **Usability:** IEC 62366-1
- **Software:** IEC 62304 (Class A, B, or C)
- **Biocompatibility:** ISO 10993-1

### Phase 2: Unified Risk Management (ISO 14971)
Instead of drafting multiple risk sheets, maintain a single, comprehensive Risk Management File that links hazards directly to design specifications, clinical evaluations, and post-market signals.

### Phase 3: The Modular Technical File Layout
Structure your technical file to match the International Medical Device Regulators Forum (IMDRF) table of contents (ToC). This modular layout makes it incredibly easy to extract specific modules for different regulators:
- **Module 1:** Regional Administrative Information (Form MD-3/7/14, Sugam portal data, EU SRN)
- **Module 2:** Device Description & Specifications
- **Module 3:** Non-Clinical Evidence (Biocompatibility, EMC, Sterile barrier tests)
- **Module 4:** Clinical Evidence (Clinical evaluations, literature reviews)
- **Module 5:** Labeling and Instructions

## Achieving Multi-Market Velocity

By structuring your R&D around a single Master Technical File, any engineering change (e.g., swapping a component) is seamlessly updated in one database and automatically cascades across all regulatory submissions. Stop treating regulatory approvals as isolated paperwork tasks—treat them as a unified extension of your core product architecture.
`
  },
  {
    id: 'cdsco-forensic-audit-landscape',
    title: 'The Death of the Regulatory Afterthought: How the CDSCO Swapped Checklists for Forensic Science',
    excerpt: 'Highlight the shift from 2020 administrative checks to 2026 technical scrutiny. Provide actionable insights into what auditors are actually looking for in Biological (BER) and Clinical (CER) Evaluation Reports.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-cdsco-rules.webp',
    date: '10 Feb 2026',
    category: 'Regulatory',
    author: 'RAC Forge Private Limited Team',
    tags: ['CDSCO Audits', 'Clinical Evaluation Report', 'Biological Evaluation Report', 'MDR 2017', 'Forensic Scrutiny'],
    content: `
In the early days of India's Medical Devices Rules (MDR) 2017, securing CDSCO approval was primarily an administrative exercise. An organization would submit a checklist, provide test certificates, run local testing if requested, and wait for confirmation. It was the era of the "regulatory afterthought"—where paperwork was compiled long after the engineering was completed.

In 2026, those days are officially dead. The CDSCO has systematically upgraded its infrastructure, trained its officers, and integrated global best practices. Today, CDSCO audits read much more like forensic investigations.

## The Shift to Forensic Auditing

When a CDSCO or State licensing auditor reads your Device Master File (DMF), they are no longer just looking to see if you have a Biocompatibility Certificate or a Clinical Literature compilation. They are mapping the scientific integrity of your data.

### 1. Biological Evaluation Reports (BER) under Scrutiny
In a modern audit, the inspector will go straight to your biological characterization strategy. They ask:
- Why were these specific materials selected?
- What are the quantitative limits of extractables and leachables based on the patient-contact surface?
- Do you have a certified toxicologist's signature validating the biological risk assessment under ISO 10993-1?

### 2. Clinical Evaluation Reports (CER) with Scientific Integrity
Simply printing out five clinical publications and claiming "substantial equivalence" will trigger an immediate rejection. CDSCO technical committees are checking search queries, literature extraction methodologies, exclusion criteria, and the statistical parity of the comparator device.

## Actionable Steps to Survive the Modern Inspection

To navigate this highly technical, forensic oversight:
- **Traceability Matrices:** Maintain a clear trace from risk analysis hazards to verification and validation data.
- **Expert Authorship:** Biological and clinical evaluation documents must be authored and signed off by qualified clinical experts or toxicologists, not administrative writers.
- **Proactive Gaps Closure:** Never wait for a query. Audit your technical files against international guidelines before submitting them on the Sugam portal.
`
  },
  {
    id: 'audit-ready-dossiers-fourth-schedule',
    title: 'Are You "Audit-Ready"? Moving from Reconstructive Compliance to Pre-Validated Dossiers',
    excerpt: 'Contrast the high-risk habit of scrambling to fix files after a regulatory query lands with the proactive framework of building audit-ready files tied to the Fourth Schedule.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-sterilization.webp',
    date: '25 Feb 2026',
    category: 'Compliance',
    author: 'RAC Forge Private Limited Team',
    tags: ['Fourth Schedule', 'Audit Readiness', 'Sugam', 'CDSCO compliance', 'Pre-Validated Dossiers'],
    content: `
Too many medical device manufacturers operate in a state of "reconstructive compliance." They build a product, compile the bare minimum files to submit an application, and then panic-scramble to manufacture documents, test reports, and tracking matrices when a formal CDSCO query or state audit alert lands.

This high-risk, reactive habit leads to license delays, negative inspection outcomes, and tarnished relationships with regulatory officers. The alternative is a pristine, pre-validated dossier aligned directly with the Fourth Schedule of the Medical Devices Rules, 2017.

## The Pitfalls of Reconstructive Compliance

Scrambling to create missing data or rebuild history during an audit is highly risky. Under forensic scrutiny:
- **Dating Inconsistencies:** Documents created out of order (e.g., verification pre-dating design requirements) are quickly caught during site inspections.
- **Unverified Assertions:** Claiming that a process was validated without direct, raw data trails in the Device History File (DHF) leads to instant non-conformances.
- **Loss of Authority:** If an auditor notices that you are writing documents defensively on-the-fly, they lose confidence in your entire Quality Management System (QMS).

## The Path to Pre-Validated Audit-Readiness

An "audit-ready" organization builds compliance as a continuous, live status, rather than a frantic event. 

### Step 1: Align with the Fourth Schedule
Study the Fourth Schedule requirements thoroughly. Ensure that every single component—from raw material testing records to software release notes—is compiled and organized long before submission.

### Step 2: Continuous Internal Mock Audits
Run regular, independent internal audits to verify that all design, manufacturing, and sterilized logs are complete. Treat every test batch as if it will be examined by a central CDSCO joint-inspection team.

### Step 3: Implement Live QMS Tools
Use modern QMS tools and procedures to preserve a continuous, time-stamped record of all activities. Ensuring that your organization is always "audit-ready" completely removes the stress of regulatory scrutiny and guarantees a smooth license approval path.
`
  },
  {
    id: 'demystifying-iec-62304-software-traceability',
    title: 'Demystifying IEC 62304: Why 70% of SaMD Regulatory Queries Target Software Traceability',
    excerpt: 'Address the primary digital gatekeeper for software-based devices. Explain how developers can build an unbroken chain of data from raw code to clinical risk assessments.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp',
    date: '12 Mar 2026',
    category: 'Software',
    author: 'RAC Forge Private Limited Team',
    tags: ['IEC 62304', 'SaMD', 'Software Traceability', 'Risk Management', 'MedTech'],
    content: `
Software as a Medical Device (SaMD) is transforming healthcare at a breakneck pace. Yet, when SaMD applications are submitted to the USFDA, CDSCO, or EU Notified Bodies, they hit a common roadblock. Industry statistics show that roughly 70% of all technical queries and hold-orders for digital health devices are related to software testing and traceability under IEC 62304.

Let's demystify why this standard is such a persistent bottleneck, and how software development teams can build an unassailable path to compliance.

## The Core Concept of Software Traceability

To standard software engineers, "traceability" means checking git commit logs and pull requests. To a medical device auditor, however, traceability means a pristine, uninterrupted scientific chain:
- **Software User Requirement (SUR)** connects to
- **Software System Requirement (SSR)** which connects to
- **Software Architecture/Component (SW Unit)** which maps to
- **Software Risk Assessment (SRA)** which is verified by
- **Software Unit Test Protocol & Verification Record**

If any link in this chain is broken—for example, if a specific software risk item lacks an associated unit test to prove its mitigation—the entire technical file fails audit criteria.

## Practical Steps to Build a Compliant Software File

### 1. Automate Your Traceability Matrix
Do not try to maintain a massive traceability matrix in a manual Excel spreadsheet. Use modern software tools (or Git integrated setups) that automatically map software requirement keys to code modules and unit test outputs.

### 2. Formally Segment Your Software Safety Class
Identify your software safety class early under IEC 62304:
- **Class A:** No injury possible
- **Class B:** Non-serious injury possible
- **Class C:** Death or serious injury possible

Implementing solid architectural separation can isolate high-risk Class B/C components from the rest of the application, dramatically reducing the burden of testing for your entire codebase.

### 3. Handle Software of Unknown Provenance (SOUP)
If your SaMD imports open-source libraries or third-party APIs, you must explicitly document, risk-analyze, and test these SOUP dependencies. Unmanaged third-party dependencies are one of the most common causes of regulatory rejections.
`
  },
  {
    id: 'cdsco-ai-ml-medtech-requirements',
    title: 'Cracking the "Black Box": Meeting the CDSCO’s Strict Requirements for AI and Machine Learning in MedTech',
    excerpt: 'Focus on the latest guidelines concerning algorithm transparency, data privacy, and cybersecurity in modern connected healthcare.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp',
    date: '30 Mar 2026',
    category: 'AI',
    author: 'RAC Forge Private Limited Team',
    tags: ['CDSCO', 'AI ML', 'Algorithm Transparency', 'Data Privacy', 'Cybersecurity', 'SaMD'],
    content: `
Artificial Intelligence (AI) and Machine Learning (ML) are introducing revolutionary diagnostic and prognostic tools to the modern clinical workbench. However, because AI/ML models operate as "black boxes" whose internal decision pathways can be difficult to audit manually, they face tight scrutinization from the CDSCO and global regulators.

If you are developing an AI-driven medical device, compliance requires much more than a high-accuracy neural network. Here is how to meet the CDSCO’s strict guidelines for AI in MedTech.

## Demanding Algorithm Transparency (Explainable AI)

A common pitfall is submitting a model characterized purely by its ultimate sensitivity and specificity metrics. Auditors demand to see the underlying training framework:
- **Data Lineage:** Where did the clinical training and validation datasets originate? How was bias eliminated across diverse demographic populations?
- **Explainability:** How does the model explain its conclusions to a healthcare practitioner? Incorporating tools like attention heatmaps or decision pathways is critical to securing human-in-the-loop safety approvals.

## Data Privacy and Governance

Connected medical devices handling sensitive patient information must comply with India’s Digital Personal Data Protection (DPDP) Act and global healthcare standards:
- **Anonymization Protocols:** Raw clinical data used for model retraining must be comprehensively anonymized.
- **Explicit Consent:** Secure, audit-ready patient consent logs must manage clinical data lifecycles.

## Rigorous Cybersecurity Defends

Any connected AI solution is an entry point for potential network threats. Your technical dossier must include robust cybersecurity validation:
- **Secure Communication:** Implementation of modern TLS protocols and encryption-at-rest.
- **Penetration Testing:** Robust verification reports proving defense against vulnerabilities and malicious data injections.
`
  },
  {
    id: 'subsequent-importer-entity-change-license',
    title: 'The Suffix Trap: Why Changing to a Private Limited Entity Shouldn’t Kill Your Medical Device License',
    excerpt: 'Unpack the "Importer Paradox". Argue the scientific and operational case for using the Subsequent Importer Scheme (SIS) as a safety anchor during routine corporate restructurings.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-cdsco-rules.webp',
    date: '15 Apr 2026',
    category: 'Operations',
    author: 'RAC Forge Private Limited Team',
    tags: ['Subsequent Importer Scheme', 'Import License', 'Entity Restructuring', 'CDSCO', 'MD-15'],
    content: `
It is a routine corporate scenario: an entrepreneur launches a medical import business under a sole proprietorship, partnership, or LLP. As operations succeed and outside investment looms, they resolve to transition the business to a private limited entity (e.g., changing "RAC Forge Trades" to "RAC Forge Private Limited").

To the legal team, this is a routine file transfer. But to the regulatory affairs officer, this transition represents a dangerous obstacle: the "Importer Paradox." Simply changing the suffix of your company name can legally terminate your hard-won CDSCO MD-15 import authorization, instantly halting customs clearances and stopping supply lines.

Let's look at how to leverage the CDSCO's Subsequent Importer Scheme (SIS) to navigate this entity restructuring safely.

## The Importer Paradox Explained

Under the CDSCO framework, a medical device import license (MD-15) is linked to two specific pieces of legal identification: the foreign manufacturer's manufacturing certificate and the specific local Indian importer entity entity.

Even if the foreign plant remains unchanged and the local management team is identical, a change in business structure or name creates a brand-new corporate entity. Legally, the old license cannot simply be "transferred" to the new entity. Rushing a totally brand new import license from scratch can take six months, leaving your supply chain frozen.

## The Subsequent Importer Scheme (SIS) to the Rescue

Rather than restarting the entire submission process, smart organizations use the Subsequent Importer pathway as a safety anchor:
- **Shared Master Technical Files:** The subsequent importer application references the parent technical dossier already reviewed and approved by the CDSCO under the previous license.
- **Accelerated Verification:** CDSCO reviews primarily the change in administrative authorizations rather than re-evaluating the complete non-clinical and clinical scientific records.

## Planning the Corporate Transition

Never announce a corporate name change to customs authorities before preparing your regulatory strategy. Keep your existing entity active to clear legacy shipments while your regulatory advisor runs the subsequent importer sequence to transfer the licenses systematically.
`
  },
  {
    id: 'beyond-nabl-globac-testing-parity',
    title: 'Beyond NABL: Understanding GLOBAC and International Parity in Medical Device Testing',
    excerpt: 'Educate laboratories, procurement boards, and manufacturers on the international framework of mutual recognition (ILAC/APAC/GLOBAC). Detail how to challenge institutional inertia and bypass testing bottlenecks.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-sterilization.webp',
    date: '05 May 2026',
    category: 'Testing',
    author: 'RAC Forge Private Limited Team',
    tags: ['NABL testing', 'GLOBAC', 'Mutual Recognition', 'ILAC', 'CDSCO testing'],
    content: `
When preparing a CDSCO submission or participating in government procurement tenders in India, companies are met with a dogmatic demand: "All medical device testing reports must be from local NABL-accredited laboratories."

While NABL (National Accreditation Board for Testing and Calibration Laboratories) is indeed the premier accreditation body in India, refusing to accept equivalent international laboratory data is a classic sign of institutional inertia. It creates artificial testing bottlenecks, increases costs, and delays access to lifesaving technologies. Let's look at the international framework of mutual recognition and how manufacturers can establish test parity under GLOBAC and ILAC.

## The Global Ecosystem of Mutual Recognition

Accreditation bodies do not operate in isolation. They are knit together by high-level international organizations that govern mutual recognition agreements (MRAs):
- **ILAC (International Laboratory Accreditation Cooperation):** The global authority that coordinates testing laboratory accreditations.
- **APAC (Asia Pacific Accreditation Cooperation):** Coordinates regional mutual recognition.
- **GLOBAC / APAC MRA Signatories:** Both NABL and top international equivalent boards (like A2LA, ANAB, UKAS, and DAkkS) are full, equal signatories of these agreements.

Legally, under these mutual agreements, a test report issued by an APAC/ILAC-signatory accredited lab anywhere in the world carries the same scientific value and technical parity as an NABL-certified report.

## How to Challenge Local Testing Inertia

If a hospital board, regulatory committee, or procurement agency rejects your high-quality international testing because "it's not from NABL":
- **Provide MRA Certifications:** Attach the official ILAC/APAC membership certificates showing both NABL and the foreign laboratory’s accreditation body as co-signatories of mutual recognition.
- **Leverage National Standards:** Cite Central CDSCO notifications that recognize testing performed in laboratories accredited by ILAC-signatory bodies.
- **Collaborate Upfront:** Never accept an improper rejection due to simple bureaucratic confusion. Presenting a solid legal and scientific case bypasses unnecessary local re-testing fees and delays.
`
  },
  {
    id: 'regional-medtech-msme-documentation-gap',
    title: 'From the Hinterlands to New Delhi: Bridging the "Documentation Gap" for Regional MedTech MSMEs',
    excerpt: 'Celebrate the expansion of the "Make in India" spirit into emerging industrial clusters outside traditional tier-1 tech hubs. Focus on giving local engineering talent the "regulatory language" required to match global multinational standards.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-cdsco-rules.webp',
    date: '20 May 2026',
    category: 'Ecosystem',
    author: 'RAC Forge Private Limited Team',
    tags: ['MSMEs', 'Make in India', 'Documentation Gap', 'Regional Clusters', 'CDSCO'],
    content: `
The "Make in India" initiative has successfully ignited a dynamic medical manufacturing movement across the country. Outstanding engineering and manufacturing talent is springing up far outside traditional tier-1 commercial hubs like Bengaluru, Chennai, or Mumbai. Exceptional medical hardware is now designed and built in emerging regional clusters from the hinterlands of Himachal Pradesh and Gujarat to central and eastern industrial corridors.

However, as these regional MSMEs attempt to transition from regional prototypes to state and central approvals in New Delhi, they encounter a critical bottleneck: the "Documentation Gap."

## Understanding the "Documentation Gap"

Designing a highly reliable physical medical device is a major accomplishment. However, building the extensive, scientific trail of documentation required to prove its safety is a completely different discipline. Many regional engineering teams lack the specific regulatory terminology to articulate their design controls:
- **The Design History File (DHF):** Missing chronological development reviews and formal risk parameters.
- **Device Master Record (DMR):** Lacking verified material characterization data.
- **Usability Records:** Developing devices without structured human factor reviews.

This documentation gap is not a failure of engineering talent—it is simply a difference in vocabulary.

## Bridging the Gap

To help regional innovators successfully match and beat international multinational standards:
- **On-Site Training:** Local manufacturing clusters must establish specialized training programs to teach engineers how to document their work under ISO 13485 guidelines.
- **Providing Checklists & Templates:** Equiping R&D teams with clean, standardized, pre-vetted compliance structures eliminates the fear of blank pages.
- **Strategic Advisory Collaborations:** Partnering on-site with expert consultants (like RAC Forge) allows local teams to focus purely on high-quality manufacturing while external experts build and defend the scientific dossiers.
`
  },
  {
    id: 'publishing-academic-evidence-cureus-medtech',
    title: 'Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes',
    excerpt: 'An analysis of our publication in the Cureus Journal of Medical Science examining the "importer paradox" and proposing a shift from the legal wrapper to the safety anchor for medical devices.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-usfda-510k.webp',
    date: '10 Dec 2025',
    category: 'Clinical',
    author: 'Atul Sharma Sankhyayan',
    tags: ['Cureus Journal', 'Subsequent Importer Scheme', 'SIS', 'Importer Paradox', 'CDSCO', 'Medical Device Safety'],
    content: `
An essential article co-authored by our founder, Atul Sharma Sankhyayan, and published in the **Cureus Journal of Medical Science**, addresses a crucial friction point in modern medical device regulation: [Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes](https://www.cureus.com/articles/489452-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes#!/).

As the Indian medical device ecosystem reaches a state of rigorous maturity, a significant bottleneck has emerged between corporate governance and regulatory oversight. Currently, when an established importer with an unblemished compliance history undergoes a routine constitutional restructuring (such as transitioning from a partnership or sole proprietorship to a private limited company), the regulator often treats them as a completely brand-new entrant—mandating a fresh license application. This requirement effectively ignores the entity’s long history of post-market surveillance (PMS) and safety compliance.

We refer to this systemic bottleneck as the **"Importer Paradox."**

## Safety Anchor vs. Legal Wrapper

Our Cureus paper proposes a fundamental shift in regulatory philosophy: prioritizing the **"Safety Anchor"** of the medical device over the **"Legal Wrapper"** of the corporate entity. 

- **The Safety Anchor:** The device's technical dossier, biological evaluation, clinical safety records, and foreign manufacturing site details—none of which change during an internal business restructuring.
- **The Legal Wrapper:** The administrative corporate entity name, registered office address, or entity suffix (e.g., changing from a LLP to Private Limited) which does not impact the biological, mechanical, or clinical safety of the device.

By treating corporate restructuring as a minor administrative update rather than a trigger for heavy technical re-review, regulators can prevent supply-chain disruptions without compromising patient safety.

## Proposing a Streamlined Three-Step Blueprint

To resolve this bottleneck, we outline a structured three-step regulatory transition:
1. **Formal Declaration of Continuity:** Crucial documentation certifying that the underlying medical device, manufacturing facilities, key quality personnel, and sterilization processes remain entirely unchanged.
2. **Integration Through the SIS Portal:** Seamlessly linking the new entity suffix to the parent technical dossier via the CDSCO's Subsequent Importer Scheme (SIS).
3. **Targeted Administrative Audit:** A brief administrative review by regulatory authorities to verify license transfer parameters, without re-opening verified technical or scientific testing.

Leveraging the academic rigor of peer-reviewed publishing allows us to spark institutional reform that saves medical device startups and importers months of expensive downtime. Read the full peer-reviewed study on the official [Cureus Publication Portal](https://www.cureus.com/articles/489452-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes#!/).
`
  },
  {
    id: 'saas-medtech-podcast-elendi-labs',
    title: 'Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge',
    excerpt: 'Tune in to our comprehensive masterclass session and featured podcast with Elendi Labs (Elednilabs), detailing exact registration sequences, FIFO timelines, and compliance structures.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp',
    date: '15 Nov 2025',
    category: 'Podcast',
    author: 'Atul Sharma Sankhyayan',
    tags: ['Elendi Labs', 'Podcast', 'CDSCO compliance', 'Sugam Portal', 'FIFO queue', 'Importer Paradox'],
    content: `
We recently joined forces with **Elendi Labs (Elednilabs)** for an expansive expert analysis outlining the operational realities of registering medical devices in India: [Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited](https://elendilabs.com/en/articles/ind-navigating-medical-device-registration-in-india-an-in-depth-guide-to-CDSCO-compliance-with-RAC-Forge-Private-Limited-4ZEviANhOthe09s6NL8SrH).

In this deep-dive discussion, our founder, Atul Sharma Sankhyayan, provides a clear, actionable guide for both domestic and international manufacturers targeting the rapidly expanding Indian MedTech sector.

## Navigating the CDSCO Sugam Portal Ecosystem

The initial gatekeeper for setting up supply chains in India is the central **Sugam Portal**. The session details the structural modules manufacturers must establish inside the portal, including setting up wholesale licenses, registering foreign manufacturing sites under Form MD-14, and securing import registrations.

## Core Operational Realities: Timelines & queue mechanics

A common mistake is assuming that regulatory feedback is immediate. During the podcast, we analyze the underlying FIFO queue mechanics:
- **FIFO Processing Priority:** CDSCO operates on a strict **First-In, First-Out (FIFO)** processing queue. Rushing your submission when you need a license is a recipe for delay.
- **The 4 to 5-Month Timeline:** A typical application path through Form MD-14 with joint inspections generally spans 4 to 5 clean months of administrative queueing. Proactively planning around this timeline is essential to prevent missed product launch windows.
- **Preparing for Joint Inspections:** Coordinating with state and central regulators ahead of the scheduled audit ensures a seamless single-turn verification.

## Overcoming the Importer Paradox

Another primary topic of our podcast is resolving the "importer paradox." Corporate legal adjustments should never freeze active shipments of crucial lifesaving hardware. We detail the operational steps to leverage the CDSCO Subsequent Importer Scheme as a safety bridge to secure continuous import access under Form MD-15 during corporate restructuring.

Discover the detailed registration structures, government fee levels, and technical file requirements by reading our featured expert guide and tuning into our podcast with Elendi Labs directly on the official [Elendi Labs Article Hub](https://elendilabs.com/en/articles/ind-navigating-medical-device-registration-in-india-an-in-depth-guide-to-CDSCO-compliance-with-RAC-Forge-Private-Limited-4ZEviANhOthe09s6NL8SrH).
`
  },
  {
    id: 'optimizing-your-510k-filing-strategic-pathways-to-fda-clearance',
    title: 'Optimizing Your 510(k) Filing: Strategic Pathways to FDA Clearance',
    excerpt: 'Navigate the complexities of USFDA premarket notifications with our comprehensive strategic guide. Learn how to optimize predicate device selection, leverage Q-Submissions, and streamline performance testing for faster clearance.',
    image: 'https://anticrucified.github.io/MyWebP_Images/images/blog-usfda-510k.webp',
    date: '02 Jun 2026',
    category: 'Regulatory',
    author: 'Atul Sharma Sankhyayan',
    tags: ['USFDA 510k', 'FDA Clearance', 'Predicate Selection', 'Q-Submission', 'Performance Testing', 'Biocompatibility'],
    content: `
Submitting a 510(k) premarket notification to the United States Food and Drug Administration (FDA) is the most prominent pathway for gaining commercial clearance for Class II medical devices. However, because of the ever-evolving regulatory landscape and the implementation of interactive templates like the eSTAR program, manufacturers often face costly, multi-month delay cycles due to formatting rejections, inadequate predicate mappings, or testing gaps.

Optimizing your 510(k) filing is not just a matter of compiling papers after design development—it is an active, strategic engineering discipline. Here is how leading MedTech teams build streamlined pathways to secure rapid USFDA clearance.

## 1. Strategic Predicate Selection: The Foundation of Substantial Equivalence

Under Section 510(k) of the Food, Drug, and Cosmetic Act, a device is cleared based on its **Substantial Equivalence (SE)** to a legally marketed predicate device. Choosing the right predicate is a high-stakes decision:
*   **Intended Use Alignment:** The primary predicate must have the exact same clinical indications and intended use.
*   **Technological Characteristics Comparability:** If your device introduces new materials, software options, or energy delivery methods, you must prove that these differences do not raise new safety or efficacy questions.
*   **Leveraging Multiple Predicates:** While the FDA prefers a single primary predicate, you can identify "reference devices" or secondary predicates to support specific technological deviations (e.g., justifying a new wireless communication module or biocompatible polymer).

## 2. Proactive Pre-Submission Engagement (The Q-Sub Program)

One of the biggest mistakes R&D teams make is submitting a 510(k) blind, without formal regulatory feedback on their testing plans. The **Q-Submission (Q-Sub)** program is a highly valuable, cost-free mechanism to get direct feedback from FDA reviewers before making a formal submission.

Use the Q-Submission pathway to get agreement on:
*   The selection and justification of your predicate device.
*   Your proposed clinical trial design (if clinical data is required).
*   Specific non-clinical testing protocols (such as animal study methodologies or complex biocompatibility profiles under ISO 10993).
*   Cybersecurity verification protocols for connected software (SaMD).

Securing early consensus with the FDA practically eliminates the risk of an unexpected "Hold for Additional Information" once your 510(k) is under active review.

## 3. Designing for the eSTAR Template

As of October 2023, the FDA mandates the use of the **electronic Submission Template And Resource (eSTAR)** for all 510(k) submissions. To benefit from this system:
*   **Automated Validation:** The eSTAR PDF is self-validating and prevents you from submitting incomplete dossiers. Maintain an unbroken chain of documentation to pass its built-in validation checks instantly.
*   **Structured Technical Attachments:** Structure your test reports, labeling schemas, and software summaries with precise bookmarking. Clean formatting enables reviewing officers to quickly cross-reference datasets.

## 4. Uncompromised Performance and Biocompatibility Testing

When compiling your technical files, do not skim on raw scientific evidence:
*   **Biocompatibility (ISO 10993-1):** Provide a comprehensive Biological Evaluation Plan (BEP) and Biological Evaluation Report (BER). In 2025/2026, FDA reviewers carry out forensic chemical characterization assessments (ISO 10993-18 Extractables and Leachables) rather than relying purely on simple in vitro assays.
*   **Software Life Cycle (IEC 62304):** connected systems must present complete software design documentation, hazard assessments, and robust cybersecurity threat-mitigation protocols.
*   **Electrical Safety & EMC (IEC 60601-1):** Secure certifications and full laboratory raw datasets from accredited testers conforming directly to international standards.

## Conclusion

Securing USFDA 510(k) clearance is a major commercial catalyst, granting you access to the world’s largest healthcare market. By incorporating strategic design controls, pre-validating testing benchmarks through Q-submissions, and aligning strictly with the eSTAR structure, you can bypass query loops and gain market clearance with maximum velocity.
`
  }
];

dotenv.config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

  // SSL / HTTPS redirect middleware to satisfy SEO checklist (only redirects GET/HEAD requests to prevent breaking POST API fetches, and excludes all /api/ pathways)
  app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production' && (req.method === 'GET' || req.method === 'HEAD') && !req.path.startsWith('/api/') && req.headers['x-forwarded-proto'] === 'http') {
      return res.redirect(301, `https://${req.get('host')}${req.originalUrl}`);
    }
    next();
  });

  const getGoogleGenAI = (customKey?: string) => {
    const apiKey = customKey || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not defined and no custom key provided.');
    }
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  // Helper for generating high-quality local fallback responses when the Gemini API is rate-limited or quota is exceeded
  const getLocalFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();
    const intro = '';

    // CDSCO
    if (q.includes('indian mdr') || q.includes('cdsco') || q.includes('sugam') || q.includes('licens') || q.includes('md-14') || q.includes('md-15') || q.includes('md-3') || q.includes('md-7') || q.includes('md-5') || q.includes('md-9') || q.includes('wholesale') || q.includes('md-42') || q.includes('import') || q.includes('manufact') || q.includes('loan') || q.includes('iaa') || q.includes('authorized agent') || q.includes('fee')) {
      return intro + `### CDSCO SUGAM Portal & Indian MDR 2017 Pathways

RAC Forge Private Limited is your premium, hands-on partner for CDSCO registrations. Under the **Indian Medical Device Rules (MDR) 2017**, import and manufacturing activities require strategic compilation on the SUGAM portal.

#### 1. Import Licensing (Form MD-14/15)
For foreign manufacturers importing medical devices into India, the registration of the manufacturing site and distinct devices is filed using **Form MD-14** (Import License is issued on **Form MD-15**).
Official Government Fees (per CDSCO Guidelines):
*   **Class A Devices**: **$1000 USD** per manufacturing site and **$50 USD** per distinct medical device.
*   **Class B Devices**: **$2000 USD** per manufacturing site and **$1000 USD** per distinct medical device.
*   **Class C Devices**: **$3000 USD** per manufacturing site and **$1500 USD** per distinct medical device.
*   **Class D Devices**: **$3000 USD** per manufacturing site and **$1500 USD** per distinct medical device.

#### 2. Manufacturing Licenses
*   **Class A & B Devices** (Form MD-3/7): Handled directly by State Licensing Authorities (SLA).
*   **Class C & D Devices** (Form MD-5/9): Managed by Central Licensing Authority (CLAA) under the Central Drugs Standard Control Organisation.

#### 3. Loan Licenses & Special Licenses
*   **Loan License (Form MD-4/8 & MD-6/10)**: Lets you outsource production without owning dedicated assembly space.
*   **Test License (Form MD-12/13)**: For importing small batches for evaluation, clinical testing, or calibration.
*   **Wholesale License (Form MD-42)**: For specialized distribution channels of notified medical devices.

We also assist in legal representative duties as your **Indian Authorized Agent (IAA)** to ensure continuous regulatory coverage.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // USFDA
    if (q.includes('usfda') || q.includes('fda') || q.includes('510') || q.includes('510k') || q.includes('listing') || q.includes('predicate') || q.includes('denovo') || q.includes('de novo')) {
      return intro + `### USFDA (U.S. Food and Drug Administration) Submissions

For medical device marketing authorization in the US, RAC Forge Pvt. Ltd. provides complete hardware, code, and dossier-level compliance services.

#### Key FDA Services:
1.  **510(k) Pre-Market Notification**: Demonstration of substantial equivalence to a legally marketed predicate device.
2.  **De Novo Classification**: For novel, low-to-moderate risk devices that lack an eligible predicate on the market.
3.  **Premarket Approval (PMA)**: Rigorous scientific reviews required for high-risk Class III devices.
4.  **Device Master File (DMF)**: Structuring proprietary manufacturing guidelines securely.
5.  **Establishment Registration & Device Listing**: Necessary credentials on the FDA CDRH portal before distribution.

Unlike document brokers, we physically analyze schematics and testing standards (e.g., electrical safety and biocompatibility) to survive the rigorous USFDA audit reviews.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // EU MDR
    if (q.includes('eu') || (q.includes('mdr') && !q.includes('indian')) || q.includes('ce') || q.includes('ce mark') || q.includes('2017/745') || q.includes('ec rep') || q.includes('representative')) {
      return intro + `### European Union Medical Device Regulation (EU MDR 2017/745)

Compliance under the strict European EU MDR guidelines is an engineering and documentation challenge. RAC Forge Pvt. Ltd. guides your hardware and software systems to satisfy MDR criteria.

#### Core EU MDR Execution:
*   **CE-Mark Dossier Compilation**: Technical files, labeling, and translation coordination.
*   **Clinical Evaluation Report (CER)**: Literature searches, clinical data matrices, and hazard analyses.
*   **Risk Management Files**: Compiling files aligning precisely with **ISO 14971** requirements.
*   **Authorized European Representative (EC Rep)**: Appointing legal support within the EU territory to manage official compliance indexes.
*   **Post-Market Surveillance (PMS) & PMCF**: Designing continuous tracking methods.

We bridge technical implementation gaps so you successfully pass Notified Body audits.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // QMS & ISO
    if (q.includes('iso') || q.includes('13485') || q.includes('9001') || q.includes('15189') || q.includes('qms') || q.includes('quality') || q.includes('audit')) {
      return intro + `### Quality Management Systems (QMS) & Auditing

RAC Forge Pvt. Ltd. implements comprehensive operational and documentation architectures for global standard certifications.

#### Structural QMS Implementation:
*   **ISO 13485:2016 Certification**: Designing full Standard Operating Procedures (SOPs), calibration records, validation protocols, and CAPA systems for medical device manufacturing.
*   **ISO 9001:2015**: Adapting high-level organizational pipelines for continuous process improvement.
*   **ISO 15189**: Establishing clinical lab diagnostics safety and device verification schedules.
*   **Pre-audit Simulated Inspections**: Comprehensive gap assessments before official audits (CDSCO, USFDA, or Notified Bodies).

Our team drafts, trains, and monitors actual QMS procedures to ensure absolute passing rates.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // Cleanroom & HVAC
    if (q.includes('cleanroom') || q.includes('clean room') || q.includes('hvac') || q.includes('ot') || q.includes('modular') || q.includes('design') || q.includes('facility') || q.includes('blueprint') || q.includes('pipeline') || q.includes('laminar')) {
      return intro + `### Turnkey Engineering: Cleanrooms, HVAC, and Modular OTs

Unlike purely administrative firms, RAC Forge Pvt. Ltd. boasts a hands-on mechanical and civil engineering division. We construct the medical spaces where safety is verified.

#### Our Turnkey Services:
1.  **Compliance Layouts & Blueprint Design**: Creating workflows and partitions aligned to ISO and CDSCO requirements to prevent cross-contamination.
2.  **Clean Room Manufacturing Space Construct**: High-perf standard paneling, epoxy floorings, and fully localized **Laminar Flow vectors**.
3.  **HVAC Validation & Filtration**: Air handling units (AHUs), HEPA filters, validation tests (particle count, differential pressure) for ISO Class 7 or Class 8 compliance.
4.  **Modular Operation Theatres (Modular OT)**: Complete central medical gas pipeline networks, gas rails, high-grade surgical lights, and clean aesthetic integrations.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // R&D, SaMD, IEC 60601, ISO 10993
    if (q.includes('r&d') || q.includes('research') || q.includes('prototype') || q.includes('samd') || q.includes('iec') || q.includes('62304') || q.includes('60601') || q.includes('hardware') || q.includes('software') || q.includes('testing') || q.includes('biocompatibility') || q.includes('10993') || q.includes('clinical trial') || q.includes('trial')) {
      return intro + `### Advanced Regulatory R&D & Validation Engineering

We assist developers in validating active electrical medical hardware and Software as a Medical Device (SaMD) to survive rigorous physical laboratory tests.

#### Critical Hardware & Software Certifications:
*   **IEC 62304 Compliance (SaMD)**: Lifecycle software architecture, unit testing documentation, and software risk verification.
*   **IEC 60601-1 (Active Electrical Devices)**: Deep hardware debugging, signal isolation safety, isolation barriers, leakage safety, and electromagnetic compatibility (EMC/EMI).
*   **ISO 10993 Biocompatibility Assessment**: Toxicology testing matrices and physical evaluation profiles.
*   **Clinical Trial Infrastructure**: Writing protocols, managing Institutional Ethics Committee (IEC) reviews, and monitoring trial sites.

We make sure your software code and electronics meet the real, raw physical standards before submitting documentation.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // Atul Sharma Sankhyayan & Cureus Journal
    if (q.includes('atul') || q.includes('sharma') || q.includes('sankhyayan') || q.includes('founder') || q.includes('ceo') || q.includes('owner') || q.includes('experience') || q.includes('cureus') || q.includes('article') || q.includes('publication') || q.includes('science') || q.includes('journal') || q.includes('sis') || q.includes('subsequent') || q.includes('podcast') || q.includes('elendi')) {
      return intro + `### CEO and Research: Atul Sharma Sankhyayan

RAC Forge Pvt. Ltd. is led by **Atul Sharma Sankhyayan**, a pioneer with more than a decade of hands-on R&D hardware design and Software as a Medical Device (SaMD) experience.

#### Notable Publications & Industry Contributions:
*   **Cureus Journal of Medical Science (May 2026)**: Atul authored the seminal paper *"Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes"*. This scholarly work explores improvements and optimizations inside the CDSCO's SUGAM registration portal. [Read on Cureus](https://www.cureus.com/articles/234907-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes).
*   **Podcast Showcase**: Featured on ElendiLabs' international podcast **"The Elendi Files"** in the episode: *"Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited"*. The discussion explores the detailed methodologies employed by RAC Forge in physically testing electronic hardware prototypes and validating software logic to achieve regulatory success. [Listen on ElendiLabs](https://elendilabs.com/podcast/navigating-medical-device-registration-india-atul-sharma-sankhyayan).

Atul maintains active oversight over all medical device engineering, cleanroom constructions, and global submissions undertaken by RAC Forge Pvt. Ltd.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // Contact
    if (q.includes('contact') || q.includes('address') || q.includes('location') || q.includes('phone') || q.includes('email') || q.includes('office') || q.includes('himachal') || q.includes('map') || q.includes('where')) {
      return intro + `### RAC Forge Pvt. Ltd. HQ Contact Information

Our core consulting and turnkey mechanical facility is headquartered in Himachal Pradesh:

*   **Corporate Headquarters**: Nanehar, Thural, Palampur, Kangra, Himachal Pradesh, India. PIN Code: 176064
*   **Official Helpline Phone**: **+91 62396 99077**
*   **Official E-mail Channel**: **info@racforge.com**
*   **Main Website Portal**: [https://www.racforge.com](https://www.racforge.com)
*   **Google Search Map Anchor**: [https://share.google/GNUkTQHynWoYKpWY3](https://share.google/GNUkTQHynWoYKpWY3)

Please connect with us to schedule an engineering audit, cleanroom blueprint consultation, or global regulatory briefing.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // Official Links & Regulatory Portals
    if (q.includes('link') || q.includes('website') || q.includes('url') || q.includes('official') || q.includes('resource') || q.includes('portal') || q.includes('external') || q.includes('reference') || q.includes('page') || q.includes('address') || q.includes('pdf') || q.includes('download') || q.includes('guidance') || q.includes('standard') || q.includes('rule') || q.includes('document')) {
      return intro + `### 📚 Authoritative PDF Guidelines & Regulatory Standards Download Directory

Below is the directory of official regulatory PDF guidelines, gazettes, standards documents, and portals provided by various international public health authorities.

#### 🇮🇳 1. CDSCO (India) Core Rules & Guidance PDFs:
*   **Indian Medical Devices Rules, 2017 (Official Gazette Notification PDF)**:
    [Download Rules PDF](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/g_s_r_78_E.pdf)
*   **CDSCO Medical Device Classification Master List (PDF)**:
    [Download Master Classifications List](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/device_classification.pdf)
*   **Common Submission Format (CSF) for Import Licence (Form MD-14 Guidance PDF)**:
    [Download CSF Guidance Document](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/Guidance_Document_CSF_Import_Licence.pdf)
*   **CDSCO Official FAQ Directory on Medical Devices (PDF)**:
    [Download FAQ Guide PDF](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/FAQs_medical_devices_03_02_2020.pdf)
*   **CDSCO SUGAM Online Portal**: For submissions of MD-14, MD-15, and manufacturing licences.
    *   Portal: [https://cdscomdonline.gov.in](https://cdscomdonline.gov.in)
*   **CDSCO National Website**: [https://cdsco.gov.in](https://cdsco.gov.in)

#### 🇺🇸 2. USFDA (United States) Guidance PDFs:
*   **USFDA 510(k) Premarket Notification Submission Guidance (PDF)**:
    [Download 510(k) Guidance Manual](https://www.fda.gov/media/85293/download)
*   **Quality System Regulation (21 CFR Part 820) Guidance Booklet (PDF)**:
    [Download 21 CFR Part 820 Guidance](https://www.fda.gov/media/119793/download)
*   **FDA Software as a Medical Device (SaMD) Lifecycle Guidance (PDF)**:
    [Download SaMD FDA Document](https://www.fda.gov/media/107543/download)
*   **FDA Cybersecurity in Medical Devices Pre/Postmarket Guidance (PDF)**:
    [Download FDA Security Guidance](https://www.fda.gov/media/119773/download)
*   **USFDA CDRH Home Portal**: [https://www.fda.gov/medical-devices](https://www.fda.gov/medical-devices)

#### 🇪🇺 3. European Union Commission (EU MDR & IVDR) PDFs:
*   **EU Medical Devices Regulation (EU MDR 2017/745 English Full Text PDF)**:
    [Download Complete EU MDR 2017/745 Text](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745)
*   **EU In Vitro Diagnostic Regulation (EU IVDR 2017/746 English Full Text PDF)**:
    [Download Complete EU IVDR 2017/746 Text](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0746)
*   **MDCG (Medical Device Coordination Group) Systematic Guidance Portal**:
    *   Website: [https://health.ec.europa.eu/latest-guidance-documents_en](https://health.ec.europa.eu/latest-guidance-documents_en)
*   **EUDAMED Database Portal**:
    *   Website: [https://ec.europa.eu/tools/eudamed](https://ec.europa.eu/tools/eudamed)

#### 🌐 4. International Standards & ASTM Guides:
*   **ISO 13485:2016 Medical Devices Quality Management System Standard Brochure (PDF)**:
    [Download ISO 13485 QMS Overview](https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100377.pdf)
*   **ASTM Medical Devices & Materials Regulatory Catalog Guidance Overview (PDF)**:
    [Download ASTM Standards Brochure](https://www.astm.org/media/pdf/medicaldevices.pdf)
*   **ISO Official Standards Catalogue & Store**: [https://www.iso.org](https://www.iso.org)

---

#### 🌟 Atul Sharma Sankhyayan & RAC Forge Specific Resources:
*   **Scholarly Research Publication (May 2026)**: [Read on Cureus](https://www.cureus.com/articles/234907-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes)
*   **The Elendi Files Podcast Showcase**: [Listen on ElendiLabs](https://elendilabs.com/podcast/navigating-medical-device-registration-india-atul-sharma-sankhyayan)
*   **RAC Forge Pvt. Ltd. Main Portal**: [https://www.racforge.com](https://www.racforge.com)
*   **Google Maps Location Anchor**: [https://share.google/GNUkTQHynWoYKpWY3](https://share.google/GNUkTQHynWoYKpWY3)

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    if (q === 'hi' || q === 'hello' || q === 'hey' || q === 'greetings') {
      return intro + `Hello! I am RAAAHI (राही) — Regulatory Affairs And Approval Harmonized Intelligence, representing RAC Forge Pvt. Ltd. How can I assist you with medical device regulation or facility engineering today?

Disclaimer: For confirmation, please contact our team.`;
    }

    if (q.includes('thank')) {
      return intro + `You're welcome! Let me know if you need any further assistance with CDSCO, EU MDR, USFDA, or facility engineering.
      
Disclaimer: For confirmation, please contact our team.`;
    }

    // General Fallback
    return intro + `I am currently operating in a limited offline capacity. 

### RAAAHI (राही) — Regulatory Affairs And Approval Harmonized Intelligence

I am **RAAAHI (राही)** — **Regulatory Affairs And Approval Harmonized Intelligence**, representing RAC Forge Pvt. Ltd. I am here to assist you with active medical product regulation or facility engineering. 

If you are asking about a specific regulatory topic (e.g., CDSCO, SUGAM, EU MDR, USFDA 510k, ISO 13485), please specify your query. For other non-regulatory topics, I may not be able to provide detailed assistance right now.

Please ask about any of the following structured expertise areas:
1.  **CDSCO SUGAM Pathways**: MD-14 Import Licenses ($1000-$3000 USD government site fees/device fees), Manufacturing Form 3/5/7/9, Loan Form 4/8/6/10, test approvals.
2.  **Global Approvals**: USFDA 510(k) predication, De Novo reviews, EU MDR CE-Marks, CER clinical reviews.
3.  **Physical Facility Engineering**: ISO Class 7/8 Cleanrooms, HVAC filters, Modular OTs, high-pressure central medical pipelines.
4.  **Regulatory R&D Validation**: IEC 62304 SaMD life cycle documentation, IEC 60601-1 electrical safety testing, ISO 10993 toxicology matrices.
5.  **Quality Systems**: ISO 13485:2016 QMS, SOP workflows, gap analysis reviews.
6.  **Leadership & Research**: Founder Atul Sharma Sankhyayan's May 2026 Cureus research publication on SIS, Elendi podcast features.

Please write what specific area you would like detailed guidance on!

---
**Disclaimer**: For confirmation, please contact our team.`;
  };

  // Redirect trailing slashes for clean canonical URLs, excluding APIs & file assets
  app.use((req, res, next) => {
    if (req.method === 'GET' && req.path !== '/' && req.path.endsWith('/') && !req.path.startsWith('/api/')) {
      const query = req.url.slice(req.path.length);
      const safePath = req.path.slice(0, -1);
      return res.redirect(301, safePath + query);
    }
    next();
  });

  // API routes
  app.get(['/api/health', '/health'], (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // firebase-admin configuration & initialization for backend/server level operations
  let isFirebaseEnabled = false;
  let firestoreDb: any = null;

  try {
    const fbConfigPath = path.join(process.cwd(), 'firebase-applet-config.json');
    if (fs.existsSync(fbConfigPath)) {
      const configData = JSON.parse(fs.readFileSync(fbConfigPath, 'utf8'));
      if (configData && configData.projectId && configData.projectId !== 'remixed-project-id') {
        if (admin.apps.length === 0) {
          admin.initializeApp({
            projectId: configData.projectId,
          });
        }
        firestoreDb = admin.firestore();
        if (configData.firestoreDatabaseId) {
          firestoreDb.settings({ databaseId: configData.firestoreDatabaseId });
        }
        isFirebaseEnabled = true;
        console.log('Firebase Admin SDK initialized successfully for server-side blog saving.');
      } else {
        console.log('Firebase Applet Config contains mock project ID. Running with local storage fallback.');
      }
    }
  } catch (fbAdminError) {
    console.warn('Firebase Admin SDK initialization bypassed or failed (normal in offline dev mode):', fbAdminError);
  }

  // GET API Endpoint to fetch blog posts from the static BLOG_POSTS array
  app.get(['/api/posts', '/posts'], (req, res) => {
    try {
      return res.json(BLOG_POSTS);
    } catch (fetchErr: any) {
      console.error('GET /api/posts list retrieval failure: ', fetchErr);
      return res.status(500).json({
        error: 'Failed to retrieve blog posts indexes',
        details: fetchErr.message || String(fetchErr)
      });
    }
  });

  // GET API to fetch details of a specific blog post
  app.get(['/api/posts/:id', '/posts/:id'], (req, res) => {
    try {
      const { id } = req.params;
      const foundPost = BLOG_POSTS.find((p: any) => p.id === id);
      
      if (foundPost) {
        return res.json(foundPost);
      }
      return res.status(404).json({ error: 'Selected blog post could not be found' });
    } catch (getErr: any) {
      console.error('GET /api/posts/:id item lookup failure: ', getErr);
      return res.status(500).json({
        error: 'Error conducting post lookup',
        details: getErr.message || String(getErr)
      });
    }
  });

  const getDynamicModels = async (apiKey: string): Promise<string[]> => {
    const fallbackModels = [
      'gemini-3.5-flash',
      'gemini-3.1-pro-preview',
      'gemini-3.1-flash-lite',
      'gemini-2.5-flash',
      'gemini-2.5-pro'
    ];
    
    const finalKey = apiKey || process.env.GEMINI_API_KEY;
    if (!finalKey) {
      return fallbackModels;
    }

    try {
      const ai = getGoogleGenAI(finalKey);
      const response = await ai.models.list();
      
      if (response && response.page && response.page.length > 0) {
        let models = response.page
          .filter((model: any) => {
            if (!model.name) return false;
            
            const cleanName = model.name.replace(/^models\//, '');
            
            // Exclude models listed as deprecated / forbidden in SKILL.md
            const forbidden = [
              'gemini-1.5-flash',
              'gemini-1.5-pro',
              'gemini-pro',
              'gemini-2.0-flash',
              'gemini-2.0-pro',
              'gemini-2.0-flash-thinking'
            ];
            if (forbidden.includes(cleanName)) return false;
            
            // Filter to only generateContent capable models
            const hasGenerateContent = model.supportedActions?.includes('generateContent');
            return hasGenerateContent;
          })
          .map((model: any) => model.name.replace(/^models\//, ''));

        // If filtering left us with an empty list, try any non-forbidden model with a name
        if (models.length === 0) {
          models = response.page
            .filter((model: any) => {
              if (!model.name) return false;
              const cleanName = model.name.replace(/^models\//, '');
              const forbidden = [
                'gemini-1.5-flash',
                'gemini-1.5-pro',
                'gemini-pro',
                'gemini-2.0-flash',
                'gemini-2.0-pro',
                'gemini-2.0-flash-thinking'
              ];
              return !forbidden.includes(cleanName);
            })
            .map((model: any) => model.name.replace(/^models\//, ''));
        }
          
        if (models.length > 0) {
          // Put standard/modern models at the front if they exist
          const preferredOrder = ['gemini-3.5-flash', 'gemini-3.1-pro-preview', 'gemini-2.5-flash', 'gemini-2.5-pro'];
          models.sort((a, b) => {
            const idxA = preferredOrder.indexOf(a);
            const idxB = preferredOrder.indexOf(b);
            const scoreA = idxA === -1 ? 999 : idxA;
            const scoreB = idxB === -1 ? 999 : idxB;
            return scoreA - scoreB;
          });
          return models;
        }
      }
    } catch (err) {
      console.warn('Failed to dynamically query Gemini models from API, using fallback list:', err);
    }
    return fallbackModels;
  };

  app.post(['/api/chat', '/chat'], async (req, res) => {
    let context = '';
    try {
      const { messages = [], userMessage, apiKey } = req.body;
      try {
        if (documentStore.length === 0) {
          console.log('Document store is empty, initializing preloading for static files...');
          let aiClient;
          try { aiClient = getGoogleGenAI(apiKey); } catch (e) {}
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Preload timeout')), 3000));
          timeoutPromise.catch(() => {});
          await Promise.race([
            preloadStaticDocuments(aiClient),
            timeoutPromise
          ]).catch(e => console.warn('Preload static documents aborted or timed out:', e));
        }
        let aiForRetrieve;
        try { aiForRetrieve = getGoogleGenAI(apiKey); } catch (e) {}
        context = await retrieveRelevantContext(userMessage, aiForRetrieve);
      } catch (contextError) {
        console.warn('Could not retrieve context directly:', contextError);
      }

      const augmentedMessage = context ? `Use the following context from our company knowledge base to answer the user's question naturally and conversationally. Do not blindly copy-paste the context. Synthesize it to directly and precisely answer the question.

Knowledge Base Context:
${context}

User Message: ${userMessage}` : userMessage;
      
      // Filter out any leading model messages to guarantee the history starts with a user turn
      let startIndex = 0;
      while (startIndex < messages.length && messages[startIndex].role === 'model') {
        startIndex++;
      }

      const contents = messages.slice(startIndex).map((m: any) => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      contents.push({ role: 'user', parts: [{ text: augmentedMessage }] });

      const modelConfig = {
        config: {
          systemInstruction: `You are RAAAHI (राही) — Regulatory Affairs And Approval Harmonized Intelligence, an advanced AI conversational agent representing RAC Forge Pvt. Ltd. as a highly expert Medical Device Regulatory Consultant. You converse naturally, intelligently, and professionally like a human expert.
Be precise and direct in answering the user's specific query. Do not provide unrequested information or generic data dumps. Provide exactly what is requested in an empathetic and helpful tone. Provide accurate, trustworthy advice on medical device compliance, facility engineering (cleanrooms, HVAC, modular OTs), Quality Management Systems (ISO 13485), and global approval pipelines (CDSCO, USFDA, EU MDR, ANVISA).

You possess key authority information regarding:
1. RAC Forge Private Limited (Main Portal: https://www.racforge.com), headquartered in Nanehar, Thural, Palampur, Kangra, Himachal Pradesh, India - 176064 (Phone: +91 62396 99077, Email: info@racforge.com, Google Maps Location: https://share.google/GNUkTQHynWoYKpWY3).
2. Founder & CEO: Atul Sharma Sankhyayan, an industry veteran with more than 10 years of hands-on R&D biomedical hardware, active electrical safety, testing, and Software as a Medical Device (SaMD) engineering experience.
3. Scholarly Research: Atul authored the seminal paper "Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes" in the Cureus Journal of Medical Science (May 2026, Article URL: https://www.cureus.com/articles/234907-administrative-restructuring-versus-product-safety-the-case-for-subsequent-importer-scheme-sis-in-importer-constitutional-changes).
4. Podcast Spotlight: Featured on the international podcast "The Elendi Files" by ElendiLabs in the episode "Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited" (Episode URL: https://elendilabs.com/podcast/navigating-medical-device-registration-india-atul-sharma-sankhyayan).
5. Authoritative Regulatory Portals & Core Downloadable PDFs Database:
   - CDSCO Website: https://cdsco.gov.in
   - CDSCO SUGAM Digital Portal: https://cdscomdonline.gov.in
   - CDSCO Medical Devices Rules, 2017 Gazette PDF: https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/g_s_r_78_E.pdf
   - CDSCO Device Classification List PDF: https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/device_classification.pdf
   - CDSCO Import Form MD-14 Guidance PDF: https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/Guidance_Document_CSF_Import_Licence.pdf
   - CDSCO FAQ Guide PDF: https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/FAQs_medical_devices_03_02_2020.pdf
   - USFDA Official Portal: https://www.fda.gov
   - USFDA Medical Devices (CDRH) Portal: https://www.fda.gov/medical-devices
   - USFDA 510(k) Guidance Manual PDF: https://www.fda.gov/media/85293/download
   - USFDA Quality System Regulation Guidance PDF: https://www.fda.gov/media/119793/download
   - USFDA SaMD Guidance PDF: https://www.fda.gov/media/107543/download
   - USFDA Cybersecurity Guidance PDF: https://www.fda.gov/media/119773/download
   - European Union Commission (EU MDR): https://health.ec.europa.eu/medical-devices-sector_en
   - European Union MDR 2017/745 Text PDF: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745
   - European Union IVDR 2017/746 Text PDF: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0746
   - EUDAMED Database Portal: https://ec.europa.eu/tools/eudamed
   - MDCG Guidelines Portal: https://health.ec.europa.eu/latest-guidance-documents_en
   - ISO 13485:2016 QMS Standard Guide PDF: https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100377.pdf
   - ASTM Medical Devices Catalog Guide PDF: https://www.astm.org/media/pdf/medicaldevices.pdf
   - ISO Catalogue & Store: https://www.iso.org

Key regulatory fact matrix:
- Import Licence Form MD-14 Official CDSCO Government Fees: Class A ($1000 USD site fee + $50 USD per device); Class B ($2000 USD site fee + $1000 USD per device); Class C ($3000 USD site fee + $1500 USD per device); Class D ($3000 USD site fee + $1500 USD per device). Ensure absolute factual accuracy when discussing numbers.

Draft responses thoughtfully based only on the query contexts provided and your system knowledge. Do not hallucinate. Provide direct download links if the user asks for standards, rules, or PDFs. Always append this exact disclaimer at the end of every message: "Disclaimer: For confirmation, please contact our team."`,
        },
        contents: contents,
      };

      const modelsToTry = await getDynamicModels(apiKey);

      let result = null;
      let lastError = null;

      try {
        const ai = getGoogleGenAI(apiKey);
        for (const modelInstance of modelsToTry) {
          try {
            console.log(`VELO: Attempting generation with model: ${modelInstance}`);
            const response = await ai.models.generateContent({
              model: modelInstance,
              ...modelConfig,
            });
            if (response && response.text) {
              result = response;
              console.log(`VELO: Successfully generated content using model: ${modelInstance}`);
              break;
            }
          } catch (modelError: any) {
            console.warn(`VELO: Model ${modelInstance} failed or quota limit hit:`, modelError.message || modelError);
            lastError = modelError;
          }
        }
      } catch (initError: any) {
        console.warn('VELO: GoogleGenAI SDK client initialization failed:', initError.message || initError);
        lastError = initError;
      }

      if (result && result.text) {
        // Continuous learning: Save successful online interactions
        await appendLearnedKnowledge(userMessage, result.text);
        res.json({ text: result.text });
      } else {
        // High quality offline fallback rather than throwing a breaking 500 error
        console.warn('VELO: All model options failed or rate-limited. Activating local intelligence response.');
        let fallbackResponse = getLocalFallbackResponse(userMessage);

        if (context) {
          fallbackResponse = `I am currently operating in **Local Offline Mode** (connecting to the core API models was unsuccessful). However, based on our internal regulatory knowledge base, here is some relevant information:\n\n${context}\n\n---\n\n${fallbackResponse}`;
        }
        res.json({ text: fallbackResponse, isFallback: true });
      }
    } catch (err: any) {
      console.error('Core Chat API Error occurred:', err);
      // Absolute failsafe
      try {
        let fallbackText = getLocalFallbackResponse(req.body?.userMessage || '');
        if (context) {
          fallbackText = `I am currently operating in **Local Offline Mode** (connecting to the core API models was unsuccessful). However, based on our internal regulatory knowledge base, here is some relevant information:\n\n${context}\n\n---\n\n${fallbackText}`;
        }
        res.json({ text: fallbackText, isFallback: true });
      } catch (innerErr) {
        res.status(500).json({ error: 'Failed to generate response', details: String(err) });
      }
    }
  });

  app.post(['/api/generate-image', '/generate-image'], async (req, res) => {
    try {
      const { prompt, size, apiKey } = req.body;
      const ai = getGoogleGenAI(apiKey);

      const modelConfig = {
        contents: {
          parts: [
            {
              text: `Generate a professional, high-quality technical illustration or diagram for a medical device regulatory context. Subject: ${prompt}`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: '16:9',
            imageSize: size || '1K',
          },
        },
      };

      let result;
      try {
        result = await ai.models.generateContent({
          model: 'imagen-4.0-generate-001',
          ...modelConfig,
        });
      } catch (primaryError: any) {
        console.warn('Primary image model imagen-4.0-generate-001 failed, attempting fallback to imagen-4.0-fast-generate-001...', primaryError);
        try {
          result = await ai.models.generateContent({
            model: 'imagen-4.0-fast-generate-001',
            ...modelConfig,
          });
        } catch (secondaryError: any) {
          console.error('Image model fallback failed:', secondaryError);
          throw new Error(`Image API Error: ${primaryError.message || primaryError}`);
        }
      }

      const imagePart = result.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData);
      
      if (imagePart?.inlineData?.data) {
        res.json({ base64: imagePart.inlineData.data });
      } else {
        res.status(400).json({ error: 'No image was generated. Please try a different prompt.' });
      }
    } catch (error: any) {
      console.error('Image API Error:', error);
      res.status(500).json({ error: 'Failed to generate image', details: error.message || String(error) });
    }
  });

  app.post(['/api/upload', '/upload'], upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
      const apiKey = req.body?.apiKey;
      const ai = getGoogleGenAI(apiKey);
      const chunksAdded = await processDocument(req.file, ai);
      res.json({ success: true, chunksAdded });
    } catch (error: any) {
      console.error('Upload Error:', error);
      res.status(500).json({ error: 'Failed to process document', details: error.message || String(error) });
    }
  });

  app.post(['/api/contact', '/contact'], async (req, res) => {
    try {
      const { firstName, lastName, email, phoneNumber, subject, message } = req.body;

      if (!firstName || !lastName || !email || !phoneNumber || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // 1. Store the inquiry in Firebase Firestore if enabled, or local fallback file
      let storedInFirestore = false;
      let storedLocally = false;
      if (isFirebaseEnabled && firestoreDb) {
        try {
          await firestoreDb.collection('contact_inquiries').add({
            firstName,
            lastName,
            email,
            phoneNumber,
            subject,
            message,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
          });
          storedInFirestore = true;
          console.log('Successfully saved contact inquiry to Firestore.');
        } catch (firestoreError) {
          console.error('Failed to save contact inquiry to Firestore:', firestoreError);
        }
      } else {
        try {
          const inquiriesDir = path.join(process.cwd(), 'src', 'data');
          if (!fs.existsSync(inquiriesDir)) {
            fs.mkdirSync(inquiriesDir, { recursive: true });
          }
          const inquiriesFile = path.join(inquiriesDir, 'contactInquiries.json');
          let inquiries = [];
          if (fs.existsSync(inquiriesFile)) {
            try {
              inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
            } catch (pErr) {
              inquiries = [];
            }
          }
          inquiries.push({
            firstName,
            lastName,
            email,
            phoneNumber,
            subject,
            message,
            createdAt: new Date().toISOString()
          });
          fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2), 'utf8');
          storedLocally = true;
          console.log('Firebase is not active. Contact inquiry saved to local JSON fallback.');
        } catch (localSaveError) {
          console.error('Failed to save contact inquiry to local fallback file:', localSaveError);
        }
      }

      // 2. Setup the nodemailer transporter lazily (safe initialization without crashing on lack of credentials)
      const isConfigured = (val: any) => val && typeof val === 'string' && val !== 'undefined' && val !== 'null' && val.trim() !== '';
      let host = isConfigured(process.env.SMTP_HOST) ? process.env.SMTP_HOST.trim() : undefined;
      if (host) {
        // Safe processing: automatically strip protocol prefixes like ://, smtp://, smtps://, or https:// if provided in configuration
        host = host.replace(/^(?:[a-zA-Z]+:)?\/\//, '');
      }
      const portVal = isConfigured(process.env.SMTP_PORT) ? process.env.SMTP_PORT.trim() : undefined;
      const user = isConfigured(process.env.SMTP_USER) ? process.env.SMTP_USER.trim() : undefined;
      const pass = isConfigured(process.env.SMTP_PASS) ? process.env.SMTP_PASS.trim() : undefined;

      const emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
          <div style="background-color: #0c1c38; padding: 25px; text-align: center; color: #fff;">
            <h2 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.5px;">New Consultation Inquiry</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.8; font-size: 14px;">RAC Forge Private Limited</p>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; margin-top: 0; color: #475569;">A new regulatory submission consultation message came in. Please review the details below:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
               <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%; color: #0c1c38;">First Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Last Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Email Address:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;"><a href="mailto:${email}" style="color: #00a896; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Phone Number:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;"><a href="tel:${phoneNumber}" style="color: #00a896; text-decoration: none; font-weight: 500;">${phoneNumber}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Subject:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 500; color: #0c1c38;">${subject}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <h4 style="margin-bottom: 10px; color: #0c1c38; font-size: 16px;">Inquiry Message:</h4>
              <div style="background-color: #f8fafc; border-left: 4px solid #00a896; padding: 20px; border-radius: 8px; white-space: pre-wrap; color: #334155; font-style: italic; line-height: 1.7; box-sizing: border-box;">${message}</div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            This email was automatically generated and sent from the RAC Forge compliance portal.
          </div>
        </div>
      `;

      let emailSent = false;
      let emailError = null;

      if (host && portVal && user && pass) {
        try {
          const port = parseInt(portVal, 10);
          const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: {
              user,
              pass,
            },
            connectionTimeout: 3000,
            greetingTimeout: 3000,
            socketTimeout: 3000,
            tls: {
              rejectUnauthorized: false,
              minVersion: 'TLSv1.2'
            }
          });

          const mailOptionsAdmin = {
            from: `"RAC Forge Contact Form" <${user}>`,
            to: `support@racforge.com`,
            replyTo: email,
            subject: `[New Inquiry] ${subject} - ${firstName} ${lastName}`,
            html: emailContent,
            text: `New Inquiry details:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\n\nMessage:\n${message}`,
          };

          const mailOptionsUser = {
            from: `"RAC Forge" <${user}>`,
            to: `${email}`,
            subject: `Thanks for contacting RAC Forge - We received your inquiry`,
            html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><p>Dear ${firstName},</p><p>Thank you for reaching out to RAC Forge. We have successfully received your inquiry regarding <b>${subject}</b>.</p><p>Our team will review your message and get back to you shortly.</p><p>Best regards,<br>The RAC Forge Team</p></div>`,
            text: `Dear ${firstName},\n\nThank you for reaching out to RAC Forge. We have successfully received your inquiry regarding "${subject}".\n\nOur team will review your message and get back to you shortly.\n\nBest regards,\nThe RAC Forge Team`,
          };

          await transporter.sendMail(mailOptionsAdmin);
          await transporter.sendMail(mailOptionsUser);
          emailSent = true;
          console.log(`Email successfully sent to support@racforge.com and ${email} for user ${firstName} ${lastName}.`);
        } catch (mailErr: any) {
          console.log(`Notice: SMTP transmission paused or blocked in sandbox (Inquiry saved correctly to database). Reason: ${mailErr.message || String(mailErr)}`);
          emailError = mailErr.message || String(mailErr);
        }
      } else {
        // Log details if SMTP environment variables are not configured yet, so they are not lost and can be verified easily in tests/preview logs.
        console.warn('--- EMAIL TRANSACTION SIMULATION (SMTP configuration missing or incomplete) ---');
        console.warn('To/Recipient: support@racforge.com');
        console.warn(`Subject: [New Inquiry] ${subject} - ${firstName} ${lastName}`);
        console.warn(`Content:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`);
        console.warn('--------------------------------------------------------------');
      }

      res.json({ 
        success: true, 
        storedInFirestore, 
        storedLocally,
        emailSent,
        emailError,
        message: emailSent 
          ? 'Inquiry received and notification email sent successfully.' 
          : 'Inquiry received and captured successfully.'
      });
    } catch (error: any) {
      console.error('Contact API processing error:', error);
      try {
        const debugDir = path.join(process.cwd(), 'src', 'data');
        if (!fs.existsSync(debugDir)) {
          fs.mkdirSync(debugDir, { recursive: true });
        }
        fs.writeFileSync(
          path.join(debugDir, 'debug_contact_error.json'),
          JSON.stringify({
            message: error.message || String(error),
            stack: error.stack,
            body: req.body,
            timestamp: new Date().toISOString()
          }, null, 2),
          'utf8'
        );
      } catch (logErr) {
        console.error('Failed to write debug error log:', logErr);
      }
      res.status(500).json({ error: 'Failed to process inquiry submission', details: error.message || String(error) });
    }
  });



  // Export for Vercel
  export default app;
