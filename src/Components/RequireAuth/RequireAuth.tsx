import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthUserContext } from '../../Context/AuthUserContext'
import Loader from '../Loader/Loader'

const RequireAuth = () => {
  // Local storage
  const userToken = localStorage.getItem('iseTutorAccessToken')
  // Location
  const location = useLocation()

  // Context
  const { getUserRequestObject } = useContext(AuthUserContext)

  return (
    <>
      {getUserRequestObject?.isLoading && userToken ? (
        <Loader />
      ) : !getUserRequestObject?.isLoading && userToken ? (
        <Outlet />
      ) : (
        <Navigate to="/sign-in" replace={true} state={location.pathname} />
      )}
    </>
  )
}

export default RequireAuth
