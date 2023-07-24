import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { ProductActionButton } from './ProductActionButton'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  _id: string
  img: string
  nombre: string
  medida: string
  precio: number
}

export const ProductCard = ({ _id, nombre, img, medida, precio }: ProductCardProps) => (
  <div className='relative'>
    <Link to={`product/${_id}`} className=''>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <label className='group'>
          <img
            src={img}
            alt={'todo bine'}
            className='h-full w-full object-cover object-center hover:!cursor-pointer group-hover:opacity-75'
          />
        </label>
      </div>
    </Link>
    <div className='flex flex-col items-center justify-between px-2 w-full'>
      <div className='w-full flex items-center justify-between mt-4'>
        <h3 className=' text-sm text-gray-700'>{nombre}</h3>
        <div className=' flex items-center'>
          <FaDollarSign />
          <p className=' text-lg font-medium text-gray-900'>{precio}</p>
          <p className=' text-lg font-medium text-gray-900'>{'/'}</p>
          <p className=' text-lg font-medium text-gray-900'>{medida}</p>
        </div>
      </div>
    </div>
    <ProductActionButton _id={_id} />
  </div>
)
