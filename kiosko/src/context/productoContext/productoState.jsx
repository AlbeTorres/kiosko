import productoReducer from "./productoReducer";
import productoContext from "./productoContext";
import { useReducer } from "react";
import tokenAuth from "../../config/tokenAuth";
import clienteAxios from "../../config/axios";
import {
  ELIMINAR_PRODUCTO,
  ESTABLECER_ACCION,
  ESTABLECER_UBICACION,
  MODIFICAR_PRODUCTO,
  OBTENER_BUSQUEDA,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTO_BY_ID,
  RESTABLECER_UBICACION,
  AÑADIR_PRODUCTO,
  AÑADIR_CARRO,
  OBTENER_CARRO,
} from "../../types";

const ProductoState = (props) => {

  const initialState = {
    productos: [
      {
        _id: "",
        img: "",
        nombre: "",
        medida: "",
        estado: "agotado",
        precio: "",
      },
    ],
    producto: null,
    busqueda: "",
    productom: {
      _id: "",
      img: "",
      nombre: "",
      medida: "",
      estado: "agotado",
      precio: "",
    },
    acción: { id: "", accion: "" },
    carrito:[{ _id: "", cantidad:'', }]
  };

  const [state, dispatch] = useReducer(productoReducer, initialState);

  //operaciones Crud
  const obtenerProductos = async () => {
    try {
      const response = await clienteAxios.get('api/productos')

      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: response.data.productos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProducto = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
        const response = await clienteAxios.get('api/productos/')

        const producto = response.data.productos.filter(producto=>producto._id===id)



      

      dispatch({
        type: OBTENER_PRODUCTO_BY_ID,
        payload: producto[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const crearProducto = async (datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.post('api/productos',datos)

      console.log(response)

      dispatch({
        type: AÑADIR_PRODUCTO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const modificarProducto = async (id, datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
        const response = await clienteAxios.patch(`api/productos/${id}`,datos)
        console.log(response)

      

      

      dispatch({
        type: MODIFICAR_PRODUCTO,
        payload: response.data.producto,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProducto = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.delete(`api/productos/${id}`);
      console.log(response);

      dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const establecerUbicacion = (ubicacion) => {
    dispatch({
      type: ESTABLECER_UBICACION,
      payload: ubicacion,
    });
  };

  const establecerBusqueda = (search) => {
    dispatch({
      type: OBTENER_BUSQUEDA,
      payload: search,
    });
  };

  const restablecerUbicacion = () => {
    dispatch({
      type: RESTABLECER_UBICACION,
    });
  };

  const establecerAccion = (accion) => {
    dispatch({
      type: ESTABLECER_ACCION,
      payload: accion,
    });
  };

  const agregarCarrito=({_id, cantidad })=>{

      let carrito= localStorage.getItem('carrito');

      

      if(carrito){
        carrito = JSON.parse(carrito);
      }else(
        carrito=[]
      )
      
      carrito.push({_id, cantidad})

      localStorage.setItem('carrito', JSON.stringify(carrito))
      console.log(carrito)

      dispatch({
        type:AÑADIR_CARRO,
        payload:{_id, cantidad}
      })
  }
  const eliminarCarrito=(_id)=>{

      let carrito= localStorage.getItem('carrito');

      if(carrito){
        carrito = JSON.parse(array);
        carrito.filter(producto=>producto._id!==_id)
      
      }
      

      localStorage.setItem('carrito', JSON.stringify(carrito))

      dispatch({
        type:AÑADIR_CARRO,
        payload:_id
      })
  }

  const obtenerCarrito=()=>{

      let carrito= localStorage.getItem('carrito');

      if(carrito){
        carrito = JSON.parse(array);
      }

      dispatch({
        type:OBTENER_CARRO,
        payload:carrito
      })
  }

  return (
    <productoContext.Provider
      value={{
        productos: state.productos,
        producto: state.producto,
        ubicacion: state.ubicacion,
        busqueda: state.busqueda,
        accion: state.accion,
        carrito:state.carrito,
        obtenerProductos,
        obtenerProducto,
        crearProducto,
        modificarProducto,
        eliminarProducto,
        establecerUbicacion,
        establecerBusqueda,
        restablecerUbicacion,
        establecerAccion,
        agregarCarrito,
        obtenerCarrito,
        eliminarCarrito,
      }}
    >
      {props.children}
    </productoContext.Provider>
  );
};

export default ProductoState;
