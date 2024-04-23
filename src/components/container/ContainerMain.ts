
import { CSSProperties } from 'react';

export const ContainerMainStyle = (): CSSProperties => {
    const styles: CSSProperties = {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    };

    if (window.innerHeight >= 1300) {
        styles.paddingTop = '3vh';
    }

    if (window.innerWidth <= 768) {
        styles.paddingTop = '5vh';
    }

    return styles;
}

    ;