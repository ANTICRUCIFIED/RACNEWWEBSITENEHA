import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Chatbot from './components/Chatbot';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Expertise = lazy(() => import('./pages/Expertise'));
const Resources = lazy(() => import('./pages/Resources'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const InfoDetail = lazy(() => import('./pages/Information/InfoDetail'));
const VeloPage = lazy(() => import('./pages/VeloPage'));

// Service Sub-pages
const CDSCOManufacturing = lazy(() => import('./pages/Services/CDSCOManufacturing'));
const CDSCOImport = lazy(() => import('./pages/Services/CDSCOImport'));
const CDSCOLoan = lazy(() => import('./pages/Services/CDSCOLoan'));
const CDSCOTest = lazy(() => import('./pages/Services/CDSCOTest'));
const CDSCOClinical = lazy(() => import('./pages/Services/CDSCOClinical'));
const USFDA510k = lazy(() => import('./pages/Services/USFDA510k'));
const USFDAPMA = lazy(() => import('./pages/Services/USFDAPMA'));
const USFDADeNovo = lazy(() => import('./pages/Services/USFDADeNovo'));
const EUMDRCompliance = lazy(() => import('./pages/Services/EUMDRCompliance'));
const AnvisaBrazil = lazy(() => import('./pages/Services/AnvisaBrazil'));
const RDandSaMD = lazy(() => import('./pages/Services/RDandSaMD'));

// New Service Sub-pages
const SaMDArchitecture = lazy(() => import('./pages/Services/SaMDArchitecture'));
const ElectricalPrototyping = lazy(() => import('./pages/Services/ElectricalPrototyping'));
const FacilityCleanroom = lazy(() => import('./pages/Services/FacilityCleanroom'));
const EUAuthorizedRepresentative = lazy(() => import('./pages/Services/EUAuthorizedRepresentative'));
const ISO13485Certification = lazy(() => import('./pages/Services/ISO13485Certification'));
const BiocompatibilityTesting = lazy(() => import('./pages/Services/BiocompatibilityTesting'));
const RegulatoryAuditReadiness = lazy(() => import('./pages/Services/RegulatoryAuditReadiness'));
const IndianAuthorizedRepresentative = lazy(() => import('./pages/Services/IndianAuthorizedRepresentative'));
const SEOPage = lazy(() => import('./pages/SEOPage'));

// Dedicated service pages for unique menu options
const UKCAMark = lazy(() => import('./pages/Services/UKCAMark'));
const EmbeddedMedicalFirmware = lazy(() => import('./pages/Services/EmbeddedMedicalFirmware'));
const UsabilityEngineering = lazy(() => import('./pages/Services/UsabilityEngineering'));
const HardwareVVProtocols = lazy(() => import('./pages/Services/HardwareVVProtocols'));
const MDSAPJointAudits = lazy(() => import('./pages/Services/MDSAPJointAudits'));
const PreclinicalSafety = lazy(() => import('./pages/Services/PreclinicalSafety'));
const ToxicologicalRisk = lazy(() => import('./pages/Services/ToxicologicalRisk'));
const ExtractablesLeachables = lazy(() => import('./pages/Services/ExtractablesLeachables'));
const GCPAudit = lazy(() => import('./pages/Services/GCPAudit'));
const IECElectricalSafety = lazy(() => import('./pages/Services/IECElectricalSafety'));
const ISORiskManagement = lazy(() => import('./pages/Services/ISORiskManagement'));
const SterileBarrierValidation = lazy(() => import('./pages/Services/SterileBarrierValidation'));
const PostMarketSurveillance = lazy(() => import('./pages/Services/PostMarketSurveillance'));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/blogs/resources" element={<Resources />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/information/:slug" element={<InfoDetail />} />
            <Route path="/velo-ai" element={<Navigate to="/raahi-ai" replace />} />
            <Route path="/raaahi-ai" element={<Navigate to="/raahi-ai" replace />} />
            <Route path="/raahi-ai" element={<VeloPage />} />

            {/* Service Sub-routes */}
            {/* Old Aliases Redirected to Canonical Paths to Avoid Duplicate Pages */}
            <Route path="/services/cdsco-manufacturing-license" element={<Navigate to="/services/cdsco-manufacturing-license-md5-md9" replace />} />
            <Route path="/services/cdsco-import-license" element={<Navigate to="/services/cdsco-import-license-md14" replace />} />
            <Route path="/services/cdsco-loan-license" element={<Navigate to="/services/cdsco-loan-license-md6-md10" replace />} />
            <Route path="/services/cdsco-test-license" element={<Navigate to="/services/cdsco-test-license-md13" replace />} />
            <Route path="/services/usfda-510k-submission" element={<Navigate to="/services/usfda-510k-de-novo" replace />} />
            <Route path="/services/usfda-pma-application" element={<USFDAPMA />} />
            <Route path="/services/usfda-de-novo-classification" element={<USFDADeNovo />} />
            <Route path="/services/eu-mdr-compliance" element={<Navigate to="/services/eu-mdr-ce-marking" replace />} />
            <Route path="/services/anvisa-brazil-approval" element={<Navigate to="/services/anvisa-brazil-registration" replace />} />
            <Route path="/services/rd-and-samd" element={<RDandSaMD />} />

            {/* Precise Target Direct Paths */}
            <Route path="/services/samd-architecture-development" element={<SaMDArchitecture />} />
            <Route path="/services/embedded-medical-firmware" element={<EmbeddedMedicalFirmware />} />
            <Route path="/services/usability-engineering-iec-62366" element={<UsabilityEngineering />} />
            <Route path="/services/electrical-medical-device-prototyping" element={<ElectricalPrototyping />} />
            <Route path="/services/hardware-vv-protocols" element={<HardwareVVProtocols />} />
            <Route path="/services/facility-cleanroom-design" element={<FacilityCleanroom />} />
            <Route path="/services/cdsco-manufacturing-license-md5-md9" element={<CDSCOManufacturing />} />
            <Route path="/services/cdsco-import-license-md14" element={<CDSCOImport />} />
            <Route path="/services/cdsco-loan-license-md6-md10" element={<CDSCOLoan />} />
            <Route path="/services/cdsco-test-license-md13" element={<CDSCOTest />} />
            <Route path="/services/cdsco-clinical-investigation" element={<CDSCOClinical />} />
            <Route path="/services/usfda-510k-de-novo" element={<USFDA510k />} />
            <Route path="/services/eu-mdr-ce-marking" element={<EUMDRCompliance />} />
            <Route path="/services/ukca-mark-certification" element={<UKCAMark />} />
            <Route path="/services/eu-authorized-representative" element={<EUAuthorizedRepresentative />} />
            <Route path="/services/anvisa-brazil-registration" element={<AnvisaBrazil />} />
            <Route path="/services/iso-13485-certification-audit" element={<ISO13485Certification />} />
            <Route path="/services/mdsap-joint-audits" element={<MDSAPJointAudits />} />
            <Route path="/services/biocompatibility-testing-iso-10993" element={<BiocompatibilityTesting />} />
            <Route path="/services/preclinical-safety-evaluation" element={<PreclinicalSafety />} />
            <Route path="/services/toxicological-risk-assessment" element={<ToxicologicalRisk />} />
            <Route path="/services/extractables-leachables" element={<ExtractablesLeachables />} />
            <Route path="/services/gcp-audit" element={<GCPAudit />} />
            <Route path="/services/iec-60601-electrical-safety" element={<IECElectricalSafety />} />
            <Route path="/services/iso-14971-risk-management" element={<ISORiskManagement />} />
            <Route path="/services/sterile-barrier-validation" element={<SterileBarrierValidation />} />
            <Route path="/services/post-market-surveillance-pms" element={<PostMarketSurveillance />} />
            <Route path="/services/regulatory-audit-readiness" element={<RegulatoryAuditReadiness />} />
            <Route path="/services/indian-authorized-representative" element={<IndianAuthorizedRepresentative />} />
            <Route path="/locations/:cityId" element={<SEOPage />} />
            <Route path="/india/:stateId" element={<SEOPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <Chatbot />
    </Router>
  );
}
