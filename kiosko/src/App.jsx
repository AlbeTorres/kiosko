import { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Modal from './components/Producto/Modal'
import Tablero from './components/Tablero'
import Ubicacion from './components/Ubicacion'
import ProductoState from './context/productoState'
import './index.css'

function App() {
  

  return (
    <ProductoState>
        <div className=''>
          <Navbar/>
          <Hero/>
          <label htmlFor="my-modal-6" className="btn modal-button">open modal</label>
          <div className=' md:flex md:flex-row-reverse w-full md:grid-cols-2 md:justify-center '>
          <div className='md:w-1/2'>
            <Tablero/>

          </div>
          <div className='md:w-1/2'>

            <Ubicacion/>
          </div>

          </div>
          <Footer/>
          <Modal/>
          
        </div>

    </ProductoState>

  )
}

export default App
