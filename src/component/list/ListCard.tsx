import React, { useState } from 'react';
import "./listCard.css"
import Button from '../button/Button';
import Input from '../input/Input';

export interface BuyProduct {
    codigo:number;
    onClick?: () => void;
    url?: string;
    className?: string;
    urlImg: string;
    title: string;
    description: string;
    price: number;
    cantidad: number;
}

interface ListCardProps{
    product: BuyProduct
}

export const ListCard: React.FC<ListCardProps> = ({ product }) => {
    
    const [valor, setValor] = useState(0);

    const unoMas = ()=>{
        // if(valor >= product){
            // alert("El stock es insuficiente")
        // }else{
            setValor(valor + 1);
        // }
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
            <section className="cardList">
                {/* <a href={product.url}></a> */}
                <img src={product.urlImg} alt="" />
                <article>
                    <h3>{product.title}</h3>
                </article>
                <article>
                    <div>
                        <Button onClick={unoMenos} className='btn'>-</Button>
                        <Input type='text' className='input__boxSmall' value={valor} onChange={(e) => setValor(e.target.value)} />
                        <Button onClick={unoMas} className='btn'>+</Button>
                    </div>
                    {/* <p>Stock: {product.stock}</p> */}
                    <p className='price'>Price: {product.price}</p>
                </article>
            </section>
        </>
    )
}

