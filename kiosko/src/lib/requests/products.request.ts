import clienteAxios from "../../config/axios.js";
import { FetchProducts } from "./products.type.js";

export const fetchAllProducts: FetchProducts = () =>
  clienteAxios.get("api/productos/").then( r => r.data);
