import classes from './Header.module.css'
import iseLogo from '../../Assets/Images/iseLogo.svg'
import { useContext, useRef } from 'react'
import HeaderSideNav from '../HeaderSideNav/HeaderSideNav'
import { useNavigate } from 'react-router-dom'
import { AuthUserContext } from '../../Context/AuthUserContext'
import noProfileImage from '../../Assets/Images/noProfileImage.svg'

type HeaderTypes = {
  closeSideNavProp: boolean | undefined
}

const Header = ({ closeSideNavProp }: HeaderTypes) => {
  // context
  const { getUserRequestObject } = useContext(AuthUserContext)

  // Refs
  const sideNav = useRef<null | HTMLDivElement>(null)

  // Router
  const navigate = useNavigate()

  // Utils
  const openSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = '100%'
    }
  }

  const closeSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = '0%'
    }
  }

  return (
    <section className={classes.container}>
      <img
        src={iseLogo}
        onClick={() => {
          navigate('/dashboard ')
        }}
        alt="Ise"
        className={classes.logo}
      />
      {!closeSideNavProp && (
        <div className={classes.inputSection}>
          <input type="text" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {closeSideNavProp && (
        <>
          <div>
            <img
              src={iseLogo}
              alt="Ise"
              onClick={() => {
                navigate('/dashboard ')
              }}
              className={classes.logoHeader}
            />
          </div>
          <div className={classes.inputSection}>
            <input type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#2E2E2E"
                strokeWidth="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </>
      )}
      <div className={classes.userSection}>
        <div className={classes.notitication}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
              stroke="#101828"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div></div>
        </div>
        <p>
          {`${getUserRequestObject?.data?.first_name} ${getUserRequestObject?.data?.last_name}`}{' '}
        </p>
        <img
          src={getUserRequestObject?.data?.profile_image || noProfileImage}
          alt="User"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className={classes.sideNavIndicator}
        onClick={openSideNav}
      >
        <path
          d="M4 6.5H20M4 12.5H20M4 18.5H20"
          stroke="#2E2E2E"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6.5H20M4 12.5H20M4 18.5H20"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6.5H20M4 12.5H20M4 18.5H20"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} />
      </div>
    </section>
  )
}

export default Header
