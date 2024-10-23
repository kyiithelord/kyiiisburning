/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

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


const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Services/>
      </main>
    </>
  )
   
  
}

export default App