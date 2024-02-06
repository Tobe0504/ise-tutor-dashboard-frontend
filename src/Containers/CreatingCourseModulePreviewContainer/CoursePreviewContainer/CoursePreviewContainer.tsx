import { useNavigate } from 'react-router-dom'
import Button from '../../../Components/Button/Button'
import classes from './CoursePreviewContainer.module.css'
import ProgressBar from '../../../Components/ProgressBar/ProgressBar';

const CoursePreviewContainer = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p>You are previewing all course content</p>
                <Button
                    type='secondary'
                    onClick={() => { navigate('/courses/create-module') }}
                >
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00073 1L5.58989 4.58916M20.0007 19L16.4119 15.4112M12.8756 16.8246C12.2684 16.9398 11.6419 17 11.0012 17C6.52354 17 2.73324 14.0571 1.45898 9.99997C1.80588 8.8955 2.33924 7.87361 3.02217 6.97118M8.87941 7.87868C9.4223 7.33579 10.1723 7 11.0007 7C12.6576 7 14.0007 8.34315 14.0007 10C14.0007 10.8284 13.6649 11.5784 13.1221 12.1213M8.87941 7.87868L13.1221 12.1213M8.87941 7.87868L5.58989 4.58916M13.1221 12.1213L5.58989 4.58916M13.1221 12.1213L16.4119 15.4112M5.58989 4.58916C7.14971 3.58354 9.0073 3 11.0012 3C15.4788 3 19.2691 5.94291 20.5434 10C19.8365 12.2507 18.3553 14.1585 16.4119 15.4112" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Leave preview</span>
                </Button>
            </div>
            <div className={classes.body}>
                <div className={classes.leftSide}>
                    <div className={classes.top}>
                        <h4>Frontend Development Course</h4>
                        <ProgressBar percentage={15} color="#fff" />
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.moduleTitle}>
                            <h4>Introduction to Data Analysis</h4>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9L12 16L5 9" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className={classes.week}>
                            <div className={classes.courseFile}>
                                <p>First Reading</p>
                                <p>
                                    <span>Reading</span> .
                                    <span>5min</span>
                                </p>
                            </div>
                            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 10H5M7 14H5M13 6H5M17 5.8V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H12.2C13.8802 1 14.7202 1 15.362 1.32698C15.9265 1.6146 16.3854 2.07354 16.673 2.63803C17 3.27976 17 4.11984 17 5.8Z" stroke="#FDC500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <div className={classes.top}>
                        <h3>Introduction to Data Analysis</h3>
                        <p>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0059 6.5V10.5L13.0059 13.5M19.0059 10.5C19.0059 15.4706 14.9764 19.5 10.0059 19.5C5.0353 19.5 1.00586 15.4706 1.00586 10.5C1.00586 5.52944 5.0353 1.5 10.0059 1.5C14.9764 1.5 19.0059 5.52944 19.0059 10.5Z" stroke="#2BA792" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>5mins</span>
                        </p>
                    </div>
                    <div className={classes.bottom}>
                        <p>Data analysis is a fundamental skill in the modern world, as data has become a ubiquitous part of our daily lives. Whether you are working in business, science, healthcare, or any other field, the ability to extract meaningful insights from data is invaluable. In this reading note, we will explore the key concepts and principles of data analysis.</p>
                        <div className={classes.info}>
                            <div>
                                <h4>Understanding Data:</h4>
                                <p>Data analysis begins with a clear understanding of what data is. Data can be any collection of facts, figures, or information, often in numerical form. It can be structured, like tables in a database, or unstructured, like text documents or images. Understanding the nature and context of your data is crucial, as it determines the methods and techniques you will use for analysis.</p>
                            </div>
                            <div>
                                <h4>Data Analysis Process</h4>
                                <p>Data analysis typically follows a structured process, which includes data collection, data cleaning, data exploration, data modeling, and data visualization. Each of these steps is essential for uncovering insights and patterns within the data. Data cleaning, in particular, involves identifying and addressing errors, missing values, and outliers that can skew the analysis.</p>
                            </div>
                            <div>
                                <h4>Tools and Techniques</h4>
                                <p>Various tools and techniques are available for data analysis, ranging from spreadsheet software like Excel to programming languages like Python and specialized data analysis platforms such as R. The choice of tools depends on the complexity of the analysis and your familiarity with them. It's important to learn how to use these tools effectively and to choose the right techniques for different types of data and questions.</p>
                            </div>
                            <div>
                                <h4>Tools and Techniques</h4>
                                <p>Various tools and techniques are available for data analysis, ranging from spreadsheet software like Excel to programming languages like Python and specialized data analysis platforms such as R. The choice of tools depends on the complexity of the analysis and your familiarity with them. It's important to learn how to use these tools effectively and to choose the right techniques for different types of data and questions.</p>
                            </div>
                            <div>
                                <h4>Conclusion</h4>
                                <p>Data analysis is a crucial skill for making informed decisions and solving complex problems. Whether you are a business analyst, a scientist, or simply someone interested in understanding the world better, the principles of data analysis will empower you to extract meaningful insights from the vast sea of data that surrounds us. In the following lessons, we will delve deeper into the various aspects of data analysis, equipping you with the knowledge and skills needed to harness the power of data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePreviewContainer