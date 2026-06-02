import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// We have physical routes we want to generate static folders for (all of our SPA pages)
const coreRoutes = [
  '/',
  '/about',
  '/services',
  '/expertise',
  '/blogs/resources',
  '/contact',
  '/velo-ai',
  '/raahi-ai',
  '/raaahi-ai'
];

const serviceRoutes = [
  '/services/cdsco-manufacturing-license',
  '/services/cdsco-import-license',
  '/services/cdsco-loan-license',
  '/services/cdsco-test-license',
  '/services/cdsco-clinical-investigation',
  '/services/usfda-510k-submission',
  '/services/usfda-pma-application',
  '/services/usfda-de-novo-classification',
  '/services/eu-mdr-compliance',
  '/services/anvisa-brazil-approval',
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

const blogIds = [
  'sterilization-validation',
  'biocompatibility-testing',
  'mastering-eu-mdr',
  'navigating-usfda-510k',
  'understanding-cdsco-rules',
  'fda-510k-indian-medtech',
  'master-technical-file-global-access',
  'cdsco-forensic-audit-landscape',
  'audit-ready-dossiers-fourth-schedule',
  'demystifying-iec-62304-software-traceability',
  'cdsco-ai-ml-medtech-requirements',
  'subsequent-importer-entity-change-license',
  'beyond-nabl-globac-testing-parity',
  'regional-medtech-msme-documentation-gap',
  'publishing-academic-evidence-cureus-medtech',
  'saas-medtech-podcast-elendi-labs'
];

const locationSlugs = [
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

const stateSlugs = [
  'gujarat-regulatory-compliance',
  'maharashtra-medtech-licensing',
  'karnataka-samd-guidelines',
  'tamil-nadu-device-registration',
  'telangana-biomedical-frameworks',
  'uttar-pradesh-manufacturing-consultant',
  'himachal-punjab-regional-pathways',
  'uttarakhand-regulatory-compliance'
];

const infoDataKeys = [
  'md-16', 'md-17', 'md-3', 'md-5', 'md-7', 'md-9', 'md-14', 'md-15', 'md-4', 'md-6', 'md-8', 'md-10', 
  'md-22', 'md-23', 'md-24', 'md-25', 'md-26', 'md-27', 'class-a', 'class-b', 'class-c', 'class-d', 
  'eu-mdr', 'usfda', 'fda', 'cdsco', 'anvisa', 'samd', 'iso-13485', 'iso-14971', 'iec-62304', 
  'iec-62366-1', 'gspr', 'cer', 'pms', 'pmcf', 'psur', 'eudamed', 'udi', 'prrc', 'bgmp', 'inmetro', 
  'anatel', 'aia', 'iaa', 'poa', 'fsc', 'dmf', 'pmf', 'smf', 'qms', 'cip', 'ib', 'crf', 'icd', 'gcp', 
  'estar', 'pma', 'ide', 'pai', 'q-sub', 'rta', 'ai', 'cbom', 'ai-ml', 'mdr', 'sla', 'cla', 'sugam'
];

// All route strings compiled together
const allRoutes = [];
coreRoutes.forEach(r => allRoutes.push(r));
serviceRoutes.forEach(r => allRoutes.push(r));
blogIds.forEach(id => allRoutes.push(`/blogs/${id}`));
locationSlugs.forEach(slug => allRoutes.push(`/locations/${slug}`));
stateSlugs.forEach(slug => allRoutes.push(`/india/${slug}`));
infoDataKeys.forEach(key => allRoutes.push(`/information/${key}`));

// Remove duplicates in allRoutes if any
const uniqueRoutes = [...new Set(allRoutes)];

console.log(`Audited unique routes count: ${uniqueRoutes.length}`);

// 1. GENERATE THE DIRECTORIES only if index.html exists in dist
if (fs.existsSync(indexHtmlPath)) {
  console.log(`Generating ${uniqueRoutes.length} physical directories for SEO indexing on GitHub Pages...`);
  uniqueRoutes.forEach(route => {
    if (route === '/') return; // No need to duplicate root
    const targetDir = path.join(distPath, route);
    try {
      fs.mkdirSync(targetDir, { recursive: true });
      fs.copyFileSync(indexHtmlPath, path.join(targetDir, 'index.html'));
    } catch (err) {
      console.error(`Error generating route path ${route}:`, err);
    }
  });
  console.log("Successfully generated physical routing directories! Google Search Console can now crawl every page with a 200 OK.");
}

// 2. GENERATE SITEMAP.XML in public/sitemap.xml (this is the build source of truth)
const publicDir = path.join(process.cwd(), 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

const today = new Date().toISOString().split('T')[0];

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
    changefreq = 'yearly';
  } else if (route.startsWith('/locations/') || route.startsWith('/india/')) {
    priority = '0.6';
    changefreq = 'monthly';
  }

  const cleanRoute = route === '/' ? '' : route;
  sitemapXml += `  <url>
    <loc>https://www.racforge.com${cleanRoute}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemapXml += `</urlset>
`;

fs.writeFileSync(sitemapPath, sitemapXml);
console.log(`Successfully generated public/sitemap.xml containing ${uniqueRoutes.length} URLs.`);

// Also copy it to dist/sitemap.xml if dist directory exists so it gets deployed immediately
if (fs.existsSync(distPath)) {
  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapXml);
  console.log("Successfully copied sitemap.xml to dist/");
}
