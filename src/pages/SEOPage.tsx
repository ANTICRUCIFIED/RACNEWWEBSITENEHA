import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Award, 
  MapPin, 
  Layers, 
  Bookmark,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import SEO from '../components/SEO';
import { CITIES_DATA, STATES_DATA, LocationItem } from '../data/locationData';

export default function SEOPage() {
  const { cityId, stateId } = useParams<{ cityId?: string; stateId?: string }>();
  
  // Decide which dataset to load
  let data: LocationItem | undefined = undefined;
  let isState = false;

  if (cityId) {
    data = CITIES_DATA[cityId];
  } else if (stateId) {
    data = STATES_DATA[stateId];
    isState = true;
  }

  // Fallback / Redirect if route doesn't match a loaded location
  if (!data) {
    return <Navigate to="/services" replace />;
  }

  // Construct links for crawling
  const otherLocations = Object.values(CITIES_DATA).filter(c => c.slug !== cityId);
  const otherStates = Object.values(STATES_DATA).filter(s => s.slug !== stateId);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title={data.title} 
        description={data.intro}
        keywords={`${data.name} medical regulatory, CDSCO ${data.name}, ISO 13485 ${data.name}, medtech compliance, Atula Sharma ${data.name}`}
        canonical={isState ? `/india/${data.slug}` : `/locations/${data.slug}`}
      />

      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center pt-32 lg:pt-40 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp"
            alt={`${data.name} Medical Device Regulatory Support | RAC Forge`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy" 
          />
        </div>
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-transparent z-1" />
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-12 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <MapPin size={13} />
              <span>National Network / Regional Node: {data.name}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight mb-6"
            >
              {data.h1}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/85 leading-relaxed font-medium"
            >
              Tailored CDSCO licensing, material characterization support, and ISO 13485 QMS audits for local industrial manufacturers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Core Content Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Column 1: Main Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Local Hook Block */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none text-slate-800"
              >
                <div className="inline-block bg-teal-50 text-teal-800 font-extrabold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider mb-4 border border-teal-200">
                  Regional Focus Segment
                </div>
                <h3 className="text-2xl font-black text-brand-deep tracking-tight mb-6">
                  Regulatory Architecture Designed for {data.name}
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  {data.intro}
                </p>
                <p className="text-slate-650 leading-relaxed text-base mt-4">
                  {data.detailedContent}
                </p>
              </motion.div>

              {/* Service Highlights Cards */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <div className="inline-block bg-slate-100 text-slate-800 font-extrabold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider mb-3">
                    Local Solution Pillars
                  </div>
                  <h3 className="text-2xl font-black text-brand-deep tracking-tight">
                    Region-Specific Service Highlights
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Custom compliance pipelines tailored directly to {data.name}'s strategic {data.industry} layout.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.serviceHighlights.map((serv, index) => (
                    <div 
                      key={index} 
                      className="p-6 rounded-[2rem] bg-slate-50 border border-slate-150 relative overflow-hidden group hover:shadow-lg hover:border-teal-500/30 transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-teal group-hover:bg-emerald-500 transition-colors" />
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4 font-bold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-base mb-2 leading-snug group-hover:text-brand-teal transition-colors">
                        {serv.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {serv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Highlight Banner on autonomy/incubation */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-r from-brand-deep via-[#0A1D37] to-brand-deep text-white rounded-3xl relative overflow-hidden shadow-md"
              >
                <div className="absolute top-0 right-0 w-48 h-full bg-teal-500/5 skew-y-12 shrink-0 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <span className="text-teal-400 font-extrabold tracking-widest text-[10px] uppercase">Compliance Assurance</span>
                  <h4 className="text-xl font-bold">End-to-End CDSCO, ISO 13485 & USFDA Pathways</h4>
                  <p className="text-slate-350 text-sm max-w-xl leading-relaxed">
                    By coordinating all physical audits, lab coordination, cleanroom design, and dossier compilation cycles, we ensure your regional team in {data.name} gets direct administrative relief and fully compliant outcomes.
                  </p>
                  <div className="pt-2 flex gap-4">
                    <Link to="/services" className="text-teal-300 hover:text-teal-200 text-xs font-bold flex items-center gap-1 group">
                      <span>Explore Core Services</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Technical Authority and Leadership Verification */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 relative overflow-hidden"
                id="technical-authority-leadership"
              >
                <div className="absolute top-6 right-6 text-slate-200">
                  <Award size={48} className="stroke-[1.5]" />
                </div>
                
                <h4 className="text-xs font-extrabold text-[#0D9488] uppercase tracking-widest mb-2">Technical Authority & Leadership Verification</h4>
                <h3 className="text-xl font-black text-brand-deep mb-4">Our National Authority, Your Local Advantage</h3>
                <p className="text-slate-650 text-sm leading-relaxed mb-6">
                  Our localized expertise is backed by nationally recognized, peer-reviewed scientific research and global industry collaborations. Our founder, **Atul Sharma Sankhyayan**, is an active medical device regulatory consultant, published author in the <strong>Cureus Journal of Medical Science</strong>, and a recognized regulatory architect across major MedTech states.
                </p>
                
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 text-xs font-bold uppercase tracking-wider group border-b border-teal-600/30 pb-0.5"
                >
                  <span>Learn More About Our Leadership</span>
                  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

            </div>

            {/* Column 2: Sidebar containing Crawler directories */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-8">
                
                {/* Geographic directory navigation */}
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-150">
                  <h4 className="text-base font-extrabold text-brand-deep mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Layers size={15} className="text-teal-600" />
                    Regional Presence Search
                  </h4>
                  <p className="text-slate-500 text-xs mb-6">Learn more about our local compliance interfaces inside key manufacturing ecosystems.</p>
                  
                  {/* Select Link lists */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key City Ecosystems</h5>
                      <div className="max-h-48 overflow-y-auto pr-2 space-y-2.5 custom-scrollbar border-t border-slate-200/60 pt-2.5">
                        {Object.values(CITIES_DATA).map((city) => (
                          <Link 
                            key={city.slug} 
                            to={`/locations/${city.slug}`}
                            className={`flex items-center gap-1.5 text-xs font-bold transition-colors block py-0.5 ${city.slug === cityId ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}
                          >
                            <ChevronRight size={12} className={city.slug === cityId ? 'text-teal-600' : 'text-slate-400'} />
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">State Level Guidelines</h5>
                      <div className="max-h-48 overflow-y-auto pr-2 space-y-2.5 custom-scrollbar border-t border-slate-200/60 pt-2.5">
                        {Object.values(STATES_DATA).map((state) => (
                          <Link 
                            key={state.slug} 
                            to={`/india/${state.slug}`}
                            className={`flex items-center gap-1.5 text-xs font-bold transition-colors block py-0.5 ${state.slug === stateId ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}
                          >
                            <ChevronRight size={12} className={state.slug === stateId ? 'text-teal-600' : 'text-slate-400'} />
                            {state.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main consulting card */}
                <div className="p-8 rounded-[2rem] bg-brand-deep text-white relative overflow-hidden shadow-xl border border-slate-800">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl" />
                  <h4 className="text-xl font-bold mb-3">Authorized Rep Support</h4>
                  <p className="text-slate-350 text-xs leading-relaxed mb-6">
                    Establish physical footprints, secure MD-15 import licenses, or incorporate a WOS in India with complete legal and commercial autonomy.
                  </p>
                  <Link
                    to="/services/indian-authorized-representative"
                    className="block text-center bg-teal-500 text-slate-950 text-xs py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors uppercase tracking-wider"
                  >
                    AR Incubation Services
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-deep text-white relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="text-teal-400 font-extrabold tracking-widest uppercase text-xs block">Ready to Build Your {data.name} Operations?</span>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Take Control of Your {data.name} Market Entry?
          </h2>
          
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Consult directly with Atul Sharma and our core compliance engineers. Get customized validation protocols, site layouts, and CDSCO filing steps perfectly aligned with {data.name}'s regulatory landscapes.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base transition-all duration-300 shadow-lg shadow-teal-500/20 hover:scale-105 uppercase tracking-wide"
            >
              <span>Schedule a Consultation for Your {data.name} Operations</span>
              <ArrowRight size={18} className="text-slate-950 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
