import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// Helper function to parse blog posts from src/data/blogData.ts and src/data/additionalBlogData.ts
function parseBlogPostsFromTs() {
  const posts = [];
  const files = [
    path.join(process.cwd(), 'src/data/additionalBlogData.ts'),
    path.join(process.cwd(), 'src/data/blogData.ts')
  ];
  
  for (const filePath of files) {
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Split by "id: '" with leading whitespace and word boundary to avoid matching other fields like "pmcid"
    const segments = content.split(/\s+\bid\s*:\s*'/);
    for (let i = 1; i < segments.length; i++) {
      const seg = segments[i];
      const id = seg.split("'")[0];
      
      // find title
      let title = "";
      const titleMatch = seg.match(/title:\s*['"`]([^'"`<>]+)['"`]/);
      if (titleMatch) {
        title = titleMatch[1];
      }
      
      // find excerpt
      let excerpt = "";
      const excerptMatch = seg.match(/excerpt:\s*['"`]([^'`]+?)['"`],/);
      if (excerptMatch) {
        excerpt = excerptMatch[1];
      } else {
        // backup regex if it spans lines
        const excerptMatchAlt = seg.match(/excerpt:\s*['"`]([\s\S]*?)['"`],/);
        if (excerptMatchAlt) {
          excerpt = excerptMatchAlt[1].replace(/\n/g, ' ').trim();
        }
      }
      
      // find date
      let date = "";
      const dateMatch = seg.match(/date:\s*['"`]([^'"`]+)['"`]/);
      if (dateMatch) {
        date = dateMatch[1];
      }
      
      if (!posts.some(p => p.id === id)) {
        posts.push({ id, title, excerpt, date });
      }
    }
  }
  return posts;
}

// Helper function to parse locations and states from src/data/locationData.ts
function parseLocationDataFromTs() {
  const filePath = path.join(process.cwd(), 'src/data/locationData.ts');
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const locations = {};
  
  const segments = content.split(/slug:\s*["']/);
  for (let i = 1; i < segments.length; i++) {
    const seg = segments[i];
    const slug = seg.split(/["']/)[0];
    
    let title = "";
    const titleMatch = seg.match(/title:\s*["']([^"']+)["']/);
    if (titleMatch) title = titleMatch[1];
    
    let intro = "";
    const introMatch = seg.match(/intro:\s*["']([^"']+)["']/);
    if (introMatch) intro = introMatch[1];
    
    if (slug) {
      locations[slug] = { title, intro };
    }
  }
  return locations;
}

// Helper function to parse info items from src/data/infoData.ts
function parseInfoDataFromTs() {
  const filePath = path.join(process.cwd(), 'src/data/infoData.ts');
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const infoData = {};
  
  const segments = content.split(/["']:\s*\{/);
  for (let i = 0; i < segments.length - 1; i++) {
    const segBefore = segments[i];
    const keyParts = segBefore.split(/["']/);
    const key = keyParts[keyParts.length - 1].trim();
    
    const segAfter = segments[i + 1];
    
    let title = "";
    const titleMatch = segAfter.match(/title:\s*["']([^"']+)["']/);
    if (titleMatch) title = titleMatch[1];
    
    let description = "";
    const contentMatch = segAfter.match(/content:\s*["']([^"']+)["']/);
    if (contentMatch) {
      description = contentMatch[1].replace(/\n/g, ' ').substring(0, 180) + '...';
    }
    
    if (key && key.length < 50) {
      infoData[key.toLowerCase()] = { title, description };
    }
  }
  return infoData;
}

// Load dynamic data on-the-fly
const blogPosts = parseBlogPostsFromTs();
const locationsData = parseLocationDataFromTs();
const infoDataItems = parseInfoDataFromTs();

console.log(`Parsed dynamic data counts: `);
console.log(`- Dynamic Blogs: ${blogPosts.length}`);
console.log(`- Dynamic Locations/States: ${Object.keys(locationsData).length}`);
console.log(`- Dynamic Informational Guides: ${Object.keys(infoDataItems).length}`);

// Dynamic route parser from App.tsx
function parseRoutesFromApp() {
  const filePath = path.join(process.cwd(), 'src/App.tsx');
  if (!fs.existsSync(filePath)) return { core: [], services: [] };
  const content = fs.readFileSync(filePath, 'utf8');
  
  const core = new Set(['/']);
  const services = new Set();
  
  const pathRegex = /path=["']([^"']+)["']/g;
  let match;
  while ((match = pathRegex.exec(content)) !== null) {
    const route = match[1];
    if (route.includes(':')) continue; // skip dynamic routes
    
    if (route.startsWith('/services/')) {
      services.add(route);
    } else if (route !== '/') {
      core.add(route);
    }
  }
  
  return {
    core: Array.from(core),
    services: Array.from(services)
  };
}

// Dynamic location & state parser from locationData.ts
function parseLocationSlugsFromData() {
  const filePath = path.join(process.cwd(), 'src/data/locationData.ts');
  if (!fs.existsSync(filePath)) return { cities: [], states: [] };
  const content = fs.readFileSync(filePath, 'utf8');
  
  const cities = new Set();
  const states = new Set();
  
  // Parse CITIES_DATA structure
  const citiesSegment = content.match(/export\s+const\s+CITIES_DATA[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
  if (citiesSegment) {
    const block = citiesSegment[1];
    const slugRegex = /["']?slug["']?\s*:\s*["']([^"']+)["']/g;
    let match;
    while ((match = slugRegex.exec(block)) !== null) {
      cities.add(match[1]);
    }
  }
  
  // Parse STATES_DATA structure
  const statesSegment = content.match(/export\s+const\s+STATES_DATA[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
  if (statesSegment) {
    const block = statesSegment[1];
    const slugRegex = /["']?slug["']?\s*:\s*["']([^"']+)["']/g;
    let match;
    while ((match = slugRegex.exec(block)) !== null) {
      states.add(match[1]);
    }
  }
  
  return {
    cities: Array.from(cities),
    states: Array.from(states)
  };
}

// Dynamic info guide key parser from infoData.ts
function parseInfoKeysFromData() {
  const filePath = path.join(process.cwd(), 'src/data/infoData.ts');
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const keys = new Set();
  
  const regex = /^\s*['"]([^'"]+)['"]\s*:\s*\{/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.add(match[1]);
  }
  return Array.from(keys);
}

// Parse all elements dynamically with robust native hardcoded backups
const parsedRoutes = parseRoutesFromApp();
const parsedLocations = parseLocationSlugsFromData();
const parsedInfoKeys = parseInfoKeysFromData();

const coreRoutes = parsedRoutes.core.length > 0 ? parsedRoutes.core : [
  '/',
  '/about',
  '/services',
  '/expertise',
  '/blogs/resources',
  '/contact',
  '/raahi-ai'
];

const serviceRoutes = parsedRoutes.services.length > 0 ? parsedRoutes.services : [
  '/services/cdsco-clinical-investigation',
  '/services/usfda-pma-application',
  '/services/usfda-de-novo-classification',
  '/services/rd-and-samd',
  '/services/samd-architecture-development',
  '/services/embedded-medical-firmware',
  '/services/usability-engineering-iec-62366',
  '/services/electrical-medical-device-prototyping',
  '/services/hardware-vv-protocols',
  '/services/facility-cleanroom-design',
  '/services/cdsco-manufacturing-license-md5-md9',
  '/services/cdsco-import-license-md14',
  '/services/cdsco-loan-license-md6-md10',
  '/services/cdsco-test-license-md13',
  '/services/usfda-510k-de-novo',
  '/services/eu-mdr-ce-marking',
  '/services/ukca-mark-certification',
  '/services/eu-authorized-representative',
  '/services/anvisa-brazil-registration',
  '/services/iso-13485-certification-audit',
  '/services/mdsap-joint-audits',
  '/services/biocompatibility-testing-iso-10993',
  '/services/preclinical-safety-evaluation',
  '/services/toxicological-risk-assessment',
  '/services/extractables-leachables',
  '/services/gcp-audit',
  '/services/iec-60601-electrical-safety',
  '/services/iso-14971-risk-management',
  '/services/sterile-barrier-validation',
  '/services/post-market-surveillance-pms',
  '/services/regulatory-audit-readiness',
  '/services/indian-authorized-representative'
];

const locationSlugs = parsedLocations.cities.length > 0 ? parsedLocations.cities : [
  'chandigarh-mohali',
  'baddi-solan-nalagarh',
  'delhi-ncr',
  'ludhiana-jalandhar',
  'haridwar-dehradun',
  'ahmedabad-sanand',
  'mumbai-thane',
  'pune',
  'rajkot-vadodara',
  'visakhapatnam-amtz',
  'bengaluru',
  'hyderabad-genome-valley',
  'chennai-kanchipuram',
  'thiruvananthapuram-kochi',
  'ujjain-indore',
  'kolkata',
  'jaipur'
];

const stateSlugs = parsedLocations.states.length > 0 ? parsedLocations.states : [
  'gujarat-regulatory-compliance',
  'maharashtra-medtech-licensing',
  'karnataka-samd-guidelines',
  'tamil-nadu-device-registration',
  'telangana-biomedical-frameworks',
  'uttar-pradesh-manufacturing-consultant',
  'himachal-punjab-regional-pathways',
  'uttarakhand-regulatory-compliance'
];

const infoDataKeys = parsedInfoKeys.length > 0 ? parsedInfoKeys : [
  'md-16', 'md-17', 'md-3', 'md-5', 'md-7', 'md-9', 'md-14', 'md-15', 'md-4', 'md-6', 'md-8', 'md-10', 
  'md-22', 'md-23', 'md-24', 'md-25', 'md-26', 'md-27', 'class-a', 'class-b', 'class-c', 'class-d', 
  'eu-mdr', 'usfda', 'fda', 'cdsco', 'anvisa', 'samd', 'iso-13485', 'iso-14971', 'iec-62304', 
  'iec-62366-1', 'gspr', 'cer', 'pms', 'pmcf', 'psur', 'eudamed', 'udi', 'prrc', 'bgmp', 'inmetro', 
  'anatel', 'aia', 'iaa', 'poa', 'fsc', 'dmf', 'pmf', 'smf', 'qms', 'cip', 'ib', 'crf', 'icd', 'gcp', 
  'estar', 'pma', 'ide', 'pai', 'q-sub', 'rta', 'ai', 'cbom', 'ai-ml', 'mdr', 'sla', 'cla', 'sugam'
];

// Compile all routes
const allRoutes = [];
coreRoutes.forEach(r => allRoutes.push(r));
serviceRoutes.forEach(r => allRoutes.push(r));
blogPosts.forEach(post => allRoutes.push(`/blogs/${post.id}`));
locationSlugs.forEach(slug => allRoutes.push(`/locations/${slug}`));
stateSlugs.forEach(slug => allRoutes.push(`/india/${slug}`));
infoDataKeys.forEach(key => allRoutes.push(`/information/${key}`));

// Routes that are purely client-side redirects (Navigate) to other canonical paths
// and should be excluded from search indexing, sitemaps, and directory pre-generation.
const REDIRECT_ROUTES = [
  '/blogs',
  '/velo-ai',
  '/raaahi-ai',
  '/services/cdsco-manufacturing-license',
  '/services/cdsco-import-license',
  '/services/cdsco-loan-license',
  '/services/cdsco-test-license',
  '/services/usfda-510k-submission',
  '/services/eu-mdr-compliance',
  '/services/anvisa-brazil-approval'
];

// Remove duplicates and redirect routes
const uniqueRoutes = [...new Set(allRoutes)].filter(route => !REDIRECT_ROUTES.includes(route));
console.log(`Audited unique routes count: ${uniqueRoutes.length}`);

// 1. GENERATE THE PHYSICAL DIRECTORIES ON VITE BUILD (needed for proper static/GitHub deployment crawling)
if (fs.existsSync(indexHtmlPath)) {
  console.log(`Generating ${uniqueRoutes.length} physical directories for SEO indexing...`);
  const rawHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  // Also inject canonical link into the root dist/index.html
  let customizedRootHtml = rawHtml;
  customizedRootHtml = customizedRootHtml.replace(/<link rel="canonical" href="[^"]+" \/>\n?\s*/gi, '');
  customizedRootHtml = customizedRootHtml.replace(
    '</head>',
    `  <link rel="canonical" href="https://www.racforge.com" />\n  </head>`
  );
  fs.writeFileSync(indexHtmlPath, customizedRootHtml);
  console.log("Injected canonical tag into root index.html");

  uniqueRoutes.forEach(route => {
    if (route === '/') return;
    const targetDir = path.join(distPath, route);
    try {
      fs.mkdirSync(targetDir, { recursive: true });
      
      const meta = getRouteMetadata(route);
      const cleanRoute = route === '/' ? '' : route;
      const canonicalUrl = `https://www.racforge.com${cleanRoute}`;
      
      let customizedHtml = rawHtml;
      
      // Replace Title
      customizedHtml = customizedHtml.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${meta.title}</title>`
      );
      
      // Replace Description tag if it exists
      customizedHtml = customizedHtml.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />`
      );
      
      // Ensure there's no pre-existing canonical link
      customizedHtml = customizedHtml.replace(/<link rel="canonical" href="[^"]+" \/>\n?\s*/gi, '');
      
      // Inject Canonical Link right before </head>
      customizedHtml = customizedHtml.replace(
        '</head>',
        `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
      );
      
      // Write both directory index.html (for static directory servers) and flat .html file (for cleanUrls / Vercel without trailing slash redirects)
      fs.writeFileSync(path.join(targetDir, 'index.html'), customizedHtml);

      const flatHtmlPath = path.join(distPath, `${route}.html`);
      fs.mkdirSync(path.dirname(flatHtmlPath), { recursive: true });
      fs.writeFileSync(flatHtmlPath, customizedHtml);
    } catch (err) {
      console.error(`Error generating route path ${route}:`, err);
    }
  });
  console.log("Successfully generated physical routing directories with pre-rendered canonical tags, titles, and descriptions!");
}

// 2. GENERATE SITEMAP.XML (SEO Standard)
const publicDir = path.join(process.cwd(), 'public');
const sitemapXmlPath = path.join(publicDir, 'sitemap.xml');
const todayIso = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

uniqueRoutes.forEach(route => {
  let priority = '0.6';
  let changefreq = 'monthly';

  if (route === '/') {
    priority = '1.0';
    changefreq = 'weekly';
  } else if (route === '/services') {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (route === '/about' || route === '/expertise' || route === '/blogs/resources') {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (route === '/contact') {
    priority = '0.7';
    changefreq = 'yearly';
  } else if (route.startsWith('/velo-ai') || route.startsWith('/raahi-ai') || route.startsWith('/raaahi-ai')) {
    priority = '0.8';
    changefreq = 'monthly';
  } else if (route.startsWith('/services/')) {
    priority = '0.8';
    changefreq = 'monthly';
  } else if (route.startsWith('/blogs/')) {
    priority = '0.7';
    changefreq = 'monthly';
  } else if (route.startsWith('/information/')) {
    priority = '0.6';
    changefreq = 'monthly';
  } else if (route.startsWith('/locations/') || route.startsWith('/india/')) {
    priority = '0.6';
    changefreq = 'monthly';
  }

  const cleanRoute = route === '/' ? '' : route;
  sitemapXml += `  <url>
    <loc>https://www.racforge.com${cleanRoute}</loc>
    <lastmod>${todayIso}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemapXml += `</urlset>
`;

fs.writeFileSync(sitemapXmlPath, sitemapXml);
console.log(`Successfully generated public/sitemap.xml with ${uniqueRoutes.length} urls.`);

// 3. GENERATE SITEMAP.RSS (Fully synchronized with all exact custom names and descriptions)
const sitemapRssPath = path.join(publicDir, 'sitemap.rss');
const todayRfc = new Date().toUTCString();

let sitemapRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2000/Atom">
<channel>
  <title>RAC Forge - Medical Device Regulatory Consulting</title>
  <link>https://www.racforge.com/</link>
  <description>Your Global Medical Device Regulatory Partner. Strategic guidance and thorough documentation services for successful market entry.</description>
  <language>en-us</language>
  <lastBuildDate>${todayRfc}</lastBuildDate>
  <atom:link href="https://www.racforge.com/sitemap.rss" rel="self" type="application/rss+xml" />
`;

// Helper map to associate metadata
function getRouteMetadata(route) {
  // Core Page Metadata
  if (route === '/') {
    return {
      title: "RAC Forge - Global Medical Device Regulatory Partner",
      description: "Your Global Medical Device Regulatory Partner. Turnkey CDSCO, USFDA, and EU MDR compliance for medical device and SaMD manufacturers.",
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }
  if (route === '/about') {
    return {
      title: "About Us | RAC Forge Private Limited",
      description: "Learn about the team, regulatory experts, and leadership behind RAC Forge's turnkey compliance engineering.",
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }
  if (route === '/services') {
    return {
      title: "Medical Device Regulatory Services - USFDA, CDSCO, EU MDR",
      description: "Comprehensive regulatory consulting: CDSCO manufacturing/import licenses, USFDA 510(k), EU MDR Technical Documentation, and Anvisa approvals.",
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }
  if (route === '/expertise') {
    return {
      title: "Regulatory Architecture & Design Controls Expertise | RAC Forge",
      description: "Discover our deep engineering and regulatory capabilities in medical electrical equipment, software validation, and biocompatibility protocols.",
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }
  if (route === '/blogs/resources') {
    return {
      title: "Resource Directories & Knowledge Base | RAC Forge",
      description: "Explore our publications, whitepapers, and guides on sterilization validation, biocompatibility strategies, and CDSCO rules.",
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }
  if (route === '/contact') {
    return {
      title: "Contact Our Regulatory Experts | RAC Forge",
      description: "Speak with a compliance engineer about your medical device or SaMD project. Locations in Chandigarh, Ahmedabad, Bengaluru, Delhi NCR, and more.",
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }
  if (route === '/velo-ai' || route === '/raahi-ai' || route === '/raaahi-ai') {
    return {
      title: "RAAAHI (राही) - MedTech Regulatory Copilot & Search",
      description: "Our innovative semantic search and schema builder powered by generative AI. Map complex global medical device regulations in seconds.",
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }

  // Bespoke Services Metadata
  const staticServices = {
    '/services/cdsco-manufacturing-license-md5-md9': {
      title: 'CDSCO Manufacturing License (MD-5 & MD-9) | RAC Forge',
      description: 'Turnkey CDSCO Class A, B, C, & D manufacturing licensing support. Step-by-step documentation, site master files compilation, and on-site joint check preparation.'
    },
    '/services/cdsco-import-license-md14': {
      title: 'CDSCO Import License (MD-14 & MD-15) | RAC Forge',
      description: 'Secure your Indian CDSCO MD-14 import registration quickly. Full legal coordination, foreign manufacturing site registrations, and dossier evaluations.'
    },
    '/services/indian-authorized-representative': {
      title: 'Indian Authorized Representative (IAR) Services | RAC Forge',
      description: 'Legally appointed Indian Authorized Representative representation. Full liaison support, device vigilance compliance, and direct CDSCO coordination.'
    },
    '/services/cdsco-loan-license-md6-md10': {
      title: 'CDSCO Loan License (MD-6 & MD-10) Compliance | RAC Forge',
      description: 'Set up compliant contract manufacturing and loan licensing pipelines. Full assistance with MD-6/10 licensing pathways, audits, and SLA clearances.'
    },
    '/services/cdsco-test-license-md13': {
      title: 'CDSCO Test License (MD-13) for Clinical/R&D | RAC Forge',
      description: 'Secure CDSCO Form MD-13 test license for clinical investigation, testing, and evaluation of regulatory prototypes and imported medical devices.'
    },
    '/services/cdsco-clinical-investigation': {
      title: 'Clinical Investigation & SEC Presentations | RAC Forge',
      description: 'End-to-end clinical trial management, protocol designs, GCP compliance, and representation before CDSCO Subject Expert Committees (SEC).'
    },
    '/services/usfda-510k-de-novo': {
      title: 'USFDA 510(k) Pre-Market Notification & De Novo | RAC Forge',
      description: 'Expert premarket notification submissions, regulatory predicate mapping, and De Novo classifications to gain rapid USFDA market clearance.'
    },
    '/services/eu-mdr-ce-marking': {
      title: 'EU MDR 2017/745 Compliance & CE Marking | RAC Forge',
      description: 'Complete European Union Medical Device Regulation compliance. Technical documentation compilation, GSPR checklists, and Clinical Evaluation Reports (CER).'
    },
    '/services/eu-authorized-representative': {
      title: 'European Authorized Representative (EC Rep) Support | RAC Forge',
      description: 'Acquire fully compliant EU-based Authorized Representative representation. Manage SRN registration under EUDAMED and incident notification support.'
    },
    '/services/anvisa-brazil-registration': {
      title: 'ANVISA Brazil Medical Device Registration | RAC Forge',
      description: 'Navigate ANVISA medical device registration requirements in Brazil. Comprehensive BGMP audits, technical dossiers, and local registration support.'
    },
    '/services/ukca-mark-certification': {
      title: 'UKCA Mark Certification & MHRA Compliance | RAC Forge',
      description: 'Secure regulatory clearance in the United Kingdom. Transition seamlessly from CE to UKCA, register with MHRA, and navigate UK healthcare pathways.'
    },
    '/services/mdsap-joint-audits': {
      title: 'MDSAP Joint Quality Audits & Certification | RAC Forge',
      description: 'Multi-Market Joint Audit compliance. Prepare your Quality Management System to pass one unified MDSAP audit covering US, Canada, Brazil, Japan, and Australia.'
    },
    '/services/biocompatibility-testing-iso-10993': {
      title: 'Biocompatibility Testing (ISO 10993) & BER | RAC Forge',
      description: 'Expert biocompatibility program planning, chemical characterization studies (ISO 10993-18), toxicological risk assessment, and Biological Evaluation Reports (BER).'
    },
    '/services/preclinical-safety-evaluation': {
      title: 'Preclinical Safety Evaluation & Testing | RAC Forge',
      description: 'Preclinical trial protocols, efficacy validation, animal studies coordination, and laboratory testing support satisfying CDSCO and international bodies.'
    },
    '/services/toxicological-risk-assessment': {
      title: 'Toxicological Risk Assessment (ISO 10993-17) | RAC Forge',
      description: 'Pristine toxicological risk evaluations, leachables characterization, safety margin calculations, and certified toxicologist signoffs for global compliance.'
    },
    '/services/extractables-leachables': {
      title: 'Extractables & Leachables (E&L) Testing | RAC Forge',
      description: 'Custom E&L methodology designs, GC-MS/LC-MS material characterization studies, and risk-based biocompatibility profiles for liquid pathways.'
    },
    '/services/gcp-audit': {
      title: 'Good Clinical Practice (GCP) Audit Readiness | RAC Forge',
      description: 'Comprehensive GCP pre-audits, investigator site preparation, trial document reviews, and monitoring to pass strict clinical inspection guidelines.'
    },
    '/services/iso-13485-certification-audit': {
      title: 'ISO 13485 & ISO 9001 QMS Certification | RAC Forge',
      description: 'Corporate QMS design and audit preparation. Direct implementation, Standard Operating Procedures (SOPs) development, and certification audits assistance.'
    },
    '/services/regulatory-audit-readiness': {
      title: 'Regulatory Site Audit & Inspection Readiness | RAC Forge',
      description: 'Mock inspections, Gap Analysis, on-site personnel training, and rapid corrective action plans to guarantee success in joint CDSCO and Notified Body audits.'
    },
    '/services/iec-60601-electrical-safety': {
      title: 'IEC 60601-1 Medical Electrical Safety | RAC Forge',
      description: 'Expert analysis and compliance planning for medical electrical equipment. Navigate electromagnetic compatibility (EMC) testing and safety reviews.'
    },
    '/services/iso-14971-risk-management': {
      title: 'ISO 14971 Risk Management for Devices | RAC Forge',
      description: 'Bespoke lifecycle risk management files. Hazard identification, risk estimation, control validation, and post-market safety synchronization.'
    },
    '/services/sterile-barrier-validation': {
      title: 'Sterile Barrier System Validation (ISO 11607) | RAC Forge',
      description: 'Packaging seal integrity testing, accelerated aging validation, distribution simulation protocols, and sterilization validation (EtO, Gamma).'
    },
    '/services/post-market-surveillance-pms': {
      title: 'Post-Market Surveillance (PMS) & PMCF | RAC Forge',
      description: 'Formulate comprehensive Post-Market Clinical Follow-up protocols, Periodic Safety Update Reports (PSUR), and direct regulatory alert reporting.'
    },
    '/services/samd-architecture-development': {
      title: 'Software as a Medical Device (SaMD) Architecture | RAC Forge',
      description: 'Architecting robust, FDA-grade digital health products. Direct compliance mapping for IEC 62304 and agile regulatory software life cycle support.'
    },
    '/services/embedded-medical-firmware': {
      title: 'Embedded Medical Video & Device Firmware | RAC Forge',
      description: 'Hardware-level firmware design conforming to IEC 62304. Secure boot configuration, safety-critical routines, and code testing trace structures.'
    },
    '/services/usability-engineering-iec-62366': {
      title: 'Usability Engineering (IEC 62366-1) & UX | RAC Forge',
      description: 'Formative and summative usability test protocols, user interface error mitigation, and human factors dossiers built for seamless USFDA reviews.'
    },
    '/services/electrical-medical-device-prototyping': {
      title: 'Electrical Medical Device Prototyping | RAC Forge',
      description: 'Regulatory-compliant electrical hardware prototyping, multi-layer PCB layout designs, and pre-validation testing against EMC limits.'
    },
    '/services/hardware-vv-protocols': {
      title: 'Hardware Verification & Validation (V&V) | RAC Forge',
      description: 'Custom automated V&V scripts, environment stressing protocols, stress lifecycle audits, and structured device design history files.'
    },
    '/services/facility-cleanroom-design': {
      title: 'Medical Device Facility & Cleanroom Design | RAC Forge',
      description: 'Civil layout designs, HVAC airflow systems integration, pressure differential mapping, and particle verification qualifying for CDSCO Class C & D.'
    },
    '/services/cdsco-manufacturing-license': {
      title: 'CDSCO Manufacturing License Regulatory Services | RAC Forge',
      description: 'Liaison and design controls compliance services for medical device and in-vitro diagnostics manufacturing configurations under CDSCO guidelines.'
    },
    '/services/cdsco-import-license': {
      title: 'CDSCO Import License Consulting | RAC Forge',
      description: 'Acquire CDSCO importer registrations and import authorizations for globally made Class A, B, C, and D medical devices smoothly.'
    },
    '/services/cdsco-loan-license': {
      title: 'CDSCO Loan License Consulting & QMS Audits | RAC Forge',
      description: 'Process and infrastructure audits for medical devices developed via contract or leased manufacturing facilities.'
    },
    '/services/cdsco-test-license': {
      title: 'CDSCO Test License Consultation | RAC Forge',
      description: 'Register and acquire trial, testing, and evaluation licenses to validate your electronic or biochemical prototypes in India.'
    },
    '/services/usfda-510k-submission': {
      title: 'USFDA 510(k) Premarket Submissions Consulting | RAC Forge',
      description: 'Prepare detailed USFDA 510(k) clearances with predicate equivalence comparisons, software documentation, and laboratory reports.'
    },
    '/services/usfda-pma-application': {
      title: 'USFDA Premarket Approval (PMA) Applications | RAC Forge',
      description: 'Bespoke clinical pathways, statistical analysis, and master files compilation for Class III medical devices to gain Premarket FDA Approval.'
    },
    '/services/usfda-de-novo-classification': {
      title: 'USFDA De Novo Classification Requirements | RAC Forge',
      description: 'Establish classification paths for novel medical apps or devices lacking a recognized market predicate.'
    },
    '/services/eu-mdr-compliance': {
      title: 'EU MDR Compliance & CE Mark Documentation | RAC Forge',
      description: 'Develop harmonized technical files mapping out General Safety and Performance Requirements (GSPR) to satisfy European Notified Bodies.'
    },
    '/services/anvisa-brazil-approval': {
      title: 'Brazil ANVISA Approvals & Registration | RAC Forge',
      description: 'Compilation of BGMP records and technical portfolios required to secure device clearancing in Brazilian market.'
    },
    '/services/rd-and-samd': {
      title: 'Medical Devices R&D and Software as a Medical Device (SaMD) | RAC Forge',
      description: 'Pristine product conceptualization and technical architecture for physical instruments and software-driven innovations.'
    }
  };

  if (staticServices[route]) {
    return {
      title: staticServices[route].title,
      description: staticServices[route].description,
      date: "Thu, 30 Apr 2026 12:00:00 +0000"
    };
  }

  // Dynamic Blogs
  if (route.startsWith('/blogs/')) {
    const id = route.split('/')[2];
    const post = blogPosts.find(p => p.id === id);
    if (post) {
      let dateUtc = "Thu, 30 Apr 2026 12:00:00 +0000";
      try {
        const d = new Date(post.date);
        if (!isNaN(d.getTime())) {
          dateUtc = d.toUTCString();
        }
      } catch (e) {}
      return {
        title: `${post.title} | RAC Forge Journal`,
        description: post.excerpt,
        date: dateUtc
      };
    }
  }

  // Dynamic Locations & States
  if (route.startsWith('/locations/') || route.startsWith('/india/')) {
    const slug = route.split('/')[2];
    const loc = locationsData[slug];
    if (loc) {
      return {
        title: loc.title,
        description: loc.intro,
        date: "Thu, 30 Apr 2026 12:00:00 +0000"
      };
    }
  }

  // Dynamic Information Guides
  if (route.startsWith('/information/')) {
    const key = route.split('/')[2];
    const info = infoDataItems[key];
    if (info) {
      return {
        title: `${info.title} - Critical Document Guide | RAC Forge`,
        description: info.description,
        date: "Thu, 30 Apr 2026 12:00:00 +0000"
      };
    }
  }

  // Standard Fallback Title Generation
  const parts = route.split('/').filter(Boolean);
  const lastPart = parts[parts.length - 1];
  const cleanTitle = lastPart ? lastPart.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Page Resource";
  return {
    title: `${cleanTitle} Services - Medical Device Compliance`,
    description: `Expert medical device regulatory guidance, documentation schemas, and validation services for ${cleanTitle}.`,
    date: "Thu, 30 Apr 2026 12:00:00 +0000"
  };
}

uniqueRoutes.forEach(route => {
  const meta = getRouteMetadata(route);
  const cleanRoute = route === '/' ? '' : route;
  sitemapRss += `  <item>
    <title>${meta.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>
    <link>https://www.racforge.com${cleanRoute}</link>
    <description>${meta.description.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</description>
    <pubDate>${meta.date}</pubDate>
    <guid>https://www.racforge.com${cleanRoute}</guid>
  </item>
`;
});

sitemapRss += `</channel>
</rss>
`;

fs.writeFileSync(sitemapRssPath, sitemapRss);
console.log(`Successfully generated public/sitemap.rss with ${uniqueRoutes.length} items.`);

// Copy to dist/ directory if it exists for immediate production deployment
if (fs.existsSync(distPath)) {
  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.join(distPath, 'sitemap.rss'), sitemapRss);
  console.log("Successfully copied sitemap.xml and sitemap.rss to dist/");
}
