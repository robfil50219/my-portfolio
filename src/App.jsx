import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      <Navbar />
      <main className="flex-1">
        <Hero
          aboutOpen={aboutOpen}
          toggleAbout={() => setAboutOpen(o => !o)}
        />
        {/* Always rendered, but hidden/collapsed when open=false */}
        <About open={aboutOpen} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
