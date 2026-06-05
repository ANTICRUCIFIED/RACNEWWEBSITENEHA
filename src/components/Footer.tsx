import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Youtube } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/R-A-C-Forge-Private-Limited/61584695412489/" },
    { icon: Twitter, href: "https://x.com/RACForge" },
    { icon: Instagram, href: "https://www.instagram.com/racforge/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/rac-forge/" },
    { icon: Youtube, href: "https://www.youtube.com/@RACForge" }
  ];
  return (
    <footer className="bg-white text-brand-deep pt-24 pb-12 overflow-hidden relative border-t border-gray-100">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Brand & About */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center group">
              <img src="https://anticrucified.github.io/MyWebP_Images/images/logo.webp" alt="RAC Forge Medical Device Regulatory Consulting Logo" aria-label="RAC Forge Logo" title="RAC FORGE" 
                className="h-24 sm:h-28 w-auto mix-blend-multiply" 
              />
            </Link>
            <p className="text-gray-600 leading-relaxed text-sm">
              Navigating global regulatory landscapes with precision and expertise. Your strategic partner for CDSCO, USFDA, EU MDR, and Anvisa compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all transform hover:scale-110">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-gray-100 pb-4">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'RAAAHI (राही)', 'Expertise', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Blogs' ? '/blogs/resources' : item === 'RAAAHI (राही)' ? '/raahi-ai' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-600 hover:text-brand-teal transition-colors flex items-center group font-medium"
                  >
                    <ArrowRight className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Detailed Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-gray-100 pb-4">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'RAAAHI (राही) Regulatory Support', path: '/raahi-ai' },
                { name: 'CDSCO Licenses (MD-5/9/14)', path: '/services/cdsco-manufacturing-license-md5-md9' },
                { name: 'USFDA 510(k) & De Novo', path: '/services/usfda-510k-de-novo' },
                { name: 'EU MDR & CE Marking', path: '/services/eu-mdr-ce-marking' },
                { name: 'Preclinical & Clinical Trials', path: '/services/biocompatibility-testing-iso-10993' },
                { name: 'ISO 13485 QMS Certification', path: '/services/iso-13485-certification-audit' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-gray-600 hover:text-brand-teal transition-colors flex items-center group font-medium"
                  >
                    <ArrowRight className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-gray-100 pb-4">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-colors">
                  <MapPin size={20} className="text-brand-teal group-hover:text-white" />
                </div>
                <span className="text-gray-600 text-sm leading-relaxed font-medium">
                  {COMPANY_INFO.companyName}<br />{COMPANY_INFO.address.full}
                </span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-colors">
                  <Phone size={20} className="text-brand-teal group-hover:text-white" />
                </div>
                <span className="text-gray-600 text-sm font-medium">{COMPANY_INFO.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-colors">
                  <Mail size={20} className="text-brand-teal group-hover:text-white" />
                </div>
                <span className="text-gray-600 text-sm font-medium">{COMPANY_INFO.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.companyName}. All rights reserved.</p>
            <p className="text-[10px] opacity-70 mt-1">D-U-N-S® Number: {COMPANY_INFO.dunsNumber}</p>
          </div>
          <div className="flex space-x-8 text-gray-500 text-sm">
            <Link to="/privacy-policy" className="hover:text-brand-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
