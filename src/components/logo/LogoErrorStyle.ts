
import { CSSProperties } from 'react';

export const LogoErrorStyle = (): CSSProperties => {
    const styles: CSSProperties = {
        opacity: '50%',
        height: '22%',
        borderRadius: '50%',
        objectFit: 'cover',
        transition: 'opacity 0.5s ease-in-out',
    };

    if (window.innerHeight >= 1300) {
    }

    if (window.innerWidth <= 768) {
    }

    return styles;
};