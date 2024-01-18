import React from 'react'
import classes from './CoursesPageContainer.module.css'
import InsightTab from '../../Components/InsightTab/InsightTab'

import StarIcon from '../../Assets/Images/starIcon.svg'
import educationBook from '../../Assets/Images/educationBook.svg'
import amirahTemi from '../../Assets/Images/amirahTemi.svg'
import assignCourseImage from '../../Assets/Images/assignCourseImage.svg'

import developmentCourse1 from '../../Assets/Images/developmentCourse1.png'
import developmentCourse2 from '../../Assets/Images/developmentCourse2.png'
import developmentCourse3 from '../../Assets/Images/developmentCourse3.png'
import StarRating from '../../Components/StarRating/StarRating'
import CourseCard2 from '../../Components/CourseCard2/CourseCard2'

const CoursesPageContainer = () => {
    const engagement = [
        {
            title: 'Enrolled students',
            totalNumber: 64,
            image: educationBook,
        },
        {
            title: 'Rejected modules',
            totalNumber: 4,
            image: StarIcon,
        },
        {
            title: 'All time rating',
            totalNumber: 4.3 / 5.0,
            image: StarIcon,
        },
    ]

    const developmentCourse = [
        {
            title: 'Frontend Development',
            image: developmentCourse1,
            status: 'Published',
        },
        {
            title: 'Backend Development',
            image: developmentCourse2,
            status: 'Pending',
        },
        {
            title: 'Artificial Intelligence',
            image: developmentCourse3,
            status: 'Draft',
        },
        {
            title: 'Frontend Development',
            image: developmentCourse1,
            status: 'Published',
        },
        {
            title: 'Backend Development',
            image: developmentCourse2,
            status: 'Pending',
        },
        {
            title: 'Artificial Intelligence',
            image: developmentCourse3,
            status: 'Draft',
        },
        {
            title: 'Frontend Development',
            image: developmentCourse1,
            status: 'Published',
        },
        {
            title: 'Backend Development',
            image: developmentCourse2,
            status: 'Pending',
        },
        {
            title: 'Artificial Intelligence',
            image: developmentCourse3,
            status: 'Draft',
        },
    ]

    const educationalAdministration = [
        {
            title: 'Edit curriculum',
            totalNumber: null,
        },
        {
            title: 'View course details',
            totalNumber: null,
        },
        {
            title: 'Assignment submissions',
            totalNumber: 12,
        },
    ]

    const educationalAdministrationFigure = [
        {
            title: 'Course cycle',
            totalNumber: 2,
        },
        {
            title: 'Enrolled students',
            totalNumber: 34,
        },
        {
            title: 'Reported issues',
            totalNumber: 17,
        },
        {
            title: 'Rating',
            totalNumber: 4.0,
        },
    ]

    const rateAndReview = [
        {
            name: 'Amirah Oyegoke',
            image: amirahTemi,
            ratingNumber: 4,
            date: '12 Jun 2023',
            likeTotal: 13,
            commentTotal: 2,
            reviewText:
                'This course is a goldmine. It is well thought out, the curriculum is properly curated. Thanks to the tutors and Ise Admin for creating a platform that i can use to build my tech career.',
        },
        {
            name: 'Amirah Oyegoke',
            image: amirahTemi,
            ratingNumber: 4,
            date: '12 Jun 2023',
            likeTotal: 13,
            commentTotal: 2,
            reviewText:
                'This course is a goldmine. It is well thought out, the curriculum is properly curated. Thanks to the tutors and Ise Admin for creating a platform that i can use to build my tech career.',
        },
        {
            name: 'Amirah Oyegoke',
            image: amirahTemi,
            ratingNumber: 4,
            date: '12 Jun 2023',
            likeTotal: 13,
            commentTotal: 2,
            reviewText:
                'This course is a goldmine. It is well thought out, the curriculum is properly curated. Thanks to the tutors and Ise Admin for creating a platform that i can use to build my tech career.',
        },
    ]

    const courses = [
        {
            title: "Project Management",
            image: assignCourseImage,
            description:
                "Master the skills needed to effectively plan, execute, and deliver successful projects, leading teams and stakeholders to achieve project goals.Master the skills needed to effectively plan, execute, and deliver successful projects, leading teams and stakeholders to achieve project goals.",
        },
    ];

    return (
        <div className={classes.container}>
            <div className={classes.firstContainer}>
                <div className={classes.engagement}>
                    <div>
                        {engagement.map((data, i) => {
                            return (
                                <InsightTab
                                    key={i}
                                    totalNumber={data.totalNumber}
                                    title={data.title}
                                    image={data.image}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className={classes.developmentCourse}>
                    <div className={classes.developmentCourseContent}>
                        {developmentCourse.map((data, i) => (
                            <InsightTab
                                key={i}
                                title={data.title}
                                image={data.image}
                                status={data.status}
                            />
                        ))}

                    </div>
                </div>
            </div>
            <div className={classes.secondContainer}>
                <div className={classes.courseSection}>
                    {courses.map((data, i) => {
                        return (
                            <CourseCard2
                                key={i}
                                title={data.title}
                                image={data.image}
                                description={data.description}
                                status="Published"
                                showButton={true}
                            />
                        );
                    })}
                </div>
                <div className={classes.topContent}>
                    {educationalAdministration.map((data, i) => {
                        return (
                            <div key={i}>
                                <h3>{data.title}</h3>
                                <span>{data.totalNumber}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.bottomContent}>
                    {educationalAdministrationFigure.map((data, i) => {
                        return (
                            <div key={i}>
                                <h3>{data.title}</h3>: <span>{data.totalNumber}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={classes.thirdContainer}>
                <div className={classes.header}>
                    <h2>Rating and reviews</h2>
                    <div>
                        <span>Overall rating: 4.2/5.0</span>
                        <StarRating
                            totalStars={5}
                            initialRating={4}
                            editable={false}
                            activeColor="#2E2E2E"
                            inactiveColor="lightgray"
                            width={20} height={20}
                        />
                    </div>
                </div>
                <div className={classes.body}>
                    {rateAndReview.map((data, i) => {
                        return (
                            <div className={classes.reviewCard} key={i}>
                                <div className={classes.reviewCardHeader}>
                                    <div>
                                        <img src={data.image} alt={data.name} />
                                        <div className={classes.info}>
                                            <h3>{data.name}</h3>
                                            <StarRating
                                                totalStars={5}
                                                initialRating={4}
                                                editable={false}
                                                activeColor="#2E2E2E"
                                                inactiveColor="lightgray"
                                                width={20} height={20}
                                            />
                                        </div>
                                    </div>
                                    <span>{data.date}</span>
                                </div>
                                <p className={classes.reviewCardBody}>{data.reviewText}</p>
                                <div className={classes.reviewCardFooter}>
                                    <span>Like</span>
                                    <span>Reply</span>
                                    <p>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.33274 5.66667H11.5087C12.4999 5.66667 13.1445 6.70975 12.7013 7.59629L10.3679 12.263C10.1421 12.7147 9.68039 13 9.17536 13H6.49688C6.38787 13 6.27926 12.9866 6.1735 12.9602L3.66608 12.3333M8.33274 5.66667V2.33333C8.33274 1.59695 7.73579 1 6.99941 1H6.93576C6.60272 1 6.33274 1.26998 6.33274 1.60302C6.33274 2.07922 6.19179 2.54477 5.92764 2.94099L3.66608 6.33333V12.3333M8.33274 5.66667H6.99941M3.66608 12.3333H2.33274C1.59636 12.3333 0.999408 11.7364 0.999408 11V7C0.999408 6.26362 1.59636 5.66667 2.33274 5.66667H3.99941" stroke="#2E2E2E" strokeWidth="1.5" strokeLinecap="round" strokeLinecap="round" />
                                        </svg>
                                        <span>{data.likeTotal}</span>
                                    </p>
                                    <p>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.33333 6.99984H4.34M7 6.99984H7.00667M9.66667 6.99984H9.67333M13 6.99984C13 9.94536 10.3137 12.3332 7 12.3332C5.97382 12.3332 5.00781 12.1042 4.16311 11.7005L1 12.3332L1.92999 9.85319C1.34104 9.02807 1 8.04935 1 6.99984C1 4.05432 3.68629 1.6665 7 1.6665C10.3137 1.6665 13 4.05432 13 6.99984Z" stroke="#2E2E2E" strokeWidth="1.5" strokeLinecap="round" strokeLinecap="round" />
                                        </svg>
                                        <span>{data.commentTotal}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                    <p className={classes.showMore}>Show more...</p>
                </div>
            </div>
        </div>
    )
}

export default CoursesPageContainer
