import React from 'react';
import './Input.css';

interface InputProps {
    placeholder?: string;
    type: string;
}

const Input: React.FC<InputProps> = ({placeholder, type}) => {
    return <input className="resetpass-input" placeholder={placeholder} type={type}/>
}

export default Input;