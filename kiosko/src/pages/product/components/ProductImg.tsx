import { useState } from 'react'
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/cup.jpg'
import img3 from '../../../assets/qr-code.webp'
import cn from '../../../util/cn'
import { Carrousel } from '../../../components-libs/Carrousel/Carrousel'

const imgs = [
  { _id: 1, img: img1 },
  { _id: 2, img: img2 },
  { _id: 3, img: img3 },
]

type SelectedImg = {
  _id: number
  img: string
}

export const ProductImg = () => {
  const [selectedimg, setSelectedImg] = useState<SelectedImg>(imgs[0])

  return (
    <section className='w-full h-full'>
      <h2 className='text-4xl font-semibold my-5 '>{'Tomate maduro'}</h2>
      <div className=' hidden lg:grid grid-cols-[20%_80%] '>
        <div className='grid grid-rows-4 auto-rows-min'>
          {imgs.map(i => (
            <figure
              onClick={() => setSelectedImg(i)}
              className={cn(
                i._id === selectedimg._id ? 'border-2' : '',
                `border-primary w-full h-full    `,
              )}
            >
              <img src={i.img} alt='' className=' w-full h-full object-contain' />
            </figure>
          ))}
        </div>
        <figure className='w-full h-full min-h-[35rem] '>
          <img src={selectedimg.img} alt='' className='w-full h-full object-contain' />
        </figure>
      </div>
      <div className='lg:hidden'>
        <Carrousel
          items={imgs}
          className='w-full h-[20rem] xs:h-[30rem]'
          interval={25000}
          buttons='square'
        />
      </div>
    </section>
  )
}
