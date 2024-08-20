import { useNavigate, useParams } from 'react-router-dom'
import classes from './CreateCurricullim.module.css'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import { useContext, useState } from 'react'
import { CourseContext } from '../../Context/CourseContext'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'

const CreateCurricullim = () => {
  // Router
  const navigate = useNavigate()
  const { courseId } = useParams()

  //   Context
  const { requestState, createCurricullim } = useContext(CourseContext)

  // States
  const [title, setTitle] = useState('')

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div
          onClick={() => {
            navigate('/dashboard')
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 12L2.25 9M2.25 9L5.25 6M2.25 9L15.75 9"
              stroke="#2E2E2E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Back to dashboard</span>
        </div>
      </div>

      <div className={classes.body}>
        <div>
          <h4>Create a course curriculum</h4>
          <p>Add and organize your course content</p>

          <Input
            isRequired
            label="Course name"
            placeholder="Enter the course name"
            name="title"
            onChange={(e) => inputChangeHandler(e, setTitle, true)}
            value={title}
          />

          <div className={classes.buttonSection}>
            <Button
              type="secondary"
              onClick={() => {
                navigate(`/courses/${courseId}`)
              }}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18.5L18 6.5M6 6.5L18 18.5"
                  stroke="#664EFE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Close</span>
            </Button>

            <Button
              onClick={() => {
                createCurricullim(courseId as string, { title })
              }}
              disabled={!title}
              loading={requestState?.isLoading}
            >
              <span>Save and continue</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8L21 12M21 12L17 16M21 12L3 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCurricullim
