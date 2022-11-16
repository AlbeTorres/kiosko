import React, { useReducer } from "react";
import { AÑADIR_PEDIDO, ELIMINAR_PEDIDO, MODIFICAR_PEDIDO, OBTENER_PEDIDOS, OBTENER_PEDIDO_BY_ID,INICIAR_PEDIDO, SET_VISIBLE } from "../../types";
import pedidoContext from "./pedidoContext";
import pedidoReducer from "./pedidoReducer";
import tokenAuth from "../../config/tokenAuth";
import clienteAxios from "../../config/axios";

const PedidoState = (props) => {
  const initialState = {
    pedidos: [
    ],
    pedido: {pago:'', productos:[],
    direccion: '',  
    receptor:'',
    movil:'',
    valor:''},
    visible:false,
  };

  const [state, dispatch] = useReducer(pedidoReducer, initialState);

  //operaciones Crud
  const obtenerPedidos = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    

    try {
      const response = await clienteAxios.get("api/pedidos");
      

      dispatch({
        type: OBTENER_PEDIDOS,
        payload: response.data.pedidos,
      });
    } catch (error) {
      console.log(error);
    }
  }
  };

  const obtenerPedido = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.get("api/pedidos/");

      const pedido = response.data.pedido.filter(
        (pedido) => pedido._id === id
      );

      dispatch({
        type: OBTENER_PEDIDO_BY_ID,
        payload: pedido[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const crearPedido = async (datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.post("api/pedidos", datos);

     

      dispatch({
        type: AÑADIR_PEDIDO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const iniciarPedido = async (datos) => {
   
    try {
  
      dispatch({
        type: INICIAR_PEDIDO,
        payload: datos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const modificarPedido = async (id, datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.patch(`api/pedidos/${id}`, datos);
      

      dispatch({
        type: MODIFICAR_PEDIDO,
        payload: response.data.pedido,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarPedido = async (id) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clienteAxios.delete(`api/pedidos/${id}`);
   

      dispatch({
        type: ELIMINAR_PEDIDO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setVisible=(state)=>{
        dispatch({
          type: SET_VISIBLE,
          payload: state
        })
  }

  return (
    <pedidoContext.Provider value={{
        pedidos:state.pedidos,
        pedido:state.pedido,
        visible:state.visible,
        obtenerPedido,
        obtenerPedidos,
        crearPedido,
        iniciarPedido,
        modificarPedido,
        eliminarPedido,
        setVisible,
    }}>{props.children}</pedidoContext.Provider>
  );
};

export default PedidoState;
