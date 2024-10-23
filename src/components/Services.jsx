/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


import React from 'react'
import ServiceCard from './ServiceCard';

const services = [
    {
      content: 'React is a powerful JavaScript library used for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, manage state efficiently, and optimize performance.',
      imgSrc: './img/reactService.jpg',
    },
    {
      content: 'Laravel is a robust PHP framework designed for building modern, secure, and scalable web applications. It follows the MVC (Model-View-Controller) pattern and provides an elegant syntax to ease development tasks.',
      imgSrc: './img/laravelService.jpg',
    },
    {
      content: 'Three.js is a cross-browser JavaScript library used to create and display animated 3D graphics in a web browser. It leverages WebGL, allowing developers to render 3D objects with GPU acceleration directly in the browser.',
      imgSrc: './img/3jsService.jpg',
    },
    {
      content: 'Cloud servers provide scalable, virtualized resources over the internet, allowing businesses to run applications, store data, and manage workloads without investing in physical infrastructure.',
      imgSrc: './img/cloudService.jpg',
    },
    {
      content: 'Tailwind CSS is a utility-first CSS framework that allows developers to design websites directly in their markup, using predefined classes for styling. It offers flexibility and customizability, without imposing design constraints.',
      imgSrc: './img/tailwindService.jpg',
    }
  ];


const Services = () => {
  return (
    <section id='services' className='section overflow-hidden' >
        <div className="container">
            <h2 className="headline-2 mb-8 ">
                  The services I’m willing to pay you for.
            </h2>
            <div className="flex items-stretch gap-3 w-fit">
                {services.map(({content,imgSrc},key)=>
                    (
                        <ServiceCard 
                            key={key}
                            content={content}    
                            imgSrc={imgSrc}                   
                        />
                            
                    )
                )}
            </div>
        </div>

    </section>
  )
}

export default Services