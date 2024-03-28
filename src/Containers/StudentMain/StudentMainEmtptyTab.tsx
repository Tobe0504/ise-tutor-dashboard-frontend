import React from 'react'
import classes from './StudentMain.module.css'
import img from "../../Assets/Images/noModules.svg"

const StudentMainEmtptyTab = () => {
    return (
        <div className={classes.emptyTab}>
            <img src={img} alt="no result" />
            <h4>No students enrolled yet</h4>
            <p>Welcome to the student management section of your course dashboard. It looks like there are no students enrolled in your course at the moment. </p>
        </div>
    )
}

export default StudentMainEmtptyTab