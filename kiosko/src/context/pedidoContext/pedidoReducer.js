import { AÑADIR_PEDIDO,INICIAR_PEDIDO, OBTENER_PEDIDOS, SET_VISIBLE,OBTENER_PEDIDO_BY_ID } from "../../types";

export default (state,action)=>{
    switch(action.type){
        case AÑADIR_PEDIDO:
            return({
                ...state,
                pedidos:[...state.pedidos, action.payload]
            })
        case INICIAR_PEDIDO:
            return({
                ...state,
                pedido: action.payload
            })
        case OBTENER_PEDIDOS:
            return({
                ...state,
                pedidos: action.payload
            })
        case OBTENER_PEDIDO_BY_ID:
            return({
                ...state,
                pedido: action.payload
            })
        case SET_VISIBLE:
            return({
                ...state,
                visible: action.payload
            })
        default:
            return state;
    }
}