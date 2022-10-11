import { MODIFICAR_USUARIO, OBTENER_BUSQUEDA, OBTENER_USUARIOS, OBTENER_USUARIO_BY_ID, SET_USER_FILTER } from "../../types";

export default (state, action)=>{

    switch(action.type){
        case MODIFICAR_USUARIO:
            return{
                ...state,
                usuarios: state.usuarios.map( usuario=> {
                    return usuario._id == action.payload._id ? (usuario = action.payload): usuario;
                })
                
            };
        case OBTENER_USUARIOS:
            return({
                    ...state,
                    usuarios:action.payload
                        });
        case OBTENER_USUARIO_BY_ID:
            return({
                ...state,
                usuariom: action.payload
            });
        case OBTENER_BUSQUEDA:
            return({
                    ...state,
                    busqueda:action.payload
                    });
        case SET_USER_FILTER:
            return({
                ...state,
                userfilter:action.payload
            })
        default:
            return state;
            
    }
}