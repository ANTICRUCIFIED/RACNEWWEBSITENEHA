import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe, Shield, Flag, Code2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { 
        title: 'CDSCO India Regulatory Services', 
        path: '/services/cdsco-manufacturing-license',
        icon: <Flag className="w-5 h-5 text-orange-600" />,
        items: [
          { name: 'Manufacturing License', path: '/services/cdsco-manufacturing-license' },
          { name: 'Import License', path: '/services/cdsco-import-license' },
          { name: 'Loan License', path: '/services/cdsco-loan-license' },
          { name: 'Test License', path: '/services/cdsco-test-license' },
          { name: 'Clinical Investigation', path: '/services/cdsco-clinical-investigation' }
        ]
      },
      { 
        title: 'USFDA (USA) Regulatory Services', 
        path: '/services/usfda-510k-submission',
        icon: <Shield className="w-5 h-5 text-blue-600" />,
        items: [
          { name: '510(k) Submission', path: '/services/usfda-510k-submission' },
          { name: 'PMA Application', path: '/services/usfda-pma-application' },
          { name: 'De Novo Classification', path: '/services/usfda-de-novo-classification' }
        ]
      },
      { 
        title: 'EU MDR (Europe) CE Marking', 
        path: '/services/eu-mdr-compliance',
        icon: <Globe className="w-5 h-5 text-emerald-600" />,
        items: [
          { name: 'EU MDR Compliance', path: '/services/eu-mdr-compliance' }
        ]
      },
      { 
        title: 'Anvisa (Brazil) Regulatory Services', 
        path: '/services/anvisa-brazil-approval',
        icon: <Globe className="w-5 h-5 text-yellow-600" />,
        items: [
          { name: 'Anvisa Brazil Approval', path: '/services/anvisa-brazil-approval' }
        ]
      },
      { 
        title: 'Development of Electrical Medical Devices & SaMD', 
        path: '/services/rd-and-samd',
        icon: <Code2 className="w-5 h-5 text-purple-600" />,
        items: [
          { name: 'Development of Electrical Medical Devices & SaMD', path: '/services/rd-and-samd' }
        ]
      }
    ]
  },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Resources', path: '/blogs/resources' }
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white",
      scrolled ? "shadow-lg py-3" : "py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img src="https://i.ibb.co/WNtHVDps/Whats-App-Image-2025-08-31-at-21-09-34-54925d9d.jpg" alt="RAC Forge Medical Device Regulatory Consulting Logo" title="RAC Forge Logo" aria-label="RAC Forge Logo" title="RAC FORGE" 
              className="h-12 w-auto transition-all duration-500 mix-blend-multiply" 
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
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px]"
                      >
                        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-10 grid grid-cols-2 gap-10">
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
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
