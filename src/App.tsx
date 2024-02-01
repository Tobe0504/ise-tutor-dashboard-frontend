import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import ForgotPassword from './Containers/ForgotPassword/ForgotPassword'
import Login from './Pages/Login'
import LoginEmailTemplatePage from './Pages/LoginEmailTemplatePage'
import TutorCompleteProfilePage from './Pages/TutorCompleteProfilePage'
import TutorDashboardLoadingScreenPage from './Pages/TutorDashboardLoadingScreenPage'
import TutorProfilePage from './Pages/TutorProfilePage'
import TutorSupport from './Pages/TutorSupport'
import ContactSupportPage from './Pages/ContactSupportPage'
import Dashboard from './Pages/Dashboard'
import CollaborationHubPage from './Pages/CollaborationHubPage'
import CollaborationHubVideoGuide from './Containers/CollaborationHubVideoGuide/CollaborationHubVideoGuide'
import StudentPage from './Pages/StudentPage'
import StudentDetailsPage from './Pages/StudentDetailsPage'
import CoursesPage from './Pages/CoursesPage'
import Quiz from './Pages/Quiz'
import Assignment from './Pages/Assignment'
import AssignmentSubmissionPage from './Pages/AssignmentSubmissionPage'
import CoursesCurriculum from './Pages/CoursesCurriculum'
import CreatingCourseModulePage from './Pages/CreatingCourseModulePage'
import PeriodicSurvey from './Pages/PeriodicSurvey'
import CreatingCourseModulePreviewPage from './Pages/CreatingCourseModulePreviewPage'

function App() {
   return (
      <Routes>
         <Route path="*" element={<ErrorPage />} />
         <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />
         <Route path="/dashboard" element={<Dashboard />} />

         <Route path="/login-email" element={<LoginEmailTemplatePage />} />
         <Route path="/sign-in" element={<Login />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />

         <Route path="/profile-info" element={<TutorProfilePage />} />
         <Route path="/tutor-complete-profile" element={<TutorCompleteProfilePage />} />
         <Route path="/tutor-dashboard-loader" element={<TutorDashboardLoadingScreenPage />} />

         <Route path="/collaboration-hub" element={<CollaborationHubPage />} />
         <Route path="/collaboration-hub-video-guide" element={<CollaborationHubVideoGuide />} />

         <Route path="/support/contact-support" element={<ContactSupportPage />} />
         <Route path="/support" element={<TutorSupport />} />

         <Route path="/student" element={<StudentPage />} />
         <Route path="/student/details/:studentId" element={<StudentDetailsPage />} />
         <Route path="/student/periodic-survey" element={<PeriodicSurvey />} />
         <Route path="/student/quiz" element={<Quiz />} />
         <Route path="/student/assignment" element={<Assignment />} />
         <Route path="/student/assignment/assignment-submission" element={<AssignmentSubmissionPage />} />

         <Route path="/courses" element={<CoursesPage />} />
         <Route path="/courses/courses-curriculum" element={<CoursesCurriculum />} />
         <Route path="/courses/create-module" element={<CreatingCourseModulePage />} />
         <Route path="/courses/create-module/preview" element={<CreatingCourseModulePreviewPage />} />
      </Routes>
   )
}
export default App
