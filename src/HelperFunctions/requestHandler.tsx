import axios, { AxiosResponse } from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { notificationsType } from '../Context/AppContext'
import { requestType } from '../Context/AuthUserContext'
import { setNotiticationFunction } from '../Utilities/setNotificationsFunction'

export type RequestType = {
  method: string
  url: string
  headers?: any
  data?: any
  isMultipart?: boolean
  state?: requestType
  setState?: Dispatch<SetStateAction<requestType>>
  setNotificationsSuccess?: boolean
  setNotificationsFailure?: boolean
  setNotifications?: Dispatch<SetStateAction<notificationsType>>
  successMessage?: string
  successFunction?: (res?: AxiosResponse) => void
  errorFunction?: (err?: any) => void
  load?: boolean
  requestCleanup?: boolean
}

export async function requestHandler({
  method,
  url,
  headers,
  data,
  isMultipart,
}: RequestType) {
  return new Promise((resolve, reject) => {
    // Context
    const userToken = localStorage.getItem('iseAdminAccessToken')

    axios({
      method,
      url,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': !isMultipart
          ? 'application/json'
          : 'multipart/form-data',
        ...headers,
      },
      data,
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

export async function requestHandler2({
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
}: RequestType) {
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
        errorFunction()
      }
      if (setNotificationsFailure) {
        setNotiticationFunction(
          setNotifications as Dispatch<SetStateAction<notificationsType>>,
          err.response?.data?.error
            ? err.response?.data?.error?.responseMessage
            : !err.response?.data?.error
            ? err.response?.data?.responseMessage?.toString()
            : err.message
        )
      }
    })

  return null
}
