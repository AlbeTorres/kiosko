import React from 'react'
import { Dialog } from '../../../components-libs/Dialog'
import { Button } from '../../../components-libs/Button'
import { useAuth } from '../../../hooks/api'

type LogOutDialogProps = {
  open: boolean
  onClose(): void
}

export const LogOutDialog = ({ open, onClose }: LogOutDialogProps) => {
  const auth = useAuth()

  const handleLogOut = () => {
    auth?.logout()
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <div className=' w-60'>
        <h3 className='mt-5 font-semibold  text-lg text-center'>¿Estás seguro?</h3>
        <div className='flex justify-center mt-5 '>
          <Button className='btn-primary w-24' onClick={handleLogOut}>
            Salir
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
