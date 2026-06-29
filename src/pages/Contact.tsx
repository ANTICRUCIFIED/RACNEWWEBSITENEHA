import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube, Send, Calendar, Video, Mic } from 'lucide-react';
import SEO from '../components/SEO';
import ConsultationButtons from '../components/ConsultationButtons';
import { COMPANY_INFO } from '../constants';
import { getApiBaseUrl } from '../lib/utils';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.178 1.455 4.71 1.456 5.485 0 9.94-4.512 9.944-10.061a9.78 9.78 0 00-2.92-7.047 9.873 9.873 0 00-7.026-2.924C5.459 2.58 1.006 7.093 1.002 12.64c-.001 1.62.43 3.202 1.25 4.616l-.993 3.625 3.71-.973zm11.218-6.855c-.301-.15-1.785-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.651.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.78-1.672-2.08-.176-.3-.019-.462.13-.61.137-.133.301-.352.451-.527.15-.176.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.633-.93-2.242-.244-.588-.492-.51-.678-.519-.175-.009-.375-.01-.576-.01-.2 0-.526.075-.801.375-.276.3-1.052 1.03-1.052 2.516s1.078 2.917 1.229 3.117c.15.2 2.122 3.24 5.141 4.545.717.31 1.277.496 1.713.635.721.23 1.378.197 1.9.119.58-.087 1.785-.73 2.037-1.434.252-.703.252-1.306.176-1.431-.076-.125-.276-.2-.577-.35z" />
  </svg>
);

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
                {/* Headquarters */}
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

                {/* DUNS Number */}
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

                {/* WhatsApp Chat - HIGHLY PRIORITIZED */}
                <a 
                  href="https://wa.me/916239699077?text=Hi%20RAAAHI" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start space-x-6 group cursor-pointer block"
                >
                  <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-sm">
                    <WhatsAppIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl group-hover:text-[#25D366] transition-colors flex items-center gap-2">
                      WhatsApp Chat 
                      <span className="text-xs bg-[#25D366]/20 text-[#25D366] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Instant</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-semibold">+91 62396 99077</p>
                    <p className="text-xs text-gray-400">Direct instant chat with our team &amp; RAAAHI advisor</p>
                  </div>
                </a>

                {/* Talk to RAAAHI Voice Assistant - HIGHLY PRIORITIZED */}
                <a 
                  href="/voice.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start space-x-6 group cursor-pointer block"
                >
                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                    <Mic size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl group-hover:text-purple-600 transition-colors flex items-center gap-2">
                      Talk to RAAAHI (Voice AI)
                      <span className="text-xs bg-purple-100 text-purple-600 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Interactive</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-semibold">Speak with our Regulatory Assistant</p>
                    <p className="text-xs text-gray-400">Real-time voice consultation built by RAC Forge</p>
                  </div>
                </a>

                {/* 15-Min Free Call - HIGHLY PRIORITIZED */}
                <a 
                  href="https://cal.id/rac-forge/15-minutes-free-call" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start space-x-6 group cursor-pointer block"
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      15-Min Free Call
                      <span className="text-xs bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Free</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-semibold">Schedule an Initial Consultation</p>
                    <p className="text-xs text-gray-400">Discuss compliance pathways with our lead advisor</p>
                  </div>
                </a>

                {/* 30-Min Paid Session - HIGHLY PRIORITIZED */}
                <a 
                  href="https://cal.id/rac-forge/30-minutes-paid-call" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start space-x-6 group cursor-pointer block"
                >
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                    <Video size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl group-hover:text-amber-600 transition-colors flex items-center gap-2">
                      30-Min Paid Session
                      <span className="text-xs bg-amber-100 text-amber-600 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">In-Depth</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-semibold">Detailed QMS &amp; Clinical Strategy</p>
                    <p className="text-xs text-gray-400">Comprehensive project review &amp; advisory session</p>
                  </div>
                </a>

                {/* Email Us */}
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl">Email Us</h4>
                    <p className="text-gray-600 leading-relaxed font-semibold">{COMPANY_INFO.contact.email}</p>
                    <p className="text-xs text-gray-400">Send us detailed specifications or proposals</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-center space-x-6 group" title="Support Number">
                  <div className="w-14 h-14 bg-brand-deep/10 rounded-2xl flex items-center justify-center text-brand-deep shrink-0 group-hover:bg-brand-deep group-hover:text-white transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-xl">Call Us</h4>
                    <p className="text-gray-600 leading-relaxed font-semibold">{COMPANY_INFO.contact.phone}</p>
                    <p className="text-xs text-gray-400">Direct verbal inquiry with our support desk</p>
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

      {/* Instant Consultation Channels Section */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Instant Support Channels</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep mb-4">
            Consultations & Voice Assistants
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            Get instant support from our regulatory advisors via WhatsApp, schedule dedicated calls, or connect with our interactive RAAAHI Voice Assistant.
          </p>
          <ConsultationButtons variant="grid" className="max-w-4xl mx-auto" />
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
