import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'
import { requestHandler2 } from '../HelperFunctions/requestHandler'
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
    specialization: string[]
    years_of_experience: string
    experience_level: string
    tech_proficiency: string[]
  }
  setSkillInfoUpdate: Dispatch<
    SetStateAction<{
      specialization: string[]
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

  // Local
  const userToken = localStorage.getItem('iseTutorAccessToken')

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
    specialization: [] as string[],
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
    twitter_profile: '',
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

    completeProfileFormData.append(
      'twitter_profile',
      completeProfile.twitter_profile
    )

    // eslint-disable-next-line
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
  let redirectRoute = location.state || '/complete-profile'

  const getUser = (load?: boolean) => {
    requestHandler2({
      method: 'GET',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile`,
      setState: setGetUserRequestObject,
      load,
      errorFunction(error) {
        const errorMessage =
          error?.response?.data?.error?.responseMessage ||
          error?.response?.data?.responseMessage?.toString() ||
          error?.message ||
          'There was an issue making this request'

        if (errorMessage) {
          console.log('Hmm', errorMessage)
          logout()
        }
      },
    })
  }

  const logout = () => {
    localStorage.removeItem('iseTutorAccessToken')
    localStorage.removeItem('iseTutorRefreshToken')

    navigate('/sign-in', { state: location.pathname })
  }

  const fetchCountries = () => {
    requestHandler2({
      method: 'GET',
      url: `https://restcountries.com/v3.1/all?fields=name,idd,flag`,
      setState: setCountriesRequestObject,
      setNotifications: setNotifications,
    })
  }

  const completeUserOnboard = () => {
    requestHandler2({
      method: 'POST',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/complete-profile`,
      setState: setCompleteUserOnboardObject,
      data: completeProfileFormData,
      isMultipart: true,
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: 'Onboarded successfully',
      successFunction: () => {
        navigate('/dashboard')
        getUser()
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

          setGetUserRequestObject((prevState) => {
            return { ...prevState, data: res?.data?.tutor }
          })

          if (
            !res?.data?.tutor?.headline ||
            !res?.data?.tutor?.gender ||
            !res?.data?.tutor?.country ||
            !res?.data?.tutor?.linkedIn_profile
          ) {
            navigate('/complete-profile')
          } else {
            navigate(redirectRoute)
          }

          localStorage.setItem('iseTutorAccessToken', res.data?.accessToken)
          localStorage.setItem('iseTutorRefreshToken', res.data?.refreshToken)
        })
        .catch((err) => {
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
    requestHandler2({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/contact-info`,
      setState: setUpdateContactHandlerObject,
      data: contactInfoUpdateFormData,
      isMultipart: true,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      setNotificationsFailure: true,
      successFunction: () => {
        getUser(false)
      },
    })
  }

  const updateAboutInfoHandler = () => {
    requestHandler2({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/about-info`,
      setState: setUpdateAboutHandlerObject,
      data: aboutInfoUpdate,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      setNotificationsFailure: true,
      successFunction: () => {
        getUser(false)
      },
    })
  }

  const updateSkillsHandler = () => {
    requestHandler2({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/skills`,
      setState: setUpdateSkillsHandlerObject,
      data: skillInfoUpdate,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      setNotificationsFailure: true,
      successFunction: () => {
        getUser(false)
      },
    })
  }

  const updateCertificationHandler = () => {
    requestHandler2({
      method: 'PATCH',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/profile/certifications`,
      setState: setUpdateCertificationsHandlerObject,
      data: certificationsUpdate,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      setNotificationsFailure: true,
      successFunction: () => {
        getUser(false)
      },
    })
  }

  const updatePasswordHandler = () => {
    requestHandler2({
      method: 'POST',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/password/change`,
      setState: setPasswordUpdateRequestObject,
      data: passwordUpdate,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      setNotificationsFailure: true,
      successFunction: () => {
        logout()
      },
    })
  }

  const updateEmailHandler = () => {
    requestHandler2({
      method: 'POST',
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/tutors/update-email`,
      setState: setEmailUpdateRequestObject,
      data: { email: emailUpdate.email },
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      setNotificationsFailure: true,
      successFunction: () => {
        logout()
      },
    })
  }

  // Effects
  // useEffect(() => {
  //   getUser()
  // }, [])

  useEffect(() => {
    if (userToken) {
      getUser()
    }

    // eslint-disable-next-line
  }, [])

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
