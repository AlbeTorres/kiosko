import React,{useState, useEffect, useContext, useCallback} from 'react'
import AddImg from '../../img/AddImg'
import authContext from '../../../context/authContext/authContext';
import noimg from '../../../assets/noimg1.jpg'

const PerfilForm = () => {

  const {usuario, usuarioAutenticado}=useContext(authContext)

  const [usuariostate, setUsuario] = useState({
    kycimg:'',
    kyc_cloud_id:'',
    perfilimg:'',
    perfil_cloud_id:'',
    nombre: "",
    correo: "",
    movil: "",
  });

  let auxnombre = 0;

  if (usuario != null) {
    auxnombre = usuario.nombre;
  }

  function obtenerUser() {
   

    if (auxnombre != 0) {
      setUsuario({
        ...usuariostate,
        kycimg:usuario.kycimg,
        perfilimg: usuario.perfilimg,
        nombre: usuario.nombre,
        correo: usuario.correo,
        movil: usuario.movil,
      });
    }
  }

  const eso = useCallback(() => obtenerUser(), [auxnombre]);

  useEffect(() => {
    eso();
    usuarioAutenticado();
  }, [eso]);

const {nombre, kycimg, perfilimg, correo, movil}=usuariostate

  const addImgKyc=(img, idimg)=>{
    setUsuario({
      ...usuariostate,
      kycimg:img, 
      kyc_cloud_id:idimg
    }) 

}
  const addImgPerfil=(img, idimg)=>{
    setUsuario({
      ...usuariostate,
      perfil:img, 
      perfil_cloud_id:idimg
    }) 

}




  return (
    <div className='modal-box '>
    <div className="h-60 w-60 mx-auto md:w-full md:h-48 md:p-3 md:mr-5  rounded-md  ">
        <AddImg img={perfilimg ? perfilimg: noimg} addImg={addImgPerfil} />
      </div>
    <div className="h-60 w-60 mx-auto md:w-full md:h-48 md:p-3 md:mr-5  rounded-md  ">
        <AddImg img={kycimg ? kycimg: noimg} addImg={addImgKyc} />
      </div>
      <div className="form-control w-full max-w-xs">

      <div>
          <label className="label">
            <span className="label-text">Nombre</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={''}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />

      </div>
      <div>
          <label className="label">
            <span className="label-text">Correo</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={correo}
            onChange={''}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />

      </div>
      <div>
          <label className="label">
            <span className="label-text">movil</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={movil}
            onChange={''}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />
      </div>
      <div>
        <button>Aceptar</button>
        <button>Cancelar</button>
      </div>
      
          
          </div>
    </div>
  )
}

export default PerfilForm