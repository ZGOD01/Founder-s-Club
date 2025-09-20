import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero';
import TestimonialsMarquee from './components/TestimonialsSection';
import BeforeAfterMarquee from './components/BeforeAfterMarquee';
import StickyBar from './components/StickyBar';
import BusinessBreakthrough from './components/BusinessBreakthrough';
import WorkshopWarning from './components/WorkshopWarning';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

// Import your pages
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import Header from './components/Header';
import QASection from './components/QASection';
import ConsultationTopics from './components/ConsultationTopics';
import MeetYourMentor from './components/MeetYourMentor';
import Bonuses from './components/Bonuses';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <TestimonialsMarquee />
              <BeforeAfterMarquee />
              <BusinessBreakthrough />
              <WorkshopWarning />
              <ConsultationTopics />
              <Bonuses />
              <MeetYourMentor />
              <QASection />
              <StickyBar />
            </>
          }
        />

        {/* Other routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/cancellation" element={<CancellationPolicyPage />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
