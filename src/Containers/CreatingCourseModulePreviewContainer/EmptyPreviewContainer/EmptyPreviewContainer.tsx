import { useNavigate } from 'react-router-dom'
import Button from '../../../Components/Button/Button'
import classes from './EmptyPreviewContainer.module.css'

const EmptyPreviewContainer = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.container}>
      <h2>Customer Success Management</h2>
      <div className={classes.body}>
        <h4>No curriculum yet</h4>
        <p>You haven’t added any sections and lessons to this course yet.</p>
        <Button
          onClick={() => {
            navigate('/courses/create-module')
          }}
        >
          <span>Add lesson content</span>
        </Button>
      </div>
    </div>
  )
}

export default EmptyPreviewContainer
