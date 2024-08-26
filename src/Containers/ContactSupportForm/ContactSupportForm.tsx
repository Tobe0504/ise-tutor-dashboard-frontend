import Error from '../../Components/Error/Error'
import Input from '../../Components/Input/Input'
import TextArea from '../../Components/TextArea/TextArea'
import classes from './ContactSupportForm.module.css'
import contactSupportImage from '../../Assets/Images/contactSupport.svg'
import DragAndDropInput from '../../Components/DragAndDropInput/DragAndDropInput'
import Button from '../../Components/Button/Button'
import { useContext, useEffect, useState } from 'react'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import RequestSentModalBody from './RequestSentModalBody'
import { AppContext } from '../../Context/AppContext'
import { changeHandler } from '../../Utilities/inputChangeHandler'

const ContactSupportForm = () => {
  // COntext
  const {
    contactSupportHandler,
    contactSupport,
    setContactSupport,
    contactSupportHandlerObject,
  } = useContext(AppContext)

  // States
  const [requestSent, setRequestSent] = useState(false)
  const [file, setFile] = useState<any>()

  // Effects
  useEffect(() => {
    setContactSupport((prevState) => {
      return { ...prevState, image: file?.file }
    })

    // eslint-disable-next-line
  }, [file])

  useEffect(() => {
    if (contactSupportHandlerObject?.data) {
      setRequestSent(true)

      setContactSupport({
        subject: '',
        description: '',
        image: '',
      })
      setFile(null)
    } else {
      setRequestSent(false)
    }

    // eslint-disable-next-line
  }, [contactSupportHandlerObject?.data])

  return (
    <div className={classes.container}>
      {requestSent && (
        <AcceptedModal
          onClick={() => {
            setRequestSent(false)
          }}
          body={
            <RequestSentModalBody
              onClick={() => {
                setRequestSent(false)
              }}
            />
          }
        />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <h4>Still need help? We’re here for you</h4>
        <p>
          Share the important details with us. After you open a request, you can
          view and add updates via your email.
        </p>

        <Error type="success">
          Do not share sensitive information (attachments or text). Ex. Your
          credit card details or personal ID numbers.
        </Error>

        <Input
          label="Subject"
          isRequired
          placeholder="What is the subject of your support?"
          value={contactSupport.subject}
          onChange={(e) => {
            changeHandler(e, setContactSupport)
          }}
          name="subject"
        />

        <TextArea
          label="Description"
          isRequired
          placeholder="By providing the essential details, we can quickly resolve your request. "
          value={contactSupport.description}
          onChange={(e) => {
            changeHandler(e, setContactSupport)
          }}
          name="description"
        />

        <DragAndDropInput
          state={file}
          setState={setFile}
          acceptedFileTypes=".png, .jpg"
        />

        <p className={classes.tip}>
          Adding screenshots can help us identify and fix bugs faster
        </p>

        <div className={classes.buttonSection}>
          <Button
            onClick={(e) => {
              e.preventDefault()
              // setRequestSent(true);
              contactSupportHandler()
            }}
            disabled={!contactSupport.description || !contactSupport.subject}
            loading={contactSupportHandlerObject.isLoading}
          >
            Submit request
          </Button>
        </div>
      </form>
      <img src={contactSupportImage} alt="COntact support" />
    </div>
  )
}

export default ContactSupportForm
