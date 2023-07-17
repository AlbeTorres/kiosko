import { BrowserRouter as Router } from 'react-router-dom'
import Rutas from './routes/Rutas'
import ProductoState from './context/productoContext/productoState'

import AlertaState from './context/alertaContext/alertaState'
import PedidoState from './context/pedidoContext/pedidoState.jsx'
import tokenAuth from './config/tokenAuth'
import './index.css'
import UsuarioState from './context/usuarioContext/usuarioState'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/layout/Navbar'
import { Toaster } from 'react-hot-toast'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import AuthContextProvider from './context/authContext/authProvider'

const token = localStorage.getItem('token')
if (token) {
  tokenAuth(token)
}

function App() {
  return (
    <UsuarioState>
      <PedidoState>
        <ProductoState>
          <AuthContextProvider>
            <AlertaState>
              <Router>
                <BaseLayout>
                  <Rutas />
                </BaseLayout>
                <Toaster position='top-right' />
              </Router>
            </AlertaState>
          </AuthContextProvider>
        </ProductoState>
      </PedidoState>
    </UsuarioState>
  )
}

export default App
