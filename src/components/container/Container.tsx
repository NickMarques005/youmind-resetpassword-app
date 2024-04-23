import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const Container:React.FC<ContainerProps> = ({children, style}) => {

    return (
            <div style={style}>
                {children}
            </div>
    )
}

export default Container;