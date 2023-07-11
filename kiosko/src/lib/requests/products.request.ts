import clienteAxios from "../../config/axios.js";
import { FetchProducts } from "./products.type.js";

/**
 * The fetchAllProducts function uses Axios to make a GET request to the "api/productos/" endpoint and
 * returns the response data.
 */
export const fetchAllProducts: FetchProducts = () =>
  clienteAxios.get("api/productos/").then( r => r.data);
