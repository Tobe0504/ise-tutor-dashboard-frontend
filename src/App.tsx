import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './Containers/404Page/404Page'
import ForgotPassword from './Containers/ForgotPassword/ForgotPassword'
import LoginPage from './Pages/LoginPage'
import LoginEmailTemplatePage from './Pages/LoginEmailTemplatePage'
import TutorCompleteProfilePage from './Pages/TutorCompleteProfilePage'
import TutorDashboardLoadingScreenPage from './Pages/TutorDashboardLoadingScreenPage'
import TutorProfilePage from './Pages/TutorProfilePage'
import TutorSupportPage from './Pages/TutorSupportPage'
import ContactSupportPage from './Pages/ContactSupportPage'
import Dashboard from './Pages/Dashboard'
import CollaborationHubPage from './Pages/CollaborationHubPage'
import CollaborationHubVideoGuide from './Containers/CollaborationHubVideoGuide/CollaborationHubVideoGuide'
import StudentPage from './Pages/StudentPage'
import StudentDetailsPage from './Pages/StudentDetailsPage'
import CoursesPage from './Pages/CoursesPage'
import QuizPage from './Pages/QuizPage'
import AssignmentPage from './Pages/AssignmentPage'
import AssignmentSubmissionPage from './Pages/AssignmentSubmissionPage'
import CoursesCurriculum from './Pages/CoursesCurriculum'
import CreatingCourseModulePage from './Pages/CreatingCourseModulePage'
import CreatingCourseModulePreviewPage from './Pages/CreatingCourseModulePreviewPage'
import SchedulePage from './Pages/SchedulePage'
import CoursesFeedback from './Pages/CoursesFeedback'
import SubmissionGuide from './Containers/CoursesCurriculumSetupContainer/SubmissionGuide/SubmissionGuide'
import CourseUnderReview from './Pages/CourseUnderReview'
import CourseModuleFeedbackPreviewPage from './Pages/CourseModuleFeedbackPreviewPage'
import RequireAuth from './Components/RequireAuth/RequireAuth'
import CreateCurricullimPage from './Pages/CreateCurricullimPage'
import CreatingCourseModuleWeekPageContainer from './Containers/CreatingCourseModuleWeekPageContainer/CreatingCourseModuleWeekPageContainer'
import AddEngagingLessonContent from './Containers/AddEngagingLessonContent/AddEngagingLessonContent'
import SelectLessonType from './Containers/SelectLessonType/SelectLessonType'
import AddReadingContent from './Containers/AddReadingContent/AddReadingContent'
import AddVideoContent from './Containers/AddVideoContent/AddVideoContent'
import AddCustomized from './Containers/AddCustomized/AddCustomized'
import AddPresentation from './Containers/AddPresentation/AddPresentation'
import AddQuiz from './Containers/AddQuiz/AddQuiz'
import AddModuleAssessment from './Containers/AddModuleAddessment/AddModuleAddessment'

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />

      <Route path="/login-email" element={<LoginEmailTemplatePage />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/tutor-dashboard-loader"
        element={<TutorDashboardLoadingScreenPage />}
      />

      <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/complete-profile"
          element={<TutorCompleteProfilePage />}
        />
        <Route
          path="/profile-info/:subProfile"
          element={<TutorProfilePage />}
        />
        <Route path="/collaboration-hub" element={<CollaborationHubPage />} />
        <Route
          path="/collaboration-hub-video-guide"
          element={<CollaborationHubVideoGuide />}
        />

        <Route path="/support" element={<TutorSupportPage />} />
        <Route
          path="/support/contact-support"
          element={<ContactSupportPage />}
        />

        <Route path="/student" element={<StudentPage />} />
        <Route
          path="/student/details/:studentId"
          element={<StudentDetailsPage />}
        />
        <Route path="/student/quiz" element={<QuizPage />} />
        <Route path="/student/assignment" element={<AssignmentPage />} />
        <Route
          path="/student/assignment/assignment-submission"
          element={<AssignmentSubmissionPage />}
        />

        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CoursesCurriculum />} />
        <Route
          path="/courses/courses-curriculum/submission-guide"
          element={<SubmissionGuide />}
        />
        <Route
          path="/courses/:courseId/:curriculumId/create-module"
          element={<CreatingCourseModulePage />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/create-week"
          element={<CreatingCourseModuleWeekPageContainer />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/add-engaging-content"
          element={<AddEngagingLessonContent />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/select-lesson-type"
          element={<SelectLessonType />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/reading"
          element={<AddReadingContent />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/video"
          element={<AddVideoContent />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/presentation"
          element={<AddPresentation />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/quiz"
          element={<AddQuiz />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/module-assessment"
          element={<AddModuleAssessment />}
        />

        <Route
          path="/courses/:courseId/:curriculumId/:moduleId/:weekId/customize"
          element={<AddCustomized />}
        />

        <Route
          path="/courses/:courseId/create-curricullum"
          element={<CreateCurricullimPage />}
        />

        <Route path="/courses/feedback" element={<CoursesFeedback />} />
        <Route
          path="/courses/feedback/:courseReviewId"
          element={<CourseUnderReview />}
        />
        <Route
          path="/courses/feedback/:courseReviewId/feedback-preview"
          element={<CourseModuleFeedbackPreviewPage />}
        />
        <Route
          path="/courses/create-module/preview"
          element={<CreatingCourseModulePreviewPage />}
        />

        <Route path="/schedule" element={<SchedulePage />} />
      </Route>
    </Routes>
  )
}
export default App
