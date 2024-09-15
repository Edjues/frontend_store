import React from 'react';
import "./search.css"
import Button from '../button/Button';
import Input from '../input/input'

interface MenuProps{
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string
}
const Search: React.FC<MenuProps> = ({ onClick, className}) => {

    return(
        <>
        <div className={className}>
            <Input type="search" className='search__input' placeholder='Buscar productos…' name="search" id="search"/>
            <Button className=' icono__btn' onClick={onClick}>🔍</Button>
        </div>
            
        </>
    )
}

export default Search;