import React, { useEffect, useState } from 'react'
import './Nav.css'

export const Nav = () => {
    
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
    
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])
    

    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className='nav__contents'>
                <img 
                    className='nav__logo' 
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt='Netflix' 
                />
                <img 
                    className='nav__avatar' 
                    src='https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png' 
                    alt='avatar'
                />
            </div>
        </div>
    )
}
