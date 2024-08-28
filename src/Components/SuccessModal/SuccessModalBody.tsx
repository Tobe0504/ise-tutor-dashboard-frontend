import classes from './SuccessModalBody.module.css'
import success from '../../Assets/Gifs/success.gif'
import Button from '../../Components/Button/Button'

type SuccessModalBodyType = {
  header: string
  caption: string
  gif?: string
  onClick?: () => void
}

const SuccessModalBody = ({
  header,
  caption,
  gif,
  onClick,
}: SuccessModalBodyType) => {
  return (
    <div className={classes.container}>
      <img src={gif || success} alt="Success message" />
      <h2> {header || 'Successfully'} </h2>
      <p>{caption}</p>
      <div className={classes.buttonSection}>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  )
}

export default SuccessModalBody
