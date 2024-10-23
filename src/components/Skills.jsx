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
        <h2 className="headline-2">
            Essential Tools I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
            Unleash the full potential of modern web development with the cutting-edge tools and technologies I rely on to deliver fast, responsive, and visually stunning websites. From dynamic interfaces to seamless backend integration, each project is crafted to perform at the highest level.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({imgSrc,label,desc},key)=>
              (
                <SkillCart
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
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