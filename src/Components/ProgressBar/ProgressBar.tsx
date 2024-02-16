import { CSSProperties } from 'react'
import classes from './ProgressBar.module.css'

type ProgressBarBarProps = {
  style?: CSSProperties
  subStyle?: CSSProperties
  percentage?: number
  color?: string
  notShowPercentage?: boolean
  progressBarStyle?: CSSProperties
  primaryColor?: string
  secondaryColor?: string
}

const ProgressBar = ({
  style,
  percentage,
  subStyle,
  color,
  notShowPercentage,
  progressBarStyle,
  primaryColor,
  secondaryColor,
}: ProgressBarBarProps) => {
  return (
    <div className={classes.container} style={style}>
      <div
        className={classes.progressBar}
        style={{
          ...progressBarStyle,
          background:
            (percentage as number) <= 49 && primaryColor
              ? primaryColor
              : (percentage as number) <= 49 && !primaryColor
              ? '#F4C3C0'
              : '#D4F8AC',
        }}
      >
        <div
          className={classes.progressIndicator}
          style={{
            ...subStyle,
            width: `${percentage as number}%`,
            background:
              (percentage as number) <= 49 && secondaryColor
                ? secondaryColor
                : (percentage as number) <= 49 && !secondaryColor
                ? '#E04A43'
                : '#57970C',
            borderRadius: '50px',
          }}
        ></div>
      </div>
      {!notShowPercentage && <p style={{ color }}>{percentage}% Completed </p>}
    </div>
  )
}

export default ProgressBar
