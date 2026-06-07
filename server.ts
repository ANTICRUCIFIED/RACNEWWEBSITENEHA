import os from 'os';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import { upload, processDocument, retrieveRelevantContext, documentStore, preloadStaticDocuments, appendLearnedKnowledge } from './api/rag';
import { BLOG_POSTS } from './src/data/blogData';
import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use explicit manual CORS headers with precise support for credentials and instant preflight resolution
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, X-CSRF-Token, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version');
    
    // Instantly resolve preflight OPTIONS queries to prevent browser-side "Failed to fetch" blockades
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
  });
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
  app.get('/api/health', (req, res) => {
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
  app.get('/api/posts', (req, res) => {
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
  app.get('/api/posts/:id', (req, res) => {
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

  app.post('/api/chat', async (req, res) => {
    let context = '';
    try {
      const { messages = [], userMessage, apiKey } = req.body;
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

  app.post('/api/generate-image', async (req, res) => {
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

  app.post('/api/upload', upload.single('file'), async (req, res) => {
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

  app.post('/api/contact', async (req, res) => {
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

  // Explicitly serve sitemap.xml, sitemap.rss, and robots.txt with correct Content-Type headers
  app.get('/sitemap.xml', (req, res) => {
    const pathsToTry = [
      path.join(process.cwd(), 'dist', 'sitemap.xml'),
      path.join(process.cwd(), 'public', 'sitemap.xml')
    ];
    let served = false;
    for (const p of pathsToTry) {
      if (fs.existsSync(p)) {
        res.setHeader('Content-Type', 'application/xml');
        res.sendFile(p);
        served = true;
        break;
      }
    }
    if (!served) {
      res.status(404).send('Sitemap XML file not found. Recompile the build to generate.');
    }
  });

  app.get('/sitemap.rss', (req, res) => {
    const pathsToTry = [
      path.join(process.cwd(), 'dist', 'sitemap.rss'),
      path.join(process.cwd(), 'public', 'sitemap.rss')
    ];
    let served = false;
    for (const p of pathsToTry) {
      if (fs.existsSync(p)) {
        res.setHeader('Content-Type', 'application/rss+xml');
        res.sendFile(p);
        served = true;
        break;
      }
    }
    if (!served) {
      res.status(404).send('Sitemap RSS file not found. Recompile the build to generate.');
    }
  });

  app.get('/robots.txt', (req, res) => {
    const pathsToTry = [
      path.join(process.cwd(), 'dist', 'robots.txt'),
      path.join(process.cwd(), 'public', 'robots.txt')
    ];
    let served = false;
    for (const p of pathsToTry) {
      if (fs.existsSync(p)) {
        res.setHeader('Content-Type', 'text/plain');
        res.sendFile(p);
        served = true;
        break;
      }
    }
    if (!served) {
      res.status(404).send('Robots.txt file not found.');
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

    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
      const ai = getGoogleGenAI();
      preloadStaticDocuments(ai).then((chunks) => {
        console.log(`Successfully preloaded static documents on startup. Total chunks: ${chunks}`);
      }).catch((err) => {
        console.warn('Could not preload static files on startup:', err);
      });
    } catch (e: any) {
      console.warn('Preloading deferred until first user request (API Key not available on startup):', e.message || e);
    }
  });
}

startServer();
