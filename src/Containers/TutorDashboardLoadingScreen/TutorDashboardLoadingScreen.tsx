import classes from './TutorDashboardLoadingScreen.module.css'
import SideNavLoaderContainer from '../SideNavLoaderContainer/SideNavLoaderContainer'
import DashboardBodyLoaderContainer from '../DashboardBodyLoaderContainer/DashboardBodyLoaderContainer'

const TutorDashboardLoadingScreen = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.leftSection}>
          <SideNavLoaderContainer />
        </div>
        <div className={classes.rightSection}>
          <div className={classes.header}></div>
          <div className={classes.body}>
            <DashboardBodyLoaderContainer />
          </div>
        </div>
      </section>
    </>
  )
}

export default TutorDashboardLoadingScreen
