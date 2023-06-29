import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllProducts } from "../lib/requests/products.request";


export const useAllProducts =()=> useQuery(["products"], () => fetchAllProducts());
