import { Pedido } from "../Models/Pedido.model";
import { Function } from "./types";

export type FetchPedidos = Function<FetchPedidosInput, FetchPedidosOutput>;

export type FetchPedidosInput = void;

export type FetchPedidosOutput = { pedidos: Pedido[] };
