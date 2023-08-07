import React from 'react'
import { Select } from '../../../components-libs/Select'
import { TextField } from '../../../components-libs/TextField'

export const DeliveryForm = () => {
  return (
    <form className='md:w-80'>
      <Select items={['Artemisa']} placeholder='Provincia' label='Selecciona la provincia' />
      <Select items={['Artemisa']} placeholder='Municipio' label='Selecciona el municipio' />
      <TextField placeholder='Dirección de entrega' label='Dirección de entrega' />
    </form>
  )
}
