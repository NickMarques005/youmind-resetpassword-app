import React from 'react';
import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    text: string;
    buttonFunc: (data: any) => void;
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, text, buttonFunc }) => {

    return (
            <div className="button_container">
                <button onClick={() => console.log("Function!!")}>
                    {
                        text != "" ?
                        <p className="text-button">{text}</p>
                        : children
                    }
                </button>
            </div>
    )
}

export default Button;