import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string;
    buttonFunc: (data: any) => void;
}

const Button: React.FC<ButtonProps> = ({ text, buttonFunc }) => {

    return (
            <div className="button_container">
                <button onClick={() => console.log("Function!!")}>
                    <text className="text-button">{text}</text>
                </button>
            </div>
    )
}

export default Button;