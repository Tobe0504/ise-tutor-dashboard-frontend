import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import Button from '../../../Components/Button/Button'
import { AppContext } from '../../../Context/AppContext'
import classes from '../CreatingCourseModulePageContainer.module.css'
import Input from '../../../Components/Input/Input'
import TextArea from '../../../Components/TextArea/TextArea'
import { useNavigate, useParams } from 'react-router-dom'
import { inputChangeHandler } from '../../../HelperFunctions/inputChangeHandler'
import { CourseContext } from '../../../Context/CourseContext'
import { moduleDataType } from '../../../Utilities/types'

const AddModuleDetails = () => {
  // Router
  const navigate = useNavigate()
  const { curriculumId, courseId } = useParams()

  // Context
  const { setCurrentStepAndSave } = useContext(AppContext)
  const { createModule, requestState } = useContext(CourseContext)

  // States
  const [moduleData, setModuleData] = useState<moduleDataType>({
    title: '',
    objective: [''],
    description: '',
  })

  const [objective, setObjective] = useState<string[]>([''])

  useEffect(() => {
    if (objective.length > 1) {
      setModuleData((prevState: moduleDataType) => {
        return { ...prevState, objective }
      })
    }
  }, [objective])

  return (
    <div className={classes.addModules}>
      <h3>Add module details </h3>
      <p>Help students understand a module clearly with additional details.</p>
      <Input
        isRequired
        label="Add module title"
        placeholder="E.g Module 1: Introduction to Frontend Development "
        name="title"
        value={moduleData.title}
        onChange={(e) => {
          inputChangeHandler(e, setModuleData)
        }}
        tip="Give modules names for organisation and easy learning "
      />
      <TextArea
        isRequired
        label="Module description"
        placeholder="E.g In this module, you will learn about the different types of web developers and the roles and responsibilities of front-end,
        back-end, and full-stack developers. You will take a first look at the core technologies of HTML, CSS, and Javascript and 
       explore the concepts that underpin how the internet works. "
        name="description"
        value={moduleData?.description}
        onChange={(e) => {
          inputChangeHandler(e, setModuleData)
        }}
        tip="Summarise what the module includes for easy understanding "
      />

      {objective?.map((data, i) => {
        return (
          <div className={classes.inputSet}>
            <Input
              key={i}
              isRequired
              label={
                i === 0
                  ? 'Module objective * (Write a list of  what your students should learn at the end of this module) '
                  : ''
              }
              placeholder="E.g Understand the basics of frontend development"
              onChange={(e) => {
                setObjective((prevState) => {
                  const updatedDescription = [...prevState]
                  updatedDescription[i] = e.target.value
                  return updatedDescription
                })
              }}
              value={data}
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setObjective((prevState) => {
                  if (prevState.length > 1) {
                    const filteredArray = prevState?.filter(
                      (filter: string) => {
                        return filter !== data
                      }
                    )

                    return filteredArray
                  } else {
                    return ['']
                  }
                })
              }}
            >
              <path
                d="M6 18.5L18 6.5M6 6.5L18 18.5"
                stroke="#2E2E2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )
      })}

      <Button
        type="null"
        onClick={() => {
          setObjective((prevState) => {
            if (prevState.length > 0) {
              return [...prevState, '']
            } else {
              return ['']
            }
          })
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V20M20 12L4 12"
            stroke="#664EFE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Add more objectives</span>
      </Button>

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
        <Button type="secondary" onClick={() => setCurrentStepAndSave(4)}>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Close</span>
        </Button>
        <Button
          type="primary"
          onClick={() => {
            createModule(courseId as string, curriculumId as string, moduleData)
          }}
          loading={requestState.isLoading}
          disabled={
            !moduleData?.description ||
            moduleData?.objective.length < 1 ||
            !moduleData?.title
          }
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

export default AddModuleDetails
