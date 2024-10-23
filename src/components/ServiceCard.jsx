/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


import React from 'react'

import PropTypes from 'prop-types'


const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: {
        fontVariationSettings: '"FILL"1'
    }
});

const ServiceCard = ({
    content,
    imgSrc
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] ">
        <div className="flex items-center gap-1 mb-3">
            {ratings.map(({icon,style},key)=>(
                <span key={key} className="material-symbols-rounded text-yellow-400 text-[18px] " style={style} > {icon} </span>
            ))}
        </div>

        <p className="text-zinc-400 mb-8">
            {content}
        </p>
        
        <div className="flex items-center gap-2 mt-auto">
            <figure className="img-box rounded-lg">
                <img src={imgSrc} width={44} loading='lazy' height={44} className='img-cover' />
            </figure>
            
        </div>

    </div>
  )
}


ServiceCard.propTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,

}

export default ServiceCard