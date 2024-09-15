import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.tsx'
import { Provider } from "react-redux"

import Menu from "./component/menu/Menu.tsx"
import ItemMenu from './component/itemMenu/itemMenu.tsx'
import reactLogo from './assets/react.svg'
import Search from "./component/search/Search.tsx"
// import viteLogo from '/vite.svg'
const f = () => {
  console.log("funciona")
}
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
    onClick: f,
    supValue: 0,
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Menu className="menu__primary">
        <div>
          {/* <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a> */}
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Search className='search__prod'></Search>
        <ItemMenu listItem={List}></ItemMenu>
      </Menu>
      <App />
    </Provider>
  </StrictMode>,
)
