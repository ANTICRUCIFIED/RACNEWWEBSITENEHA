import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ChevronRight, Compass } from 'lucide-react';
import { cn } from '../lib/utils';
import { BLOG_POSTS } from '../data/blogData';
import { INFO_DATA } from '../data/infoData';

// Route path to human name mapping dictionary
const ROUTE_MAP: Record<string, string> = {
  '': 'Home',
  'about': 'About Us',
  'services': 'Services',
  'expertise': 'Expertise',
  'contact': 'Contact Us',
  'blogs': 'Blogs & Insights',
  'resources': 'Resources',
  'information': 'CDSCO Resources',
  'locations': 'Regional Access',
  'india': 'Regional Solutions',
  'velo-ai': 'Velo AI',
  'raahi-ai': 'Raahi Compliance AI',
  'raaahi-ai': 'Raahi Compliance AI',
  
  // Service Sub-routes
  'samd-architecture-development': 'SaMD Architecture',
  'embedded-medical-firmware': 'Medical Firmware',
  'usability-engineering-iec-62366': 'Usability Engineering (IEC 62366-1)',
  'electrical-medical-device-prototyping': 'Electrical Prototyping',
  'hardware-vv-protocols': 'Hardware V&V Protocols',
  'facility-cleanroom-design': 'Cleanroom Design',
  'cdsco-manufacturing-license-md5-md9': 'Manufacturing License (Form MD-5/9)',
  'cdsco-import-license-md14': 'Import License (Form MD-14/15)',
  'indian-authorized-representative': 'Indian Authorized Representative (IAR)',
  'cdsco-loan-license-md6-md10': 'Loan License (Form MD-6/10)',
  'cdsco-test-license-md13': 'Test License (Form MD-13)',
  'cdsco-clinical-investigation': 'Clinical Trial Permissions',
  'usfda-510k-de-novo': 'USFDA 510(k) & De Novo',
  'eu-mdr-ce-marking': 'EU MDR & CE Marking',
  'ukca-mark-certification': 'UKCA Certification',
  'eu-authorized-representative': 'European Representative',
  'anvisa-brazil-registration': 'ANVISA Brazil Compliance',
  'iso-13485-certification-audit': 'ISO 13485 QMS Certification',
  'mdsap-joint-audits': 'MDSAP Joint Audits',
  'biocompatibility-testing-iso-10993': 'Biocompatibility Testing (ISO 10993)',
  'preclinical-safety-evaluation': 'Preclinical Safety',
  'toxicological-risk-assessment': 'Toxicological Risk Assessment',
  'extractables-leachables': 'Extractables & Leachables',
  'gcp-audit': 'GCP Audit Coordination',
  'iec-60601-electrical-safety': 'Electrical Safety (IEC 60601-1)',
  'iso-14971-risk-management': 'Risk Management (ISO 14971)',
  'sterile-barrier-validation': 'Sterile Barrier Packaging Validation',
  'post-market-surveillance-pms': 'Post-Market Surveillance (PMS)',
  'regulatory-audit-readiness': 'Audit Readiness Diagnostics',
  
  // Legacy aliases just in case
  'cdsco-manufacturing-license': 'CDSCO Manufacturing License',
  'cdsco-import-license': 'CDSCO Import License',
  'cdsco-loan-license': 'CDSCO Loan License',
  'cdsco-test-license': 'CDSCO Test License',
  'usfda-510k-submission': 'USFDA 510(k) Submission',
  'usfda-pma-application': 'USFDA PMA Application',
  'usfda-de-novo-classification': 'USFDA De Novo Classification',
  'eu-mdr-compliance': 'EU Medical Device Compliance',
  'anvisa-brazil-approval': 'ANVISA Brazil Approval',
  'rd-and-samd': 'R&D & SaMD Compliance'
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  // Determine if we need light-themed breadcrumbs based on route paths (like Info Detail pages)
  const isLightTheme = useMemo(() => {
    const p = pathname.toLowerCase();
    return p.startsWith('/information');
  }, [pathname]);

  // Parse path segments and compile full list of crumbs
  const crumbs = useMemo(() => {
    if (pathname === '/') return [];

    const segments = pathname.split('/').filter(Boolean);
    const result = [{ name: 'Home', path: '/', isLast: false }];

    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      // Check if we are inside a blog details page
      if (segments[index - 1] === 'blogs' && !isLast) {
        // Skip intermediary for direct blog detail rendering or handle nicely
      }
      
      let humanName = ROUTE_MAP[segment];

      // Dynamic lookup: Blog Posts title
      if (segments[index - 1] === 'blogs') {
        const blogPost = BLOG_POSTS.find(b => b.id === segment);
        if (blogPost) {
          humanName = blogPost.title;
        }
      }

      // Dynamic lookup: Resources detail (InfoDetail)
      if (segments[index - 1] === 'information') {
        const infoItem = INFO_DATA[segment];
        if (infoItem) {
          humanName = infoItem.title;
        }
      }

      // Fallback format for unmapped state slugs (e.g., /locations/delhi-consultant)
      if (!humanName) {
        humanName = segment
          .split('-')
          .map(word => {
            if (['samd', 'cdsco', 'usfda', 'qms', 'gcp', 'iec', 'iso', 'mds', 'iar', 'ear', 'pms', 'bgmp', 'md'].includes(word.toLowerCase())) {
              return word.toUpperCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');
      }

      // Special handling for intermediary subfolders like /blogs/resources where we redirect nicely
      let linkPath = currentPath;
      if (segment === 'blogs' && segments[index + 1] === 'resources') {
        // combine them directly
        return; 
      }
      if (segment === 'resources' && segments[index - 1] === 'blogs') {
        linkPath = '/blogs/resources';
        humanName = 'Blogs & Insights';
      }

      result.push({
        name: humanName,
        path: linkPath,
        isLast
      });
    });

    return result;
  }, [pathname]);

  if (crumbs.length === 0) return null;

  return (
    <div className="bg-gray-50/90 border-t border-gray-100 py-1.5 select-none text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          title="Secondary Navigation Hierarchy"
          className="flex items-center space-x-1.5 sm:space-x-2 text-gray-500 font-medium"
        >
          {crumbs.map((crumb, idx) => {
            const isHome = idx === 0;

            if (crumb.isLast) {
              return (
                <div key={crumb.path} className="flex items-center space-x-1.5 sm:space-x-2 min-w-0">
                  {idx > 0 && <span className="text-gray-300 font-normal">/</span>}
                  <span 
                    title={`Current Page: ${crumb.name}`}
                    className="font-bold text-brand-deep truncate max-w-[155px] sm:max-w-[320px] md:max-w-[480px]"
                  >
                    {crumb.name}
                  </span>
                </div>
              );
            }

            return (
              <div key={crumb.path} className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                {idx > 0 && <span className="text-gray-300 font-normal">/</span>}
                <Link
                  to={crumb.path}
                  className="font-bold text-gray-500 hover:text-brand-teal hover:underline transition-all active:scale-95"
                  title={`Navigate back to ${crumb.name}`}
                >
                  {isHome ? 'Home' : crumb.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
