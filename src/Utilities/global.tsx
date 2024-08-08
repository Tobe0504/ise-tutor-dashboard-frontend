export const backend_url =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_ISE_BACKEND_URL
    : process.env.REACT_APP_ISE_BACKEND_URL
