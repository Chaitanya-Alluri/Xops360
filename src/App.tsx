import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Problem from './components/Problem';
import BeforeAfter from './components/BeforeAfter';
import Platform from './components/Platform';
import VideoSection from './components/VideoSection';
import Remediation from './components/Remediation';
import SupplyChain from './components/SupplyChain';
import CTABand from './components/CTABand';
import Features from './components/Features';
import MultiCloud from './components/MultiCloud';
import Solutions from './components/Solutions';
import RoiCalculator from './components/RoiCalculator';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Problem />
        <BeforeAfter />
        <Platform />
        <VideoSection />
        <Remediation />
        <SupplyChain />
        <CTABand
          headline="See your own findings, and fix them, in one demo."
          sub="Connect read-only in minutes. We'll surface your top cost, security, and compliance wins live."
          primaryLabel="Request a Demo"
          secondaryLabel="Talk to a Cloud Expert"
        />
        <Features />
        <MultiCloud />
        <Solutions />
        <RoiCalculator />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
