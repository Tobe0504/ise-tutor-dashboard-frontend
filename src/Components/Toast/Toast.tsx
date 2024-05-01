import classes from './Toast.module.css'

type ToastProps = {
  toastMessage: string
  onClick: () => void
}

const Toast = ({ onClick, toastMessage }: ToastProps) => {
  return (
    <div className={classes.toast}>
      <p>{toastMessage}</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          d="M2 22L22 2M2 2L22 22"
          stroke="#011627"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}

export default Toast
