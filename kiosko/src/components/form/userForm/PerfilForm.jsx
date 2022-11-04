import React,{useState, useEffect, useContext, useCallback} from 'react'
import AddImg from '../../img/AddImg'
import authContext from '../../../context/authContext/authContext';
import usuarioContext from '../../../context/usuarioContext/usuarioContext';
import noimg from '../../../assets/noimg1.jpg'

const PerfilForm = () => {

  const {usuario, usuarioAutenticado}=useContext(authContext)
  const {modificarUsuario, actualizarCambio}= useContext(usuarioContext)
  

  const [usuariostate, setUsuario] = useState({
    perfilimg:'',
    perfil_cloud_id:'',
    nombre: "",
    email: "",
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
        perfilimg: usuario.perfilimg,
        perfil_cloud_id:usuario.perfil_cloud_id,
        nombre: usuario.nombre,
        email: usuario.email,
        movil: usuario.movil,
      });
    }
  }

  const eso = useCallback(() => obtenerUser(), [auxnombre]);

  useEffect(() => {
    eso();
    usuarioAutenticado();
  }, [eso]);

const {nombre, perfilimg, email, movil}=usuariostate


  const addImgPerfil=(img, idimg)=>{
    setUsuario({
      ...usuariostate,
      perfilimg:img, 
      perfil_cloud_id:idimg
    }) 

}

const onChange=e=>{
  setUsuario({
    ...usuariostate,
    [e.target.name]:e.target.value
  })
}

const onSubmit=()=>{
  
  modificarUsuario(usuario._id, usuariostate)
  console.log(usuariostate)

  actualizarCambio()

  setUsuario({
    perfilimg:'',
    perfil_cloud_id:'',
    nombre: "",
    email: "",
    movil: "",
  })

}




  return (
    <div className='modal-box md:flex'>
    <div className="h-60 w-60 mx-auto md:w-full md:h-48 md:p-3 md:mr-5  rounded-md  ">
        <AddImg img={perfilimg ? perfilimg: noimg} addImg={addImgPerfil} />
      </div>
      <form className="form-control w-full max-w-xs">

      <div>
          <label className="label">
            <span className="label-text">Nombre</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
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
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />

      </div>
      <div>
          <label className="label">
            <span className="label-text">Movil</span>
          </label>
          <input
            type="text"
            name="movil"
            value={movil}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />
      </div>
      <div className="modal-action">
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
      
          
          </form>
    </div>
  )
}

export default PerfilForm