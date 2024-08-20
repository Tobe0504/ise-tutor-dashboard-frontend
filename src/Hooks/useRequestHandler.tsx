import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { notificationsType } from '../Context/AppContext'
import { setNotiticationFunction } from '../Utilities/setNotificationsFunction'
import { RequestType } from '../HelperFunctions/requestHandler'

const useRequestHandler = ({
  method,
  url,
  headers,
  data,
  isMultipart,
  setState,
  setNotificationsFailure,
  setNotificationsSuccess,
  setNotifications,
  successMessage,
  successFunction,
  errorFunction,
  load,
  requestCleanup,
}: RequestType) => {
  // Utils
  const userToken = localStorage.getItem('iseTutorAccessToken')

  if ((setState && load === true) || (setState && load === undefined)) {
    setState((prevState) => {
      return { ...prevState, isLoading: true }
    })
  } else if (setState && load === false) {
    setState((prevState) => {
      return { ...prevState, isLoading: false }
    })
  }

  // Router
  const navigate = useNavigate()

  axios({
    method,
    url,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': !isMultipart ? 'application/json' : 'multipart/form-data',
      ...headers,
    },
    data,
  })
    .then((res) => {
      if (setState) {
        setState({
          isLoading: false,
          data: res?.data,
          error: null,
        })

        if (requestCleanup) {
          setTimeout(() => {
            setState({
              isLoading: false,
              data: null,
              error: null,
            })
          }, 5000)
        }
      }
      if (successFunction) {
        successFunction(res)
      }
      if (setNotificationsSuccess) {
        setNotiticationFunction(
          setNotifications as Dispatch<SetStateAction<notificationsType>>,
          successMessage || res?.data,
          'success'
        )
      }
    })
    .catch((err) => {
      console.log(err, 'Error')
      if (setState) {
        setState({
          isLoading: false,
          data: null,
          error: err.response?.data?.error
            ? err.response?.data?.error?.responseMessage
            : !err.response?.data?.error
            ? err.response?.data?.responseMessage.toString()
            : err.message,
        })

        if (requestCleanup) {
          setTimeout(() => {
            setState({
              isLoading: false,
              data: null,
              error: null,
            })
          }, 5000)
        }
      }

      if (errorFunction) {
        errorFunction(err)
      }
      if (setNotificationsFailure) {
        setNotiticationFunction(
          setNotifications as Dispatch<SetStateAction<notificationsType>>,
          err.response?.data?.error
            ? err.response?.data?.error?.responseMessage
            : !err.response?.data?.error
            ? err.response?.data?.responseMessage.toString()
            : err.message
        )
      }
      const errorMessage = err?.response?.data?.err
        ? err?.response?.data?.err?.responseMessage
        : !err?.response?.data?.err
        ? err?.response?.data?.responseMessage.toString()
        : err?.request
        ? 'There was an issue making this request'
        : err?.message

      if (errorMessage === 'Expired Token' || errorMessage === 'Unauthorized') {
        navigate('/sign-in', { state: location.pathname })
      }
    })

  return null
}

export default useRequestHandler
