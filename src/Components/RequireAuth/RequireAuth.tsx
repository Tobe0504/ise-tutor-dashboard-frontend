import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthUserContext } from '../../Context/AuthUserContext'

const RequireAuth = () => {
  // Local storage
  const userToken = localStorage.getItem('iseTutorAccessToken')
  // Location
  const location = useLocation()

  // Context
  const { getUser } = useContext(AuthUserContext)

  useEffect(() => {
    getUser()

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {userToken ? (
        <Outlet />
      ) : (
        <Navigate to="/sign-in" replace={true} state={location.pathname} />
      )}
    </>
  )
}

export default RequireAuth
