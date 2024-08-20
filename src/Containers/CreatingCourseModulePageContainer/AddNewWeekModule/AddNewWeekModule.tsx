import { useContext, useState } from 'react'
import Button from '../../../Components/Button/Button'
import classes from '../CreatingCourseModulePageContainer.module.css'
import Input from '../../../Components/Input/Input'
import { useNavigate, useParams } from 'react-router-dom'
import { inputChangeHandler } from '../../../HelperFunctions/inputChangeHandler'
import { CourseContext } from '../../../Context/CourseContext'

const AddNewWeekModule = () => {
  const navigate = useNavigate()

  const { createWeek, requestState } = useContext(CourseContext)

  //   States
  const [weekData, setWeekData] = useState({
    title: '',
  })

  // Router
  const { courseId, curriculumId, moduleId } = useParams()

  console.log(courseId, curriculumId, moduleId)

  return (
    <div className={classes.addModules}>
      <h3>Add new week to this module</h3>
      <p>
        Use weeks to give your modules a timeframe to guide course completion
      </p>
      <Input
        isRequired
        label="Week title"
        placeholder="E.g Week 1: Data Structures"
        value={weekData.title}
        name="title"
        onChange={(e) => inputChangeHandler(e, setWeekData)}
      />
      <div className={classes.addModulesBottom}>
        <div>
          <svg
            onClick={() => navigate('/support')}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#2E2E2E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Button type="secondary" onClick={() => navigate(-1)}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 16.5L3 12.5M3 12.5L7 8.5M3 12.5L21 12.5"
              stroke="#664EFE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Back</span>
        </Button>
        <Button
          type="primary"
          onClick={() => {
            createWeek(
              courseId as string,
              curriculumId as string,
              moduleId as string,
              weekData
            )
          }}
          disabled={!weekData.title}
          loading={requestState.isLoading}
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default AddNewWeekModule
