import Button from '../Button/Button'
import classes from './CourseCard2.module.css'
import { useNavigate } from 'react-router-dom'

type CourseCard2Props = {
  title: string
  image: string
  description: string
  status: 'Published' | 'Draft' | 'Paid' | 'Pending'
  showButton?: boolean
  id?: number
  curricullumData?: any
}

const CourseCard2 = ({
  image,
  title,
  description,
  status,
  showButton = false,
  id,
  curricullumData,
}: CourseCard2Props) => {
  // Router
  const navigate = useNavigate()

  const statusClassName = {
    Published: classes.purple,
    Draft: classes.yellow,
    Paid: classes.yellow,
    Pending: classes.cyan,
  }

  const statusClass = statusClassName[status] || ''

  return (
    <>
      <div className={classes.container}>
        <img src={image} alt={title} />
        <div className={classes.textSection}>
          <div className={classes.upperSection}>
            <p>{title}</p>
            <span className={statusClass}>{status}</span>
          </div>
          <p>{description}</p>
          {showButton && (
            <div className={classes.footer}>
              <Button
                type="primary"
                onClick={() => {
                  navigate(`/courses/${String(id)}`)
                }}
              >
                See course details
              </Button>
              <Button
                type="secondary"
                onClick={() => {
                  if (curricullumData?.course_modules?.length > 0) {
                    navigate(
                      `/courses/${String(id)}/${
                        curricullumData?.id
                      }/create-module`
                    )
                  } else {
                    navigate(`/courses/${String(id)}/create-curricullum`)
                  }
                }}
              >
                {curricullumData?.course_modules?.length > 0
                  ? 'Create modules'
                  : 'Create curriculum'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CourseCard2
