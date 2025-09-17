import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TestimonialsMarquee from './components/TestimonialsSection';
import BeforeAfterMarquee from './components/BeforeAfterMarquee';
import StickyBar from './components/StickyBar'; // import your StickyBar

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TestimonialsMarquee />
      <BeforeAfterMarquee />

      {/* Sticky bar always at the bottom */}
      <StickyBar />
    </>
  );
}

export default App;
