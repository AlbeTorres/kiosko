import { BrowserRouter as Router } from 'react-router-dom'
import Rutas from './routes/Rutas'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import AuthContextProvider from './context/authContext/authProvider'
import CartProvider from './context/productoContext/cartProvider'
import SearchProvider from './context/searchContext/SearchProvider'

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <AuthContextProvider>
          <Router>
            <BaseLayout>
              <Rutas />
            </BaseLayout>
            <Toaster position='top-right' />
          </Router>
        </AuthContextProvider>
      </CartProvider>
    </SearchProvider>
  )
}

export default App
