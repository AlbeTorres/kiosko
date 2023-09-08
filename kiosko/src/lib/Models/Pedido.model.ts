import { Base } from './Base.model'
import { Product } from './Product.model'

export interface Pedido extends Base {
  usuario: string
  productos: Product[]
  estado: 'pending' | 'cancel' | 'complete'
  direccion: string
  receptor: string
  movil: string
  pago: string
  valor_total: number
  valor_subtotal: number
  valor_descuento: number
  valor_envio: number
  carnet: string
  metodo_pago: string
  municipio: string
  provincia: string
  fechaini: string
  fechafin: string
}
