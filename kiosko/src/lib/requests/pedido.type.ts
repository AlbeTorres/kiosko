import { Pedido } from '../Models/Pedido.model'
import { Product } from '../Models/Product.model'
import { Function } from './types'

export type FetchPedidos = Function<FetchPedidosInput, FetchPedidosOutput>

export type FetchPedidosInput = void

export type FetchPedidosOutput = { pedidos: Pedido[] }

export type FetchPedido = Function<FetchPedidoInput, FetchPedidoOutput>

export type FetchPedidoInput = {
  id: string
}

export type FetchPedidoOutput = { pedido: Pedido }

export type AddPedido = Function<AddPedidoInput, AddPedidoOutput>

export type AddPedidoInput = {
  productos: Pedido[]
  direccion: string
  pago: string
  receptor: string
  movil: string
  valor: number
  usuario: string
  estado: 'verificar' | 'cancelado' | 'enviado' | 'terminado'
}

export type AddPedidoOutput = {
  pedido: Pedido
}

export type UpdatePedido = Function<UpdatePedidoInput, UpdatePedidoOutput>

export type UpdatePedidoInput = {
  id: string
  datos: {
    productos?: Product[]
    direccion?: string
    pago?: string
    receptor?: string
    movil?: string
    valor?: number
    usuario?: string
    estado?: 'verificar' | 'cancelado' | 'enviado' | 'terminado'
  }
}

export type UpdatePedidoOutput = {
  pedido: Pedido
}

export type DeletePedido = Function<DeletePedidoInput, DeletePedidoOutput>

export type DeletePedidoInput = {
  id: string
}

export type DeletePedidoOutput = {
  msg: string
}
