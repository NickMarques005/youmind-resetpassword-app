import React from 'react';
import Logo from '../logo/LogoApp';
import './Header.css';

interface HeaderProps {
    isError: boolean;
}

const Header = () => {
    return (
        <header className="header-app">
            <Logo/>
        </header>
    )
}

export default Header;