import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import StepLayout from '../../Components/StepLayout/StepLayout'
import SetAvailaibilitySettingUp from './SetAvailaibilitySettingUp'
import classes from './SetAvailaibilityModalBody.module.css'
import SetAvailaibilityScheduleSettings from './SetAvailaibilityScheduleSettings'

type SetAvailaibilityModalBodyType = {
  onClick: () => void
}

const SetAvailaibilityModalBody = ({
  onClick,
}: SetAvailaibilityModalBodyType) => {
  // Router
  const [searchParams, setSearchParams] = useSearchParams()
  const step = searchParams.get('step')

  //   Effects
  useEffect(() => {
    if (!step) {
      setSearchParams((prevState) => {
        return { ...prevState, step: 1 }
      })
    }
  }, [])
  return (
    <div className={classes.container}>
      <StepLayout steps={[1, 2, 3]}>
        {step === '1' && <SetAvailaibilitySettingUp onClick={onClick} />}
        {step === '2' && <SetAvailaibilityScheduleSettings onClick={onClick} />}
      </StepLayout>
    </div>
  )
}

export default SetAvailaibilityModalBody
