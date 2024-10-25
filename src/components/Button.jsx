/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

import React from 'react'
import PropTypes from 'prop-types'


/**
 * Primary Button
 */

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    download // New prop for download functionality
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary " + classes}
                download={download ? href.split('/').pop() : undefined} // Set download attribute if download prop is true
            >
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : undefined}
            </a>
        );
    } else {
        return (
            <button className={'btn btn-primary ' + classes}>
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : undefined}
            </button>
        );
    }
};

export default ButtonPrimary;


ButtonPrimary.PropTypes = {
    labe: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

/**
 * Outline Button
 */

const ButtonOutline = ({
    href,
    target = '_self',
    label ,
    icon ,
    classes
}) => {
    if(href){
        return (
            <a href={href} target={target} className={"btn btn-outline " + classes } >
                {label}

                {icon ? <span className="material-symbols-rounded" aria-hidden='true' >
                    {icon}
                </span> 
                : undefined }
            </a>
        )
    } else {
        return (
            <button className={'btn btn-outline ' + classes } >
                {label}
                
                {icon ? <span className="material-symbols-rounded" aria-hidden='true' >
                    {icon}
                </span> 
                : undefined }
            </button>
        )
    }
}

ButtonOutline.PropTypes = {
    labe: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {ButtonPrimary,ButtonOutline}