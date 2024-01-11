import React, { useState } from 'react'
import classes from "./StudentDataTable.module.css"
import { Link } from 'react-router-dom';
import Checkbox from '../../Components/Checkbox/Checkbox';

const StudentDataTable = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (newState: boolean) => {
        setIsChecked(newState);
    };

    const [assignments, setAssignments] = useState([
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

    const filterItems = (id: number) => {
        const assignmentsCopy = assignments.filter((data, i) => {
            return i !== id;
        });

        setAssignments(assignmentsCopy);
    };

    return (
        <section className={classes.container}>
            <div className={classes.body}>
                <div>
                    <div className={classes.tableHeader}>
                        <span>Student name</span>
                        <span>Email address</span>
                        <span>Enrollment date</span>
                    </div>

                    {assignments.map((data, i) => {
                        return (
                            <div key={Math.random()} className={classes.tableBody}>
                                <div>
                                    <Checkbox isChecked={isChecked} onChange={data.status} />
                                    <span>{data.studentName}</span>
                                </div>
                                <span>{data.emailAddress}</span>
                                <span>{data.enrolledDate}</span>
                                <span
                                    onClick={() => {
                                        filterItems(i);
                                    }}
                                >
                                    <Link to="">view</Link>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}

export default StudentDataTable
