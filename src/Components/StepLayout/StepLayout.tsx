import React from 'react'
import { useSearchParams } from 'react-router-dom'
import classes from './StepLayout.module.css'

type StepLayoutTypes = {
  children: React.ReactNode
  steps: number[]
  notShowHeader?: boolean
}

const StepLayout = ({ children, steps, notShowHeader }: StepLayoutTypes) => {
  // Router
  const [searchParams] = useSearchParams()
  const userStep = searchParams.get('step')

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {!notShowHeader && (
          <div className={classes.stepIndicator}>
            {steps.map((data) => {
              return (
                <div
                  className={`${classes.step} ${
                    userStep && userStep >= data.toString()
                      ? classes.active
                      : classes.inActive
                  }`}
                  key={data}
                >
                  <hr />
                  <span>{data}</span>
                </div>
              )
            })}
          </div>
        )}
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  )
}

export default StepLayout
