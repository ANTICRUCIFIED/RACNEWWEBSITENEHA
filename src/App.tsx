import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route path="/velo-ai" element={<VeloPage />} />

            {/* Service Sub-routes */}
            {/* Old Aliases */}
            <Route path="/services/cdsco-manufacturing-license" element={<CDSCOManufacturing />} />
            <Route path="/services/cdsco-import-license" element={<CDSCOImport />} />
            <Route path="/services/cdsco-loan-license" element={<CDSCOLoan />} />
            <Route path="/services/cdsco-test-license" element={<CDSCOTest />} />
            <Route path="/services/usfda-510k-submission" element={<USFDA510k />} />
            <Route path="/services/usfda-pma-application" element={<USFDAPMA />} />
            <Route path="/services/usfda-de-novo-classification" element={<USFDADeNovo />} />
            <Route path="/services/eu-mdr-compliance" element={<EUMDRCompliance />} />
            <Route path="/services/anvisa-brazil-approval" element={<AnvisaBrazil />} />
            <Route path="/services/rd-and-samd" element={<RDandSaMD />} />

            {/* Precise Target Direct Paths */}
            <Route path="/services/samd-architecture-development" element={<SaMDArchitecture />} />
            <Route path="/services/electrical-medical-device-prototyping" element={<ElectricalPrototyping />} />
            <Route path="/services/facility-cleanroom-design" element={<FacilityCleanroom />} />
            <Route path="/services/cdsco-manufacturing-license-md5-md9" element={<CDSCOManufacturing />} />
            <Route path="/services/cdsco-import-license-md14" element={<CDSCOImport />} />
            <Route path="/services/cdsco-loan-license-md6-md10" element={<CDSCOLoan />} />
            <Route path="/services/cdsco-test-license-md13" element={<CDSCOTest />} />
            <Route path="/services/cdsco-clinical-investigation" element={<CDSCOClinical />} />
            <Route path="/services/usfda-510k-de-novo" element={<USFDA510k />} />
            <Route path="/services/eu-mdr-ce-marking" element={<EUMDRCompliance />} />
            <Route path="/services/eu-authorized-representative" element={<EUAuthorizedRepresentative />} />
            <Route path="/services/anvisa-brazil-registration" element={<AnvisaBrazil />} />
            <Route path="/services/iso-13485-certification-audit" element={<ISO13485Certification />} />
            <Route path="/services/biocompatibility-testing-iso-10993" element={<BiocompatibilityTesting />} />
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
