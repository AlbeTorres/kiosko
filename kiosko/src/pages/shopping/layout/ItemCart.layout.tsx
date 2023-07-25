import React, { PropsWithChildren } from 'react'
import cn from '../../../util/cn'

type ItemCartProps = PropsWithChildren & {
  bg: boolean
}

export const ItemCart = ({ children, bg }: ItemCartProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-[30%_15%_20%_15%_20%] place-items-center p-2 ',
        bg ? 'bg-slate-50' : '',
      )}
    >
      {children}
    </div>
  )
}
