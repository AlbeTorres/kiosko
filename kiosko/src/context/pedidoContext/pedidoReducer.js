import { AÑADIR_PEDIDO,INICIAR_PEDIDO } from "../../types";

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
        default:
            return state;
    }
}