import React from 'react';
import "./Title.css";

interface TitleProps {
    title: string;
    subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <div className="title-div">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default Title;