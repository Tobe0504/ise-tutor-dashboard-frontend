import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'
import requestHandler, {
  requestHandler2,
} from '../HelperFunctions/requestHandler'
import { setNotiticationFunction } from '../Utilities/setNotificationsFunction'
import { capitalize } from '../HelperFunctions/capitalize'
import { completeProfileType } from '../Utilities/types'

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
  updateSkillsHandler: () => void
  updateSkillsHandlerObject: requestType
  skillInfoUpdate: {
    specialization: string
    years_of_experience: string
    experience_level: string
    tech_proficiency: string[]
  }
  setSkillInfoUpdate: Dispatch<
    SetStateAction<{
      specialization: string
      years_of_experience: string
      experience_level: string
      tech_proficiency: string[]
    }>
  >
  updateCertificationHandler: () => void
  updateCertificationsHandlerObject: requestType
  certificationsUpdate: { certifications: string[] }
  setCertificationsUpdate: Dispatch<
    SetStateAction<{ certifications: string[] }>
  >
  passwordUpdate: {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }
  setPasswordUpdate: Dispatch<
    SetStateAction<{
      oldPassword: string
      newPassword: string
      confirmPassword: string
    }>
  >
  passwordUpdateRequestObject: requestType
  updatePasswordHandler: () => void
  updateEmailHandler: () => void
  emailUpdateRequestObject: requestType
  emailUpdate: { email: string }
  setEmailUpdate: Dispatch<SetStateAction<{ email: string }>>
  getUserRequestObject: requestType
  getUser: () => void
  completeUserOnboard: () => void
  completeProfile: completeProfileType
  setCOmpleteProfile: Dispatch<SetStateAction<completeProfileType>>
  completeUserOnboardObject: requestType
  logout: () => void
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

  const [skillInfoUpdate, setSkillInfoUpdate] = useState({
    specialization: '',
    years_of_experience: '',
    experience_level: '',
    tech_proficiency: [] as string[],
  })

  const [passwordUpdate, setPasswordUpdate] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [emailUpdate, setEmailUpdate] = useState({
    email: '',
  })

  const [certificationsUpdate, setCertificationsUpdate] = useState({
    certifications: [] as string[],
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

  const [updateSkillsHandlerObject, setUpdateSkillsHandlerObject] =
    useState<requestType>({
      isLoading: false,
    })

  const [
    updateCertificationsHandlerObject,
    setUpdateCertificationsHandlerObject,
  ] = useState<requestType>({
    isLoading: false,
  })

  const [countriesRequestObject, setCountriesRequestObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    })

  const [passwordUpdateRequestObject, setPasswordUpdateRequestObject] =
    useState<requestType>({
      isLoading: false,
    })

  const [emailUpdateRequestObject, setEmailUpdateRequestObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
    })

  const [getUserRequestObject, setGetUserRequestObject] = useState<requestType>(
    {
      isLoading: false,
      data: null,
    }
  )

  const [completeProfile, setCOmpleteProfile] = useState({
    first_name: '',
    last_name: '',
    headline: '',
    profile_image: '',
    gender: '',
    country: '',
    bio: '',
    linkedIn_profile: '',
  })

  const completeProfileFormData = new FormData()

  // Effects
  useEffect(() => {
    completeProfileFormData.append('first_name', completeProfile.first_name)
    completeProfileFormData.append('last_name', completeProfile.last_name)
    completeProfileFormData.append('headline', completeProfile.headline)
    completeProfileFormData.append(
      'profile_image',
      completeProfile.profile_image
    )
    completeProfileFormData.append('gender', completeProfile.gender)
    completeProfileFormData.append('country', completeProfile.country)
    completeProfileFormData.append('bio', completeProfile.bio)
    completeProfileFormData.append(
      'linkedIn_profile',
      completeProfile.linkedIn_profile
    )
  }, [completeProfile])

  const [completeUserOnboardObject, setCompleteUserOnboardObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    })

  //   Router
  const navigate = useNavigate()
  const location = useLocation()

  // Utils
  const redirectRoute = location.state || '/complete-profile'

  const getUser = () => {
    requestHandler2({
      method: 'GET',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile`,
      setState: setGetUserRequestObject,
    })
  }

  const logout = () => {
    localStorage.removeItem('iseTutorAccessToken')
    localStorage.removeItem('iseTutorRefreshToken')

    navigate('/sign-in', { state: location.pathname })
  }

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

  const completeUserOnboard = () => {
    requestHandler2({
      method: 'POST',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/complete_profile`,
      setState: setCompleteUserOnboardObject,
      data: completeProfileFormData,
      isMultipart: true,
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: 'Onboarded successfully',
      successFunction: () => {
        navigate('/dashboard')
      },
    })
  }

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

          getUser()

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

  const updateSkillsHandler = () => {
    setUpdateAboutHandlerObject({
      isLoading: true,
    })

    requestHandler({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/skills`,
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

  const updateAboutInfoHandler = () => {
    setUpdateSkillsHandlerObject({
      isLoading: true,
    })

    requestHandler({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/about-info`,
      data: skillInfoUpdate,
    })
      .then((res) => {
        setUpdateSkillsHandlerObject({
          isLoading: false,
        })

        setNotiticationFunction(
          setNotifications,
          capitalize((res as AxiosResponse).data as string) || '',
          'success'
        )
      })
      .catch((err) => {
        setUpdateSkillsHandlerObject({
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

  const updateCertificationHandler = () => {
    setUpdateCertificationsHandlerObject({
      isLoading: true,
    })

    requestHandler({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/certifications`,
      data: certificationsUpdate,
    })
      .then((res) => {
        setUpdateCertificationsHandlerObject({
          isLoading: false,
        })

        setNotiticationFunction(
          setNotifications,
          capitalize((res as AxiosResponse).data as string) || '',
          'success'
        )
      })
      .catch((err) => {
        setUpdateCertificationsHandlerObject({
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

  const updatePasswordHandler = () => {
    setPasswordUpdateRequestObject({
      isLoading: true,
    })

    requestHandler({
      method: 'POST',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/password/change`,
      data: passwordUpdate,
    })
      .then((res) => {
        setPasswordUpdateRequestObject({
          isLoading: false,
        })

        setNotiticationFunction(
          setNotifications,
          capitalize((res as AxiosResponse).data as string) || '',
          'success'
        )
      })
      .catch((err) => {
        setPasswordUpdateRequestObject({
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

  const updateEmailHandler = () => {
    setEmailUpdateRequestObject({
      isLoading: true,
      data: null,
    })

    requestHandler({
      method: 'POST',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/update-email`,
      data: { email: emailUpdate.email },
    })
      .then((res) => {
        setEmailUpdateRequestObject({
          isLoading: false,
          data: capitalize((res as AxiosResponse).data as string),
        })

        setNotiticationFunction(
          setNotifications,
          capitalize((res as AxiosResponse).data as string) || '',
          'success'
        )
      })
      .catch((err) => {
        setEmailUpdateRequestObject({
          isLoading: false,
          data: null,
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
        updateSkillsHandler,
        updateSkillsHandlerObject,
        skillInfoUpdate,
        setSkillInfoUpdate,
        updateCertificationHandler,
        updateCertificationsHandlerObject,
        certificationsUpdate,
        setCertificationsUpdate,
        passwordUpdate,
        setPasswordUpdate,
        passwordUpdateRequestObject,
        updatePasswordHandler,
        updateEmailHandler,
        emailUpdateRequestObject,
        emailUpdate,
        setEmailUpdate,
        getUserRequestObject,
        getUser,
        completeUserOnboard,
        completeProfile,
        setCOmpleteProfile,
        completeUserOnboardObject,
        logout,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}

export default AuthUserContextProvider
