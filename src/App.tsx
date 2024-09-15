import { useAppDispatch, useAppSelector } from './store/hook/hooks'
import { increment } from './store/Slices/counter/counterSlice'

import './App.css'

import Button from './component/button/Button'
import {Card, Product} from './component/Card/Card'


const ListaProduct = [
  {
    title: "Papas rizadas, con sabor a mayonesa",
    description: "- Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    title: "Papas rizadas, con sabor a mayonesa",
    description: "- Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    title: "Papas rizadas, con sabor a mayonesa",
    description: "- Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    title: "Papas rizadas, con sabor a mayonesa",
    description: "- Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
  {
    title: "Papas rizadas, con sabor a mayonesa",
    description: "- Papas 100% naturales",
    price: 15.95,
    stock: 5,
    url: "#",
    className: "card__product",
    urlImg: "https://misaboracolombia.com/cdn/shop/files/rizadas7703133070379_2048x2048.webp?v=1708423292",
  },
]

function App() {
  const count = useAppSelector( (state) => state.counter.value)
  const dispatch = useAppDispatch();

  function handleclick(){
    dispatch(increment());
  }

  return (
    <>
    <section className="cards">
      {ListaProduct?.length > 0 ? ( 
        (ListaProduct as Product[]).map((item, cont) => ( // Type assertion for clarity
          <Card key={cont} product={item} />
        ))
      ) : (
        <p>No hay datos</p>
      )}
    </section>
    <section>
      <div >
        <Button onClick={handleclick} className='btn primary__btn'>{"count is "+count}</Button>
      </div>
    </section>
    </>
  )
}

export default App
