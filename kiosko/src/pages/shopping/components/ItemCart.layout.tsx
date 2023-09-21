import { PropsWithChildren } from 'react'
import cn from '../../../util/cn'

type ItemCartProps = PropsWithChildren & {
  bg: boolean
}

export const ItemCart = ({ children, bg }: ItemCartProps) => {
  return (
    <div
      className={cn(
        'grid grid-rows-[33%_10%_14%_10%_20%] md:grid-rows-1 gap-y-[10px] md:gap-y-0 items-center   md:grid-cols-[30%_15%_20%_15%_20%] md:place-items-center p-2 md:p-1 lg:p-2 ',
        bg ? 'bg-slate-50' : '',
      )}
    >
      {children}
    </div>
  )
}
