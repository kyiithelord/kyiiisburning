/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Services',
      href: '#services'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/kyiithelord'
    },
    {
      label: 'Thread',
      href: 'https://www.threads.net/@kyiithelord'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/kyithelord?s=21'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/kyiithelord?igsh=MW5vbnVoMnJpOW90YQ%3D%3D&utm_source=qr'
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/thetzkyii'
    }
  ];

const Footer = () => {
  return (
    <footer className='section'>
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        let&apos;s Join forces!
                    </h2>

                    <ButtonPrimary 
                        href='thetzinkyaw9727@gmail.com'
                        label='Start project'
                        icon='chevron_right'
                        classes='reveal-up'
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({label,href},key)=>
                            (
                                <li key={key}>
                                     <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up' > {label} </a>

                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {socials.map(({label,href},key)=>
                            (
                                <li key={key}>
                                     <a href={href} target='_blank' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up' > {label} </a>

                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="/" className="logo reveal-up">
                    <img src="./img/logo_svg.jpg" alt="logo" width={40} height={40} />
                </a>
                <p className="text-zinc-500 text-sm reveal-up"> &copy; 2024 <span className='text-zinc-200' >kyiithelord</span> </p>
            </div>

        </div>

    </footer>
  )
}

export default Footer