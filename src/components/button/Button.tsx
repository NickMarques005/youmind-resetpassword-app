import React from 'react';
import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    text: string;
    buttonFunc?: (data?: any) => void;
    children?: ReactNode;
    type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ children, text, buttonFunc, type }) => {

    const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonFunc && type !== 'submit') {
            buttonFunc();
        }
    }

    return (
        <div className="button_container">
            <button onClick={ HandleClick } type={type}>
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