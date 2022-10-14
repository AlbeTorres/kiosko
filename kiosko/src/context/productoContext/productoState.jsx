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

  return (
    <productoContext.Provider
      value={{
        productos: state.productos,
        producto: state.producto,
        ubicacion: state.ubicacion,
        busqueda: state.busqueda,
        accion: state.accion,
        obtenerProductos,
        obtenerProducto,
        crearProducto,
        modificarProducto,
        eliminarProducto,
        establecerUbicacion,
        establecerBusqueda,
        restablecerUbicacion,
        establecerAccion,
      }}
    >
      {props.children}
    </productoContext.Provider>
  );
};

export default ProductoState;
