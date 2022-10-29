import { AÑADIR_PEDIDO } from "../../types";

export default (state,action)=>{
    switch(action.type){
        case AÑADIR_PEDIDO:
            return({
                ...state,
                pedidos:[...state.pedidos, action.payload]
            })
        default:
            return state;
    }
}