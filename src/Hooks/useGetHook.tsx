import useSWR, { SWRConfiguration } from 'swr'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { useContext, useEffect } from 'react'
import { setNotiticationFunction } from '../Utilities/setNotificationsFunction'

const useGetHook = (url: string | null, props?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating } = useSWR(url, { ...props })

  // Context
  const { setNotifications } = useContext(AppContext)

  // Router
  const navigate = useNavigate()
  const location = useLocation()

  const errorMessage = error?.response?.data?.error
    ? error?.response?.data?.error?.responseMessage
    : !error?.response?.data?.error
    ? error?.response?.data?.responseMessage.toString()
    : error?.request
    ? 'There was an issue making this request'
    : error?.message

  // Effects
  useEffect(() => {
    if (error) {
      setNotiticationFunction(setNotifications, errorMessage)
    }

    if (errorMessage === 'Expired Token' || errorMessage === 'Unauthorized') {
      navigate('/sign-in', { state: location.pathname })
    }
  }, [error, errorMessage])

  return { data, error, isLoading, isValidating }
}

export default useGetHook
