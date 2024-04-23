import { CSSProperties } from 'react';

export const logoAppStyle = (): CSSProperties => {
    let style: CSSProperties = {
        opacity: '50%',
        height: '70%',
        borderRadius: '50%',
        objectFit: 'cover',
        transition: 'opacity 0.5s ease-in-out',
    };

    if (window.innerHeight >= 1300) {
        style = { ...style, padding: '0px' };
    }

    if (window.innerWidth <= 767) {
        
    }

    return style;
};


export const logoImageHoverStyle: CSSProperties = {
    opacity: '70%',
    transition: 'opacity 0.5s ease-in-out',
};