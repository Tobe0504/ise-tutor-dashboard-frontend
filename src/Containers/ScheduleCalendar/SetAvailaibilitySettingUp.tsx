import { useSearchParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import classes from './SetAvailaibilitySettingUp.module.css'

type SetAvailaibilitySettingUpType = {
  onClick: () => void
}

const SetAvailaibilitySettingUp = ({
  onClick,
}: SetAvailaibilitySettingUpType) => {
  // Router
  const [, setSearchParams] = useSearchParams()
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Setting up your availability for 1-on-1 sessions</h2>
        <p>
          Welcome to our scheduling tool! To get started, you'll need to set
          your availability for 1-on-1 sessions with students. Here's a quick
          guide:
        </p>
      </div>

      <div className={classes.body}>
        <h4>Why 1-on-1 sessions matter:</h4>
        <p>
          Personalized 1-on-1 tutoring can significantly enhance student
          learning outcomes. By providing tailored instruction and support, you
          can help students:
        </p>
        <ul>
          <li>
            Close knowledge gaps: Identify and address specific areas where
            students may be struggling.
          </li>
          <li>
            Build confidence: Create a safe and supportive environment for
            students to ask questions.
          </li>
        </ul>
      </div>

      <div className={classes.buttonSection}>
        <Button type="secondary" onClick={onClick}>
          Close
        </Button>
        <Button
          onClick={() => {
            setSearchParams((prevState) => {
              return { ...prevState, step: 2 }
            })
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

export default SetAvailaibilitySettingUp
