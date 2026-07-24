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
        imgSrc: './img/pos.jpg',
        title: 'Robust offline sync engine for odoo POS',
        tags: ['Odoo', 'POS', 'Offline Sync'],
        projectLink: 'https://apps.odoo.com/apps/modules/19.0/pos_offline_sync_smart'
      },
      {
        imgSrc: './img/telegram_noti.png',
        title: 'Telegram Notification Center',
          tags: ['Odoo', 'Telegram', 'Notifications'],
        projectLink: 'https://apps.odoo.com/apps/modules/19.0/telegram_notification'
      },
      {
        imgSrc: './img/theme7.png',
        title: 'Theme7 Premium Website Theme',
          tags: ['Odoo', 'Website', 'Theme'],
        projectLink: 'https://apps.odoo.com/apps/themes/19.0/theme7'
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