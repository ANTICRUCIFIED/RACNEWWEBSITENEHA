import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../constants';

const getApiBaseUrl = () => {
  // If running in development preview or in AI Studio workspace sandbox, direct requests to local server
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (
      hostname.includes('run.app') || 
      hostname.includes('localhost') || 
      hostname.includes('127.0.0.1') || 
      hostname.includes('gitpod') || 
      hostname.includes('github.dev') ||
      hostname.includes('github.preview.app')
    ) {
      return '';
    }
  }

  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl !== 'undefined' && envUrl !== 'null' && envUrl.trim() !== '') {
    if (!envUrl.startsWith('http')) {
      return `https://${envUrl}`;
    }
    return envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl;
  }
  return '';
};
const API_BASE_URL = getApiBaseUrl();

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Appending cache-busting timestamp to bypass any browser-cached redirections
      const response = await fetch(`${API_BASE_URL}/api/contact?t=${Date.now()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        let errorMessage = 'Server responded with an error';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.message || errorMessage;
          if (errorData.details) {
            errorMessage += ` (${errorData.details})`;
          }
        } catch (jsonErr) {
          try {
            const textData = await response.text();
            if (textData && textData.length < 200) {
              errorMessage = textData;
            } else {
              errorMessage = `Server Error (${response.status}: ${response.statusText})`;
            }
          } catch (textErr) {
            errorMessage = `Server Error (${response.status})`;
          }
        }
        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Form submission failed. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Contact Medical Device Regulatory Consultants" 
        description="Get expert regulatory consultation for CDSCO, USFDA, and EU MDR. Contact RAC Forge Private Limited for medical device licensing and compliance support."
        keywords="contact regulatory experts, medical device consultancy contact, FDA license help, CDSCO license inquiry, regulatory advisor India, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/contact"
      />

      {/* Contact Hero */}
      <section className="relative h-[440px] flex items-center pt-32 lg:pt-40 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/contact-hero.webp"
            alt="Contact RAC Forge Private Limited | RAC Forge Consulting" title="Contact RAC Forge Private Limited"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            
          >
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Contact Us
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to navigate global regulatory compliance? Our experts are here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep leading-tight">
                  Let's Discuss Your Regulatory Strategy
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you are a startup or an established manufacturer, we provide tailored solutions for your global market entry.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl">Headquarters</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {COMPANY_INFO.companyName} {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-brand-deep/10 rounded-2xl flex items-center justify-center text-brand-deep shrink-0 group-hover:bg-brand-deep group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl">DUNS Number</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {COMPANY_INFO.dunsNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl">Email Us</h4>
                    <p className="text-gray-600 leading-relaxed">{COMPANY_INFO.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group" title="Support Number">
                  <div className="w-14 h-14 bg-brand-deep/10 rounded-2xl flex items-center justify-center text-brand-deep shrink-0 group-hover:bg-brand-deep group-hover:text-white transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl">Call Us</h4>
                    <p className="text-gray-600 leading-relaxed">{COMPANY_INFO.contact.phone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <h4 className="text-xl font-bold text-brand-deep mb-6">Follow Us</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/people/R-A-C-Forge-Private-Limited/61584695412489/" },
                    { icon: Twitter, href: "https://x.com/RACForge" },
                    { icon: Linkedin, href: "https://www.linkedin.com/company/rac-forge/" },
                    { icon: Instagram, href: "https://www.instagram.com/racforge/" },
                    { icon: Youtube, href: "https://www.youtube.com/@RACForge" }
                  ].map((item, idx) => (
                    <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all transform hover:scale-110">
                      <item.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-2xl relative overflow-hidden min-h-[600px]"
              >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 skew-x-12 translate-x-1/4"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-10"
                      >
                        <h3 className="text-3xl font-extrabold text-brand-deep">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="text-sm font-bold text-brand-deep uppercase tracking-widest">First Name *</label>
                              <input 
                                required 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-8 py-5 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all bg-white" 
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-sm font-bold text-brand-deep uppercase tracking-widest">Last Name *</label>
                              <input 
                                required 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-8 py-5 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all bg-white" 
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="text-sm font-bold text-brand-deep uppercase tracking-widest">Email Address *</label>
                              <input 
                                required 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-8 py-5 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all bg-white" 
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-sm font-bold text-brand-deep uppercase tracking-widest">Phone Number *</label>
                              <input 
                                required 
                                type="tel" 
                                name="phoneNumber" 
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-8 py-5 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all bg-white" 
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-brand-deep uppercase tracking-widest">Subject *</label>
                            <select 
                              required 
                              name="subject" 
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-8 py-5 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all bg-white"
                            >
                              <option value="">Select a subject</option>
                              <option value="CDSCO Inquiry">CDSCO Inquiry</option>
                              <option value="USFDA Inquiry">USFDA Inquiry</option>
                              <option value="EU MDR Inquiry">EU MDR Inquiry</option>
                              <option value="Anvisa Inquiry">Anvisa Inquiry</option>
                              <option value="General Inquiry">General Inquiry</option>
                            </select>
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-brand-deep uppercase tracking-widest">Message *</label>
                            <textarea 
                              required 
                              name="message" 
                              rows={5} 
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full px-8 py-5 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 outline-none transition-all bg-white resize-none"
                            ></textarea>
                          </div>
                          
                          {error && (
                            <p className="text-red-500 text-sm font-bold">{error}</p>
                          )}

                          <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className={`w-full bg-brand-deep text-white py-6 rounded-2xl font-black text-xl hover:bg-brand-teal transition-all shadow-xl shadow-brand-deep/20 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-3" size={24} />
                          </button>
                        </form>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col items-center justify-center text-center py-20"
                      >
                        <div className="w-24 h-24 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal mb-8">
                          <CheckCircle2 size={64} />
                        </div>
                        <h3 className="text-3xl font-black text-brand-deep mb-4">Message Sent Securely</h3>
                        <p className="text-gray-600 text-lg max-w-sm mb-10">
                          Thank you for reaching out. Our regulatory experts will review your inquiry and get back to you within 24-48 hours.
                        </p>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="text-brand-teal font-black uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform"
                        >
                          Send another message <Send className="ml-3" size={20} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100 relative overflow-hidden">
        <iframe 
          title="RAC Forge Private Limited Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.4321!2d76.54321!3d32.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCMDcnMjQuNCJOIDc2wrAzMicyNy42IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
