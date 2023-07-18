import Home from '../../home/Home'
import { useAuth } from '../../../hooks/api'
import { useNavigate, useParams } from 'react-router-dom'
import { LoginAuthOutput, SingupOutput } from '../../../lib/requests/auth.type'
import SingupDialog from './components/SingupDialog'

export const Singup = () => {
  const params = useParams()
  const navigate = useNavigate()

  const auth = useAuth()

  const goback = params.returnUrl

  const handleSingup = (data: SingupOutput) => {
    auth.login(data)
    navigate(goback ? (goback as string) : '/')
  }

  return (
    <>
      <SingupDialog
        onSingup={handleSingup}
        open
        onClose={goback ? () => navigate(goback as string) : () => navigate('/')}
      />
      <Home />
    </>
  )
}
