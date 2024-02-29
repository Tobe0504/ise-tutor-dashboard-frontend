import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'
import requestHandler from '../HelperFunctions/requestHandler'
import { setNotiticationFunction } from '../Utilities/setNotificationsFunction'
import { capitalize } from '../HelperFunctions/capitalize'

export type requestType = {
  isLoading: boolean
  data?: null | any[] | string | any
  error?: null | any
}

type AuthCOntextValuesProps = {
  signIn: () => void
  signInRequest: requestType
  setSignInRequest: Dispatch<SetStateAction<requestType>>
  userLoginInfo: { email: string; password: string }
  setUserLoginInfo: Dispatch<
    SetStateAction<{ email: string; password: string }>
  >
  contacttInfoUpdate: {
    firstname: string
    lastname: string
    profile_image: string
    gender: string
    country: string
    preferred_language: string
    phone_number: string
    email: string
  }
  setContacttInfoUpdate: Dispatch<
    SetStateAction<{
      firstname: string
      lastname: string
      profile_image: string
      gender: string
      country: string
      preferred_language: string
      phone_number: string
      email: string
    }>
  >
  updateAboutHandlerObject: requestType
  updateContactHandler: () => void

  aboutInfoUpdate: {
    dob: string
    bio: string
    linkedIn_profile: string
    website_link: string
  }
  setAboutInfoUpdate: Dispatch<
    SetStateAction<{
      dob: string
      bio: string
      linkedIn_profile: string
      website_link: string
    }>
  >
  updateContactHandlerObject: requestType
  updateAboutInfoHandler: () => void
  fetchCountries: () => void
  countriesRequestObject: requestType
  contactInfoUpdateFormData: FormData
}

type AuthCOntextProviderProps = {
  children: React.ReactNode
}

export const AuthUserContext = createContext({} as AuthCOntextValuesProps)

const AuthUserContextProvider = ({ children }: AuthCOntextProviderProps) => {
  // Context
  const { setNotifications } = useContext(AppContext)

  // States
  const [userLoginInfo, setUserLoginInfo] = useState<{
    email: string
    password: string
  }>({
    email: '',
    password: '',
  })
  const [signInRequest, setSignInRequest] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  })

  //   Router
  const navigate = useNavigate()
  const location = useLocation()

  // Utils
  const redirectRoute = location.state || '/tutor-complete-profile'

  const signIn = () => {
    setSignInRequest({ isLoading: true, data: null, error: null })
    if (userLoginInfo.email && userLoginInfo.password)
      axios
        .post(
          `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/auth/login/tutor`,
          {
            email: userLoginInfo.email,
            password: userLoginInfo.password,
          }
        )
        .then((res) => {
          setSignInRequest({
            data: res.data,
            error: null,
            isLoading: false,
          })
          localStorage.setItem('iseTutorAccessToken', res.data?.accessToken)
          localStorage.setItem('iseTutorRefreshToken', res.data?.refreshToken)

          navigate(redirectRoute)
        })
        .catch((err) => {
          console.log(err)
          setSignInRequest({
            data: null,
            error: err.response
              ? err.response?.data?.responseMessage
              : err.message,
            isLoading: false,
          })
        })
  }

  const [contacttInfoUpdate, setContacttInfoUpdate] = useState({
    firstname: '',
    lastname: '',
    profile_image: '',
    gender: '',
    country: '',
    preferred_language: '',
    phone_number: '',
    email: '',
  })

  const [aboutInfoUpdate, setAboutInfoUpdate] = useState({
    dob: '',
    bio: '',
    linkedIn_profile: '',
    website_link: '',
  })

  const contactInfoUpdateFormData = new FormData()

  const [updateAboutHandlerObject, setUpdateAboutHandlerObject] =
    useState<requestType>({
      isLoading: false,
    })

  const [updateContactHandlerObject, setUpdateContactHandlerObject] =
    useState<requestType>({
      isLoading: false,
    })
  const [countriesRequestObject, setCountriesRequestObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    })

  const fetchCountries = () => {
    setCountriesRequestObject({
      isLoading: true,
      data: null,
      error: null,
    })
    axios
      .get(`https://restcountries.com/v3.1/all?fields=name,idd,flag`)

      .then((res) => {
        setCountriesRequestObject({
          isLoading: false,
          data: res.data,
          error: null,
        })
      })
      .catch((err) => {
        console.log(err)
        setCountriesRequestObject({
          isLoading: false,
          data: null,
          error: err?.response?.data?.message,
        })
      })
  }

  const updateContactHandler = () => {
    setUpdateContactHandlerObject({
      isLoading: true,
    })

    requestHandler({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/contact-info`,
      data: contactInfoUpdateFormData,
    })
      .then((res) => {
        console.log(res, 'Hmm')

        setUpdateContactHandlerObject({
          isLoading: false,
        })

        setNotiticationFunction(
          setNotifications,
          capitalize((res as AxiosResponse).data as string) || '',
          'success'
        )
      })
      .catch((err) => {
        console.log(err, 'Hmm')
        setUpdateContactHandlerObject({
          isLoading: false,
        })

        // setNotiticationFunction(
        //   setNotifications,
        //   err.response?.data?.error
        //     ? err.response?.data?.error?.responseMessage
        //     : !err.response?.data?.error
        //     ? err.response?.data?.responseMessage.toString()
        //     : err.message
        // )

        if (err?.response?.data?.error?.responseMessage === 'Expired Token') {
          navigate('/sign-in', { state: location.pathname })
        }
      })
  }

  const updateAboutInfoHandler = () => {
    setUpdateAboutHandlerObject({
      isLoading: true,
    })

    requestHandler({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/about-info`,
      data: aboutInfoUpdate,
    })
      .then((res) => {
        setUpdateAboutHandlerObject({
          isLoading: false,
        })

        setNotiticationFunction(
          setNotifications,
          capitalize((res as AxiosResponse).data as string) || '',
          'success'
        )
      })
      .catch((err) => {
        setUpdateAboutHandlerObject({
          isLoading: false,
        })

        setNotiticationFunction(
          setNotifications,
          err.response?.data?.error
            ? err.response?.data?.error?.responseMessage
            : !err.response?.data?.error
            ? err.response?.data?.responseMessage.toString()
            : err.message
        )

        if (err?.response?.data?.error?.responseMessage === 'Expired Token') {
          navigate('/sign-in', { state: location.pathname })
        }
      })
  }

  return (
    <AuthUserContext.Provider
      value={{
        signIn,
        userLoginInfo,
        setUserLoginInfo,
        signInRequest,
        setSignInRequest,
        contacttInfoUpdate,
        setContacttInfoUpdate,
        updateAboutHandlerObject,
        updateContactHandler,
        aboutInfoUpdate,
        setAboutInfoUpdate,
        updateContactHandlerObject,
        updateAboutInfoHandler,
        fetchCountries,
        countriesRequestObject,
        contactInfoUpdateFormData,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}

export default AuthUserContextProvider
