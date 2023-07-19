import clienteAxios from '../../config/axios.js'
import { productsAdapter } from '../adapters/product.adapter.js'
import {
  AddProduct,
  DeleteProduct,
  FetchProduct,
  FetchProducts,
  UpdateProduct,
} from './products.type.js'

/**
 * The fetchAllProducts function uses Axios to make a GET request to the "api/productos/" endpoint and
 * returns the response data.
 */
export const fetchAllProducts: FetchProducts = () =>
  clienteAxios.get('api/productos/').then(r => productsAdapter(r.data))

/**
 * The fetchProduct function retrieves a product from an API based on its ID.
 * @param  - The above code snippet defines a function called `fetchProduct` which takes an object as a
 * parameter. The object has a property called `id`.
 */
export const fetchProduct: FetchProduct = ({ id }) =>
  clienteAxios.get(`api/productos/${id}`).then(r => r.data)

/**
 * The function `addProduct` is an asynchronous function that adds a product by making a POST request
 * to an API endpoint, but only if a token is set.
 * @param input - The `input` parameter is the data that you want to send to the server when creating a
 * new product. It could be an object containing properties such as `name`, `price`, `description`,
 * etc.
 * @returns The function `addProduct` returns a promise that resolves to the data returned by the
 * `clienteAxios.post` request.
 */
export const addProduct: AddProduct = async input =>
  clienteAxios.post('api/productos/', input).then(r => r.data)

/**
 * The function `updateProduct` updates a product by making a PATCH request to an API endpoint with the
 * provided product ID and data.
 * @param  - - `id`: The ID of the product to be updated.
 * @returns The function `updateProduct` returns a Promise that resolves to the data returned by the
 * `clienteAxios.patch` request.
 */
export const updateProduct: UpdateProduct = async ({ id, datos }) =>
  clienteAxios.patch(`api/productos/${id}`, datos).then(r => r.data)

/**
 * The function `deleteProduct` is a TypeScript function that deletes a product by its ID using an API
 * call, after checking for a valid token.
 * @param  - The `deleteProduct` function takes an object as a parameter with a property `id`. This
 * `id` represents the ID of the product that needs to be deleted.
 * @returns The function `deleteProduct` returns a Promise that resolves to the data returned by the
 * `clienteAxios.delete` request.
 */
export const deleteProduct: DeleteProduct = async ({ id }) =>
  clienteAxios.delete(`api/productos/${id}`).then(r => r.data)
