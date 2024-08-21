import classes from './CourseModuleAssessment.module.css'
import BulkUploadComponent from './BulkUploadComponent'

const CourseModuleAssessment = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.sectionsNavSection}>
          <BulkUploadComponent />
        </div>
      </div>
    </div>
  )
}

export default CourseModuleAssessment
