import classes from "./HeaderSideNav.module.css";
import amirahTemi from "../../Assets/Images/amirahTemi.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { sideNavIconsHandler } from "../SideNav/SideNav";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { activeToggler } from "../../HelperFunctions/activeTogglers"

type HeaderSideNavProps = {
  closeSideNav: () => void;
};

const HeaderSideNav = ({ closeSideNav }: HeaderSideNavProps) => {
  // Location
  const location = useLocation();

  const { navItmesState, setNavItemsState } = useContext(AppContext)

  return (
    <section className={classes.container}>
      <div className={classes.closeSideNavv}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={closeSideNav}
        >
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="#2E2E2E"
            strokeWidth="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={classes.userSection}>
        <img src={amirahTemi} alt="User" />
        <div>
          <p>Name of User</p>
          <p>@username</p>
        </div>
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

      <div className={classes.navSection}>
        {navItmesState.map((data, i) => {
          if (data.children) {
            return <div key={i}>
              <div key={i}
                className={
                  data.keywords?.includes(location.pathname.slice(1)) ||
                    data.route === location.pathname ||
                    data.route?.includes(location.pathname.split("/")[1])
                    ? classes.moreMenuContentActive
                    : classes.moreMenuContentInActive
                }>
                <Link to={data.route} className={classes.link}>
                  {sideNavIconsHandler(data.title)}</Link>

                <Link to={data.route} className={classes.link}>
                  <span>{data.title}</span></Link>

                <svg
                  onClick={() => {
                    activeToggler(i, navItmesState, setNavItemsState)
                  }}

                  style={data.isActive ? { transform: "rotate(-90deg)", transition: "all .3s ease-in-out" } : { transform: "rotate(0deg)", transition: "all .3s ease-in-out" }}
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9L12 16L5 9" stroke="#2E2E2E" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={classes.otherOptions} style={data.isActive ? { maxHeight: "1000px" } : { maxHeight: "0px" }}>
                {data.children.map((datum: any, j: number) => {
                  return <Link
                    to={datum.route}
                    key={j}
                    className={location.pathname === datum.route ? `${classes.otherOptionsLinkActive}` : classes.link}
                  >
                    {datum.title}
                  </Link>
                })}
              </div>
            </div>
          }
          return (
            <Link
              to={data.route as string}
              key={i}
              className={
                data.keywords?.includes(location.pathname.slice(1)) ||
                  data.route === location.pathname ||
                  data.route?.includes(location.pathname.split("/")[1])
                  ? classes.active
                  : classes.inActive
              }
            >
              {sideNavIconsHandler(data.title)}
              <span>{data.title}</span>
            </Link>
          );
        })}
        <div className={classes.logout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 16L7 12M7 12L11 8M7 12L21 12M16 16V17C16 18.6569 14.6569 20 13 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H13C14.6569 4 16 5.34315 16 7V8"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Logout</span>
        </div>
      </div>
    </section>
  );
};

export default HeaderSideNav;
