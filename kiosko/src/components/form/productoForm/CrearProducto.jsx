import React, {  useContext, useState } from "react";
import productoContext from "../../../context/productoContext/productoContext";
import authContext from '../../../context/authContext/authContext'
import AddImg from "../../img/AddImg";
import { socket } from '../../../config/socket'


const CrearProducto = () => {

    const { crearProducto } = useContext(productoContext);
    const {usuario}=useContext(authContext);

    const [productoLocal, setProductoLocal] = useState({
        img:'',
        cloud_id:'',
        nombre: "",
        medida: "",
        estado:'abastecido',
        precio: "",
        creador: usuario?._id

    });


    const {img, nombre, medida, precio } = productoLocal;

    const onChange = (e) => {
        e.preventDefault();
    
        setProductoLocal({
          ...productoLocal,
          [e.target.name]: e.target.value,
        });
      };

      const addImg=(img, idimg)=>{
        setProductoLocal({
          ...productoLocal,
          img, 
          cloud_id:idimg
        }) 
    
    }
    
      const onSubmit = () => {
        socket.emit('estate','id',()=>{
           
        })
       crearProducto(productoLocal)
       setProductoLocal({
        img:'',
        cloud_id:'',
        nombre: "",
        medida: "",
        estado:'abastecido',
        precio: "",
        creador: usuario?._id
       })
       
      };

  return (
    <div className="modal-box md:flex ">
      <div className="h-60 w-60 mx-auto md:w-full md:h-48 md:p-3 md:mr-5  rounded-md  ">
        <AddImg img={img} addImg={addImg} />
      </div>
      <div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Producto</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Medida</span>
          </label>
          <input
            type="text"
            name="medida"
            onChange={onChange}
            value={medida}
            placeholder="Escribe aquí"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Precio</span>
          </label>
          <input
            name="precio"
            onChange={onChange}
            value={precio}
            type="text"
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
            Añadir
          </label>
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
      </div>
    </div>
  );
};

export default CrearProducto;
