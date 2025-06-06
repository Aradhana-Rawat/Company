import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import CoursesSection from './components/sections/CoursesSection';
import Testimonials from './components/sections/Testimonials';
import CallToAction from './components/sections/CallToAction';

// Excellence Tuition Center - Home Page
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <CoursesSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
