import React from 'react';
import "./input.css"

interface InputProps{
    value?: string | number;
    placeholder?: string;
    onChange?: (e:any) => void;
    onClick?: () => void;
    className?: string;
    type: string;
    name?: string;
    id?: string;
}

const Input: React.FC<InputProps> = ({ value, placeholder, className, type, name, id, onClick, onChange}) => {
    return(
        <>
            <input value={value} placeholder={placeholder} className={className} type={type} name={name} id={id} onClick={onClick} onChange={onChange} />
        </>
    )
}

export default Input;