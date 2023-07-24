import LoginDialog from './components/LoginDialog'
import Home from '../../home/Home'
import { useAuth } from '../../../hooks/api'
import { useNavigate, useParams } from 'react-router-dom'
import { LoginAuthOutput } from '../../../lib/requests/auth.type'

export const Login = () => {
  const params = useParams()
  const navigate = useNavigate()

  const auth = useAuth()

  const goback = params.returnUrl

  const handleLogin = (data: LoginAuthOutput) => {
    auth?.login(data)
    navigate(goback ? (goback as string) : '/')
  }

  return (
    <>
      <LoginDialog
        open
        onLogin={handleLogin}
        onClose={goback ? () => navigate(goback as string) : () => navigate('/')}
      />
      <Home />
    </>
  )
}
