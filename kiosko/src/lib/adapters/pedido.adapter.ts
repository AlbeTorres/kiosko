import { Pedido } from '../Models/Pedido.model'
import { FetchPedidoData, FetchPedidosData, PedidoFetch } from '../requests/pedido.type'

export const pedidoAdapter = (data: FetchPedidoData): PedidoFetch => {
  return {
    _id: data._id,
    usuario: data.usuario,
    productos: data.productos,
    estado: data.estado,
    direccion: data.direccion,
    receptor: data.receptor,
    movil: data.movil,
    pago: data.pago,
    valor_total: data.valor_total,
    valor_subtotal: data.valor_subtotal,
    valor_descuento: data.valor_descuento,
    valor_envio: data.valor_envio,
    carnet: data.carnet,
    metodo_pago: data.metodo_pago,
    municipio: data.municipio,
    provincia: data.provincia,
    fechaini: data.fechaini,
    fechafin: data.fechafin,
    cliente: data.cliente,
  }
}

export const pedidosAdapter = (data: FetchPedidosData): PedidoFetch[] => {
  const pedidos: PedidoFetch[] = []

  data.map(p => pedidos.push(pedidoAdapter(p)))

  return pedidos
}
