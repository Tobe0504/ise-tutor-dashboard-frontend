import { createContext, Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

export type requestType = {
    isLoading: boolean
    data: null | any[] | string
    error: null | any
}

type AuthCOntextValuesProps = {
    signIn: () => void
    signInRequest: requestType
    setSignInRequest: Dispatch<SetStateAction<requestType>>
    userLoginInfo: { email: string; password: string }
    setUserLoginInfo: Dispatch<
        SetStateAction<{ email: string; password: string }>
    >
}

type AuthCOntextProviderProps = {
    children: React.ReactNode
}

export const AuthUserContext = createContext({} as AuthCOntextValuesProps)

const AuthUserContextProvider = ({ children }: AuthCOntextProviderProps) => {
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
                    localStorage.setItem(
                        'iseTutorAccessToken',
                        res.data?.accessToken
                    )
                    localStorage.setItem(
                        'iseTutorRefreshToken',
                        res.data?.refreshToken
                    )

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
    return (
        <AuthUserContext.Provider
            value={{
                signIn,
                userLoginInfo,
                setUserLoginInfo,
                signInRequest,
                setSignInRequest,
            }}
        >
            {children}
        </AuthUserContext.Provider>
    )
}

export default AuthUserContextProvider
