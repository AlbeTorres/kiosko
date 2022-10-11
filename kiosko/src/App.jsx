import ProductoState from './context/productoContext/productoState'
import './index.css'
import Home from './components/pages/home/Home'
import AuthState from './context/authContext/authState'

function App() {
  

  return (

    <ProductoState>
    <AuthState>
        <Home/>

    </AuthState>
    </ProductoState>

  )
}

export default App
