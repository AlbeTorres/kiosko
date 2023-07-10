import { useQuery } from "@tanstack/react-query";
import { fetchAllPedidos } from "../lib/requests/pedido.request";

export const usePedidos = () => useQuery(["pedidos"], () => fetchAllPedidos());
