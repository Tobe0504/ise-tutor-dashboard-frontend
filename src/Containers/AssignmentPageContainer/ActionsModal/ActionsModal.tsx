import classes from './ActionsModal.module.css'

type ActionsModalProps = {
   onClick: () => void
   onClick2?: () => void
   onClick3?: () => void
   onClick4?: () => void
   onClick5?: () => void
}

const ActionsModal = ({
   onClick,
   onClick2,
   onClick3,
   onClick4,
   onClick5,
}: ActionsModalProps) => {
   return (
      <div className={classes.container}>
         <span onClick={onClick}>View submission</span>
         <span onClick={onClick2}>Approve submission</span>
         <span onClick={onClick3}>Reject submission</span>
         <span onClick={onClick4}>Send message</span>
         <span onClick={onClick5}>View details</span>
      </div>
   )
}

export default ActionsModal
