import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function useNavLock(isEnabled: boolean, alertText: string) {
  const location = useLocation()
  const navigate = useNavigate()

  const [lastLocation, setLastLocation] = useState(location)

  useEffect(() => {
    if (!isEnabled) return
  }, [isEnabled, lastLocation])
}

export default useNavLock
