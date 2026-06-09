import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Sticky nav on scroll
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav?.classList.add('shadow-xl', 'bg-background');
      } else {
        nav?.classList.remove('shadow-xl');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = 'https://wa.me/message/YAPB4LP252XGK1';

  return (
    <div className="dark bg-background text-on-background">
      <Header whatsappLink={whatsappLink} />
      <main className="pt-20">
        <Hero whatsappLink={whatsappLink} />
        <SocialProof />
        <Services whatsappLink={whatsappLink} />
        <Testimonials />
        <CtaSection whatsappLink={whatsappLink} />
        <Location whatsappLink={whatsappLink} />
      </main>
      <Footer />
      <FloatingButton whatsappLink={whatsappLink} />
    </div>
  );
}

export default App;
