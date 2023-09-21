import clsx from 'clsx'
import { ReactNode, useState } from 'react'
import { ButtonIcon } from '../Button'
import { FaHamburger } from 'react-icons/fa'
import NavMenuIn from '../../layouts/NavMenuIn'
import { LogOutDialog } from '../../layouts/LogOutDialog'

type Props = { title?: ReactNode; onMenu?: () => void }
export default function AppHeader({ title, onMenu }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <LogOutDialog open={open} onClose={() => setOpen(false)} />
      <header
        className={clsx(
          'fixed left-0 right-1 top-0 z-10 flex h-header w-full justify-center',
          'px-5 ring-1 ring-black/5 lg:z-50',
          'bg-base-100/80 backdrop-blur-lg',
        )}
      >
        <div className='flex w-full max-w-screen-lg pl-0 lg:pl-sidebar'>
          <div className='flex w-full items-center gap-8 pl-0 lg:pl-5'>
            <ButtonIcon onClick={() => onMenu?.()} className='lg:hidden' title={'Menú'}>
              <FaHamburger />
            </ButtonIcon>

            <h2 className='text-xl flex-1 truncate'>{title}</h2>
            <NavMenuIn handleOpen={() => setOpen(true)} />
          </div>
        </div>
      </header>
    </>
  )
}
