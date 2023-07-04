import { createContext } from "react";
import { Product } from "../../lib/Models/Product.model";

type Action = {
  id?: number;
  accion: string;
};

type CarProduct = {
  _id: string;
  cantidad: number;
};

interface Producto {
  productos: Product[];
  producto: Product;
  productom: Product;
  accion: Action;
  carrito: CarProduct[];
  obtenerProductos():void,
  obtenerProducto(id:string):void,
  crearProducto(datos):void,
  modificarProducto(id:string, datos):void,
  eliminarProducto(id:string):void,
  establecerUbicacion():void,
  establecerBusqueda():void,
  restablecerUbicacion():void,
  establecerAccion(accion:Action):void,
  agregarCarrito():void,
  obtenerCarrito():void,
  eliminarCarrito():void,
  eliminarTodoElcarro():void,
  modificarProductoCarro():void,
}

const productoContext = createContext<Producto>(null);

export default productoContext;
