import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import TextArea from "../../Components/TextArea/TextArea";
import classes from "./SendMessageModal.module.css";

type SendMessageModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const SendMessageModal = ({ onClick, onClick2 }: SendMessageModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>Send a message </h4>
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className={classes.recipient}>
                <h4>Recipient(s)</h4>
                <div>
                    <span>Rico Chuwku (ricochuks11@gmail.com)</span>
                    <span>Rico Chuwku (ricochuks11@gmail.com)</span>
                    <span>Rico Chuwku (ricochuks11@gmail.com)</span>
                </div>
            </div>
            
            <div className={classes.textareaSection}>
                <Input 
                    label="Subject"
                    isRequired
                    placeholder="What is the subject of your message" />
                <TextArea
                    label="Leave  feedback * "
                    placeholder="Type your message here..."
                />
            </div>

            <div className={classes.footer}>
                <Button onClick={onClick}>
                    <span>Cancel</span>
                </Button>
                <Button onClick={onClick2}>
                    <span>Send Message</span>
                </Button>
            </div>
        </div>
    );
};

export default SendMessageModal;
