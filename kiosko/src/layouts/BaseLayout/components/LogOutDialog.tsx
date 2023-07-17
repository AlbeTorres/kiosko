import React from 'react'
import { Dialog } from '../../../components-libs/Dialog'
import { Button } from '../../../components-libs/Button'

export const LogOutDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className=' w-60'>
        <h3 className='mt-5 font-semibold  text-lg text-center'>¿Estas seguro?</h3>
        <div className='flex justify-center mt-5 '>
          <Button className='btn-primary w-24 '>Salir</Button>
        </div>
      </div>
    </Dialog>
  )
}
