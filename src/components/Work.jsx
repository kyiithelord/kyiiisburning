/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
   
   
    {
      imgSrc:'./img/ecomerce.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://js-cart-twframe.netlify.app/'
    },
    {
        imgSrc: './img/challenge.jpg',
        title: 'Responsive Challenge Website',
        tags: ['Web-design', 'Development','Responsive'],
        projectLink: 'https://challence-frontend.netlify.app/'
      },
      {
        imgSrc: './img/responsive.jpg',
        title: 'Responsive Customize Website',
        tags: ['Customize Design', 'Development','Responsive'],
        projectLink: 'https://lynn-gilang-responsive.netlify.app/#'
      },
      {
        imgSrc: './img/3jsproject.jpg',
        title: 'Three Js Design on Website',
        tags: ['3D Design', 'Development',],
        projectLink: 'https://github.com/kyiithelord/three-native'
      }
  
  ];

const Work = () => {
  return (
    <section id='work' className='section'>
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                Featured Projects
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key) => 
                    (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes='reveal-up'
                        />
                    )
                )}
            </div>
        </div>

    </section>
  )
}

export default Work