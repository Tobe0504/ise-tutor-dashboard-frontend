import React, { useState } from 'react'
import classes from "./StudentDataTable.module.css"
import { Link } from 'react-router-dom';

const StudentDataTable = () => {
    const [assignments, setAssignments] = useState([
        {
            name: "Amirah Oyegoke",
            submittedFile: "Assignment1.pdf",
            dateAdded: "04-Sept-23",
        },
        {
            name: "Amirah Oyegoke",
            submittedFile: "Assignment1.pdf",
            dateAdded: "04-Sept-23",
        },
        {
            name: "Amirah Oyegoke",
            submittedFile: "Assignment1.pdf",
            dateAdded: "04-Sept-23",
        },
        {
            name: "Amirah Oyegoke",
            submittedFile: "Assignment1.pdf",
            dateAdded: "04-Sept-23",
        },
        {
            name: "Amirah Oyegoke",
            submittedFile: "Assignment1.pdf",
            dateAdded: "04-Sept-23",
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
                        <span>Name</span>
                        <span>Submitted File</span>
                        <span>Date</span>
                        <span>Action</span>
                    </div>

                    <div className={classes.bodyContent}>
                        {assignments.map((data, i) => {
                            return (
                                <div key={Math.random()} className={classes.tableBody}>
                                    <span>{data.name}</span>
                                    <span>{data.submittedFile}</span>
                                    <span>{data.dateAdded}</span>
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
            </div>

        </section>
    );
}

export default StudentDataTable
