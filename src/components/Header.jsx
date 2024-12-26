/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


/**
 * Node Modules
 */
import React, { useState } from 'react'

/**
 * Components
 */
import Navbar from './Navbar'


const Header = () => {
    const [navOpen,setNavOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0' >
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            <h1>
                <a href="/" className='logo'>
                       {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                       </svg> */}
                       <img src="./img/logo_svg.jpg" width={40} height={40} alt="kyiithelord" className='rounded-lg' />
              </a>
            </h1>

            <div className="relative md:justify-self-center">
                <button className='menu-btn md:hidden' onClick={() => setNavOpen ((prev)=>!prev)}>
                    <span className='material-symbols-rounded'>
                        {navOpen ? 'close' : 'menu'}
                    </span>

                </button>

                <Navbar navOpen={navOpen}/>
            </div>

                <a href="#contact" className='btn btn-secondary max-md:hidden justify-self-end'>
                    Contact Me
                </a>
        </div>

    </header>
  )
}

export default Header