import { Navigate, useParams, useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import { useProfile, useValidateUser } from '../../hooks/api/profile.hook'
import { Spinner } from '../../components-libs/Spinner'

const AuthenticateAccount = () => {
  const { emailToken } = useParams()
  const navigate = useNavigate()

  const { data: profile } = useProfile()

  useEffect(() => {
    if (profile?.isVerified) {
      navigate(`/${true}`)
    }
  }, [profile])

  const { data: validateUser, isSuccess: isValidateSuccess } = useValidateUser(
    emailToken ? { emailToken } : { emailToken: '' },
    profile?.isVerified === false,
  )

  return (
    <>
      {!isValidateSuccess ? (
        <div className='m-auto flex flex-col mt-36  justify-center gap-y-5 items-center'>
          <h1>Autenticando su cuenta</h1>
          <Spinner />
        </div>
      ) : (
        validateUser.isVerified && <Navigate to={`/${true}`} replace={true} />
      )}
    </>
  )
}

export default AuthenticateAccount
