import React, { useEffect, useState } from 'react'
import cn from '../../util/cn'

export interface CarrouselItem {
  img: string
  short_description?: string
}
type CarrouselProps = {
  items: CarrouselItem[]
  className: string
  buttons: 'circle' | 'outline' | 'square'
  interval: number
}

const btnStyle = {
  button: {
    circle: 'btn btn-circle btn-primary ',
    outline: 'btn btn-outline btn-primary ',
    square: 'btn btn-square btn-primary ',
  },
}

export const Carrousel = ({ items, className, buttons, interval }: CarrouselProps) => {
  let idTime: number
  const [actualBanner, setActualBanner] = useState(0)
  const cantidad: number = items.length

  useEffect(() => {
    idTime = setInterval(function () {
      siguienteBanners()
    }, interval)

    return () => clearInterval(idTime)
  })

  const siguienteBanners = () => {
    setActualBanner(actualBanner === cantidad - 1 ? 0 : actualBanner + 1)
  }

  const anteriorBanners = () => {
    clearInterval(idTime)
    setActualBanner(actualBanner === 0 ? cantidad - 1 : actualBanner - 1)
  }

  return (
    <div className={cn(className ? className : '', 'carousel')}>
      <div className='carousel-item relative h-full w-full'>
        {items.map(
          (banner: CarrouselItem, index: number) =>
            actualBanner === index && (
              <div
                key={index}
                className={
                  actualBanner === index
                    ? 'h-full w-full  opacity-100  transition delay-150 ease-in-out'
                    : 'opacity-0 transition delay-150 duration-300 ease-in-out'
                }
              >
                <figure className='w-full h-full'>
                  <img
                    className='w-full h-full object-contain cursor-pointer '
                    key={index}
                    src={banner.img}
                    alt={banner.short_description}
                  />
                </figure>
              </div>
            ),
        )}
        <div className='absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <button onClick={anteriorBanners} className={btnStyle.button[buttons]}>
            ❮
          </button>
          <button onClick={siguienteBanners} className={btnStyle.button[buttons]}>
            ❯
          </button>
        </div>
      </div>
    </div>
  )
}
