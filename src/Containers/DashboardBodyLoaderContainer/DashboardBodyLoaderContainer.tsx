import classes from './DashboardBodyLoaderContainer.module.css'

const DashboardBodyLoaderContainer = () => {
  return (
    <div className={classes.container}>
      <section className={classes.leftSection}>
        <div className={classes.contentSection}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.contentSection}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className={classes.rightSection}>
        <div></div>
      </section>
    </div>
  )
}

export default DashboardBodyLoaderContainer
