import React from 'react';
import imageLogo from '../../assets/logo_app.jpg';
import { logoAppStyle } from './LogoAppStyle';
import { LogoErrorStyle } from './LogoErrorStyle';

export interface LogoProps {
    error?: boolean;
}

const Logo = ({error}: LogoProps) => {

    const logoStyle = error? LogoErrorStyle() : logoAppStyle();

    return (
        <>
            <img src={imageLogo} style={logoStyle} alt="logo"/>
        </>
    )
}

export default Logo;