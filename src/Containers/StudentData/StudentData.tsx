import classes from "./StudentData.module.css"
import Checkbox from '../../Components/Checkbox/Checkbox'
import email from "../../Assets/Images/emailIcon.svg"
import StudentModules from '../StudentModules/StudentModules'
import { useState } from "react"

const StudentData = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (newState: boolean) => {
        setIsChecked(newState);
    };

    return (
        <section className={classes.container}>
            <div className={classes.header}>
                <div>
                    <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
                    <span>Select</span>
                </div>
                <div>
                    <img src={email} alt="Send email to student" />
                    <span>Email</span>
                </div>
                <div>
                    <p>1-5 of 5 students</p>
                </div>
            </div>
            <div className={classes.divider}></div>
            <StudentModules />
            <div className={classes.divider}></div>
            <div className={classes.pageButtons}>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M15 19L8 12L15 5"
                            stroke="#d8d8d8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <button>1</button>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9 5L16 12L9 19"
                            stroke="#d8d8d8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </section>
    )
}

export default StudentData
