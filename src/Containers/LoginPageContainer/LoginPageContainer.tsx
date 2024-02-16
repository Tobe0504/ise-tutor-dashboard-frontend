import classes from './LoginPageContainer.module.css'
import { Link } from 'react-router-dom'
import login from '../../Assets/Images/login.svg'
import iseLogo from '../../Assets/Images/iseLogo.svg'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import OnboardingLayout from '../../Components/OnboardingLayout/OnboardingLayout'
import { useContext } from 'react'
import { AuthUserContext } from '../../Context/AuthUserContext'
import Error from '../../Components/Error/Error'
import { capitalize } from '../../HelperFunctions/capitalize'

const LoginPageContainer = () => {
   // Context
   const { signIn, setUserLoginInfo, userLoginInfo, signInRequest } =
      useContext(AuthUserContext)

   // Router

   // Utils
   const changeHandler = (e: any) => {
      setUserLoginInfo((prevState) => {
         return {
            ...prevState,
            [e.target.name]: e.target.value,
         }
      })
   }

   return (
      <OnboardingLayout image={login}>
         <section className={classes.container}>
            <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
            <div className={classes.feedback}>
               {signInRequest.data && (
                  <Error type="success">
                     {capitalize(signInRequest?.data as string)}
                  </Error>
               )}

               {signInRequest.error && (
                  <Error type="error">
                     {capitalize(signInRequest?.error as string)}
                  </Error>
               )}
            </div>
            <div className={classes.header}>
               <h4>Welcome to iṣẹ́ Edtech</h4>
               <p>Login with the details sent to your email</p>
            </div>
            <form
               onSubmit={(e) => {
                  e.preventDefault()
               }}
            >
               <Input
                  label="Email"
                  isRequired
                  placeholder="name@gmail.com"
                  name="email"
                  value={userLoginInfo.email}
                  onChange={changeHandler}
               />
               <span>
                  <Input
                     label="Password"
                     isRequired
                     type="password"
                     placeholder="************"
                     name="password"
                     value={userLoginInfo.password}
                     onChange={changeHandler}
                  />
               </span>

               <div className={classes.rememberAndForgot}>
                  <div>
                     <input type="checkbox" id="remember" />
                     <span>Remember Me</span>
                  </div>
                  <Link to="/forgot-password">Forgot Password?</Link>
               </div>

               <div className={classes.buttonSection}>
                  <Button
                     onClick={() => {
                        // navigate('/tutor-complete-profile')
                        signIn()
                     }}
                     loading={signInRequest.isLoading}
                  >
                     <span>Log in</span>
                  </Button>
               </div>
            </form>
         </section>
      </OnboardingLayout>
   )
}

export default LoginPageContainer
