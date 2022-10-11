import React,{useReducer} from "react";
import usuarioReducer from './usuarioReducer';
import usuarioContext from './usuarioContext';
import { MODIFICAR_USUARIO, OBTENER_USUARIOS, OBTENER_BUSQUEDA,OBTENER_USUARIO_BY_ID, SET_USER_FILTER } from "../../types";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const UsuarioState=props=>{

    const initialState={
        usuarios:[{_id:'', nombre:'', movil:''}],
        usuariom:{_id:'', nombre:'', movil:''},
        busqueda:'',
        userfilter:'',
       

    }

    const [state, dispatch]= useReducer(usuarioReducer,initialState);


    //Operaciones crud
    const modificarUsuario=async(id,datos)=>{

        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }

        
    
        try {
            if (token) {
                const respuesta = await clienteAxios.patch(`api/usuarios/${id}`, datos);
                console.log(respuesta)
                
                

                dispatch({
                  type: MODIFICAR_USUARIO,
                  payload: respuesta.data.usuario,
                });
              }

            
        } catch (error) {
            console.log(error)
            
        }
    }

    //Eliminar un usuario
    const eliminarUsuario=(id)=>{
        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }

        try {

            const response = clienteAxios.delete(`api/usuarios/${id}`)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }

    //Obtener usuarios
    const obtenerUsuarios= async()=>{
        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }

        try {

            const response = await clienteAxios.get(`api/usuarios`);
            console.log(response.data.usuarios)

            dispatch({
                type: OBTENER_USUARIOS,
                payload: response.data.usuarios
            })
            
            
        } catch (error) {
            console.log(error)
            
        }
    }

    //obtener usuario por id

    const obtenerUsuario= async(id)=>{

        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }

        try {

            const response = await clienteAxios.get(`api/usuarios`);
            const usuario = response.data.usuarios.filter(usuario=>usuario._id===id);



            dispatch({
                type: OBTENER_USUARIO_BY_ID,
                payload: usuario[0]
            })
            
            
        } catch (error) {
            console.log(error)
            
        }

    }

    const establecerBusqueda=(search)=>{

        dispatch({
            type:OBTENER_BUSQUEDA,
            payload:search
        })

    }

    const setUserFilter=(id)=>{

        dispatch({
            type: SET_USER_FILTER,
            payload:id
        })
    }
   

    return(
        <usuarioContext.Provider
        value={
            {
                usuarios:state.usuarios,
                busqueda: state.busqueda,
                usuariom:state.usuariom,
                userfilter:state.userfilter,
                modificarUsuario,
                eliminarUsuario,
                obtenerUsuarios,
                obtenerUsuario,
                establecerBusqueda,
                setUserFilter,

                

            }
        }>
            {props.children}
        </usuarioContext.Provider>
    )
}

export default UsuarioState;