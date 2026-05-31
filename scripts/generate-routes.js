import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("No index.html found. Run 'npm run build' first!");
  process.exit(1);
}

const staticRoutes = [
  '/about',
  '/services',
  '/expertise',
  '/blogs/resources',
  '/contact',
  '/velo-ai',
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
  '/services/rd-and-samd'
];

// Blog posts routes (dynamic parameters, but statically known)
const blogIds = [
  'sterilization-validation',
  'biocompatibility-testing',
  'mastering-eu-mdr',
  'navigating-usfda-510k',
  'understanding-cdsco-rules'
];
blogIds.forEach(id => {
  staticRoutes.push(`/blogs/${id}`);
});

// InfoData routes (forms, classes, standards, etc.)
const infoDataKeys = [
  'md-16', 'md-17', 'md-3', 'md-5', 'md-7', 'md-9', 'md-14', 'md-15', 'md-4', 'md-6', 'md-8', 'md-10', 
  'md-22', 'md-23', 'md-24', 'md-25', 'md-26', 'md-27', 'class-a', 'class-b', 'class-c', 'class-d', 
  'eu-mdr', 'usfda', 'fda', 'cdsco', 'anvisa', 'samd', 'iso-13485', 'iso-14971', 'iec-62304', 
  'iec-62366-1', 'gspr', 'cer', 'pms', 'pmcf', 'psur', 'eudamed', 'udi', 'prrc', 'bgmp', 'inmetro', 
  'anatel', 'aia', 'iaa', 'poa', 'fsc', 'dmf', 'pmf', 'smf', 'qms', 'cip', 'ib', 'crf', 'icd', 'gcp', 
  'estar', 'pma', 'ide', 'pai', 'q-sub', 'rta', 'ai', 'cbom', 'ai-ml', 'mdr', 'sla', 'cla', 'sugam'
];
infoDataKeys.forEach(key => {
  staticRoutes.push(`/information/${key}`);
});

console.log(`Generating ${staticRoutes.length} physical directories for SEO indexing on GitHub Pages...`);

// Duplicate index.html to each directory
staticRoutes.forEach(route => {
  const targetDir = path.join(distPath, route);
  try {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(indexHtmlPath, path.join(targetDir, 'index.html'));
  } catch (err) {
    console.error(`Error generating route path ${route}:`, err);
  }
});

console.log("Successfully generated physical routing directories! Google Search Console can now crawl every page with a 200 OK.");
