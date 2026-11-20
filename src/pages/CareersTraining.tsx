import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Users,
  ClipboardCheck,
  Award,
  Send,
  AlertCircle,
  Loader2,
  Building2,
  FileCheck2,
  LineChart
} from 'lucide-react';
import SEO from '../components/SEO';
import { getApiBaseUrl } from '../lib/utils';
import heroWorkspaceImg from '../assets/images/careers_bdm_hero_1795162608070.jpg';
import trainingStudioImg from '../assets/images/training_portal_studio_1795162609384.jpg';

const API_BASE_URL = getApiBaseUrl();

const BDM_STEPS = [
  {
    number: '01',
    title: 'Submit Your Freelance BDM Profile',
    description:
      'Apply below to join RAC Forge as an independent Business Development Manager. No fixed office hours or exclusive lock-ins—work flexibly with medical device manufacturers, importers, and MedTech founders.'
  },
  {
    number: '02',
    title: 'Complete Extensive Portal Training',
    description:
      'Receive credentials to training.racforge.com and study structured modules covering CDSCO MDR 2017, USFDA 510(k), EU MDR, ISO 13485 QMS, cleanroom engineering, and consultative scoping.'
  },
  {
    number: '03',
    title: 'Pass Competency Assessments',
    description:
      'Complete graded online assessments on the training portal to verify your accuracy across regulatory pathways, client communication, and service positioning.'
  },
  {
    number: '04',
    title: 'Onboard to CRM & Earn Commissions',
    description:
      'Once certified and onboarded, unlock sales access on crm.racforge.com, work qualified opportunities from the leads pool alongside your own network, and earn commissions on every service mandate you close.'
  }
];

const COMMISSION_PORTFOLIO = [
  {
    category: 'CDSCO India Licensing',
    services:
      'Manufacturing Licenses (MD-5/9), Import Licenses (MD-14/15), Loan & Test Licenses, and Indian Authorized Representative mandates.'
  },
  {
    category: 'Global Regulatory Clearances',
    services:
      'USFDA 510(k) & De Novo submissions, EU MDR 2017/745 CE Marking, UKCA certification, ANVISA Brazil registration, and MDSAP audits.'
  },
  {
    category: 'Quality Management & Audits',
    services:
      'ISO 13485 & ISO 9001 QMS implementation, ISO 14971 risk files, mock inspections, and regulatory audit readiness programs.'
  },
  {
    category: 'Turnkey Engineering & R&D',
    services:
      'SaMD IEC 62304 architecture, IEC 60601 electrical safety debugging, ISO 10993 biocompatibility, cleanrooms, HVAC, and Modular OTs.'
  }
];

type PortalTab = 'crm' | 'training';

export default function CareersTraining() {
  const [activePortal, setActivePortal] = useState<PortalTab>('crm');
  const [heroImgError, setHeroImgError] = useState(false);
  const [studioImgError, setStudioImgError] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    background: 'MedTech / Medical Device Sales',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const scrollToApply = () => {
    const el = document.getElementById('bdm-application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.message.trim()
    ) {
      setFormError('Please complete all required fields before submitting your BDM application.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      const compiledMessage = [
        'Role Applied: Freelance Business Development Manager (BDM)',
        `Background: ${formData.background}`,
        formData.location.trim() ? `City / Region: ${formData.location.trim()}` : null,
        '',
        'Applicant Notes:',
        formData.message.trim()
      ]
        .filter((line) => line !== null)
        .join('\n');

      const response = await fetch(`${API_BASE_URL}/api/contact?t=${Date.now()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          subject: `Freelance BDM Application - ${formData.background}`,
          message: compiledMessage
        })
      });

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        throw new Error('Server endpoint unavailable. Please email info@racforge.com directly.');
      }

      if (!response.ok) {
        let errMessage = `Submission failed (${response.status})`;
        try {
          const data = await response.json();
          errMessage = data.error || data.details || errMessage;
        } catch (_) {}
        throw new Error(errMessage);
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        background: 'MedTech / Medical Device Sales',
        message: ''
      });
    } catch (err: any) {
      setFormError(
        err?.message ||
          'We could not submit your application right now. Please try again or reach out at info@racforge.com.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white min-h-screen text-slate-900">
      <SEO
        title="Careers & Training | Freelance BDM, CRM & Training Portal - RAC Forge"
        description="Join RAC Forge Private Limited as a Freelance Business Development Manager (BDM). Complete structured training and assessments on training.racforge.com, onboard to crm.racforge.com, and earn commissions on medical device regulatory services."
        keywords="RAC Forge careers, freelance business development manager, BDM medical device consulting, RAC Forge CRM, RAC Forge training portal, medical device sales commission India, CDSCO consulting BDM"
        canonical="/careers"
      />

      {/* Section 1: Hero Proposition */}
      <section className="pt-32 lg:pt-40 pb-20 bg-slate-950 text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Editorial Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <p className="text-sm font-medium text-teal-300 tracking-wide">
                  RAC Forge Careers &amp; Internal Portals
                  <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
                  Freelance BDM Program
                </p>

                <h1
                  className="font-bold tracking-tight text-white leading-[1.12] text-balance"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
                >
                  Build a Freelance Career as a Medical Device Business Development Manager
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Partner with RAC Forge Private Limited on a flexible, commission-driven freelance model. Train on our global regulatory portfolio, pass structured certification assessments, onboard onto our CRM, and earn commissions on every compliance and engineering service you close.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={scrollToApply}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-brand-teal hover:bg-[#236f81] text-white font-semibold text-sm transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span>Apply as Freelance BDM</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href="https://training.racforge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  <span>Training Portal</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href="https://crm.racforge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  <span>CRM Sign In</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-72 sm:h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
                {!heroImgError ? (
                  <img
                    src={heroWorkspaceImg}
                    alt="RAC Forge medical device consulting workspace and regulatory strategy meeting"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-900 to-[#0a3651]">
                    <Briefcase className="w-10 h-10 text-teal-400 mb-3" />
                    <p className="text-white font-semibold">RAC Forge BDM &amp; Training Network</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-xs text-slate-200 flex items-center justify-between gap-4">
                  <span className="font-medium">Position: Business Development Manager (BDM)</span>
                  <span className="text-teal-300 font-medium whitespace-nowrap">100% Freelance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Key Role Facts Strip */}
          <div className="mt-14 pt-10 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-1.5">
              <p className="text-xs text-slate-400">Engagement Type</p>
              <p className="text-lg font-semibold text-white">Freelance / Independent</p>
              <p className="text-sm text-slate-400">Work remotely on your own schedule</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs text-slate-400">Designated Title</p>
              <p className="text-lg font-semibold text-white">Business Development Manager</p>
              <p className="text-sm text-slate-400">Consultative MedTech service sales</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs text-slate-400">Compensation Model</p>
              <p className="text-lg font-semibold text-white">Performance Commissions</p>
              <p className="text-sm text-slate-400">Earn on every closed service mandate</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs text-slate-400">Onboarding Requirement</p>
              <p className="text-lg font-semibold text-white">Training &amp; Assessments</p>
              <p className="text-sm text-slate-400">Completed via training.racforge.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Freelance BDM Onboarding Journey & Service Portfolio */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-16">
            <p className="text-sm font-semibold text-brand-teal">Freelance BDM Career Path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep tracking-tight text-balance">
              From Training and Assessment to Commission-Backed Sales
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our careers program is built exclusively for independent Business Development Managers. We equip you with complete regulatory product knowledge first so you can represent RAC Forge credibly to manufacturers, importers, and healthcare innovators.
            </p>
          </div>

          {/* Numbered 4-Step Progression */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {BDM_STEPS.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between pt-6 border-t border-slate-200 space-y-4"
              >
                <div className="space-y-3">
                  <span className="font-mono tabular-nums text-sm font-semibold text-brand-teal block">
                    {step.number}.
                  </span>
                  <h3 className="text-lg font-bold text-brand-deep leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Asymmetric Service Portfolio You Sell */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-14 border-t border-slate-200">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm font-semibold text-brand-teal">Commissionable Portfolio</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight text-balance">
                High-Value Regulatory &amp; Engineering Services You Represent
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                After passing assessments and completing onboarding, you do not have to deliver technical filings yourself. You originate and close engagements while RAC Forge&apos;s engineers and regulatory specialists execute the project and update clients through the CRM.
              </p>
              <div className="pt-2 space-y-2.5 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Full technical backup from senior regulatory architects during client calls</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Transparent deal attribution and pipeline visibility inside crm.racforge.com</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Earn commissions on every closed regulatory, QMS, testing, or cleanroom project</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {COMMISSION_PORTFOLIO.map((item) => (
                <div
                  key={item.category}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5"
                >
                  <h4 className="text-base font-bold text-brand-deep">{item.category}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.services}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dedicated Portals — CRM & Training */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-brand-teal">RAC Forge Digital Ecosystem</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep tracking-tight text-balance">
                Two Purpose-Built Portals for Sales and Operations
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you are completing onboarding assessments or managing active leads and client deliverables, both internal platforms work together seamlessly.
              </p>
            </div>

            {/* Interactive Segmented Switcher */}
            <div
              role="tablist"
              aria-label="Select RAC Forge portal details"
              className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl self-start lg:self-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activePortal === 'crm'}
                onClick={() => setActivePortal('crm')}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  activePortal === 'crm'
                    ? 'bg-brand-deep text-white'
                    : 'text-slate-600 hover:text-brand-deep'
                }`}
              >
                CRM Portal
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activePortal === 'training'}
                onClick={() => setActivePortal('training')}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  activePortal === 'training'
                    ? 'bg-brand-deep text-white'
                    : 'text-slate-600 hover:text-brand-deep'
                }`}
              >
                Training Portal
              </button>
            </div>
          </div>

          {/* Featured Active Portal Spotlight */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                {activePortal === 'crm' ? (
                  <>
                    <div className="space-y-5">
                      <div className="text-xs font-medium text-slate-500 flex items-center gap-2">
                        <span className="font-mono text-brand-teal font-semibold">crm.racforge.com</span>
                        <span aria-hidden="true">·</span>
                        <span>Sales &amp; Operations Workspace</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight">
                        RAC Forge CRM for Sales &amp; Operations Teams
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        Our centralized CRM connects business development with regulatory execution so no lead slips through and every client sees real-time progress on their project.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-brand-deep font-bold text-sm">
                            <LineChart size={16} className="text-brand-teal shrink-0" />
                            <span>Sales Team (BDMs)</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Access the shared <strong>Leads Pool</strong>, claim and follow up with prospective medical device companies, track proposals, and monitor closed service commissions.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-brand-deep font-bold text-sm">
                            <FileCheck2 size={16} className="text-brand-teal shrink-0" />
                            <span>Operations Team</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Log dossier milestones, manage testing and filing stages, and <strong>update and share live project status</strong> transparently with clients.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://crm.racforge.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-deep hover:bg-[#07273b] text-white font-semibold text-sm transition-colors duration-150 whitespace-nowrap shrink-0"
                      >
                        <span>Sign In to CRM</span>
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-5">
                      <div className="text-xs font-medium text-slate-500 flex items-center gap-2">
                        <span className="font-mono text-brand-teal font-semibold">training.racforge.com</span>
                        <span aria-hidden="true">·</span>
                        <span>Learning &amp; Certification Assessments</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight">
                        Extensive Training Program for Sales &amp; Operations
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        Built for both incoming freelance Business Development Managers and our Operations specialists, the training portal delivers structured learning paths and verified assessments.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-brand-deep font-bold text-sm">
                            <GraduationCap size={16} className="text-brand-teal shrink-0" />
                            <span>Role-Specific Curriculum</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Dedicated tracks for <strong>Sales (BDM)</strong> consultative pitching and <strong>Operations</strong> regulatory dossier execution across CDSCO, USFDA, EU MDR, and ISO standards.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-brand-deep font-bold text-sm">
                            <ClipboardCheck size={16} className="text-brand-teal shrink-0" />
                            <span>Graded Assessments</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Complete formal knowledge assessments required to certify new freelance BDMs for CRM onboarding and keep operations teams aligned with current regulations.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://training.racforge.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-teal hover:bg-[#236f81] text-white font-semibold text-sm transition-colors duration-150 whitespace-nowrap shrink-0"
                      >
                        <span>Open Training Portal</span>
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Right Visual Column */}
              <div className="lg:col-span-5 bg-slate-900 min-h-[280px] relative">
                {!studioImgError ? (
                  <img
                    src={trainingStudioImg}
                    alt="RAC Forge sales and operations teams collaborating during regulatory training"
                    referrerPolicy="no-referrer"
                    onError={() => setStudioImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0a3651] to-slate-900">
                    <GraduationCap className="w-10 h-10 text-teal-400 mb-3" />
                    <p className="text-white font-semibold">RAC Forge Training &amp; CRM Ecosystem</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Direct Side-by-Side Portal Quick Cards (always visible for immediate access) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <span className="font-semibold text-brand-deep">CRM Platform</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">crm.racforge.com</span>
                </div>
                <h3 className="text-xl font-bold text-brand-deep">Sales Leads Pool &amp; Client Project Tracking</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For onboarded Sales (BDM) and Operations team members. Sales accesses the leads pool and pipeline, while Operations updates milestones and shares live project status with clients.
                </p>
              </div>
              <div>
                <a
                  href="https://crm.racforge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:text-brand-teal transition-colors whitespace-nowrap"
                >
                  <span>Go to crm.racforge.com</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <span className="font-semibold text-brand-deep">Training &amp; Assessments</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">training.racforge.com</span>
                </div>
                <h3 className="text-xl font-bold text-brand-deep">Sales &amp; Operations Training Academy</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Extensive regulatory and operational training modules with formal assessments for both Sales and Operations teams. Required to unlock full freelance BDM onboarding.
                </p>
              </div>
              <div>
                <a
                  href="https://training.racforge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-deep transition-colors whitespace-nowrap"
                >
                  <span>Go to training.racforge.com</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Freelance BDM Application Form */}
      <section id="bdm-application" className="py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Guidance Column */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm font-semibold text-brand-teal">Freelance BDM Onboarding</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep tracking-tight text-balance">
                Apply to Join as a Freelance Business Development Manager
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Tell us about your background and network. Our onboarding coordinator will review your profile and share access details for the training portal so you can begin your BDM modules and assessments.
              </p>

              <div className="pt-6 border-t border-slate-200 space-y-5">
                <div className="flex items-start gap-3.5">
                  <Users className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-deep">Who Should Apply</h3>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Independent sales professionals, healthcare distributors, MedTech consultants, biomedical graduates, and B2B networkers seeking commission-based freelance earnings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Award className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-deep">Certification First, Then CRM Access</h3>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Complete the Sales BDM track and pass the assessments on <span className="font-mono text-xs text-brand-deep">training.racforge.com</span> to receive verified onboarding and leads pool access on <span className="font-mono text-xs text-brand-deep">crm.racforge.com</span>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Building2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-deep">Direct Coordination</h3>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Questions about BDM onboarding or training? Write to{' '}
                      <a href="mailto:info@racforge.com" className="font-semibold text-brand-teal hover:underline">
                        info@racforge.com
                      </a>{' '}
                      or call{' '}
                      <a href="tel:+916239699077" className="font-semibold text-brand-deep hover:underline tabular-nums">
                        +91 62396 99077
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10">
                {submitted ? (
                  <div className="py-10 text-center space-y-5">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 size={28} />
                    </div>
                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="text-2xl font-bold text-brand-deep">Application Received</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Thank you for applying for the Freelance Business Development Manager (BDM) opportunity. Our team will review your details and get in touch with next steps for training and assessments.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href="https://training.racforge.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal hover:bg-[#236f81] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                      >
                        <span>Visit Training Portal</span>
                        <ExternalLink size={14} />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>Submit Another Application</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="pb-4 border-b border-slate-200">
                      <h3 className="text-xl font-bold text-brand-deep">Freelance BDM Registration</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Commission-based independent role · Training &amp; assessment onboarding
                      </p>
                    </div>

                    {formError && (
                      <div
                        role="alert"
                        className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2.5"
                      >
                        <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="bdm-first-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                          First Name *
                        </label>
                        <input
                          id="bdm-first-name"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g., Aarav"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                        />
                      </div>

                      <div>
                        <label htmlFor="bdm-last-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                          Last Name *
                        </label>
                        <input
                          id="bdm-last-name"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g., Sharma"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="bdm-email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="bdm-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                        />
                      </div>

                      <div>
                        <label htmlFor="bdm-phone" className="block text-sm font-semibold text-slate-800 mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          id="bdm-phone"
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="bdm-location" className="block text-sm font-semibold text-slate-800 mb-1.5">
                          City / Region
                        </label>
                        <input
                          id="bdm-location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g., Chandigarh, Mumbai, Bengaluru"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                        />
                      </div>

                      <div>
                        <label htmlFor="bdm-background" className="block text-sm font-semibold text-slate-800 mb-1.5">
                          Primary Background
                        </label>
                        <select
                          id="bdm-background"
                          value={formData.background}
                          onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                        >
                          <option value="MedTech / Medical Device Sales">MedTech / Medical Device Sales</option>
                          <option value="Healthcare / Pharma Distribution">Healthcare / Pharma Distribution</option>
                          <option value="Regulatory Affairs / Quality">Regulatory Affairs / Quality</option>
                          <option value="Independent B2B Sales / Freelancer">Independent B2B Sales / Freelancer</option>
                          <option value="Biomedical / Engineering Graduate">Biomedical / Engineering Graduate</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bdm-message" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Brief Introduction &amp; Sales Experience *
                      </label>
                      <textarea
                        id="bdm-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your experience in B2B or healthcare sales, the regions or manufacturers you can reach, and your readiness to complete training and assessments."
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal resize-y"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-slate-500">
                        This is a freelance, commission-only Business Development Manager opportunity.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-deep hover:bg-[#07273b] disabled:opacity-60 text-white font-semibold text-sm transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            <span>Submit BDM Application</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
