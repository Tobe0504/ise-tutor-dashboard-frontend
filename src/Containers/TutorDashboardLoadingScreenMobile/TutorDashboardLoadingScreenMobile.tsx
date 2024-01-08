import { Skeleton } from '@mui/material';
import iseLogo from '../../Assets/Images/iseLogo.svg'
import classes from './TutorDashboardLoadingScreenMobile.module.css'


const TutorDashboardLoadingScreenMobile = () => {
  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
        </header>
        <main className={classes.body}>
          <div className={classes.bodyHeaderLoader}>
            <Skeleton variant="rounded" height={9} />
            <Skeleton variant="rounded" height={6} />
          </div>
          <section>
            <div className={`${classes.bodyHeaderLoader} ${classes.bodyContentContainer}`}>
              <Skeleton variant="rounded" height={9} />
              <Skeleton variant="rounded" height={6} />
            </div>
            <div className={`${classes.bodyHeaderLoader} ${classes.bodyContentContainer}`}>
              <Skeleton variant="rounded" height={9} />
              <Skeleton variant="rounded" height={6} />
            </div>
            <div className={`${classes.bodyHeaderLoader} ${classes.bodyContentContainer}`}>
              <Skeleton variant="rounded" height={9} />
              <Skeleton variant="rounded" height={6} />
            </div>
            <div className={`${classes.bodyHeaderLoader} ${classes.bodyContentContainer}`}>
              <Skeleton variant="rounded" height={9} />
              <Skeleton variant="rounded" height={6} />
            </div>
            <div className={`${classes.bodyHeaderLoader} ${classes.bodyContentContainer}`}>
              <Skeleton variant="rounded" height={9} />
              <Skeleton variant="rounded" height={6} />
            </div>
            <div className={`${classes.bodyHeaderLoader} ${classes.bodyContentContainer}`}>
              <Skeleton variant="rounded" height={9} />
              <Skeleton variant="rounded" height={6} />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default TutorDashboardLoadingScreenMobile
