import classes from './ErrorContainer.module.css'
import noModules from '../../Assets/Images/noModules.svg'
import Button from '../Button/Button'

type ErrorContainerTypes = {
  paragraph?: string
  fallback: () => void
}

const ErrorContainer = ({ paragraph, fallback }: ErrorContainerTypes) => {
  return (
    <section className={classes.container}>
      <img src={noModules} alt="Error" />

      <h4>Error </h4>
      <p>
        {paragraph ||
          'There was an error loading this page, please check your connection and retry'}
      </p>
      <Button onClick={fallback}>Retry</Button>
    </section>
  )
}

export default ErrorContainer
