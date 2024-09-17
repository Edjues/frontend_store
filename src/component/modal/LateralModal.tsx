import React from 'react';
import './modal.css'
import Button from '../button/Button';

interface StoreCartProps{
    children?: React.ReactNode;
    className?: string;
    title?: string;
    isOpen: boolean;
    onClose: () => void;
}
  
 const LateralModal: React.FC<StoreCartProps> = ({ isOpen, onClose, children, title}) => {
    return (
        <section className={`lateralmodal ${isOpen ? 'open' : 'close'}`}>
            <section className='lateralmodal__close'>
                <Button className='btn_close' onClick={onClose}>❌</Button>    
            </section>
            <section className='lateralmodal__contain'>
                <article className='title__lateralmodal'>
                    <h3>{title}</h3>
                </article>
                <article className='body__lateralmodal'>
                    {children}
                </article>
            </section> 
        </section>  
    );
  };

export default  LateralModal;