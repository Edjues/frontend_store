import React from 'react';
import "./input.css"

interface InputProps{
    value?: string;
    placeholder?: string;
    onClick?: () => void;
    className?: string;
    type: string;
    name?: string;
    id?: string;
}

const Input: React.FC<InputProps> = ({ value, placeholder, className, type, name, id, onClick}) => {
    return(
        <>
            <input value={value} placeholder={placeholder} className={className} type={type} name={name} id={id} onClick={onClick} />
        </>
    )
}

export default Input;