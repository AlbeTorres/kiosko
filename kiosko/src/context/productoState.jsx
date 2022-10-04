import productoReducer from "./productoReducer";
import productoContext from './productoContext';
import { useReducer } from "react";
import tokenAuth from '../config/tokenAuth';
import clienteAxios from "../config/axios";
import { ELIMINAR_PRODUCTO, ESTABLECER_UBICACION, MODIFICAR_PRODUCTO, OBTENER_BUSQUEDA, OBTENER_PRODUCTOS, OBTENER_PRODUCTO_BY_ID, RESTABLECER_UBICACION } from "../types";


const ProductoState=(props)=>{

    const productos=[
        {_id:0, img:'', nombre:'Tomate', medida:'LB'},
        {_id:1, img:'', nombre:'Cebolla', medida:'LB'},
        {_id:2, img:'', nombre:'Pepino', medida:'LB'},
        {_id:3, img:'', nombre:'Vino Seco', medida:'U'},
        {_id:4, img:'', nombre:'Ajo', medida:'cabeza'},
        {_id:5, img:'', nombre:'Aji Cachucha', medida:'Pote'},
        {_id:6, img:'', nombre:'Calabaza', medida:'LB'},
        {_id:7, img:'', nombre:'Yuca', medida:'LB'},
        {_id:8, img:'', nombre:'Boniato', medida:'LB'},
        {_id:9, img:'', nombre:'Mango', medida:'LB'},
        {_id:10, img:'', nombre:'Lechuga', medida:'LB'},
    ]

    const initialState={
        productos:[{_id:'', img:'', nombre:'', medida:''}],
        producto:null,
        busqueda:'',
        productom:{_id:'', img:'', nombre:'', medida:''},

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

            const response = await clienteAxios.get('api/productos/')
            
            const producto = response.data.productos.filter(producto=>producto._id===id)
            
            

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

            const response = await clienteAxios.patch(`api/productos/${id}`,datos)
            console.log(response)

            dispatch({
                type: MODIFICAR_PRODUCTO,
                payload:response.data.producto
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

  



    return(
        <productoContext.Provider
            value={{
                productos:state.productos,
                productom:state.productom,
                ubicacion:state.ubicacion,
                busqueda:state.busqueda,
                
                obtenerProductos,
                obtenerProducto,
                crearProducto,
                modificarProducto,
                eliminarProducto,
                establecerUbicacion,
                establecerBusqueda,
                restablecerUbicacion,
                

            }}
        >
            {props.children}
        </productoContext.Provider>
    );
}

export default ProductoState;