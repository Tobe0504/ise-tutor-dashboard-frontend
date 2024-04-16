import classes from './ActionsModal.module.css'

type ActionsModalProps = {
   onClick: () => void
   onClick2?: () => void
}

const ActionsModal = ({
   onClick,
   onClick2,
}: ActionsModalProps) => {
   return (
      <div className={classes.container}>
         <span onClick={onClick}>Submit module</span>
         <span onClick={onClick2}>View feedback</span>
      </div>
   )
}

export default ActionsModal
