import { useParams } from 'react-router-dom'
import { BackButton } from '../../../components-libs/Button'
import { usePedido } from '../../../hooks/api'

const DeliveryDetails = () => {
  const delivery_id = useParams()
  const { data } = usePedido({ id: delivery_id.id || '' })

  console.log(data)

  return (
    <div className='py-5'>
      <BackButton route='/' />
      <div className='rounded-lg bg-white p-8 shadow-md'>
        <div className='flex items-center gap-4'>
          <h1 className='text-4xl font-bold uppercase tracking-wide'>{'Pedido'}</h1>
          <h3 className='text-lg text-gray-23 lg:text-2xl'># {data?._id}</h3>
        </div>
        <header className='py-6 text-gray-20'>
          <div className='flex flex-wrap justify-between'>
            {/* Service section */}
            <div className='flex w-full gap-4 md:w-2/5'>
              <div>
                <div>
                  <h3 className='text-sm font-bold uppercase tracking-wide'>{'Tienda'}</h3>
                  <p className='text-xl font-semibold text-black'>{'Kioskito'}</p>
                </div>
                <p>{'kiosko@gmail.com'}</p>
                <p>{'+53556677788'}</p>
                <p className='max-w-sm whitespace-pre-line break-words'>
                  {'Calle 50D #1118 entre 11 y 15'}
                </p>
                <p>{'Artemisa'}</p>
                <p>{'Artemisa'}</p>
              </div>
            </div>
            {/* End service section */}

            {/* Client Section */}
            <div className='flex w-full justify-end text-right md:w-2/5'>
              <div>
                <div>
                  <label className='text-sm font-bold uppercase tracking-wide'>{'Cliente'}</label>
                  <p className='text-xl font-semibold text-black'>{data?.cliente.nombre}</p>
                </div>
                <p>{data?.receptor}</p>
                <p>{data?.movil}</p>
                <div>
                  <p className='max-w-sm whitespace-pre-line break-words'>{data?.direccion}</p>
                </div>
                <p>{data?.municipio}</p>
                <p>{data?.provincia}</p>
              </div>
            </div>
            {/* End client section */}
          </div>
        </header>

        {/* Table section */}
        <div className='mt-8 overflow-auto rounded-lg border border-gray-300'>
          <table className='min-w-full table-fixed text-lg'>
            <thead className='border-b-3 bg-gray-100'>
              <tr>
                <th className='p-2.5 text-left text-lg font-bold tracking-wide text-gray-23'>
                  {'producto'}
                </th>
                <th className='w-44 p-2.5 text-right text-lg font-bold tracking-wide text-gray-23'>
                  {'cantidad'}
                </th>
                <th className='w-44 p-2.5 text-right text-lg font-bold tracking-wide text-gray-23'>
                  {'precio'}
                </th>
                <th className='w-44 p-2.5 text-right text-lg font-bold tracking-wide text-gray-23'>
                  {'subtotal'}
                </th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-200 text-base '>
              {data?.productos.map(item => (
                <tr key={1} className='max-w-2xl even:bg-gray-100'>
                  <td className='p-3 font-medium text-gray-900'>
                    {item.nombre}
                    <p className='whitespace-pre-line break-words text-sm text-gray-600 sm:max-w-sm lg:max-w-xl'>
                      {}
                    </p>
                  </td>
                  <td className='whitespace-nowrap p-3 text-right font-medium text-gray-900'>
                    {item.cantidad}
                  </td>
                  <td className='whitespace-nowrap p-3 text-right font-medium text-gray-900'>
                    {item.precio}
                    <span className='ml-2'>{'usd'}</span>
                  </td>
                  <td className='whitespace-nowrap p-3 text-right font-medium text-gray-900'>
                    {item.cantidad * item.precio}
                    <span className='ml-2'>{'usd'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Footer section */}
        <div>
          <table className='min-w-full'>
            <thead>
              <tr>
                <th />
                <th className='w-44' />
                <th className='w-44' />
                <th className='w-44 p-3' />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td />
                <td />
                <td className='whitespace-nowrap p-2.5 text-right text-lg font-bold text-gray-900'>
                  {'Costo de envío'}
                </td>
                <td className='whitespace-nowrap p-2.5 text-right font-bold text-gray-900'>
                  {data?.valor_envio}
                  <span className='ml-2 font-semibold'>{'usd'}</span>
                </td>
              </tr>
              <tr className='divide-y-0'>
                <td />
                <td />
                <td className='whitespace-nowrap p-2.5 text-right text-lg font-bold text-gray-900'>
                  {'Total'}
                </td>
                <td className='whitespace-nowrap p-2.5 text-right font-bold text-gray-900'>
                  {data?.valor_total}
                  <span className='ml-2 font-semibold'>{'usd'}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DeliveryDetails
