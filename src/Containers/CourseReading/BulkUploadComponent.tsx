import Button from '../../Components/Button/Button'
import DragAndDropInput from '../../Components/DragAndDropInput/DragAndDropInput'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody'
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody'
import AddLessonResourcesOptional from '../../Components/AddLessonResourcesOptional/AddLessonResourcesOptional'
import classes from './CourseReading.module.css'
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { assetsType, uploadReadingData } from '../../Utilities/types'
import { CourseContext } from '../../Context/CourseContext'
import { useParams } from 'react-router-dom'

type BulkUploadComponentTypes = {
  readingData: uploadReadingData
  setReadingData: Dispatch<SetStateAction<uploadReadingData>>
  readingFormData: FormData
}

const BulkUploadComponent = ({
  readingData,
  setReadingData,
  readingFormData,
}: BulkUploadComponentTypes) => {
  // States
  const [displayDiscardModal, setDisplayDiscardModal] = useState(false)
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false)
  const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1)
  const [bulkUpload, setBulkUpload] = useState<assetsType>({
    frontendFile: '',
    file: null,
  })

  // Context
  const { createLesson, requestState } = useContext(CourseContext)

  // Router
  const { weekId } = useParams()

  // Effects
  useEffect(() => {
    if (bulkUpload.file) {
      setReadingData((prevState) => {
        return { ...prevState, file: bulkUpload.file }
      })
    }

    // eslint-disable-next-line
  }, [bulkUpload.file])

  useEffect(() => {
    if (requestState?.data) {
      setReadingData({
        title: '',
        reading_contents: '',
        file: null,
        resources: [],
      })
    }

    // eslint-disable-next-line
  }, [requestState?.data])

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
        {(saveLessonAndContinue === 1 || saveLessonAndContinue === 2) && (
          <ul>
            <li>
              The contents of the file will automatically be used to create the
              reading content.
            </li>
            <li>
              Keep the file size below 10 MB to ensure quick loading and smooth
              access for your students.
            </li>
          </ul>
        )}
        {saveLessonAndContinue === 1 && (
          <>
            <DragAndDropInput
              acceptedFileTypes=".pdf,.doc,.docx"
              state={bulkUpload}
              setState={setBulkUpload}
              multiple
            />
            <p className={classes.info}>
              You can upload files with the extensions: doc, pdf
            </p>
          </>
        )}

        {saveLessonAndContinue === 2 && (
          <div className={classes.textEditor}>
            <div className={classes.textEditorHeader}>
              <h4>Uploaded files</h4>
            </div>
            {Array.from(bulkUpload?.file).map((data: any) => {
              return <div className={classes.files}>{data?.name}</div>
            })}
          </div>
        )}
      </div>
      {saveLessonAndContinue === 2 && (
        <AddLessonResourcesOptional
          setReadingData={setReadingData}
          readingData={readingData}
        />
      )}

      <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
        <Button
          onClick={() => {
            if (saveLessonAndContinue < 2) {
              setSaveLessonAndContinue((prevValue) => prevValue + 1)
            } else {
              createLesson(weekId as string, readingFormData, 'reading')
            }
          }}
          loading={requestState.isLoading}
          disabled={!readingData?.file || !readingData?.title}
          className={saveLessonAndContinue === 4 ? classes.inactivePrimary : ''}
        >
          <span>Save lesson</span>
        </Button>
        <Button
          type="secondary"
          onClick={() => {
            setDisplayDiscardModal(true)
          }}
          className={
            saveLessonAndContinue === 4 ? classes.inactiveSecondary : ''
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

export default BulkUploadComponent
