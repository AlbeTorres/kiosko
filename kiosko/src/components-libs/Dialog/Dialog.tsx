import { FC, JSX } from 'react'
import { FaTimes } from 'react-icons/fa'

export interface DialogProps {
  children?: JSX.Element | JSX.Element[]
  open: boolean
  onClose(): void
}

export const Dialog: FC<DialogProps> = ({ children, open, onClose }): JSX.Element => {
  return (
    <>
      <input type='checkbox' defaultChecked={open} id='my-modal-6' className='modal-toggle ' />
      <div className='modal '>
        <div className='modal-box '>
          <div>
            <button className='absolute right-8 top-5 ' onClick={onClose}>
              {<FaTimes className='h-6 w-6 ' />}
            </button>
            {children}
          </div>
        </div>
      </div>
      ;
    </>
  )
}
