/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


/**
 * Node Modules from Lenis Scroll library
 */
import { ReactLenis, useLenis } from 'lenis/react';

/**
 * Node Modules from GSAP library
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register GASP plugins
 */
gsap.registerPlugin(useGSAP,ScrollTrigger);

/**
 * Component
 */

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import _gsap from 'gsap/gsap-core';
import { element } from 'prop-types';


const App = () => {
  useGSAP(()=>{
    const elements = _gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:'-200 bottom',
          end: 'bottom 80%',
          scrub:true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  });
  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Services/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  )
   
  
}

export default App