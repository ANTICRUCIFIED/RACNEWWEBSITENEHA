import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe, Shield, Flag, Code2, ArrowRight, Microscope } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { 
        title: 'Engineering & R&D', 
        path: '/services/samd-architecture-development',
        icon: <Code2 className="w-5 h-5 text-purple-600" />,
        items: [
          { name: 'SaMD Architecture', path: '/services/samd-architecture-development' },
          { name: 'Electrical Device Prototyping', path: '/services/electrical-medical-device-prototyping' },
          { name: 'Facility & Cleanroom Design', path: '/services/facility-cleanroom-design' },
          { name: 'Embedded Medical Firmware', path: '/services/embedded-medical-firmware' },
          { name: 'Usability Engineering (IEC 62366)', path: '/services/usability-engineering-iec-62366' },
          { name: 'Hardware V&V Protocols', path: '/services/hardware-vv-protocols' }
        ]
      },
      { 
        title: 'CDSCO India Regulatory', 
        path: '/services/cdsco-manufacturing-license-md5-md9',
        icon: <Flag className="w-5 h-5 text-orange-600" />,
        items: [
          { name: 'Manufacturing License (MD-5/9)', path: '/services/cdsco-manufacturing-license-md5-md9' },
          { name: 'Import License (MD-14)', path: '/services/cdsco-import-license-md14' },
          { name: 'Indian Authorized Representative (AR)', path: '/services/indian-authorized-representative' },
          { name: 'Loan License (MD-6/10)', path: '/services/cdsco-loan-license-md6-md10' },
          { name: 'Test License (MD-13)', path: '/services/cdsco-test-license-md13' },
          { name: 'Clinical Investigation', path: '/services/cdsco-clinical-investigation' }
        ]
      },
      { 
        title: 'Global Market Access', 
        path: '/services/usfda-510k-de-novo',
        icon: <Globe className="w-5 h-5 text-blue-600" />,
        items: [
          { name: 'USFDA 510(k) & De Novo', path: '/services/usfda-510k-de-novo' },
          { name: 'EU MDR & CE Marking', path: '/services/eu-mdr-ce-marking' },
          { name: 'EU Authorized Representative', path: '/services/eu-authorized-representative' },
          { name: 'Anvisa Brazil Registration', path: '/services/anvisa-brazil-registration' },
          { name: 'UKCA Mark Certification', path: '/services/ukca-mark-certification' },
          { name: 'MDSAP Joint Audits', path: '/services/mdsap-joint-audits' }
        ]
      },
      { 
        title: 'Preclinical & Trials', 
        path: '/services/biocompatibility-testing-iso-10993',
        icon: <Microscope className="w-5 h-5 text-indigo-600" />,
        items: [
          { name: 'Biocompatibility Testing (ISO 10993)', path: '/services/biocompatibility-testing-iso-10993' },
          { name: 'Preclinical Safety Evaluation', path: '/services/preclinical-safety-evaluation' },
          { name: 'Clinical Trials & SEC Presentation', path: '/services/cdsco-clinical-investigation' },
          { name: 'Toxicological Risk Assessment', path: '/services/toxicological-risk-assessment' },
          { name: 'Extractables & Leachables (E&L)', path: '/services/extractables-leachables' },
          { name: 'Good Clinical Practices (GCP) Audit', path: '/services/gcp-audit' }
        ]
      },
      { 
        title: 'Certification & Audits', 
        path: '/services/iso-13485-certification-audit',
        icon: <Shield className="w-5 h-5 text-emerald-600" />,
        items: [
          { name: 'ISO 13485 & 9001 Certification', path: '/services/iso-13485-certification-audit' },
          { name: 'Regulatory Audit Readiness', path: '/services/regulatory-audit-readiness' },
          { name: 'IEC 60601-1 Electrical Safety', path: '/services/iec-60601-electrical-safety' },
          { name: 'ISO 14971 Risk Management', path: '/services/iso-14971-risk-management' },
          { name: 'Sterile Barrier Validation', path: '/services/sterile-barrier-validation' },
          { name: 'Post-Market Surveillance (PMS)', path: '/services/post-market-surveillance-pms' }
        ]
      }
    ]
  },
  { name: 'VELO AI', path: '/velo-ai' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Blogs', path: '/blogs/resources' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100",
      scrolled ? "shadow-md py-2" : "py-4 sm:py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img src="https://anticrucified.github.io/MyWebP_Images/images/logo.webp" alt="RAC Forge Medical Device Regulatory Consulting Logo" aria-label="RAC Forge Logo" title="RAC FORGE" 
              className={cn(
                "w-auto transition-all duration-300 mix-blend-multiply",
                scrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={link.path}
                  className="font-bold text-sm uppercase tracking-widest transition-colors flex items-center text-brand-deep hover:text-brand-teal"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[1240px]"
                      >
                        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 grid grid-cols-5 gap-5">
                          {link.dropdown.map((section) => (
                            <div key={section.title} className="space-y-6">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-gray-50 rounded-lg">{section.icon}</div>
                                <h4 className="font-black text-brand-deep text-lg leading-tight">{section.title}</h4>
                              </div>
                              <ul className="space-y-3 pl-11">
                                {section.items.map((item) => (
                                  <li key={item.name}>
                                    <Link 
                                      to={item.path}
                                      className="text-gray-600 hover:text-brand-teal text-sm font-bold transition-colors flex items-center group/item"
                                    >
                                      {item.name}
                                      <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-teal text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-deep transition-all shadow-lg shadow-brand-teal/20 transform hover:scale-105 active:scale-95"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 rounded-xl transition-colors text-brand-deep hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-100px)] overflow-y-auto pb-12 shadow-inner"
          >
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="space-y-4">
                  <Link 
                    to={link.path}
                    className="text-2xl font-black text-brand-deep block"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="grid grid-cols-1 gap-6 pl-4 border-l-2 border-gray-100">
                      {link.dropdown.map((section) => (
                        <div key={section.title} className="space-y-3">
                          <h4 className="font-bold text-brand-teal text-sm uppercase tracking-widest">{section.title}</h4>
                          <div className="space-y-2">
                            {section.items.map((item) => (
                              <Link 
                                key={item.name}
                                to={item.path}
                                className="text-gray-600 block font-bold text-lg"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/contact" 
                className="block bg-brand-deep text-white text-center py-5 rounded-2xl font-black text-xl"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
