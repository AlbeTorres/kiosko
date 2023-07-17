import clienteAxios from '../../config/axios'
import { AddPedido, DeletePedido, FetchPedido, FetchPedidos, UpdatePedido } from './pedido.type'

/**
 * The function fetchAllPedidos fetches all pedidos from the API.
 */
export const fetchAllPedidos: FetchPedidos = () => clienteAxios.get('api/pedidos').then(r => r.data)

/**
 * The function fetchPedido retrieves a pedido (order) from an API using the provided id.
 * @param  - The above code snippet defines a function named `fetchPedido` which takes an object as a
 * parameter. The object should have a property named `id`. The function uses the `clienteAxios`
 * instance to make a GET request to the `api/pedidos/` endpoint and returns a promise
 */
export const fetchPedido: FetchPedido = ({ id }) =>
  clienteAxios.get(`api/pedidos/${id}`).then(r => r.data)

/**
 * The function `addPedido` is an asynchronous function that adds a new pedido (order) by making a POST
 * request to the "api/pedidos" endpoint, and returns the response data.
 * @param input - The `input` parameter is an object that represents the data for the pedido (order)
 * that needs to be added. It contains the necessary information such as the items in the order, the
 * customer details, etc.
 * @returns The function `addPedido` returns a promise that resolves to the data returned by the
 * `clienteAxios.post` request.
 */
export const addPedido: AddPedido = async input =>
  clienteAxios.post('api/pedidos', input).then(r => r.data)

/**
 * The function `updatePedido` updates a pedido (order) by making a PATCH request to the API with the
 * provided id and data.
 * @param  - - `id`: The ID of the pedido (order) that needs to be updated.
 * @returns The function `updatePedido` returns a promise that resolves to the data returned by the
 * `clienteAxios.patch` request.
 */
export const updatePedido: UpdatePedido = async ({ id, datos }) =>
  clienteAxios.patch(`api/pedidos/${id}`, datos).then(r => r.data)

/**
 * The function `deletePedido` deletes a pedido (order) by its ID, using an API endpoint and a token
 * for authentication.
 * @param  - The `deletePedido` function takes an object as its parameter with the following
 * properties:
 * @returns The function `deletePedido` returns a Promise that resolves to the data returned by the
 * `clienteAxios.delete` request.
 */
export const deletePedido: DeletePedido = async ({ id }) =>
  clienteAxios.delete(`api/pedidos/${id}`).then(r => r.data)
