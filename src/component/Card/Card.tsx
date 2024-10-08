import React, { useState } from 'react';
import "./card.css"
import Button from '../button/Button';
import Input from '../input/Input';

export interface Product {
    codigo:number;
    onClick?: () => void;
    url?: string;
    className?: string;
    urlImg: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    cantidad: number;
}

interface CardProps{
    product: Product
}

export const Card: React.FC<CardProps> = ({ product }) => {
    
    const [valor, setValor] = useState(0);

    const unoMas = ()=>{
        if(valor >= product.stock){
            alert("El stock es insuficiente")
        }else{
            setValor(valor + 1);
        }
    }
    const unoMenos = ()=>{
        if(valor <= 0){
            alert("Las cantidades deben ser mayor a cero")
        }else{
            setValor(valor - 1);
        }
    }
    const agregarCarrito = ()=>{
        if(valor <= 0){
            alert("Las cantidades deben ser mayor a cero")
        }
    }

    return(
        <>
            <article className={product.className}>
                    {/* <a href={product.url}></a> */}
                    <img src={product.urlImg} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Stock: {product.stock}</p>
                    <div>
                        <Button onClick={unoMenos} className='btn'>-</Button>
                        <Input type='text' className='input__boxSmall' value={valor} onChange={(e) => setValor(e.target.value)} />
                        <Button onClick={unoMas} className='btn'>+</Button>
                    </div>
                    <p className='price'>Price: {product.price}</p>
                
                <Button onClick={agregarCarrito} className='btn'>Agregar Carrito</Button>
            </article>
        </>
    )
}

