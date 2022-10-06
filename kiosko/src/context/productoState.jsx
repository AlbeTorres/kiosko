import productoReducer from "./productoReducer";
import productoContext from './productoContext';
import { useReducer } from "react";
import tokenAuth from '../config/tokenAuth';
import clienteAxios from "../config/axios";
import { ELIMINAR_PRODUCTO, ESTABLECER_ACCION, ESTABLECER_UBICACION, MODIFICAR_PRODUCTO, OBTENER_BUSQUEDA, OBTENER_PRODUCTOS, OBTENER_PRODUCTO_BY_ID, RESTABLECER_UBICACION } from "../types";


const ProductoState=(props)=>{

    const productos=[
        {_id:0, img:'', nombre:'Tomate', medida:'LB',estado:'agotado', precio:100},
        {_id:1, img:'', nombre:'Cebolla', medida:'LB',estado:'abastecido', precio:100},
        {_id:2, img:'', nombre:'Pepino', medida:'LB',estado:'abastecido', precio:100},
        {_id:3, img:'', nombre:'Vino Seco', medida:'U',estado:'abastecido', precio:100},
        {_id:4, img:'', nombre:'Ajo', medida:'cabeza',estado:'abastecido', precio:100},
        {_id:5, img:'', nombre:'Aji Cachucha', medida:'Pote',estado:'abastecido', precio:100},
        {_id:6, img:'', nombre:'Calabaza', medida:'LB',estado:'agotado', precio:100},
        {_id:7, img:'', nombre:'Yuca', medida:'LB',estado:'agotado', precio:100},
        {_id:8, img:'', nombre:'Boniato', medida:'LB',estado:'abastecido', precio:100},
        {_id:9, img:'', nombre:'Mango', medida:'LB',estado:'agotado', precio:100},
        {_id:10, img:'', nombre:'Lechuga', medida:'LB',estado:'abastecido',precio:100},
    ]

    const initialState={
        productos:[{_id:'', img:'', nombre:'', medida:'', estado:'agotado',precio:''}],
        producto:null,
        busqueda:'',
        productom:{_id:'', img:'', nombre:'', medida:'', estado:'agotado', precio:''},
        acción:{id:'',accion:''},

    }

    const [state, dispatch]=useReducer(productoReducer, initialState);

    //operaciones Crud
    const obtenerProductos = async()=>{

        try {

            // const response = await clienteAxios.get('api/productos')

            dispatch({
                type: OBTENER_PRODUCTOS,
                payload:productos
            })
            
        } catch (error) {
            console.log(error)
            
        }


    }

    const obtenerProducto=async(id)=>{

        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }


        try {

            // const response = await clienteAxios.get('api/productos/')
            
            // const producto = response.data.productos.filter(producto=>producto._id===id)
            
            let producto = productos.filter(producto=>producto._id===id)

            console.log(producto)

            dispatch({
                type: OBTENER_PRODUCTO_BY_ID,
                payload:producto[0]
            })
            
        } catch (error) {
            console.log(error)
            
        }

    }

    const crearProducto=async(datos)=>{
        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }


        try {

            const response = await clienteAxios.post('api/productos',datos)
            

            dispatch({
                type: '',
                payload:''
            })
            
        } catch (error) {
            console.log(error)
            
        }



    }

    const modificarProducto=async(id, datos)=>{

        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }


        try {

            // const response = await clienteAxios.patch(`api/productos/${id}`,datos)
            // console.log(response)

            let producto = {_id:id, nombre:datos.nombre, medida: datos.medida, precio: datos.precio, estado:datos.estado}

                console.log(producto)

            dispatch({
                type: MODIFICAR_PRODUCTO,
                payload:producto
            })
            
        } catch (error) {
            console.log(error)
            
        }


    }

    const eliminarProducto=async(id)=>{
        const token = localStorage.getItem("token");

        if (token) {
          tokenAuth(token);
        }

        
        try {

            const response = await clienteAxios.delete(`api/productos/${id}`)
            console.log(response)

            dispatch({
                type: ELIMINAR_PRODUCTO,
                payload:id
            })
            
        } catch (error) {
            console.log(error)
            
        }



    }

    const establecerUbicacion=(ubicacion)=>{
            dispatch({
                type: ESTABLECER_UBICACION,
                payload:ubicacion
            })
    }

    const establecerBusqueda=(search)=>{

        dispatch({
            type:OBTENER_BUSQUEDA,
            payload:search
        })

    }

    const restablecerUbicacion=()=>{
        dispatch({
            type:RESTABLECER_UBICACION,
            
        })
    }

  const establecerAccion=(accion)=>{

    dispatch({
        type:ESTABLECER_ACCION,
        payload:accion
    })

  }



    return(
        <productoContext.Provider
            value={{
                productos:state.productos,
                producto:state.producto,
                ubicacion:state.ubicacion,
                busqueda:state.busqueda,
                accion:state.accion,
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
}

export default ProductoState;