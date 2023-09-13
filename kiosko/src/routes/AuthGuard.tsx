import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/api'

const AuthGuard = () => {
  const auth = useAuth()

  return auth?.data ? <Outlet /> : <Navigate replace to={'/'} />
}

export default AuthGuard
