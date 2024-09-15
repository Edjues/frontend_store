import React from 'react';
import "./card.css"
import Button from '../button/Button';
export interface Product {
    onClick?: () => void;
    url?: string;
    className?: string;
    urlImg: string;
    title: string;
    description: string;
    price: number;
    stock: number;
}

interface CardProps{
    product: Product
}

export const Card: React.FC<CardProps> = ({ product }) => {
    return(
        <>
            <article className={product.className}>
                <a href={product.url}>
                    <img src={product.urlImg} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Stock: {product.stock}</p>
                    <p className='price'>Price: {product.price}</p>
                </a>
                <Button className='btn'>Agregar Carrito</Button>
            </article>
            
            {/* <input value={value} placeholder={placeholder} className={className} type={type} name={name} id={id} onClick={onClick} /> */}
        </>
    )
}

