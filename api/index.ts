import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { upload, processDocument, retrieveRelevantContext, documentStore, preloadStaticDocuments } from '../rag';

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for external requests (e.g. from GitHub Pages custom domains)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

let aiClient: GoogleGenAI | null = null;
const getGoogleGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not defined. Please configure it in your Vercel Project Settings > Environment Variables.');
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
    });
  }
  return aiClient;
};

// Local fallback dictionary
const getLocalFallbackResponse = (query: string): string => {
  const q = query.toLowerCase();
  const intro = '';

  if (q.includes('cdsco') || q.includes('sugam') || q.includes('licens') || q.includes('md-14') || q.includes('md-15') || q.includes('md-3') || q.includes('md-7') || q.includes('md-5') || q.includes('md-9') || q.includes('wholesale') || q.includes('md-42') || q.includes('import') || q.includes('manufact') || q.includes('loan') || q.includes('iaa') || q.includes('authorized agent') || q.includes('fee')) {
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

  if (q.includes('eu') || q.includes('mdr') || q.includes('ce') || q.includes('ce mark') || q.includes('2017/745') || q.includes('ec rep') || q.includes('representative')) {
    return intro + `### European Union Medical Device Regulation (EU MDR 2017/745)

Compliance under the strict European EU MDR guidelines is an engineering and documentation challenge. RAC Forge Pvt. Ltd. guides your hardware and software systems to satisfy MDR criteria.

#### Core EU MDR Execution:
*   **CE-Mark Dossier Compilation**: Technical files, labeling, and translation coordination.
*   **Clinical Evaluation Report (CER)**: Literature searches, clinical data matrices, and hazard analyses.
*   **Risk Management Files**: Compiling files aligning precisely with **ISO 14971** requirements.
*   **Authorized Representative (EC REP)**: Retaining statutory EU representation services for global imports under the MDR.

---
**Disclaimer**: For confirmation, please contact our team.`;
  }

  if (q.includes('link') || q.includes('website') || q.includes('url') || q.includes('official') || q.includes('resource') || q.includes('portal') || q.includes('external') || q.includes('reference') || q.includes('page') || q.includes('address') || q.includes('pdf') || q.includes('download') || q.includes('guidance') || q.includes('standard') || q.includes('rule') || q.includes('document')) {
    return intro + `### 📚 Authoritative PDF Guidelines & Regulatory Standards Download Directory

Below is the directory of official regulatory PDF guidelines, gazettes, standards documents, and portals provided by various international public health authorities.

#### 🇮🇳 1. CDSCO (India) Core Rules & Guidance PDFs:
*   **Indian Medical Devices Rules, 2017 (Official Gazette Notification PDF)**: [Download Rules PDF](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/g_s_r_78_E.pdf)
*   **CDSCO Medical Device Classification Master List (PDF)**: [Download Master Classifications List](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/device_classification.pdf)
*   **Common Submission Format (CSF) for Import Licence (Form MD-14 Guidance PDF)**: [Download CSF Guidance Document](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/Guidance_Document_CSF_Import_Licence.pdf)
*   **CDSCO Official FAQ Directory on Medical Devices (PDF)**: [Download FAQ Guide PDF](https://cdsco.gov.in/opencms/export/sites/CDSCO_Host/pdf-documents/medical-device/FAQs_medical_devices_03_02_2020.pdf)
*   **CDSCO SUGAM Online Portal**: [https://cdscomdonline.gov.in](https://cdscomdonline.gov.in)
*   **CDSCO National Website**: [https://cdsco.gov.in](https://cdsco.gov.in)

#### 🇺🇸 2. USFDA (United States) Guidance PDFs:
*   **USFDA 510(k) Premarket Notification Submission Guidance (PDF)**: [Download 510(k) Guidance Manual](https://www.fda.gov/media/85293/download)
*   **Quality System Regulation (21 CFR Part 820) Guidance Booklet (PDF)**: [Download 21 CFR Part 820 Guidance](https://www.fda.gov/media/119793/download)
*   **FDA Software as a Medical Device (SaMD) Lifecycle Guidance (PDF)**: [Download SaMD FDA Document](https://www.fda.gov/media/107543/download)
*   **FDA Cybersecurity in Medical Devices Pre/Postmarket Guidance (PDF)**: [Download FDA Security Guidance](https://www.fda.gov/media/119773/download)
*   **USFDA CDRH Home Portal**: [https://www.fda.gov/medical-devices](https://www.fda.gov/medical-devices)

#### 🇪🇺 3. European Union Commission (EU MDR & IVDR) PDFs:
*   **EU Medical Devices Regulation (EU MDR 2017/745 English Full Text PDF)**: [Download Complete EU MDR 2017/745 Text](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745)
*   **EU In Vitro Diagnostic Regulation (EU IVDR 2017/746 English Full Text PDF)**: [Download Complete EU IVDR 2017/746 Text](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0746)
*   **MDCG (Medical Device Coordination Group) Systematic Guidance Portal**: [https://health.ec.europa.eu/latest-guidance-documents_en](https://health.ec.europa.eu/latest-guidance-documents_en)
*   **EUDAMED Database Portal**: [https://ec.europa.eu/tools/eudamed](https://ec.europa.eu/tools/eudamed)

#### 🌐 4. International Standards & ASTM Guides:
*   **ISO 13485:2016 Medical Devices Quality Management System Standard Brochure (PDF)**: [Download ISO 13485 QMS Overview](https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100377.pdf)
*   **ASTM Medical Devices & Materials Regulatory Catalog Guidance Overview (PDF)**: [Download ASTM Standards Brochure](https://www.astm.org/media/pdf/medicaldevices.pdf)
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

  // Fallback default
  return intro + `### VELO Regulatory Intelligence Assistant

I am **VELO** (Verification, Evaluation, & Licensing Operator), representing RAC Forge Pvt. Ltd. I am here to assist you with active medical product regulation or facility engineering. 

How can we assist you today? Ask about:
1.  **CDSCO SUGAM Pathways**: MD-14 Import Licenses, Manufacturing Form 3/5/7/9, Loan Form 4/8/6/10.
2.  **Global Approvals**: USFDA 510(k) predication, De Novo reviews, EU MDR CE-Marks.
3.  **Physical Facility Engineering**: ISO Class 7/8 Cleanrooms, HVAC filters, Modular OTs.
4.  **Regulatory R&D Validation**: IEC 62304 SaMD life cycle documentation, IEC 60601-1 electrical safety testing.
5.  **Quality Systems**: ISO 13485:2016 QMS, SOP workflows.
6.  **Leadership & Research**: Founder Atul Sharma Sankhyayan's May 2026 Cureus research publication on SIS, Elendi podcast features.
7.  **Contact Info & Locations**: HQ Himachal Pradesh, Google Maps location.
8.  **Official Regulatory Links**: Portals directory.

---
**Disclaimer**: For confirmation, please contact our team.`;
};

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverless: true, timestamp: new Date().toISOString() });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userMessage } = req.body;
    let context = '';

    try {
      const ai = getGoogleGenAI();
      if (documentStore.length === 0) {
        await preloadStaticDocuments(ai);
      }
      context = await retrieveRelevantContext(userMessage, ai);
    } catch (contextError) {
      console.warn('Context retrieval failed in serverless function:', contextError);
    }

    const augmentedMessage = context ? `Context information:\n\n${context}\n\nUser Message: ${userMessage}` : userMessage;

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
        systemInstruction: `You are VELO (Verification, Evaluation, & Licensing Operator), an advanced AI conversational agent representing RAC Forge Pvt. Ltd. as a highly expert Medical Device Regulatory Consultant. You chat intelligently, naturally, and professionally, providing accurate, trustworthy advice on medical device compliance, facility engineering (cleanrooms, HVAC, modular OTs), Quality Management Systems (ISO 13485), and global approval pipelines (CDSCO, USFDA, EU MDR, ANVISA).

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

Draft responses strictly, citing or outputting these direct download links whenever the user requests standards, guidelines, rules, forms, PDFs, or official documents. Always append this exact disclaimer at the end of every message: "Disclaimer: For confirmation, please contact our team."`,
      },
      contents: contents,
    };

    const modelsToTry = [
      'gemini-3.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-3.1-pro-preview',
      'gemini-flash-latest'
    ];

    let result = null;
    let lastError = null;

    try {
      const ai = getGoogleGenAI();
      for (const modelInstance of modelsToTry) {
        try {
          const response = await ai.models.generateContent({
            model: modelInstance,
            ...modelConfig,
          });
          if (response && response.text) {
            result = response;
            break;
          }
        } catch (modelError: any) {
          console.warn(`Vercel function: Model ${modelInstance} failed:`, modelError.message || modelError);
          lastError = modelError;
        }
      }
    } catch (initError: any) {
      console.warn('Vercel function: Gemini initialization failed:', initError.message || initError);
      lastError = initError;
    }

    if (result && result.text) {
      res.json({ text: result.text });
    } else {
      const fallbackResponse = getLocalFallbackResponse(userMessage);
      res.json({ text: fallbackResponse, isFallback: true });
    }
  } catch (err: any) {
    console.error('Serverless Chat API Error:', err);
    try {
      const fallbackText = getLocalFallbackResponse(req.body?.userMessage || '');
      res.json({ text: fallbackText, isFallback: true });
    } catch (innerErr) {
      res.status(500).json({ error: 'Failed to generate response', details: String(err) });
    }
  }
});

app.post('/api/generate-image', async (req, res) => {
  try {
    const { prompt, size } = req.body;
    const ai = getGoogleGenAI();

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
        model: 'gemini-3-pro-image-preview',
        ...modelConfig,
      });
    } catch (primaryError: any) {
      console.warn('Primary image model failed, utilizing backup in serverless...', primaryError);
      try {
        result = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          ...modelConfig,
        });
      } catch (secondaryError: any) {
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
    console.error('Serverless Image API Error:', error);
    res.status(500).json({ error: 'Failed to generate image', details: error.message || String(error) });
  }
});

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const ai = getGoogleGenAI();
    const chunksAdded = await processDocument(req.file, ai);
    res.json({ success: true, chunksAdded });
  } catch (error: any) {
    console.error('Serverless Upload Error:', error);
    res.status(500).json({ error: 'Failed to process document', details: error.message || String(error) });
  }
});

export default app;
