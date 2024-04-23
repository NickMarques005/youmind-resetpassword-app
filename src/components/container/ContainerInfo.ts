
import { CSSProperties } from 'react';

export const ContainerInfoStyle = (): CSSProperties => {
    const styles: CSSProperties = {
        height: '85vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-center',
    };

    if (window.innerHeight >= 1300) {
    }

    if (window.innerWidth <= 768) {
    }

    return styles;
};