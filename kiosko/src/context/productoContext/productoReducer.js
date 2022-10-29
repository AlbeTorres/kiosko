import {
  AÑADIR_CARRO,
  AÑADIR_PRODUCTO,
  ELIMINAR_CARRO,
  ELIMINAR_CARRO_ALL,
  ELIMINAR_PRODUCTO,
  ESTABLECER_ACCION,
  MODIFICAR_PRODUCTO,
  MODIFICAR_PRODUCTO_CARRO,
  OBTENER_BUSQUEDA,
  OBTENER_CARRO,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTO_BY_ID,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    case OBTENER_PRODUCTO_BY_ID:
      return {
        ...state,
        producto: action.payload,
      };
    case AÑADIR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case MODIFICAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map((producto) => {
          return producto._id === action.payload._id
            ? (producto = action.payload)
            : producto;
        }),
      };
    case ESTABLECER_ACCION:
      return {
        ...state,
        accion: action.payload,
      };
    case ELIMINAR_PRODUCTO:
      return({
        ...state,
        productos:state.productos.filter(producto=>producto._id!==action.payload)
      });
    case AÑADIR_CARRO:
      return({
        ...state,
        carrito: [...state.carrito, action.payload]
      });
    case MODIFICAR_PRODUCTO_CARRO:
    case OBTENER_CARRO:
      return({
        ...state,
        carrito: action.payload
      });
    case ELIMINAR_CARRO:
      return({
        ...state,
        carrito: state.carrito.filter(producto=>producto._id!==action.payload)
      })
    case ELIMINAR_CARRO_ALL:
      return({
        ...state,
        carrito: []
      })
    case OBTENER_BUSQUEDA:
      return({
        ...state,
        busqueda:action.payload
      })
    default:
      return state;
  }
};
