import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
    errorMessage?: string;
}

const ErrorMessage:React.FC<ErrorMessageProps> = ({ errorMessage }) => {
    return (
        <div className="error-message-main-div">
            <p>
                {
                    errorMessage || "Houve um erro desconhecido"
                }
            </p>
            <div className="close-error-div">

            </div>
        </div>
    )
}

export default ErrorMessage;
