import React, { CSSProperties } from 'react';
import { ReactNode } from 'react';
import './Button.css';
import { PuffLoader } from 'react-spinners';
interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
    text: string;
    buttonFunc?: (data?: any) => void;
    children?: ReactNode;
    type?: "submit" | "reset" | "button";
    loading?: boolean;
    loaderColor?: string;
    loaderStyle?: CSSProperties;
    loaderSize?: number;
}

const Button: React.FC<ButtonProps> = ({ children, text, buttonFunc, type, loading, loaderColor, loaderStyle, loaderSize, ...props }) => {

    const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonFunc && type !== 'submit') {
            buttonFunc();
        }
    }

    return (
        <div className="button_container">
            <button {...props} onClick={ HandleClick } type={type}>
                {
                    loading ? 
                    <PuffLoader size={loaderSize} color={loaderColor} aria-label="Loading Spinner" cssOverride={loaderStyle} />
                    :
                    (
                    text !== "" ?
                        <p className="text-button">{text}</p>
                        : children
                    )
                }
            </button>
        </div>
    )
}

export default Button;