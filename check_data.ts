import { INFO_DATA } from './src/data/infoData';
import fs from 'fs';

const INFO_KEYWORDS = [
  'MD-16', 'MD-17', 'MD-3', 'MD-5', 'MD-7', 'MD-9', 'MD-14', 'MD-15', 'MD-4', 'MD-6', 'MD-8', 'MD-10',
  'MD-22', 'MD-23', 'MD-24', 'MD-25', 'MD-26', 'MD-27',
  'Class A', 'Class B', 'Class C', 'Class D',
  'EU MDR', 'USFDA', 'FDA', 'CDSCO', 'Anvisa', 'SaMD', 'ISO 13485', 'ISO 14971', 'IEC 62304', 'IEC 62366-1', 'MDR', 'SLA', 'CLA', 'SUGAM',
  'GSPR', 'CER', 'PMS', 'PMCF', 'PSUR', 'EUDAMED', 'UDI', 'PRRC', 'BGMP', 'INMETRO', 'ANATEL',
  'AIA', 'IAA', 'PoA', 'FSC', 'DMF', 'PMF', 'SMF', 'QMS', 'CIP', 'IB', 'CRF', 'ICD', 'GCP',
  'eSTAR', 'PMA', 'IDE', 'PAI', 'Q-Sub', 'RTA', 'AI', 'CBOM', 'AI/ML'
];

let missing = [];
INFO_KEYWORDS.forEach(kw => {
  const slug = kw.toLowerCase().replace(/[\s/]+/g, '-');
  if (!INFO_DATA[slug]) {
    missing.push({kw, slug});
  }
});

console.log("Missing from INFO_DATA:");
console.log(missing);
