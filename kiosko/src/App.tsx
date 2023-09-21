import { BrowserRouter as Router } from 'react-router-dom'
import Rutas from './routes/Rutas'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast'
import BaseLayout from './layouts/BaseLayout'
import AuthContextProvider from './context/authContext/authProvider'
import CartProvider from './context/cartContext/cartProvider'
import SearchProvider from './context/searchContext/searchProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './util/react-query'

function App() {
  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  )
}

export default App
