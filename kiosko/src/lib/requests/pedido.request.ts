import clienteAxios from "../../config/axios";
import { FetchPedido, FetchPedidos } from "./pedido.type";

/**
 * The function fetchAllPedidos fetches all pedidos from the API.
 */
export const fetchAllPedidos: FetchPedidos = () =>
  clienteAxios.get("api/pedidos").then((r) => r.data);

/**
 * The function fetchPedido retrieves a pedido (order) from an API using the provided id.
 * @param  - The above code snippet defines a function named `fetchPedido` which takes an object as a
 * parameter. The object should have a property named `id`. The function uses the `clienteAxios`
 * instance to make a GET request to the `api/pedidos/` endpoint and returns a promise
 */
export const fetchPedido: FetchPedido = ({id}) =>
  clienteAxios.get(`api/pedidos/${id}`).then((r) => r.data);
