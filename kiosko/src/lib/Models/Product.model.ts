import { Base } from './Base.model'

export interface Product extends Base {
  nombre: string
  categoria: string
  estado: string
  img: string
  cloud_id: string
  provincia: string
  municipio: string
  promodate: string
  medida: string
  precio: number
  creador: string
  registro: Date
}
