import { Pedido } from '../Models/Pedido.model'
import { Product } from '../Models/Product.model'
import { Function } from './types'

export type FetchPedidos = Function<FetchPedidosInput, FetchPedidosOutput>

export type FetchPedidosInput = void

export type FetchPedidosOutput = Pedido[]

export type FetchPedido = Function<FetchPedidoInput, FetchPedidoOutput>

export type FetchPedidoInput = {
  id: string
}

export type FetchPedidoOutput = Pedido

export type FetchPedidoData = {
  pedido: Pedido
}

export type AddPedido = Function<AddPedidoInput, AddPedidoOutput>

export type AddPedidoInput = {
  productos: string
  carnet: string
  zipcode: number
  direccion: string
  metodo_pago: string
  receptor: string
  provincia: string
  municipio: string
  movil: string
  valor_total: number
  valor_subtotal: number
  valor_descuentos: number
  valor_envio: number
  usuario?: string
  estado: 'pending' | 'cancel' | 'complete'
}

export type AddPedidoOutput = Pedido

export type UpdatePedido = Function<UpdatePedidoInput, UpdatePedidoOutput>

export type UpdatePedidoInput = {
  id: string
  datos: {
    productos?: string
    carnet?: string
    zipcode: number
    direccion: string
    metodo_pago: string
    receptor: string
    provincia: string
    municipio: string
    movil: string
    valor_total: number
    valor_subtotal: number
    valor_descuentos: number
    valor_envio: number
    usuario?: string
    estado: 'pending' | 'cancel' | 'complete'
  }
}

export type UpdatePedidoOutput = Pedido

export type DeletePedido = Function<DeletePedidoInput, DeletePedidoOutput>

export type DeletePedidoInput = {
  id: string
}

export type DeletePedidoOutput = {
  msg: string
}
