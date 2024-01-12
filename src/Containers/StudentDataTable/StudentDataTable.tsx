import React, { useState } from 'react'
import classes from "./StudentDataTable.module.css"
import Checkbox from '../../Components/Checkbox/Checkbox';
import { useNavigate, useParams } from 'react-router-dom';

const StudentDataTable = () => {
    const navigate = useNavigate();
    const { studentId } = useParams();

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (newState: boolean) => {
        setIsChecked(newState);
    };

    const [students, setStudents] = useState([
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
        {
            status: handleCheckboxChange,
            studentName: "Rico Chukwuuu",
            emailAddress: "evelynadeyemi@gmail.com",
            enrolledDate: "02 Aug, 2022",
        },
    ]);


    return (
        <section className={classes.container}>
            <div className={classes.body}>
                <div>
                    <div className={classes.tableHeader}>
                        <span>Student name</span>
                        <span>Email address</span>
                        <span>Enrollment date</span>
                    </div>

                    {students.map((data, i) => {
                        return (
                            <div key={Math.random()} className={classes.tableBody}>
                                <div>
                                    <Checkbox isChecked={isChecked} onChange={data.status} />
                                    <span>{data.studentName}</span>
                                </div>
                                <span>{data.emailAddress}</span>
                                <span>{data.enrolledDate}</span>
                                <span onClick={() => { navigate(`/student/details/${data.studentName}`)}}>View</span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}

export default StudentDataTable
