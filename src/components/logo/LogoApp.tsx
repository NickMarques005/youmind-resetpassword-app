import React from 'react';
import logo_app from '../../assets/logo_app.jpg';
import './LogoApp.css';

const Logo = () => {
    return (
        <>
            <img src={logo_app} className="logo_img" alt="logo"/>
        </>
    )
}

export default Logo;