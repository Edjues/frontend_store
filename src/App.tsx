import { useAppDispatch, useAppSelector } from './store/hook/hooks'
import { increment } from './store/Slices/counter/counterSlice'
import {useState} from 'react';
import './App.css'

import Button from './component/button/Button'
import {Card, Product} from './component/Card/Card'
import Modal from './component/modal/Modal'
import LateralModal from './component/modal/LateralModal.ts'
import Menu from "./component/menu/Menu.ts"
import ItemMenu from './component/itemMenu/itemMenu.ts'
import reactLogo from './assets/react.svg'
import Search from "./component/search/Search.ts"

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
    <button onClick={handleOpenModal}>modal</button>
    <LateralModal title='Mis Compras' isOpen={show} onClose={handleClose}>
      {ListBuy?.length > 0 ? ( 
        (ListBuy as BuyProduct[]).map((item, cont) => ( // Type assertion for clarity
          <ListCard key={cont} product={item} />
        ))
      ) : (
        <p>No hay datos</p>
      )}
    </LateralModal>
    <Modal isOpen={showModal} onClose={handleCloseModal}>
      {/* <p className="color">Este es el contenido del modal.</p> */}
        {/* {ListBuy?.length > 0 ? ( 
            (ListBuy as BuyProduct[]).map((item, cont) => ( // Type assertion for clarity
              <ListCard key={cont} product={item} />
            ))
          ) : (
            <p>No hay datos</p>
          )}
          {ListBuy?.length > 0 ? ( 
            <section className=''>
                <p>Producto: </p>
                <p>Envio: </p>
                <p>Envio: </p>
                <p>Total: </p>
                <Button className='btn'>Finalizar Compra</Button>
            </section>
          ):(
            <p></p>
          )
          } */}
      </Modal>
       
    </section>
    <section>
        <Button onClick={handleclick} className='btn primary__btn'>{"count is "+count}</Button>
    </section>
    </>
  )
}

export default App
