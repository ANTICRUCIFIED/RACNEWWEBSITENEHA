import { GoogleGenAI } from '@google/genai';
import { retrieveRelevantContext, documentStore, preloadStaticDocuments, appendLearnedKnowledge } from '../rag';

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

const getLocalFallbackResponse = (query: string): string => {
  const q = query.toLowerCase();
  const intro = '';

  if (q.includes('indian mdr') || q.includes('cdsco') || q.includes('sugam') || q.includes('licens') || q.includes('md-14') || q.includes('md-15') || q.includes('md-3') || q.includes('md-7') || q.includes('md-5') || q.includes('md-9') || q.includes('wholesale') || q.includes('md-42') || q.includes('import') || q.includes('manufact') || q.includes('loan') || q.includes('iaa') || q.includes('authorized agent') || q.includes('fee')) {
    return intro + `### CDSCO SUGAM Portal & Indian MDR 2017 Pathways

RAC Forge Private Limited is your premium, hands-on partner for CDSCO registrations. Under the **Indian Medical Device Rules (MDR) 2017**, import and manufacturing activities require strategic compilation on the SUGAM portal.

#### 1. Import Licensing (Form MD-14/15)
For foreign manufacturers importing medical devices into India, the registration of the manufacturing site and distinct devices is filed using **Form MD-14** (Import License is issued on **Form MD-15**).

- **Official CDSCO Government Fees**:
  - **Class A**: $1,000 USD (manufacturing site) + $50 USD per device.
  - **Class B**: $2,000 USD (manufacturing site) + $1,000 USD per device.
  - **Class C**: $3,000 USD (manufacturing site) + $1,500 USD per device.
  - **Class D**: $3,000 USD (manufacturing site) + $1,500 USD per device.
- **Key Deliverables**: Device Master File (DMF), Plant Master File (PMF), Free Sale Certificate (FSC), ISO 13485 QMS Certification, testing/validation reports.
- **Role of Indian Authorized Agent (IAA)**: Foreign manufacturers must appoint a local, legally robust entity like RAC Forge as their IAA to handle SUGAM portal queries and coordinate compliance.

#### 2. Manufacturing & Loan Licensing (Form MD-3/7/5/9)
- **Class A & B**: Manufacturing license is applied using **Form MD-3** and issued by State Licensing Authority (SLA) on **Form MD-5**.
- **Class C & D**: Manufacturing license is applied using **Form MD-7** and issued by Central Licensing Authority (CLA / CDSCO) on **Form MD-9**.
- **Loan Licensing (Form MD-4/8)**: For entities leveraging contract manufacturing facilities.

#### 3. Wholesale Licensing (Form 20-B/21-B / MD-42)
For stocking and sales of medical devices, wholesale licenses are required. Wholesale registration applications are processed through regional FDA SUGAM channels or **Form MD-42** structures.

We offer full compilation, document review, and SUGAM portal representation. Contact us directly at **info@racforge.com** to initiate your filing strategy.`;
  }

  if (q.includes('usfda') || q.includes('fda') || q.includes('510') || q.includes('pma') || q.includes('de novo') || q.includes('qsr') || q.includes('60601') || q.includes('62304')) {
    return intro + `### USFDA Medical Device Strategic Pathways

The United States Food and Drug Administration (FDA) regulates medical devices through the Center for Devices and Radiological Health (CDRH). Navigating this requires a precise regulatory strategy.

#### 1. Premarket Notification [510(k)]
- **Objective**: Demonstrate Substantial Equivalence (SE) to a legally marketed predicate device.
- **Requirements**: Technical specifications, biocompatibility (ISO 10993), electrical safety (IEC 60601-1), software validation (IEC 62304), and performance benchmarks (bench/animal/clinical).
- **Review Timeline**: Typically 90 calendar days under standard user fee timelines.

#### 2. De Novo Classification
- **Avenue**: Applied for novel devices of low-to-moderate risk with no existing predicate. It establishes a brand-new device classification and special controls.

#### 3. Premarket Approval (PMA)
- **Avenue**: Required for high-risk (Class III) devices. Requires robust clinical trial data (IDE pathway) proving safety and efficacy.

#### 4. Quality System Regulation (21 CFR Part 820)
- Manufacturers must implement a Quality Management System (QMS) matching 21 CFR Part 820 / QSR requirements (moving rapidly toward harmony with ISO 13485:2016 via Quality System Regulation Amendment - QSRA).

By preparing gap analyses and technical files aligned with official guidance dossiers, RAC Forge ensures smooth USFDA clearance.`;
  }

  if (q.includes('eu mdr') || q.includes('ce mark') || q.includes('notified body') || q.includes('tech') || q.includes('class i') || q.includes('class ii') || q.includes('class iii') || q.includes('eudamed')) {
    return intro + `### EU MDR 2017/745 (European Union) & CE Marking

Medical devices in the European Union are regulated by **Regulation (EU) 2017/745 (MDR)** and **In Vitro Diagnostic Regulation (EU) 2017/746 (IVDR)**.

#### 1. Technical Documentation & Audits
- **Annex II & III Standards**: Technical documentation must include comprehensive descriptions, test results, and robust Risk Management files (ISO 14971).
- **Class I**: Self-certified (non-sterile, non-measuring, non-reusable surgical) or Notified Body involvement where sterile, measuring, or reusable (Class Is/Im/Ir).
- **Class IIa, IIb & III**: Require a full Quality Management System audit (Annex IX) and technical documentation review by a designated European **Notified Body** (e.g., TÜV, BSI, SGS, DNV).

#### 2. Post-Market Surveillance (PMS) & EUDAMED
- Continuous safety reporting is mandatory:
  - Post-Market Clinical Follow-up (PMCF)
  - Periodic Safety Update Report (PSUR)
  - Registration of entities and devices on the **EUDAMED** database.

#### 3. Clinical Evaluation Report (CER)
- Clinical evaluation must be conducted based on systematic scientific literature and Clinical Investigations (ISO 14155) under Annex XIV.

RAC Forge assists with technical file restructuring, Notified Body communication, and CE-mark dossiers to secure European market access.`;
  }

  if (q.includes('cleanroom') || q.includes('hvac') || q.includes('facility') || q.includes('engineer') || q.includes('palampur') || q.includes('modular') || q.includes('clean') || q.includes('clean room') || q.includes('iso 14644')) {
    return intro + `### Cleanroom HVAC & Modular Facility Engineering Solutions

RAC Forge Private Limited specialized in cleanroom design and QMS-compliant sterile facility architectures. QMS compliance demands precise control over particulate counts and contamination.

#### 1. ISO 14644 Standards & Particulate Control
- We design facilities corresponding to Class 5, Class 6, Class 7, and Class 8 (equivalent to Grade A, B, C, and D sterile filling requirements).
- Pressure gradients, air changes per hour (ACH), thermal levels, and relative humidity are maintained using advanced cleanroom panel systems.

#### 2. QMS-Compliant Integration & Audits
- We conduct facility verification supporting IQ/OQ/PQ protocols.
- We integrate layout parameters supporting clean personnel flows, raw material passes, and material transfer airlocks (PAL / MAL) to satisfy regulatory inspectors (CDSCO, USFDA, WHO-GMP).

Contact RAC Engineering division at **info@racforge.com** to review floorplans or schedule air velocity validation.`;
  }

  if (q.includes('iso 13485') || q.includes('qms') || q.includes('quality') || q.includes('audit') || q.includes('sop') || q.includes('procedure') || q.includes('capa') || q.includes('management') || q.includes('risk') || q.includes('14971')) {
    return intro + `### ISO 13485:2016 Quality Management Systems

**ISO 13485:2016** is the comprehensive global standard for medical device QMS. Implementing this structure is a prerequisite for USFDA (QSRA), EU MDR, and Indian CDSCO registrations.

#### 1. Standard Elements & Framework
- Establish a rigorous Document Control system.
- Formalize corrective and preventive actions (**CAPA**).
- Adopt full Product Lifecycle traceability.
- Validate specialized computerized systems and manufacturing processes.

#### 2. Integrated Risk Management (ISO 14971:2019)
- Risk Management must be structured dynamically throughout the entire lifecycle.
- Conduct Failure Modes and Effects Analysis (FMEA), maintain Hazard Traceability matrices, and update Risk-Benefit reports frequently.

#### 3. Comprehensive QMS Audit Preparedness
- We draft SOP workflows, prepare custom QMS manuals, conduct internal audit sweeps, and coordinate with registrar auditors (e.g., SGS, Intertek, TÜV) to secure certification seamlessly.`;
  }

  return `### RAC Forge Medical Device Regulatory Partners

Welcome to the **RAC Forge Private Limited** regulatory guidance platform. We are your dedicated global compliance consultants helping biomedical firms register devices, validate modular cleanroom engineering, and deploy verified QMS formats.

#### Our Core Competencies:
1.  **CDSCO SUGAM Portal**: Appointing Indian Authorized Agent (IAA), compiling Form MD-14 Dossiers, executing manufacturing filings (Form MD-3/5/7/9), and managing Wholesale MD-42 licensing.
2.  **USFDA Approvals**: Compiling premarket clearance [510(k)], De Novo programs, and drafting 21 CFR Part 820/QSRA QMS models.
3.  **EU MDR & CE Marking**: Developing Clinical Evaluation Reports (CER) and organizing Technical Files for Notified Body reviews.
4.  **Regulatory R&D Validation**: IEC 62304 SaMD life cycle documentation, IEC 60601-1 electrical safety testing, ISO 10993 toxicology matrices.
5.  **Quality Systems**: ISO 13485:2016 QMS, SOP workflows, gap analysis reviews.
6.  **Leadership & Research**: Founder Atul Sharma Sankhyayan's May 2026 Cureus research publication on SIS, Elendi podcast features.

Please write what specific area you would like detailed guidance on!

---
**Disclaimer**: For confirmation, please contact our team.`;
};

export default async function handler(req: any, res: any) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let context = '';
  const { messages = [], userMessage, apiKey } = req.body || {};

  try {
    // 1. RAG Retrieve: Preload static documents if required
    try {
      if (documentStore.length === 0) {
        console.log('Document store is empty, initializing preloading for static files...');
        let aiClient;
        try { aiClient = getGoogleGenAI(apiKey); } catch (e) {}
        await preloadStaticDocuments(aiClient);
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
2. Founder & CEO: Atul Sharma Sankhyayan, an industry veteran with more than 10 years of hands-on R&D biomedical hardware, active electrical safety, testing, and Software as a Medical Device (SaMD) experience.
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

    const modelsToTry = [
      'gemini-3.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-3.1-pro-preview'
    ];

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
      // Continuous learning: Save successful online interactions (catch any write error gracefully in read-only environment)
      try {
        await appendLearnedKnowledge(userMessage, result.text);
      } catch (learningError) {
        console.warn('Skipped local continuous learning write due to read-only filesystem:', learningError);
      }
      return res.status(200).json({ text: result.text });
    } else {
      console.warn('VELO: All model options failed or rate-limited. Activating local intelligence response.');
      let fallbackResponse = getLocalFallbackResponse(userMessage);

      if (context) {
        fallbackResponse = `I am currently operating in **Local Offline Mode** (connecting to the core API models was unsuccessful). However, based on our internal regulatory knowledge base, here is some relevant information:\n\n${context}\n\n---\n\n${fallbackResponse}`;
      }
      return res.status(200).json({ text: fallbackResponse, isFallback: true });
    }
  } catch (err: any) {
    console.error('Core Chat API Error occurred:', err);
    // Absolute failsafe
    try {
      let fallbackText = getLocalFallbackResponse(userMessage || '');
      if (context) {
        fallbackText = `I am currently operating in **Local Offline Mode** (connecting to the core API models was unsuccessful). However, based on our internal regulatory knowledge base, here is some relevant information:\n\n${context}\n\n---\n\n${fallbackText}`;
      }
      return res.status(200).json({ text: fallbackText, isFallback: true });
    } catch (innerErr) {
      return res.status(500).json({ error: 'Failed to generate response', details: String(err) });
    }
  }
}
