import axios from 'axios'

type RequestType = {
  method: string
  url: string
  headers?: any
  data?: any
  isMultipart?: boolean
}

export default async function requestHandler({
  method,
  url,
  headers,
  data,
  isMultipart,
}: RequestType) {
  return new Promise((resolve, reject) => {
    // Context
    const userToken = localStorage.getItem('iseTutorAccessToken')

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

// import axios from "axios";

// type RequestType = {
//   method: string;
//   url: string;
//   headers?: any;
//   data?: any;
//   isMultipart?: boolean;
// };

// export default async function requestHandler({
//   method,
//   url,
//   headers,
//   data,
//   isMultipart,
// }: RequestType) {
//   try {
//     const userToken = localStorage.getItem("iseAccessToken");

//     const response = await axios({
//       method,
//       url,
//       headers: {
//         Authorization: `Bearer ${userToken}`,
//         "Content-Type": !isMultipart ? "application/json" : "multipart/form-data",
//         ...headers,
//       },
//       data,
//     });

//     return response;
//   } catch (error) {
//     if (error.response?.status === 401 && error.response?.data?.error === "TokenExpiredError") {
//       try {
//         const newAccessToken = await refreshAccessToken();
//         if (newAccessToken) {
//           const retryResponse = await axios({
//             method,
//             url,
//             headers: {
//               "Content-Type": !isMultipart ? "application/json" : "multipart/form-data",
//               ...headers,
//               Authorization: `Bearer ${newAccessToken}`,
//             },
//             data,
//           });

//           return retryResponse;
//         } else {
//           // Handle the case where token refresh fails
//           throw new Error("Token refresh failed");
//         }
//       } catch (refreshError) {
//         // Handle the case where the refresh request itself fails
//         throw refreshError;
//       }
//     } else {
//       // Handle other errors (not related to token expiration or refresh)
//       throw error;
//     }
//   }
// }

// async function refreshAccessToken() {
//   const refresh_token = localStorage.getItem("iseRefreshToken");

//   if (refresh_token) {
//     try {
//       const refreshResponse = await axios.post(
//         `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/auth/refresh`,
//         {
//           refresh_token
//         }
//       );

//       const newAccessToken = refreshResponse.data?.accessToken;

//       localStorage.setItem("iseAccessToken", newAccessToken);

//       return newAccessToken;
//     } catch (refreshError) {
//       console.error("Error refreshing token:", refreshError);
//       throw refreshError;
//     }
//   } else {
//     throw new Error("No refresh token available");
//   }
// }
