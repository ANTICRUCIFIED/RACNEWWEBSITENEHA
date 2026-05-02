import { Blog } from './types';
import companyData from './data/company.json';

export const COMPANY_INFO = companyData;

export const BLOGS: Blog[] = [
  {
    id: 'sterilization-validation',
    title: 'Sterilization Validation for Medical Devices',
    date: '12 Oct 2025',
    excerpt: 'Sterilization validation is essential for sterile medical devices. Understanding sterilization methods and validation requirements is crucial...',
    image: 'https://picsum.photos/seed/sterilization/800/600',
    content: `
# Sterilization Validation for Medical Devices

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

## Validation Process (IQ/OQ/PQ)
The validation process is a cornerstone of a quality system compliant with ISO 13485.

- **Installation Qualification (IQ)**: Equipment installation verification.
- **Operational Qualification (OQ)**: Process parameter verification.
- **Performance Qualification (PQ)**: Product-specific validation.
    `
  },
  {
    id: 'biocompatibility-testing',
    title: 'Biocompatibility Testing Strategies for Medical Devices',
    date: '11 Oct 2025',
    excerpt: 'Biocompatibility assessment, or Biological Evaluation, is a key Essential Requirement for medical device regulatory approval...',
    image: 'https://picsum.photos/seed/biocompatibility/800/600',
    content: `
# Biocompatibility Testing Strategies for Medical Devices

Biocompatibility assessment, or Biological Evaluation, is a key Essential Requirement for medical device regulatory approval. Knowing ISO 10993 standards and using effective testing strategies is crucial for successful submissions.

## The ISO 10993 Framework
The ISO 10993 series offers a systematic approach for Biological Evaluation of medical devices. Part 1 sets up the risk-based framework for determining what testing is needed based on:
- Nature of body contact
- Duration of contact
- Device material composition

## Device Categorization
- **Surface devices**: skin, mucous membranes
- **Externally communicating devices**: blood path, tissue/bone
- **Implant devices**: tissue, bone, blood
    `
  },
  {
    id: 'eu-mdr-technical-doc',
    title: 'Mastering EU MDR Technical Documentation',
    date: '10 Oct 2025',
    excerpt: 'The European Union’s EU MDR (Medical Device Regulation 2017/745) sets strict rules for technical documentation...',
    image: 'https://picsum.photos/seed/eumdr/800/600',
    content: `
# Mastering EU MDR Technical Documentation

The European Union’s EU MDR (Medical Device Regulation 2017/745) sets strict rules for technical documentation. Knowing these rules is important for getting CE Marking and accessing markets in Europe.

## The Technical Documentation Structure
EU MDR Technical Documentation must be organized according to Annex II and III, covering:
- Device description and specifications
- Information provided by the manufacturer
- Design and manufacturing information
- General Safety and Performance Requirements (GSPR)
- Benefit-risk analysis
- Product verification and validation
    `
  },
  {
    id: 'usfda-510k-submission',
    title: 'Navigating USFDA’s 510(k) Submission Process',
    date: '10 Oct 2025',
    excerpt: 'The 510(k) USFDA premarket notification is the most common pathway for Class II medical devices seeking USFDA clearance...',
    image: 'https://picsum.photos/seed/usfda/800/600',
    content: `
# Navigating USFDA’s 510(k) Submission Process

The 510(k) USFDA premarket notification is the most common pathway for Class II medical devices seeking USFDA clearance. Knowing this process is vital for successful market entry in the United States.

## What is a 510(k)?
A 510(k) is a submission to show that a device is substantially equivalent to a legally marketed predicate device. This pathway requires proving similar intended use and technological characteristics without raising new safety or effectiveness issues.
    `
  },
  {
    id: 'cdsco-medical-device-rules',
    title: 'Understanding CDSCO’s Medical Devices Rules, 2017',
    date: '10 Oct 2025',
    excerpt: 'The Indian MDR (Medical Devices Rules, 2017) set by India’s Central Drugs Standard Control Organization (CDSCO) create...',
    image: 'https://picsum.photos/seed/cdsco/800/600',
    content: `
# Understanding CDSCO’s Medical Devices Rules, 2017

The Indian MDR (Medical Devices Rules, 2017) set by India’s Central Drugs Standard Control Organization (CDSCO) create a complete regulatory framework for medical devices. Knowing this framework is essential for manufacturers seeking market access in India.
    `
  }
];
