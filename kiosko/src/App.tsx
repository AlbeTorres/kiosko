import { BrowserRouter as Router } from 'react-router-dom'
import Rutas from './routes/Rutas'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import AuthContextProvider from './context/authContext/authProvider'

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <BaseLayout>
          <Rutas />
        </BaseLayout>
        <Toaster position='top-right' />
      </Router>
    </AuthContextProvider>
  )
}

export default App
