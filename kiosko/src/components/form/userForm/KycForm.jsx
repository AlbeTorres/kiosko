import React,{useState, useContext, useEffect} from 'react'
import AddImg from '../../img/AddImg'
import noimg from '../../../assets/noimg1.jpg'
import authContext from '../../../context/authContext/authContext';
import usuarioContext from '../../../context/usuarioContext/usuarioContext';
import pedidoContext from '../../../context/pedidoContext/pedidoContext';
import alertaContext from '../../../context/alertaContext/alertaContext'

const KycForm = () => {

  const {usuario, usuarioAutenticado} = useContext(authContext)
  const {modificarUsuario} = useContext(usuarioContext)
  const {setVisible}=useContext(pedidoContext)
  const {alerta, mostrarAlerta}= useContext(alertaContext);

 

    const [kyc, setKyc]=useState({
        kycimg:'',
        kyc_cloud_id:'',
        
    })

    const addImgKyc=(img, idimg)=>{
        setKyc({
          kycimg:img, 
          kyc_cloud_id:idimg
        }) 
    
    }

    const onSubmit=()=>{

      if(kyc.kycimg===''){
        mostrarAlerta('Debes subir una imagen tuya sosteniendo el carnet', 'error')
        return
      }
      
      modificarUsuario(usuario._id,{kyc})
    
    }

  return (
    <div className='modal-box md:grid md:grid-cols-2'>
     {alerta && <div className={`bg-red-600 text-center p-2 text-white`}>{alerta.msg} </div>}
        <div className="h-60 w-60 mx-auto md:w-full md:h-48 md:p-3 md:mr-5  rounded-md  ">
        <AddImg img={noimg} addImg={addImgKyc} />
      </div>
      <div className="modal-action mt-10 md:place-items-end">
          <label
            htmlFor="my-modal-6"
            onClick={() => onSubmit()}
            className="btn btn-primary "
          >
            Aceptar
          </label>
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
    </div>
  )
}

export default KycForm