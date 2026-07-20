'use client';

import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';
import ThemeColorPicker from '@/components/ui/ThemeColorPicker';

export default function Home() {
  return (
    <>
      <ThemeColorPicker />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
