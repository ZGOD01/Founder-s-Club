import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CallToActionButton from './components/CallToActionButton';
import TestimonialsMarquee from './components/TestimonialsSection';
import BeforeAfterMarquee from './components/BeforeAfterMarquee';

function App() {
  return (
    <>
    
    <Header />
    <Hero />
    <TestimonialsMarquee />
    <BeforeAfterMarquee />
    </>
  );
}

export default App;