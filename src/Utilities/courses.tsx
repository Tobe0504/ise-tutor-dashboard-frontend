import courseImg1 from '../Assets/Images/CoursesSubmittedForReviewImage1.png'
import courseImg2 from '../Assets/Images/CoursesSubmittedForReviewImage2.png'

export type coursesDataType = {
  id: number
  status: string;
  courseImage: string
  courseTitle: string
  courseTopic: string
  courseReminder: number
  courseModules: number
  isUnderReview: boolean
  courseDescription: string
}[];

export const coursesData: coursesDataType = [
  {
    id: 1,
    status: 'Pending',
    courseImage: courseImg1,
    courseTitle: 'Frontend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 2,
    courseModules: 10,
    isUnderReview: true,
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {

    id: 2,
    status: 'Draft',
    courseImage: courseImg2,
    courseTitle: 'Backend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 3,
    courseModules: 15,
    isUnderReview: true,

    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {
    id: 3,
    status: 'Published',
    courseImage: courseImg1,
    courseTitle: 'Frontend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 2,
    courseModules: 10,
    isUnderReview: false,

    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {

    id: 4,
    status: 'Paid',
    courseImage: courseImg2,
    courseTitle: 'Backend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 3,
    courseModules: 15,
    isUnderReview: false,
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {
    id: 5,
    status: 'Pending',
    courseImage: courseImg1,
    courseTitle: 'Frontend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 2,
    courseModules: 10,
    isUnderReview: false,
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {

    id: 6,
    status: 'Draft',
    courseImage: courseImg2,
    courseTitle: 'Backend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 3,
    courseModules: 15,
    isUnderReview: false,
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {
    id: 7,
    status: 'Published',
    courseImage: courseImg1,
    courseTitle: 'Frontend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 2,
    courseModules: 10,
    isUnderReview: false,
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
  {

    id: 8,
    status: 'Paid',
    courseImage: courseImg2,
    courseTitle: 'Backend Development',
    courseTopic: 'Cohort 1.0',
    courseReminder: 3,
    courseModules: 15,
    isUnderReview: false,
    courseDescription: 'Ignite your business potential with our resources at ise School of Business. Gain the knowledge and skills to thrive in the dynamic world of commerce. Lead and achieve greatness with essential business skills.',
  },
];
