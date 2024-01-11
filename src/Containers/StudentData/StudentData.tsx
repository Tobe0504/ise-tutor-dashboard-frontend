import React, { useState } from 'react'
import classes from "./StudentData.module.css"
import Checkbox from '../../Components/Checkbox/Checkbox'
import email from "../../Assets/Images/emailIcon.svg"
import StudentModules from '../StudentModules/StudentModules'

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
            <div className={classes.body}>
                <StudentModules />
            </div>
        </section>
    )
}

export default StudentData
