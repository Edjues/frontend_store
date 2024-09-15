import React from 'react';
import "./Button.css"

interface ButtonProps{
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return(
        <>
            <button className={className} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button;