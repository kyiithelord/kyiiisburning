/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

import React from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    // Only track from home to services (ignore contact)
    const sectionIds = ['home', 'about', 'skills', 'work', 'services'];
    const createdTriggers = [];

    sectionIds.forEach((id) => {
      const t = ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center+=10%',
        end: 'bottom center-=10%',
        onToggle: (self) => {
          if (self.isActive) {
            window.dispatchEvent(new CustomEvent('sectionChange', { detail: id }));
          }
        },
        id: id,
      });
      createdTriggers.push(t);
    });

    // Respect users who prefer reduced motion: show content without animation
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('.reveal-up', { y: 0, opacity: 1, clearProps: 'willChange' });
      return () => { createdTriggers.forEach((tr) => tr.kill()); };
    }

    // Pre-set initial state to avoid layout thrash on first paint
    gsap.set('.reveal-up', { opacity: 0, y: 12, willChange: 'transform,opacity' });

    // Batch animations for better performance (staggered, non-scrub)
    ScrollTrigger.batch('.reveal-up', {
      start: 'top 85%',
      batchMax: 12,
      interval: 0.1,
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.05,
          overwrite: true,
          clearProps: 'willChange',
        });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.04,
          overwrite: true,
          clearProps: 'willChange',
        });
      },
      onLeave: (batch) => {
        gsap.set(batch, { opacity: 0, y: 12, willChange: 'transform,opacity' });
      },
      onLeaveBack: (batch) => {
        gsap.set(batch, { opacity: 0, y: 12, willChange: 'transform,opacity' });
      },
    });

    return () => {
      createdTriggers.forEach((tr) => tr.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <main className="mt-20">
        <section id="home" className="section reveal-up"><Hero /></section>
        <section id="about" className="section reveal-up"><About /></section>
        <section id="skills" className="section reveal-up"><Skills /></section>
        <section id="work" className="section reveal-up"><Work /></section>
        <section id="services" className="section reveal-up"><Services /></section>
        <section id="contact" className="section reveal-up"><Contact /></section>
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
