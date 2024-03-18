import React, { useState } from 'react';
import './Input.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../button/Button';

interface InputProps {
    placeholder?: string;
    type: string;
    hasButton: boolean;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, type, hasButton, name, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPass = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="input-container">
            <input className="resetpass-input" placeholder={placeholder} type={hasButton && type === 'password' ? (showPassword ? 'text' : 'password') : type} name={name} onChange={onChange} />
            {
                hasButton && (
                    <>
                        {showPassword ? <FaEyeSlash color={'rgba(206, 84, 213, 1)'} onClick={handleShowPass}/> : <FaEye color={'rgba(206, 84, 213, 0.8)'} onClick={handleShowPass}/>}
                    </>
                )
            }
        </div>
    )
}

export default Input;