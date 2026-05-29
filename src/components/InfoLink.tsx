import React from 'react';
import { Link } from 'react-router-dom';

const INFO_KEYWORDS = [
  'MD-16', 'MD-17', 'MD-3', 'MD-5', 'MD-7', 'MD-9', 'MD-14', 'MD-15', 'MD-4', 'MD-6', 'MD-8', 'MD-10',
  'MD-22', 'MD-23', 'MD-24', 'MD-25', 'MD-26', 'MD-27',
  'Class A', 'Class B', 'Class C', 'Class D',
  'EU MDR', 'USFDA', 'FDA', 'CDSCO', 'Anvisa', 'SaMD', 'ISO 13485', 'ISO 14971', 'IEC 62304', 'IEC 62366-1', 'MDR', 'SLA', 'CLA', 'SUGAM',
  'GSPR', 'CER', 'PMS', 'PMCF', 'PSUR', 'EUDAMED', 'UDI', 'PRRC', 'BGMP', 'INMETRO', 'ANATEL',
  'AIA', 'IAA', 'PoA', 'FSC', 'DMF', 'PMF', 'SMF', 'QMS', 'CIP', 'IB', 'CRF', 'ICD', 'GCP',
  'eSTAR', 'PMA', 'IDE', 'PAI', 'Q-Sub', 'RTA', 'AI', 'CBOM', 'AI/ML'
];

interface InfoLinkProps {
  text: string;
}

export default function InfoLink({ text }: InfoLinkProps) {
  if (!text) return null;

  // Create a regex that matches any of the keywords
  // Use word boundaries \b to avoid matching parts of words
  const regex = new RegExp(`\\b(${INFO_KEYWORDS.join('|')})\\b`, 'gi');
  
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const isKeyword = INFO_KEYWORDS.some(k => k.toLowerCase() === part.toLowerCase());
        if (isKeyword) {
          const keyword = INFO_KEYWORDS.find(k => k.toLowerCase() === part.toLowerCase()) || part;
          const slug = keyword.toLowerCase().replace(/[\s/]+/g, '-');
          return (
            <Link 
              key={i} 
              to={`/information/${slug}`}
              className="text-brand-teal hover:underline font-medium"
            >
              {part}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}
