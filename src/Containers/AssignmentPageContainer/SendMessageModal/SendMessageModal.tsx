import Button from "../../../Components/Button/Button";
import DragAndDropInput from "../../../Components/DragAndDropInput/DragAndDropInput";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "./SendMessageModal.module.css";

type SendMessageModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const SendMessageModal = ({ onClick, onClick2 }: SendMessageModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>Send message to student</h4>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    onClick={onClick}
                >
                    <path
                        d="M12 36L36 12M12 12L36 36"
                        stroke="#2E2E2E"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className={classes.note}>
                <p>Engage with your student on their assignment. Share extra instructions, seek clarification, or discuss the results together.</p>
            </div>

            <div className={classes.textareaSection}>
                <TextArea
                    label="Leave  feedback * "
                    placeholder="Type your message here..."
                />
                <DragAndDropInput />
                <p className={classes.tip}>Adding screenshots can help us identify and fix bugs faster</p>
            </div>

            <div className={classes.footer}>
                <Button onClick={onClick} type="secondary">
                    <span>Cancel</span>
                </Button>
                <Button onClick={onClick2} type="primary">
                    <span>Send Message</span>
                </Button>
            </div>
        </div>
    );
};

export default SendMessageModal;
