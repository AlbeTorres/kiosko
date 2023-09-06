import React, { useMemo, useState } from 'react'
import AccountLayout from '../components/AccountLayout'
import { usePedidos } from '../../../hooks/api'
import { DeliveryItem } from './components/DeleveryItem'
import { Spinner } from '../../../components-libs/Spinner'
import cn from '../../../util/cn'

export const DeliveryList = () => {
  const [open, setOpen] = useState('')
  const [vista, setVista] = useState('pendientes')
  const { data: deliveries, isSuccess } = usePedidos()

  const pendientes = useMemo(() => deliveries?.filter(d => d.estado === 'pendiente'), [deliveries])
  const completados = useMemo(() => deliveries?.filter(d => d.estado === 'cancelado'), [deliveries])

  return (
    <AccountLayout title={'Mis envíos'} current='deliverys'>
      <div className='md:w-3/4'>
        <div className='flex items-center justify-start gap-2'>
          <button
            onClick={() => setVista('pendientes')}
            className={cn(
              vista === 'pendientes'
                ? 'text-black border-b-2 border-black text-lg'
                : 'text-gray-500 ',
            )}
          >
            Pendientes
          </button>
          <button
            onClick={() => setVista('completados')}
            className={cn(
              vista === 'completados'
                ? 'text-black border-b-2 border-black text-lg'
                : 'text-gray-500 ',
            )}
          >
            Completados
          </button>
        </div>
        <div>
          {isSuccess ? (
            <div>
              {vista === 'pendientes'
                ? pendientes?.map(d => (
                    <DeliveryItem id={d._id} deliveryopen={open} onOpen={setOpen} delivery={d} />
                  ))
                : completados?.map(d => (
                    <DeliveryItem id={d._id} deliveryopen={open} onOpen={setOpen} delivery={d} />
                  ))}
            </div>
          ) : (
            <Spinner className='h-10 w-10 mx-auto' />
          )}
        </div>
      </div>
    </AccountLayout>
  )
}
