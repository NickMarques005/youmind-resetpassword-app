import React, { useState } from 'react';
import './Input.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../button/Button';
import { InputType } from 'zlib';
import { Loading } from '../../types/LoadingTypes';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    hasButton: boolean;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loading: Loading;
}

const Input: React.FC<InputProps> = ({ placeholder, type, hasButton, name, onChange, loading, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPass = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div style={{opacity: loading ? 0.5 : 1 }} className="input-container">
            <input {...props} className="resetpass-input" placeholder={placeholder} type={hasButton && type === 'password' ? (showPassword ? 'text' : 'password') : type} name={name} onChange={onChange} />
            {
                hasButton && (
                    <>
                        {showPassword ? <FaEyeSlash color={'rgba(206, 84, 213, 1)'} size={25} onClick={handleShowPass}/> : <FaEye color={'rgba(206, 84, 213, 0.8)'} size={25} onClick={handleShowPass}/>}
                    </>
                )
            }
        </div>
    )
}

export default Input;