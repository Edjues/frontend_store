import React from 'react';
import Button from '../button/Button';
import './modal.css'

interface StoreCartProps{
    children?: React.ReactNode;
    className?: string;
    title?: string;
    isOpen: boolean;
    onClose: () => void;
}
  
 const Modal: React.FC<StoreCartProps> = ({ isOpen, onClose, children, title}) => {
    return (
        <section className={`modal ${isOpen ? 'open' : 'close'}`}>
            <section className='modal__close'>
                <Button className='btn_close' onClick={onClose}>❌</Button>    
            </section>
            <section className='modal__contain'>
                <article className='title__modal'>
                    <h3>{title}</h3>
                </article>
                <article className='body__modal'>
                    {children}
                </article>
            </section> 
        </section>  
    //   <div className={`modal ${isOpen ? 'open' : ''}`}>
    //     <div className="modal-content">
    //       <span className="close" onClick={onClose}>&times;</span>
    //       {children}
    //     </div>
    //   </div>   
  
    );
  };

export default  Modal;
// const StoreCart = ()=>{
//     const [showModal, setShowModal] = useState(false);

//     const handleOpenModal = () => {
//       setShowModal(true);
//     };
  
//     const handleCloseModal = () => {
//       setShowModal(false);
//     };
//     return(
//         <>  
//         <button onClick={handleOpenModal}>Abrir Modal</button>
//             <Modal title='open' isOpen={showModal} onClose={handleCloseModal}>
//             {/* Contenido del modal */}
//             <p>Este es  el contenido del modal.</p>
//             </Modal>
//         </>
//     )
// }
