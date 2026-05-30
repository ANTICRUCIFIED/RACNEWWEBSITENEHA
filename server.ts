import sharp from 'sharp';
import os from 'os';
import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import { upload, processDocument, retrieveRelevantContext, documentStore } from './rag';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  let aiClient: GoogleGenAI | null = null;
  const getGoogleGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not defined. Please ensure your API key has been added in the Settings > Secrets panel of your AI Studio visual environment.');
    }
    if (!aiClient) {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  };

  // Helper for generating high-quality local fallback responses when the Gemini API is rate-limited or quota is exceeded
  const getLocalFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();
    const intro = `⚠️ **VELO Regulatory Assistant (Local Resiliency Mode)**\n\n*The Gemini API is currently experiencing a temporary rate limit or quota restriction. To ensure zero-interruption service, VELO's compiled offline knowledge base has automatically activated to handle your inquiry.* \n\n---\n\n`;

    // CDSCO
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
    if (q.includes('eu') || q.includes('mdr') || q.includes('ce') || q.includes('ce mark') || q.includes('2017/745') || q.includes('ec rep') || q.includes('representative')) {
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
*   **Cureus Journal of Medical Science (May 2026)**: Atul authored the seminal paper *"Administrative Restructuring Versus Product Safety: The Case for Subsequent Importer Scheme (SIS) in Importer Constitutional Changes"*. This scholarly work explores improvements and optimizations inside the CDSCO's SUGAM registration portal.
*   **Podcast Showcase**: Featured on ElendiLabs' international podcast **"The Elendi Files"** in the episode: *"Navigating Medical Device Registration in India: An In-Depth Guide to CDSCO Compliance with RAC Forge Private Limited"*. The discussion explores the detailed methodologies employed by RAC Forge in physically testing electronic hardware prototypes and validating software logic to achieve regulatory success.

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
*   **Google Search Map Anchor**: [https://share.google/GNUkTQHynWoYKpWY3](https://share.google/GNUkTQHynWoYKpWY3)

Please connect with us to schedule an engineering audit, cleanroom blueprint consultation, or global regulatory briefing.

---
**Disclaimer**: For confirmation, please contact our team.`;
    }

    // General Fallback
    return intro + `### VELO Regulatory Intelligence Engine (Offline Mode)

I am **VELO** (Verification, Evaluation, & Licensing Operator), representing RAC Forge Pvt. Ltd. I have perfect access to our compiled offline databases. 

How can we assist you with medical product regulation or facility engineering today?

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

  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      
      let context = '';
      try {
        const ai = getGoogleGenAI();
        context = await retrieveRelevantContext(userMessage, ai);
      } catch (contextError) {
        console.warn('Could not retrieve context due to rate limit or key issue:', contextError);
      }

      const augmentedMessage = context ? `Context information:\n\n${context}\n\nUser Message: ${userMessage}` : userMessage;
      
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
          tools: [{ googleSearch: {} }],
          systemInstruction: 'You are VELO (Verification, Evaluation, & Licensing Operator), an advanced AI conversational agent representing RAC Forge Pvt. Ltd. as a highly expert Medical Device Regulatory Consultant. You chat intelligently and naturally, just like a helpful human or Gemini, while providing accurate, professional, and helpful advice. Draft responses strictly in line with Indian MDR 2017, USFDA, EU MDR, or other regulatory guidelines. Key facts on Indian MDR 2017 for Import Form MD-14, the official government fees are: Class A is $1000 USD per manufacturing site and $50 USD per distinct medical device; Class B is $2000 USD per manufacturing site and $1000 USD per distinct medical device; Class C Device is $3000 USD per site and $1500 USD per device; Class D Device is $3000 USD per site and $1500 USD per device. Ensure absolute factual accuracy of fees, timelines, and forms. Always include a disclaimer at the end of your response stating: "Disclaimer: For confirmation, please contact our team." Maintain a warm, conversational, yet professional tone.',
        },
        contents: contents,
      };

      const modelsToTry = [
        'gemini-3.5-flash',
        'gemini-3.1-flash-lite',
        'gemini-3-flash',
        'gemini-2.5-flash',
        'gemini-flash-latest'
      ];

      let result = null;
      let lastError = null;

      try {
        const ai = getGoogleGenAI();
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
        res.json({ text: result.text });
      } else {
        // High quality offline fallback rather than throwing a breaking 500 error
        console.warn('VELO: All model options failed or rate-limited. Activating local intelligence response.');
        const fallbackResponse = getLocalFallbackResponse(userMessage);
        res.json({ text: fallbackResponse, isFallback: true });
      }
    } catch (err: any) {
      console.error('Core Chat API Error occurred:', err);
      // Absolute failsafe
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
        console.warn('Primary image model gemini-3-pro-image-preview failed, attempting fallback to gemini-2.5-flash-image...', primaryError);
        try {
          result = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
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

  app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
      const ai = getGoogleGenAI();
      const chunksAdded = await processDocument(req.file, ai);
      res.json({ success: true, chunksAdded });
    } catch (error: any) {
      console.error('Upload Error:', error);
      res.status(500).json({ error: 'Failed to process document', details: error.message || String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    
    // Explicitly serve sitemap and robots.txt
    app.get('/sitemap.xml', (req, res) => {
      res.sendFile(path.join(distPath, 'sitemap.xml'));
    });
    app.get('/robots.txt', (req, res) => {
      res.sendFile(path.join(distPath, 'robots.txt'));
    });

    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
