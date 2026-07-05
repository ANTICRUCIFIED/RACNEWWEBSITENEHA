import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  CornerDownLeft, 
  Clock, 
  ArrowRight, 
  FileText, 
  BookOpen, 
  Briefcase, 
  History,
  Command,
  CornerRightDown
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogDataWithAdditional';
import { INFO_DATA } from '../data/infoData';

// Reusable standard search item interface
interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  snippet: string;
  category: 'Services' | 'Resources' | 'Blogs';
  path: string;
  tags?: string[];
}

// Statically compiled services search data mapped to our routes and categories
const SERVICES_DATA: SearchItem[] = [
  // Engineering & R&D
  {
    id: 'samd-architecture',
    title: 'SaMD Architecture & Development',
    subtitle: 'Engineering & R&D',
    snippet: 'Software as a Medical Device architecture, lifecycle processes, and compliance dossiers in tight alignment with IEC 62304 guidelines.',
    category: 'Services',
    path: '/services/samd-architecture-development',
    tags: ['software', 'samd', 'iec 62304', 'architecture', 'firmware']
  },
  {
    id: 'embedded-firmware',
    title: 'Embedded Medical Firmware',
    subtitle: 'Engineering & R&D',
    snippet: 'Custom embedded systems code, low-level microcontrollers, RTOS execution, and safety audits designed for class II and III hardware.',
    category: 'Services',
    path: '/services/embedded-medical-firmware',
    tags: ['firmware', 'microcode', 'embedded', 'rtos', 'software']
  },
  {
    id: 'usability-engineering',
    title: 'Usability Engineering (IEC 62366-1)',
    subtitle: 'Engineering & R&D',
    snippet: 'Formative evaluation, summative validation protocols, human interface controls, and ergonomics designed to eliminate user-operating error risk.',
    category: 'Services',
    path: '/services/usability-engineering-iec-62366',
    tags: ['usability', 'human factors', 'iec 62366', 'ergonomics', 'interface']
  },
  {
    id: 'electrical-prototyping',
    title: 'Electrical Medical Device Prototyping',
    subtitle: 'Engineering & R&D',
    snippet: 'Rapid functional hardware design, circuit-board layout, sensor selection, and high-performance proof-of-concepts targeting active devices.',
    category: 'Services',
    path: '/services/electrical-medical-device-prototyping',
    tags: ['electrical', 'prototyping', 'pcb', 'hardware', 'sensor']
  },
  {
    id: 'hardware-vv-protocols',
    title: 'Hardware V&V Protocols & Verification',
    subtitle: 'Engineering & R&D',
    snippet: 'Compiling structured design validation and verification plans, test sheets, and product reports validating functional inputs.',
    category: 'Services',
    path: '/services/hardware-vv-protocols',
    tags: ['validation', 'verification', 'testing', 'hardware', 'protocols']
  },
  {
    id: 'facility-cleanroom',
    title: 'Facility & Cleanroom Engineering Design',
    subtitle: 'Engineering & R&D',
    snippet: 'Designing high-efficiency HEPA filtering, pressure regimes, and material flows compliant with cleanroom manufacturing standards.',
    category: 'Services',
    path: '/services/facility-cleanroom-design',
    tags: ['cleanroom', 'facility', 'hvac', 'manufacturing', 'hepa']
  },

  // CDSCO India Regulatory
  {
    id: 'cdsco-manufacturing',
    title: 'CDSCO Manufacturing License (Form MD-5 & MD-9)',
    subtitle: 'CDSCO India Regulatory',
    snippet: 'Securing legal manufacturing authorization, drafting site dossiers, coordinating audits, and meeting CDSCO Fifth Schedule specs.',
    category: 'Services',
    path: '/services/cdsco-manufacturing-license-md5-md9',
    tags: ['cdsco', 'manufacturing', 'md-5', 'md-9', 'licensing', 'sugam']
  },
  {
    id: 'cdsco-import',
    title: 'CDSCO Import License (Form MD-14 & MD-15)',
    subtitle: 'CDSCO India Regulatory',
    snippet: 'Preparing regulatory import applications, coordinating overseas plant registrations, and securing MD-15 license clearance.',
    category: 'Services',
    path: '/services/cdsco-import-license-md14',
    tags: ['cdsco', 'import', 'md-14', 'md-15', 'importer', 'sugam']
  },
  {
    id: 'indian-ar',
    title: 'Indian Authorized Representative (IAR)',
    subtitle: 'CDSCO India Regulatory',
    snippet: 'Serving as the designated legal liaison in India for overseas device manufacturers under the Medical Devices Rules 2017.',
    category: 'Services',
    path: '/services/indian-authorized-representative',
    tags: ['authorized representative', 'iar', 'foreign manufacturer', 'legal', 'liaison']
  },
  {
    id: 'cdsco-loan',
    title: 'CDSCO Loan License (Form MD-6 & MD-10)',
    subtitle: 'CDSCO India Regulatory',
    snippet: 'Applying for loan manufacturing licenses to scale production lines using established third-party certified facilities.',
    category: 'Services',
    path: '/services/cdsco-loan-license-md6-md10',
    tags: ['cdsco', 'loan license', 'md-6', 'md-10', 'outsourcing']
  },
  {
    id: 'cdsco-test',
    title: 'CDSCO Test License (Form MD-13)',
    subtitle: 'CDSCO India Regulatory',
    snippet: 'Securing Form MD-13 regulatory approvals to legally import devices for testing, validation, and clinical trials.',
    category: 'Services',
    path: '/services/cdsco-test-license-md13',
    tags: ['cdsco', 'test license', 'md-13', 'testing', 'import']
  },
  {
    id: 'cdsco-clinical',
    title: 'Clinical Investigations & Trial Permissions',
    subtitle: 'CDSCO India Regulatory',
    snippet: 'Managing ethics authorizations, protocol reviews, trial design, and SEC representations to secure trial clearance.',
    category: 'Services',
    path: '/services/cdsco-clinical-investigation',
    tags: ['clinical', 'investigation', 'trial', 'sec', 'ethics', 'protocols']
  },

  // Global Market Access
  {
    id: 'usfda-510k',
    title: 'USFDA 510(k) Premarket Notifications',
    subtitle: 'Global Market Access',
    snippet: 'Designing substanced equivalency strategies, eSTAR compiling, bench parameters testing, and managing FDA review queues.',
    category: 'Services',
    path: '/services/usfda-510k-de-novo',
    tags: ['usfda', 'fda', '510k', 'de novo', 'clearance', 'estar']
  },
  {
    id: 'eu-mdr',
    title: 'EU MDR 2017/745 Compliance & CE Marking',
    subtitle: 'Global Market Access',
    snippet: 'Generating GSPR safety verification files, building CER clinical reviews, and addressing notified body compliance audits.',
    category: 'Services',
    path: '/services/eu-mdr-ce-marking',
    tags: ['eu mdr', 'ce mark', 'gspr', 'euro', 'notified body']
  },
  {
    id: 'eu-rep',
    title: 'European Authorized Representative (EAR)',
    subtitle: 'Global Market Access',
    snippet: 'Fulfilling European Representative mandates, managing EUDAMED logs, and acting as localized liaison for global exporters.',
    category: 'Services',
    path: '/services/eu-authorized-representative',
    tags: ['european', 'ear', 'representative', 'eudamed', 'conformity']
  },
  {
    id: 'anvisa-brazil',
    title: 'Anvisa Brazil Registration & Compliance',
    subtitle: 'Global Market Access',
    snippet: 'Navigating Brazilian health surveillance protocols, setting up BGMP certification, and securing ANVISA approval streams.',
    category: 'Services',
    path: '/services/anvisa-brazil-registration',
    tags: ['anvisa', 'brazil', 'bgmp', 'registration', 'south america']
  },
  {
    id: 'ukca-mark',
    title: 'UKCA Mark Certification & UK Rep',
    subtitle: 'Global Market Access',
    snippet: 'Meeting United Kingdom Conformity Assessed requirements for marketing products within England, Scotland, and Wales.',
    category: 'Services',
    path: '/services/ukca-mark-certification',
    tags: ['ukca', 'united kingdom', 'bhra', 'england', 'conformity']
  },
  {
    id: 'mdsap-audits',
    title: 'MDSAP Joint Audits Alignment',
    subtitle: 'Global Market Access',
    snippet: 'Structuring QMS parameters to clear five-market auditing frameworks under a single unified certification.',
    category: 'Services',
    path: '/services/mdsap-joint-audits',
    tags: ['mdsap', 'audit', 'joint audit', 'certification', 'global']
  },

  // Certification & Audits
  {
    id: 'iso-13485',
    title: 'ISO 13485 & ISO 9001 QMS Certification',
    subtitle: 'Certification & Audits',
    snippet: 'Systemic implementation of medical-grade Quality Management Systems, SOP authoring, and clearing audit deviations.',
    category: 'Services',
    path: '/services/iso-13485-certification-audit',
    tags: ['iso 13485', 'iso 9001', 'qms', 'standard operating procedure', 'audit']
  },
  {
    id: 'audit-readiness',
    title: 'Regulatory Audit Readiness Diagnostics',
    subtitle: 'Certification & Audits',
    snippet: 'Expert dry-run audits, gap assessments, trace matrix inspections, and preparation for CDSCO or FDA on-site visits.',
    category: 'Services',
    path: '/services/regulatory-audit-readiness',
    tags: ['mock audit', 'readiness', 'audit', 'inspection', 'cdsco audit', 'gap analysis']
  },
  {
    id: 'iec-60601',
    title: 'IEC 60601-1 Medical Electrical Safety',
    subtitle: 'Certification & Audits',
    snippet: 'Essential performance testing, risk analysis mapping, national deviations, and EM safety protocols for active medical devices.',
    category: 'Services',
    path: '/services/iec-60601-electrical-safety',
    tags: ['iec 60601', 'electrical safety', 'emc', 'active device', 'hardware']
  },
  {
    id: 'iso-14971',
    title: 'ISO 14971 Medical Risk Management',
    subtitle: 'Certification & Audits',
    snippet: 'Analyzing, tracking, and mitigating hazardous scenarios spanning all product life cycle milestones.',
    category: 'Services',
    path: '/services/iso-14971-risk-management',
    tags: ['iso 14971', 'risk management', 'hazards', 'fmea', 'mitigation']
  },
  {
    id: 'sterile-barrier',
    title: 'Sterile Barrier Packaging Validation',
    subtitle: 'Certification & Audits',
    snippet: 'Designing packaging validations, seal testing (ASTM), age tracking, and transit simulation under ISO 11607.',
    category: 'Services',
    path: '/services/sterile-barrier-validation',
    tags: ['sterilization', 'packaging', 'iso 11607', 'astm', 'seal integrity']
  },
  {
    id: 'post-market-surveillance',
    title: 'Post-Market Surveillance (PMS) Framework',
    subtitle: 'Certification & Audits',
    snippet: 'Setting up reactive complaint monitors, drafting proactive PMCF profiles, PSUR reviews, and regulatory vigilance logging.',
    category: 'Services',
    path: '/services/post-market-surveillance-pms',
    tags: ['pms', 'pmcf', 'psur', 'vigilance', 'feedback', 'complaints']
  }
];

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Services' | 'Resources' | 'Blogs'>('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Load history from localStorage on mounting
  useEffect(() => {
    try {
      const history = localStorage.getItem('rac_forge_search_history');
      if (history) {
        setRecentSearches(JSON.parse(history));
      }
    } catch (e) {
      console.warn('Search history not available:', e);
    }
  }, []);

  // Save history helper
  const addSearchToHistory = (term: string) => {
    if (!term.trim()) return;
    const cleanTerm = term.trim().slice(0, 40);
    const updated = [
      cleanTerm,
      ...recentSearches.filter(s => s.toLowerCase() !== cleanTerm.toLowerCase())
    ].slice(0, 5); // Allow max 5 items
    setRecentSearches(updated);
    try {
      localStorage.setItem('rac_forge_search_history', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const removeSearchFromHistory = (term: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = recentSearches.filter(s => s !== term);
    setRecentSearches(updated);
    try {
      localStorage.setItem('rac_forge_search_history', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const clearSearchHistory = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem('rac_forge_search_history');
    } catch (e) {
      console.warn(e);
    }
  };

  // Compile full indexed list dynamically
  const searchableList = useMemo(() => {
    const list: SearchItem[] = [...SERVICES_DATA];

    // Compile values from infoData (Resources)
    Object.entries(INFO_DATA).forEach(([key, value]) => {
      list.push({
        id: key,
        title: value.title,
        subtitle: 'CDSCO Form / Standard Dossiers',
        snippet: value.content,
        category: 'Resources',
        path: `/information/${key}`,
        tags: [key.toLowerCase(), 'form', 'documents', 'cdsco dossier']
      });
    });

    // Compile values from blogData
    BLOG_POSTS.forEach((post) => {
      list.push({
        id: post.id,
        title: post.title,
        subtitle: `Blog Post • ${post.category} • ${post.date}`,
        snippet: post.excerpt,
        category: 'Blogs',
        path: `/blogs/${post.id}`,
        tags: post.tags.map(t => t.toLowerCase())
      });
    });

    return list;
  }, []);

  // Filter list based on search string and selected category
  const filteredList = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }

    const query = searchTerm.toLowerCase().trim();
    return searchableList.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Check title, content/snippet, subtitle, path or tags matching
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchSnippet = item.snippet.toLowerCase().includes(query);
      const matchSubtitle = item.subtitle.toLowerCase().includes(query);
      const matchTags = item.tags && item.tags.some(t => t.toLowerCase().includes(query));

      return matchTitle || matchSnippet || matchSubtitle || matchTags;
    });
  }, [searchableList, searchTerm, selectedCategory]);

  // Handle auto focus when modal pops representing modern spotlight index
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Short delay ensures dialog is mounted and can acquire focus
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Reset active activeIndex on search change or filter change
  useEffect(() => {
    setActiveIndex(0);
  }, [searchTerm, selectedCategory]);

  // Handle keystroke navigation inside list
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => {
          const next = prev + 1 >= filteredList.length ? 0 : prev + 1;
          scrollIntoView(next);
          return next;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => {
          const next = prev - 1 < 0 ? filteredList.length - 1 : prev - 1;
          scrollIntoView(next);
          return next;
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredList[activeIndex]) {
          handleSelect(filteredList[activeIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredList, activeIndex]);

  // Scroll active elements into viewport within modal
  const scrollIntoView = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const items = container.querySelectorAll('[data-search-item]');
    const activeItem = items[index] as HTMLElement;
    if (activeItem) {
      // Smooth scroll inside container
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;
      const elemTop = activeItem.offsetTop;
      const elemBottom = elemTop + activeItem.clientHeight;

      if (elemTop < containerTop) {
        container.scrollTop = elemTop;
      } else if (elemBottom > containerBottom) {
        container.scrollTop = elemBottom - container.clientHeight;
      }
    }
  };

  const handleSelect = (item: SearchItem) => {
    addSearchToHistory(searchTerm || item.title);
    onClose();
    // Reset inputs
    setSearchTerm('');
    setSelectedCategory('All');
    navigate(item.path);
  };

  const handleRecentClick = (term: string) => {
    setSearchTerm(term);
    inputRef.current?.focus();
  };

  // Helper function to render title with matched term highlighted elegantly
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return <span>{text}</span>;
    
    try {
      const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
      return (
        <span>
          {parts.map((part, i) => 
            part.toLowerCase() === query.toLowerCase() ? (
              <mark key={i} className="bg-brand-teal/20 text-brand-teal dark:text-brand-teal font-extrabold px-0.5 rounded">
                {part}
              </mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </span>
      );
    } catch (err) {
      return <span>{text}</span>;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="global-search-modal" className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 sm:pt-20 md:pt-28">
          {/* Overlay mask */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-deep/75 backdrop-blur-md cursor-pointer"
          />

          {/* Search Box Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100/90 overflow-hidden relative z-10 flex flex-col max-h-[80vh] md:max-h-[75vh]"
          >
            {/* Upper input segment */}
            <div className="flex items-center space-x-3 px-5 py-4 border-b border-gray-100">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services, forms, rules, blog articles, standards..."
                className="w-full text-brand-deep placeholder-gray-400 text-base font-medium focus:outline-none placeholder:font-normal"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Clear query text"
                  title="Clear"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
              <div className="hidden sm:flex items-center space-x-1 shrink-0 px-2.5 py-1 bg-gray-100/80 text-gray-400 rounded-lg text-xs font-bold leading-none select-none border border-gray-200/50">
                <Command className="w-3 h-3" />
                <span>K</span>
              </div>
              <button 
                onClick={onClose}
                className="sm:hidden text-gray-400 font-bold text-sm hover:text-brand-deep h-8 inline-flex items-center"
              >
                Close
              </button>
            </div>

            {/* Quick action category filter tabs/chips */}
            <div className="flex items-center justify-between px-5 py-2.5 bg-gray-50/50 border-b border-gray-100/80 overflow-x-auto scrollbar-none">
              <div className="flex items-center space-x-2">
                {(['All', 'Services', 'Resources', 'Blogs'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20'
                        : 'bg-white hover:bg-gray-100 text-gray-500 border border-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="hidden sm:flex items-center text-xs text-gray-400 tracking-wide font-medium">
                {searchTerm.trim() ? `${filteredList.length} results matching` : 'Interactive directory'}
              </div>
            </div>

            {/* Scrollable Results container */}
            <div 
              ref={scrollContainerRef}
              className="flex-grow overflow-y-auto p-4 space-y-5 scroll-smooth"
              style={{ maxHeight: 'calc(75vh - 120px)' }}
            >
              {/* Context 1: Empty search input, explain shortcut or history details */}
              {!searchTerm.trim() && (
                <div className="space-y-6 py-4 px-2">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center px-1 text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                        <span>Recent Searches</span>
                        <button 
                          onClick={clearSearchHistory}
                          className="hover:text-red-500 hover:underline cursor-pointer lowercase font-bold transition-all text-[11px]"
                        >
                          Clear all
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1 font-bold">
                        {recentSearches.map((term, index) => (
                          <div 
                            key={index}
                            onClick={() => handleRecentClick(term)}
                            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-white border border-gray-200/90 rounded-full hover:bg-brand-teal/5 hover:border-brand-teal/30 cursor-pointer text-xs text-brand-deep hover:text-brand-teal transition-all group"
                          >
                            <History className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-teal" />
                            <span>{term}</span>
                            <button
                              onClick={(e) => removeSearchFromHistory(term, e)}
                              className="p-0.5 hover:bg-gray-200 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                              aria-label={`Remove ${term} from history`}
                              title="Delete from history"
                            >
                              <X className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular quick-jump indexes */}
                  <div className="space-y-2">
                    <h3 className="px-1 text-xs font-black text-gray-400 uppercase tracking-widest leading-none">Popular Index Fields</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div 
                        onClick={() => handleRecentClick('MD-15')}
                        className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-brand-teal/5 border border-gray-100 rounded-2xl cursor-pointer transition-all group"
                      >
                        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-teal/20">
                          <FileText className="w-4 h-4 text-brand-teal" />
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <p className="font-bold text-brand-deep leading-tight text-xs">Form MD-15 Import License</p>
                          <p className="text-[11px] text-gray-400 truncate">Immediate import registrations for India market.</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:translate-x-1 transition-all" />
                      </div>

                      <div 
                        onClick={() => handleRecentClick('ISO 13485')}
                        className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-brand-teal/5 border border-gray-100 rounded-2xl cursor-pointer transition-all group"
                      >
                        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-teal/20">
                          <Briefcase className="w-4 h-4 text-purple-500" />
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <p className="font-bold text-brand-deep leading-tight text-xs">ISO 13485 QMS Requirements</p>
                          <p className="text-[11px] text-gray-400 truncate">Learn the standards for medical quality systems.</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:translate-x-1 transition-all" />
                      </div>

                      <div 
                        onClick={() => handleRecentClick('510(k)')}
                        className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-brand-teal/5 border border-gray-100 rounded-2xl cursor-pointer transition-all group"
                      >
                        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-teal/20">
                          <Briefcase className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <p className="font-bold text-brand-deep leading-tight text-xs">USFDA 510(k) Submissions</p>
                          <p className="text-[11px] text-gray-400 truncate">Filing Premarket notifications & substantial equivalence.</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:translate-x-1 transition-all" />
                      </div>

                      <div 
                        onClick={() => handleRecentClick('SaMD')}
                        className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-brand-teal/5 border border-gray-100 rounded-2xl cursor-pointer transition-all group"
                      >
                        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-teal/20">
                          <BookOpen className="w-4 h-4 text-indigo-500" />
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <p className="font-bold text-brand-deep leading-tight text-xs">Software as a Medical Device (SaMD)</p>
                          <p className="text-[11px] text-gray-400 truncate">Software engineering, IEC 62304 standards, and traceability.</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Hotkeys instruction block */}
                  <div className="px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl text-xs text-gray-400 leading-normal flex items-start space-x-3">
                    <div className="p-1.5 bg-white border border-gray-100 rounded-lg shadow-inner mt-0.5">
                      <Command className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-brand-deep text-sm">Quick Navigation Panel Keys</p>
                      <p className="leading-relaxed">Use standard keyboard controls to easily manage search results. Hit <kbd className="px-1 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-[10px] font-black uppercase text-gray-500">↑ Up Arrow</kbd> and <kbd className="px-1 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-[10px] font-black uppercase text-gray-500">↓ Down Arrow</kbd> to select index parameters, and press <kbd className="px-1 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-[10px] font-black uppercase text-gray-500">Enter</kbd> to open. Close immediately with <kbd className="px-1 py-0.5 bg-white border border-gray-200 rounded shadow-sm text-[10px] font-black uppercase text-gray-500">Esc</kbd>.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Context 2: Results found */}
              {searchTerm.trim() && filteredList.length > 0 && (
                <div className="space-y-1">
                  {filteredList.map((item, index) => {
                    const isSelected = index === activeIndex;
                    
                    // Assign icon based on item category
                    let IconComponent = Briefcase;
                    let iconColor = 'text-brand-teal bg-brand-teal/5';
                    if (item.category === 'Resources') {
                      IconComponent = FileText;
                      iconColor = 'text-indigo-500 bg-indigo-50/50';
                    } else if (item.category === 'Blogs') {
                      IconComponent = BookOpen;
                      iconColor = 'text-amber-500 bg-amber-50/50';
                    }

                    return (
                      <div
                        key={item.id}
                        data-search-item
                        onClick={() => handleSelect(item)}
                        className={`flex items-start space-x-4 p-3.5 rounded-2xl cursor-pointer transition-all border ${
                          isSelected 
                            ? 'bg-brand-teal/5 border-brand-teal/30 hover:border-brand-teal/40 shadow-sm' 
                            : 'bg-white hover:bg-gray-50 border-transparent hover:border-gray-100'
                        }`}
                      >
                        {/* Status Icon */}
                        <div className={`p-2.5 rounded-xl border border-gray-100 ${iconColor} mt-0.5`}>
                          <IconComponent className="w-5 h-5 shrink-0" />
                        </div>

                        {/* Title and descriptions */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-bold text-brand-deep text-sm sm:text-base leading-tight truncate">
                              {highlightMatch(item.title, searchTerm)}
                            </h4>
                            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              item.category === 'Services' ? 'bg-brand-teal/10 text-brand-teal' :
                              item.category === 'Resources' ? 'bg-indigo-100/50 text-indigo-600' :
                              'bg-amber-100/50 text-amber-600'
                            }`}>
                              {item.category}
                            </span>
                          </div>
                          
                          <p className="text-xs text-brand-teal bg-brand-teal/5 px-2 py-0.5 border border-brand-teal/10 rounded inline-block font-sans select-none leading-none scale-95 origin-left">
                            {item.subtitle}
                          </p>

                          <p className="text-xs sm:text-sm text-gray-500 leading-normal line-clamp-2">
                            {highlightMatch(item.snippet, searchTerm)}
                          </p>
                        </div>

                        {/* Keyboard action indicator when selected */}
                        {isSelected && (
                          <div className="hidden sm:flex items-center space-x-1 text-xs text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2 py-1 rounded-lg shrink-0 self-center font-black animate-pulse">
                            <span>Open</span>
                            <CornerDownLeft className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Context 3: Search text entered but no results */}
              {searchTerm.trim() && filteredList.length === 0 && (
                <div className="py-12 text-center max-w-sm mx-auto space-y-4">
                  <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <X className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-black text-brand-deep text-lg">No indices matching</p>
                    <p className="text-gray-400 text-sm">
                      No parameters found matching "<span className="text-brand-deep font-bold">{searchTerm}</span>" in directories or categories.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-brand-deep font-bold text-sm rounded-full transition-colors cursor-pointer inline-flex items-center space-x-2"
                    >
                      <span>Reset Query</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal sticky footer providing useful helper info */}
            <div className="bg-gray-50 border-t border-gray-100/80 px-5 py-3 flex items-center justify-between text-xs text-gray-400 select-none">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-bold shadow-sm">esc</kbd>
                  <span>Close</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-bold shadow-sm">▲</kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-bold shadow-sm">▼</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-bold shadow-sm">enter</kbd>
                  <span>Access</span>
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center space-x-1 text-[11px] font-bold text-brand-teal">
                <span>RAC Forge Directory v1.2</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
