/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


// Node Module
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import App from './App.jsx'

// CSS
import './index.css'
// Css import from lenis scroll library
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
