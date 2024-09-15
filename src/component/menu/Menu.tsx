import React from 'react';
import "./Menu.css"

interface MenuProps{
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string
}
const Menu: React.FC<MenuProps> = ({ children, className}) => {

    return(
        <>
        <nav className={className}>
            {children}
        </nav>
            
        </>
    )
}

export default Menu;