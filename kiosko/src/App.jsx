import { useState } from 'react'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import Tablero from './components/Tablero'
import ProductoState from './context/productoState'
import './index.css'

function App() {
  

  return (
    <ProductoState>
        <div className=''>
          <Navbar/>
          <Tablero/>
          <Footer/>
          
        </div>

    </ProductoState>

  )
}

export default App
