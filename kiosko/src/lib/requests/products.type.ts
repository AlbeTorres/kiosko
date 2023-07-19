import { Product } from '../Models/Product.model'
import { Function } from './types'

export type FetchProducts = Function<FetchProductsInput, FetchProductsOutput>

export type FetchProductsInput = void

export type FetchProductsOutput = Product[]
export type FetchProductsData = { productos: Product[] }

export type FetchProduct = Function<FetchProductInput, FetchProductOutput>

export type FetchProductInput = {
  id: string
}

export type FetchProductOutput = Product
export type FetchProductData = { producto: Product }

export type AddProduct = Function<AddProductInput, AddProductOutput>

export type AddProductInput = {
  img: string
  cloud_id: string
  nombre: string
  medida: string
  estado: 'abastecido' | 'agotado'
  precio: string
  creador: string
}

export type AddProductOutput = { producto: Product }

export type UpdateProduct = Function<UpdateProductInput, UpdateProductOutput>

export type UpdateProductInput = {
  id: string
  datos: {
    img?: string
    cloud_id?: string
    nombre?: string
    medida?: string
    estado?: 'abastecido' | 'agotado'
    precio?: string
    creador?: string
  }
}

export type UpdateProductOutput = {
  product: Product
}
export type DeleteProduct = Function<DeleteProductInput, DeleteProductOutput>

export type DeleteProductInput = {
  id: string
}

export type DeleteProductOutput = {
  msg: string
}
