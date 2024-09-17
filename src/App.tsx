import { useAppDispatch, useAppSelector } from './store/hook/hooks'
import { increment } from './store/Slices/counter/counterSlice'
import {useState} from 'react';
import './App.css'

import Button from './component/button/Button'
import {Card, Product} from './component/Card/Card'
import Modal from './component/modal/Modal'
import LateralModal from './component/modal/LateralModal.tsx'
import Menu from "./component/menu/Menu.tsx"
import ItemMenu from './component/itemMenu/itemMenu.tsx'
import reactLogo from './assets/react.svg'
import Search from "./component/search/Search.tsx"
import Accordion from './component/accordion/Accordion.tsx';
import Input from './component/input/Input.tsx'

import {ListCard, BuyProduct} from './component/list/ListCard'

const ListBuy = [
  {
    codigo: 0,
    title: "Papas rizadas, con sabor a mayonesa",
    description: "Papas 100% naturales",
    price: 15.95,
    cantidad: 1,
    url: "#",
    className: "card__list__buy",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    codigo: 0,
    title: "Papas rizadas, con sabor a mayonesa",
    description: "Papas 100% naturales",
    price: 15.95,
    cantidad: 1,
    url: "#",
    className: "card__list__buy",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  }
]

const ListProduct = [
  {
    codigo: 0,
    title: "Papas rizadas, con sabor a mayonesa",
    description: "Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    codigo: 1,
    title: "Papas rizadas, con sabor a mayonesa",
    description: "Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    codigo: 2,
    title: "Papas rizadas, con sabor a mayonesa",
    description: "Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    codigo: 3,
    title: "Papas rizadas, con sabor a mayonesa",
    description: "Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    codigo: 4,
    title: "Papas rizadas, con sabor a mayonesa",
    description: "Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
]

function App() {
  const [showModal, setShowModal] = useState(false);
  let [show, setShow]= useState(false);;

  const count = useAppSelector( (state) => state.counter.value)
  const dispatch = useAppDispatch();

  function handleclick(){
    dispatch(increment());
  }

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const List = [
  
    {
      id: 1,
      descripcion: "Mis compras",
      url: "#",
    },
    {
      id: 2,
      descripcion: "🛒",
      title:"Carrito",
      onClick: handleOpen,
      supValue: 0,
    }
  ]
  return (
    <>
    <Menu className="menu__primary">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Search className='search__prod'></Search>
      <ItemMenu listItem={List}></ItemMenu>
    </Menu>
    
    <section className='body__producto__cart'>
      <section className="cards__product">
        {ListProduct?.length > 0 ? ( 
          (ListProduct as Product[]).map((item, cont) => ( // Type assertion for clarity
            <Card key={cont} product={item} />
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </section>
    <LateralModal title='Mis Compras' isOpen={show} onClose={handleClose}>
      <section className='contain__modalLateral'>
        {ListBuy?.length > 0 ? ( 
          (ListBuy as BuyProduct[]).map((item, cont) => ( // Type assertion for clarity
            <ListCard key={cont} product={item} />
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </section>
       {ListBuy?.length > 0 ? ( 
          <section className='footer__modalLateral'>
              <p>Producto: </p>
              <p>Envio: </p>
              <p>Envio: </p>
              <p>Total: </p>
              <Button onClick={handleOpenModal} className='btn'>Continuar Compra</Button>
          </section>
        ):(
          <p></p>
        )}
    </LateralModal>
    <Modal title='Completando Informacion' isOpen={showModal} onClose={handleCloseModal}>
        <Accordion title={["Direcion","Registra tu Tarjeta", "Datos Personales"]} >
          <section className='Group__Form'>
            <article className='Grupo__input'>
              <label>Dirección</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Ciudad</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Codigo Postal</label>
              <Input className='input__form' type='text'></Input>
            </article>
          </section>
          {/* Formularoo para forma de pago */}
          <section className='Group__Form'>
          <article className='Grupo__input'>
              <label>Tipo de Tarjeta</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Numero Tarjeta</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Nombre y apellido</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Fecha vencimiento</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Codigo seguridad</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Tipo</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Cedula de ciudadanadia</label>
              <Input className='input__form' type='text'></Input>
            </article>
          </section>
          {/* Formulario para Datos personales */}
          <section className='Group__Form'>
            <article className='Grupo__input'>
              <label>Nombres recibe</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Apellidos recibe</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Identificacion</label>
              <Input className='input__form' type='text'></Input>
            </article>
            <article className='Grupo__input'>
              <label>Celular y WhatsApp</label>
              <Input className='input__form' type='text'></Input>
            </article>
          </section>
        </Accordion>
        {/* <section className='menu__desplegable'>
          <ul className='nav__ul'>
            <li id="1">Lista 1</li>
            <li id="2">Lista 2</li>
            <li id="3">Lista 3</li>
          </ul>
          <article className="container c1 active">
            Contenido 1
          </article>
          <article className="container c2">
            Contenido 2
          </article>
          <article className="container c3">
            Contenido 3
          </article>
        </section> */}
    </Modal>
       
    </section>
    <section>
        <Button onClick={handleclick} className='btn primary__btn'>{"count is "+count}</Button>
    </section>
    </>
  )
}

export default App
