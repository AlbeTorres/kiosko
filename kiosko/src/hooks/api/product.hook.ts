import { useMutation, useQuery } from '@tanstack/react-query'
import {
  addProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProduct,
  updateProduct,
} from '../../lib/requests/products.request'
import { FetchProductInput } from '../../lib/requests/products.type'

/**
 * The useAllProducts function is a custom hook that uses the useQuery hook to fetch all products.
 */
export const useAllProducts = () => useQuery(['products'], () => fetchAllProducts())

/**
 * The useProduct function is a custom hook that uses the useQuery hook to fetch product data based on
 * the input parameter.
 * @param input - The `input` parameter is the value that is passed to the `useProduct` function. It is
 * used as an argument to fetch the product data.
 */
export const useProduct = (input: FetchProductInput) =>
  useQuery(['product', input], () => fetchProduct(input))

/**
 * The useAddProduct function is a custom hook that uses the useMutation hook to add a product.
 */
export const useAddProduct = () => useMutation(addProduct)

/**
 * The useUpdateProduct function is a custom hook that uses the useMutation hook to update a product.
 */
export const useUpdateProduct = () => useMutation(updateProduct)

/**
 * The useDeleteProduct function is a custom hook that uses the useMutation hook to delete a product.
 */
export const useDeleteProduct = () => useMutation(deleteProduct)
