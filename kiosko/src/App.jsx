import ProductoState from './context/productoContext/productoState'
import './index.css'
import Home from './components/pages/home/Home'

function App() {
  

  return (
    <ProductoState>
       <Home/>
    </ProductoState>

  )
}

export default App
