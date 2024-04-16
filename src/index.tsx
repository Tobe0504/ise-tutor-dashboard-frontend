import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContextProvider from './Context/AppContext'
import AuthUserContextProvider from './Context/AuthUserContext'
import StudentsContextProvider from './Context/StudentsContext '

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <AuthUserContextProvider>
      <AppContextProvider>
        <StudentsContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </StudentsContextProvider>
      </AppContextProvider>
    </AuthUserContextProvider>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
