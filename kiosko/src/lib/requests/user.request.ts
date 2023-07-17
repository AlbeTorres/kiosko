import clienteAxios from '../../config/axios'
import { DeleteUser, FetchUser, FetchUsers, UpdateUser } from './user.type'

/**
 * The function `updateUser` updates a user's data by making a PATCH request to the server, using the
 * provided user ID and data.
 * @param  - - `UpdateUser`: a type definition for the `updateUser` function
 * @returns The function `updateUser` returns a promise that resolves to the data returned by the
 * `clienteAxios.patch` request.
 */
export const updateUser: UpdateUser = async ({ id, datos }) =>
  clienteAxios.patch(`api/usuarios/${id}`, datos).then(r => r.data)

/**
 * The function `deleteUser` deletes a user by their ID if a valid token is set, otherwise it removes
 * the token from local storage.
 * @param id - The id parameter is the unique identifier of the user that needs to be deleted.
 * @returns The function `deleteUser` returns a promise that resolves to the data returned by the
 * `clienteAxios.delete` request.
 */
export const deleteUser: DeleteUser = async ({ id }) =>
  clienteAxios.delete(`api/usuarios/${id}`).then(r => r.data)

/**
 * The function fetchUsers fetches user data from an API if a token is set, otherwise it removes the
 * token from local storage.
 * @returns The function `fetchUsers` returns a promise that resolves to the data fetched from the
 * `api/usuarios` endpoint using `clienteAxios.get`.
 */
export const fetchAllUsers: FetchUsers = async () =>
  clienteAxios.get(`api/usuarios`).then(r => r.data)

/**
 * The function fetchUser retrieves user data from an API endpoint if a valid token is set, otherwise
 * it removes the token from local storage.
 * @param id - The `id` parameter is the unique identifier of the user that we want to fetch from the
 * API.
 * @returns The function `fetchUser` returns a promise that resolves to the data of the user with the
 * specified `id` if the `setToken` function returns a truthy value. If the `setToken` function returns
 * a falsy value, the function removes the "token" item from the localStorage.
 */
export const fetchUser: FetchUser = async ({ id }) =>
  clienteAxios.get(`api/usuarios/${id}`).then(r => r.data)
