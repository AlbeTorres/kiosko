import { useMutation, useQuery } from '@tanstack/react-query'
import {
  addPedido,
  deletePedido,
  fetchAllPedidos,
  fetchPedido,
  updatePedido,
} from '../../lib/requests/pedido.request'
import { FetchPedidoInput } from '../../lib/requests/pedido.type'

/**
 * The usePedidos function is a custom hook that uses the useQuery hook to fetch all pedidos.
 */
export const usePedidos = () => useQuery(['pedidos'], () => fetchAllPedidos())

/**
 * The usePedido function is a TypeScript function that uses the useQuery hook to fetch a pedido
 * (order) based on the input provided.
 * @param input - The `input` parameter is the value that is passed to the `usePedido` function. It is
 * used as an argument when calling the `fetchPedido` function.
 */
export const usePedido = (input: FetchPedidoInput) =>
  useQuery(['pedido'], () => fetchPedido(input), {
    refetchOnWindowFocus: false,
  })

/**
 * The useAddPedido function is a custom hook that uses the useMutation hook to handle adding a new
 * pedido.
 */
export const useAddPedido = () => useMutation(addPedido)

/**
 * The function useUpdatePedido is a custom hook that uses the useMutation hook to update a pedido.
 */
export const useUpdatePedido = () => useMutation(updatePedido)

/**
 * The useDeletePedido function is a custom hook that uses the useMutation hook to delete a pedido.
 */
export const useDeletePedido = () => useMutation(deletePedido)
