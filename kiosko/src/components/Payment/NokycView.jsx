import React,{useContext} from 'react'
import pedidoContext from '../../context/pedidoContext/pedidoContext'

const NokycView = () => {

    const {visible,setVisible}= useContext(pedidoContext)

    const noView=()=>{
        setVisible(false)
        console.log(visible)
    }


  return (
    <div className='modal-box flex flex-col justify-center items-center'>
    <p className='mb-5'>Debes realizar el KYC antes de poder solicitar pedidos</p>
    <div className=''>

    <button className='btn mr-2'>Crear kyc</button>
    <button onClick={noView} className='btn btn-secondary '>Cancelar</button>
    </div>
    </div>
  )
}

export default NokycView