import classes from './Delete&Discard.module.css'
import Delete from '../../Assets/Images/deleteModalImage.svg'
import Button from '../../Components/Button/Button'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

type DeleteModalBodyProps = {
  onClick: () => void
  onClick2?: () => void
  caption?: string
}

const DeleteModalBody = ({
  onClick,
  caption,
  onClick2,
}: DeleteModalBodyProps) => {
  const { setCurrentStep } = useContext(AppContext)

  return (
    <div className={classes.modalContainer}>
      <img src={Delete} alt="Delete" />
      <h4>
        {caption || 'Are you sure you want to delete [First presentation]'}?
      </h4>
      <p>This lesson will be deleted permanently</p>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>
          No, keep lesson
        </Button>
        <Button onClick={onClick2}>Yes, delete lesson</Button>
      </div>
    </div>
  )
}

export default DeleteModalBody
