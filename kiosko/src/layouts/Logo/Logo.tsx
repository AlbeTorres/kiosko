import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Logo = () => ( <div className='flex items-center'>
<FaShoppingCart className='text-xl' />
<Link to={'/'} className='normal-case text-xl ml-1 '>
  Kiosquito
</Link>
</div>)
