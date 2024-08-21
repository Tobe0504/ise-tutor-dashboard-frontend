import Button from '../../Components/Button/Button'
import DragAndDropInput from '../../Components/DragAndDropInput/DragAndDropInput'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody'
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody'
import AddLessonResourcesOptional from '../../Components/AddLessonResourcesOptional/AddLessonResourcesOptional'
import classes from './CoursePresentation.module.css'
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import Toast from '../../Components/Toast/Toast'
import { assetsType, uploadPresentationData } from '../../Utilities/types'
import { CourseContext } from '../../Context/CourseContext'
import { useParams } from 'react-router-dom'

type BulkUploadComponentTypes = {
  uploadPresentationData: uploadPresentationData
  setUploadPresentationData: Dispatch<SetStateAction<uploadPresentationData>>
  presentationFormData: FormData
}

const BulkUploadComponent = ({
  uploadPresentationData,
  setUploadPresentationData,
  presentationFormData,
}: BulkUploadComponentTypes) => {
  // States
  const [displayDiscardModal, setDisplayDiscardModal] = useState(false)
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false)
  const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1)
  const [presentationFile, setPresentationFiles] = useState<assetsType>({
    frontendFile: '',
    file: null,
  })

  //   Context
  const { createLesson, requestState } = useContext(CourseContext)

  // Router
  const { weekId } = useParams()

  //   Effects
  useEffect(() => {
    if (presentationFile.file) {
      setUploadPresentationData((prevState) => {
        return { ...prevState, presentation_content: presentationFile.file }
      })
    }
  }, [presentationFile.file])

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
                setUploadPresentationData({
                  title: '',
                  resources: [],
                  presentation_content: null,
                })
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
        <ul>
          <li>There is a file size limit of 25MB</li>
          <li>Keep slides under 20 for increased student engagement.</li>
        </ul>
        {saveLessonAndContinue === 1 && (
          <>
            <DragAndDropInput
              acceptedFileTypes=".pptx,.pdf"
              state={presentationFile}
              setState={setPresentationFiles}
            />
            <p className={classes.info}>
              You can upload files with the extensions: pptx, pdf
            </p>
          </>
        )}

        {saveLessonAndContinue === 2 &&
          uploadPresentationData.presentation_content && (
            <div className={classes.fileUpload}>
              <h3>Uploaded File</h3>
              <div className={classes.file}>
                <div>
                  <p>{uploadPresentationData.presentation_content.name}</p>
                </div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setPresentationFiles({ file: null, frontendFile: '' })
                    setSaveLessonAndContinue((prevState) => prevState - 1)
                  }}
                >
                  <path
                    d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5"
                    stroke="#DC362E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
      </div>
      {saveLessonAndContinue === 2 && (
        <AddLessonResourcesOptional
          setReadingData={setUploadPresentationData}
          readingData={uploadPresentationData}
        />
      )}

      <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
        <Button
          onClick={() => {
            if (saveLessonAndContinue < 2) {
              setSaveLessonAndContinue((prevState) => prevState + 1)
            } else {
              createLesson(
                weekId as string,
                presentationFormData,
                'presentation'
              )
            }
          }}
          className={saveLessonAndContinue === 4 ? classes.inactivePrimary : ''}
          loading={requestState?.isLoading}
          disabled={
            !uploadPresentationData.title ||
            !uploadPresentationData.presentation_content
          }
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
