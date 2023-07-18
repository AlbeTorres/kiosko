import clienteAxios from '../../config/axios.js'
import { adaptUserResponse } from '../adapters'
import { FetchAuthenticateUser, FetchValidateUser, LoginAuth, Singup } from './auth.type.js'

/**
 * The function fetchAuthenticateUser is an asynchronous function that checks if a token is set, and if
 * so, makes a GET request to the "api/auth" endpoint using clienteAxios and returns the response data.
 * If the token is not set, it removes the token from localStorage.
 * @returns The function `fetchAuthenticateUser` returns a promise that resolves to the data returned
 * by the `clienteAxios.get("api/auth")` request.
 */
export const fetchAuthenticateUser: FetchAuthenticateUser = () =>
  clienteAxios.get('api/auth').then(r => adaptUserResponse(r.data))

/**
 * The function fetchValidateUser is an asynchronous function that takes an emailToken as a parameter
 * and sends a POST request to the "api/usuarios/verify-email" endpoint to validate the user's email.
 * @param emailToken - The `emailToken` parameter is a token that is used to verify the user's email
 * address. It is typically generated and sent to the user's email when they sign up or request to
 * reset their password. The token is then used to validate the user's email address by making a
 * request to the
 * @returns The function `fetchValidateUser` returns a promise that resolves to the data returned from
 * the API call.
 */
export const fetchValidateUser: FetchValidateUser = emailToken =>
  clienteAxios.post('api/usuarios/verify-email', { emailToken }).then(r => r.data)

/**
 * The above function is a TypeScript function that sends a POST request to a login endpoint with the
 * provided data and returns the response data.
 * @param datos - The `datos` parameter is an object that contains the login credentials, such as
 * username and password, that will be sent to the server for authentication.
 */
export const login: LoginAuth = datos => clienteAxios.post('/api/auth', datos).then(r => r.data)

/**
 * The `signup` function sends a POST request to the "api/usuarios/" endpoint with the provided data
 * and returns the response data.
 * @param datos - The parameter "datos" is an object that contains the data needed for signing up a
 * user.
 */
export const singup: Singup = datos => clienteAxios.post('api/usuarios/', datos).then(r => r.data)
