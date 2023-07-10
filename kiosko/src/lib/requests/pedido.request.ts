import clienteAxios from "../../config/axios";
import { FetchPedidos } from "./pedido.type";

export const fetchAllPedidos: FetchPedidos = () =>
  clienteAxios.get("api/pedidos").then((r) => r.data);
