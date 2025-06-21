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

    sectionIds.forEach((id) => {
      ScrollTrigger.create({
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
    });

    gsap.utils.toArray('.reveal-up').forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
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
