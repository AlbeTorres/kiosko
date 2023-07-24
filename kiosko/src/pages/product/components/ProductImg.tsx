import { useState } from 'react'
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/cup.jpg'
import img3 from '../../../assets/qr-code.webp'
import cn from '../../../util/cn'
import { Carrousel } from '../../../components-libs/Carrousel/Carrousel'
import { Product } from '../../../lib/Models/Product.model'

type SelectedImg = {
  _id: number
  img: string
}

type ProductImgProps = {
  product: Product
}

export const ProductImg = ({ product }: ProductImgProps) => {
  const [selectedimg, setSelectedImg] = useState<SelectedImg>({ _id: 1, img: product.img })

  return (
    <section className='w-full h-full'>
      <div className=' hidden md:grid grid-cols-[16%_84%] gap-x-1 '>
        <div className='grid grid-rows-4 gap-y-1 auto-rows-min'>
          {[{ _id: 1, img: product.img }].map(i => (
            <figure
              onClick={() => setSelectedImg(i)}
              className={cn(
                i._id === selectedimg._id ? 'border-2' : '',
                `border-primary w-full h-full rounded-lg    `,
              )}
            >
              <img src={i.img} alt='' className=' w-full h-full object-cover rounded-lg ' />
            </figure>
          ))}
        </div>
        <figure className='w-full h-[29rem] rounded-lg '>
          <img src={selectedimg.img} alt='' className='w-full h-full object-cover rounded-lg' />
        </figure>
      </div>
      <div className='md:hidden'>
        <Carrousel
          items={[{ img: product.img }]}
          className='w-full h-full'
          interval={25000}
          buttons='square'
        />
      </div>
    </section>
  )
}
