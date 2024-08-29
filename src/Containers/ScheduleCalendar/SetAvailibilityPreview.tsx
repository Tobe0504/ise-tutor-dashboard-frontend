import { useSearchParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import classes from './SetAvailibilityPreview.module.css'
import CalendarComponent from '../../Components/CalenderComponent/CalenderComponent'
import { availabilityType } from '../../Utilities/types'

type SetAvailibilityPreviewType = {
  availability: availabilityType
  onClick: () => void
}

const SetAvailibilityPreview = ({
  availability,
  onClick,
}: SetAvailibilityPreviewType) => {
  //   Router
  const [, setSearchParams] = useSearchParams()

  console.log(availability, 'Hmm')

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Preview your schedule</h4>
        <p>
          Ensure correct details of your availability is properly scheduled{' '}
        </p>
      </div>

      <CalendarComponent tasks={availability} />

      <div className={classes.buttonSection}>
        <Button type="null">Cancel schedule</Button>
        <Button
          type="secondary"
          onClick={() => {
            setSearchParams((prevState) => {
              return { ...prevState, step: '2' }
            })
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            setSearchParams((prevState) => {
              return { ...prevState, step: '3' }
            })
          }}
        >
          Save and continue
        </Button>
      </div>
    </div>
  )
}

export default SetAvailibilityPreview
