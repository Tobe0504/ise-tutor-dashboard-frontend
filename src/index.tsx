import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContextProvider from './Context/AppContext'
import AuthUserContextProvider from './Context/AuthUserContext'
import StudentsContextProvider from './Context/StudentsContext '
import Toast2 from './Components/Toast2/Toast2'
import UseSWRConfigProvider from './Configs/UseSWRConfig'
import CourseContextProvider, { CourseContext } from './Context/CourseContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <UseSWRConfigProvider>
      <AppContextProvider>
        <AuthUserContextProvider>
          <StudentsContextProvider>
            <CourseContextProvider>
              <React.StrictMode>
                <Toast2>
                  <App />
                </Toast2>
              </React.StrictMode>
            </CourseContextProvider>
          </StudentsContextProvider>
        </AuthUserContextProvider>
      </AppContextProvider>
    </UseSWRConfigProvider>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
