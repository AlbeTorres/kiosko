import { Pedido } from "../Models/Pedido.model";
import { Function } from "./types";

export type FetchPedidos = Function<FetchPedidosInput, FetchPedidosOutput>;

export type FetchPedidosInput = void;

export type FetchPedidosOutput = { pedidos: Pedido[] };

export type FetchPedido = Function<FetchPedidoInput, FetchPedidoOutput>;

export type FetchPedidoInput = {
    id:string
};

export type FetchPedidoOutput = { pedido: Pedido };
