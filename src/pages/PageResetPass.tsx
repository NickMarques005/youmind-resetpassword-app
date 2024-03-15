import React from 'react';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

export interface PasswordsProps{
    newPassword: string;
    confirmNewPassword: string;
}

const PageResetPass = () => {
    return (
        <>
            <Header />
            <Content/>
            <Footer/>
        </>
    )
}

export default PageResetPass;