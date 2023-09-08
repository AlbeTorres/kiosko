import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import { HOME_PATH } from '../../constants'
import { ButtonIcon } from '../Button'
import { FaUmbraco } from 'react-icons/fa'
import { Logo } from '../../layouts/Logo/Logo'

export type DashboardSidenavCurrent =
  | 'dashboard'
  | 'services'
  | 'reviews'
  | 'bookings'
  | 'invoicing'
  | 'get-paid'

export type SidenavItem<K = any> = {
  key: K
  href: string
  icon?: ReactNode
  iconActive?: ReactNode
  label: string
  disabled?: boolean
}

type Props<K = any> = {
  appName?: string
  current?: K
  open?: boolean
  navs?: SidenavItem[]
  mainAction?: ReactNode
  onClose?: () => void
}
export default function AppSidenav<K = any>({
  appName,
  current,
  open = false,
  navs = [],
  mainAction,
  onClose,
}: Props<K>) {
  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 z-[60] flex h-full w-[min(100vw,18rem)] flex-col',
        'lg:pointer-events-auto lg:fixed lg:left-auto lg:w-sidebar',
        { 'pointer-events-auto': open, 'pointer-events-none': !open },
      )}
    >
      <div
        onClick={() => onClose?.()}
        className={clsx(
          'backdrop fixed left-0 top-0 z-0 h-full w-full transition-colors duration-200 lg:hidden',
          {
            'pointer-events-auto bg-black/30': open,
            'pointer-events-none bg-transparent': !open,
          },
        )}
      />

      <div
        className={clsx(
          ' relative z-10 flex h-full w-full transform flex-col bg-white px-5 shadow',
          'fixed left-0 top-0 transition-transform duration-200 ease-in-out',
          'lg:translate-x-0 lg:bg-transparent lg:px-0 lg:shadow-none',
          { '': open, '-translate-x-full': !open },
        )}
      >
        <div className='flex h-header w-full items-center justify-between'>
          <div className='relative flex flex-col items-start gap-2'>
            <Logo />
            {appName && (
              <span className='line-clamp-1 text-sm font-semibold uppercase leading-none text-black/60'>
                {appName}
              </span>
            )}
          </div>

          <div className='flex items-center lg:hidden'>
            <ButtonIcon onClick={() => onClose?.()} title={'cerrar'}>
              <FaUmbraco />
            </ButtonIcon>
          </div>
        </div>

        <hr className='lg:hidden' />

        <div className='flex flex-1 flex-col gap-2 overflow-y-auto py-5'>
          {navs.map(({ key, href, label, icon, iconActive, disabled = false }) => {
            if (disabled) return null

            return (
              <SidenavItem
                key={key}
                active={current === key}
                activeIcon={iconActive}
                href={href}
                icon={icon}
                label={label}
              />
            )
          })}

          {mainAction}
        </div>

        <div className='flex justify-start py-2'></div>
      </div>
    </aside>
  )
}

type SidenavItemProps = {
  icon?: ReactNode
  activeIcon?: ReactNode
  label: string
  href?: string
  active?: boolean
}
function SidenavItem({ icon, activeIcon, label, href, active = false }: SidenavItemProps) {
  if (href) {
    return (
      <Link to={href}>
        <div>
          <NavItem icon={icon} iconActive={activeIcon} active={active}>
            {label}
          </NavItem>
        </div>
      </Link>
    )
  }

  return (
    <NavItem icon={icon} iconActive={activeIcon} active={active}>
      {label}
    </NavItem>
  )
}
