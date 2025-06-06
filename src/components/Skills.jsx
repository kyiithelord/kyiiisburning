/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


import React from 'react'
import SkillCart from './SkillCart';

const skillItem = [
  {
    imgSrc: './img/figa.jpg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: './img/css.jpg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: './img/js.jpg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: './img/python.jpg',
    label: 'Python',
    desc: 'Backend Development'
  },
  {
    imgSrc: './img/postgresql.jpg',
    label: 'PostgreSQL',
    desc: 'Database'
  },
  {
    imgSrc: './img/njs.jpg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: './img/cloudServer.jpg',
    label: 'Cloud Server',
    desc: 'Database'
  },
  {
    imgSrc: './img/graphql.jpg',
    label: 'GraphQL',
    desc: 'API Query Language'
  },
  {
    imgSrc: './img/react.jpg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: './img/laravel.jpg',
    label: 'Laravel',
    desc: 'Framework'
  },
  {
    imgSrc: './img/tailwind.jpg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: './img/3js.jpg',
    label: 'Three JS',
    desc: 'JavaScript 3D graphics library'
  }
];

const Skills = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="headline-2 reveal-up">
            Essential Tools I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8">
            {/* Unleash the full potential of modern web development with the cutting-edge tools and technologies I rely on to deliver fast, responsive, and visually stunning websites. From dynamic interfaces to seamless backend integration, each project is crafted to perform at the highest level. */}
            Harness the power of modern web development with advanced tools and technologies to create fast, responsive, and visually compelling websites. Every project is meticulously designed to combine dynamic interfaces with seamless backend integration, ensuring optimal performance and a superior user experience.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({imgSrc,label,desc},key)=>
              (
                <SkillCart
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    classes='reveal-up'

                />
              )
            )
          }
        </div>
        
      </div>
    </section>
  )
}

export default Skills