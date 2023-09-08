import { Pedido } from '../Models/Pedido.model'
import { Product } from '../Models/Product.model'
import { FetchPedidoData, FetchPedidosData } from '../requests/pedido.type'

export const pedidoAdapter = (data: FetchPedidoData): Pedido => {
  const productos: Product[] = JSON.parse(data.pedido.productos)
  return {
    _id: data.pedido._id,
    usuario: data.pedido.usuario,
    productos: productos,
    estado: data.pedido.estado,
    direccion: data.pedido.direccion,
    receptor: data.pedido.receptor,
    movil: data.pedido.movil,
    pago: data.pedido.pago,
    valor_total: data.pedido.valor_total,
    valor_subtotal: data.pedido.valor_subtotal,
    valor_descuento: data.pedido.valor_descuento,
    valor_envio: data.pedido.valor_envio,
    carnet: data.pedido.carnet,
    metodo_pago: data.pedido.metodo_pago,
    municipio: data.pedido.municipio,
    provincia: data.pedido.provincia,
    fechaini: data.pedido.fechaini,
    fechafin: data.pedido.fechafin,
  }
}

export const pedidosAdapter = (data: FetchPedidosData): Pedido[] => {
  const pedidos: Pedido[] = []

  data.map(p => pedidos.push(pedidoAdapter({ pedido: p })))

  return pedidos
}
