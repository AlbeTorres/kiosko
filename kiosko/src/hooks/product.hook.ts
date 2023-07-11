import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../lib/requests/products.request";

/**
 * The useAllProducts function is a custom hook that uses the useQuery hook to fetch all products.
 */
export const useAllProducts = () =>
  useQuery(["products"], () => fetchAllProducts());
