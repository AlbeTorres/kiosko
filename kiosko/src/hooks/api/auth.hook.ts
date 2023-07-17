import { useContext } from 'react'
import authContext from '../../context/authContext/authContext'

export const useAuth = () => useContext(authContext)
