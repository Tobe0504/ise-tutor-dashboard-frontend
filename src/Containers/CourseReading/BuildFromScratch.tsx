import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import classes from './CourseReading.module.css'
import Button from '../../Components/Button/Button'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody'
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody'
import AddLessonResourcesOptional from '../../Components/AddLessonResourcesOptional/AddLessonResourcesOptional'
import { uploadReadingData } from '../../Utilities/types'
import TipTap from '../../Components/TipTap/TipTap'
import { CourseContext } from '../../Context/CourseContext'
import { useParams } from 'react-router-dom'

type BuildFromScratchTypes = {
  readingData: uploadReadingData
  setReadingData: Dispatch<SetStateAction<uploadReadingData>>
  readingFormData: FormData
}

const BuildFromScratch = ({
  readingData,
  setReadingData,
  readingFormData,
}: BuildFromScratchTypes) => {
  // States
  const [displayDiscardModal, setDisplayDiscardModal] = useState(false)
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false)
  const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1)
  const [readingContent, setReadingContent] = useState('')

  //   Context
  const { createLesson, requestState } = useContext(CourseContext)

  // Router
  const { weekId } = useParams()

  //   Effects
  useEffect(() => {
    if (readingContent) {
      setReadingData((prevState) => {
        return { ...prevState, reading_contents: readingContent }
      })
    }
    // eslint-disable-next-line
  }, [readingContent])

  return (
    <>
      {displayDiscardModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDiscardModal(false)
          }}
          body={
            <DiscardModalBody
              onClick={() => {
                setDisplayDiscardModal(false)
              }}
              onClick2={() => {
                setDisplayDiscardModal(false)
                setSaveLessonAndContinue((prevValue) =>
                  prevValue > 1 ? prevValue - 1 : prevValue
                )
              }}
            />
          }
        />
      )}
      {displayDeleteModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeleteModal(false)
          }}
          body={
            <DeleteModalBody
              onClick={() => {
                setDisplayDeleteModal(false)
              }}
            />
          }
        />
      )}

      <div className={classes.bulkUpload}>
        <h1>Text Editor</h1>
        <TipTap state={readingContent} setState={setReadingContent} />
      </div>

      {(saveLessonAndContinue === 2 || saveLessonAndContinue === 3) && (
        <AddLessonResourcesOptional
          setReadingData={setReadingData}
          readingData={readingData}
        />
      )}

      <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
        <Button
          onClick={() => {
            if (saveLessonAndContinue < 2) {
              setSaveLessonAndContinue((prevState) => prevState + 1)
            } else {
              createLesson(weekId as string, readingFormData, 'reading')
            }
          }}
          disabled={!readingData.title && !readingData.reading_contents}
          className={saveLessonAndContinue === 3 ? classes.inactivePrimary : ''}
          loading={requestState.isLoading}
        >
          <span>Save lesson</span>
        </Button>
        <Button
          type="secondary"
          onClick={() => {
            setDisplayDiscardModal(true)
          }}
          className={
            saveLessonAndContinue === 3 ? classes.inactiveSecondary : ''
          }
        >
          <span>Discard changes</span>
        </Button>
        <Button
          onClick={() => {
            setDisplayDeleteModal(true)
          }}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5"
              stroke="#DC362E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Delete lesson</span>
        </Button>
      </div>
    </>
  )
}

export default BuildFromScratch
