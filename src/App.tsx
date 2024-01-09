import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from './Containers/404Page/404Page';
import ForgotPassword from './Containers/ForgotPassword/ForgotPassword';
import Login from './Pages/Login';
import LoginEmailTemplatePage from './Pages/LoginEmailTemplatePage';
import TutorCompleteProfilePage from './Pages/TutorCompleteProfilePage';
import TutorDashboardLoadingScreenPage from './Pages/TutorDashboardLoadingScreenPage';
import TutorProfilePage from './Pages/TutorProfilePage';
import TutorSupport from './Pages/TutorSupport';
import ContactSupportPage from './Pages/ContactSupportPage';
import Dashboard from './Pages/Dashboard';
import CollaborationHubPage from './Pages/CollaborationHubPage';
import CollaborationHubVideoGuide from './Containers/CollaborationHubVideoGuide/CollaborationHubVideoGuide';

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Navigate to="/dashboard"></Navigate>} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/login-email" element={<LoginEmailTemplatePage />} />

      <Route path="/sign-in" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/tutor-complete-profile" element={<TutorCompleteProfilePage />} />
      <Route path="/tutor-dashboard-loader" element={<TutorDashboardLoadingScreenPage />} />

      <Route path="/profile-info" element={<TutorProfilePage />} />
      
      <Route path="/collaboration-hub" element={<CollaborationHubPage />} />
      <Route path="/collaboration-hub-video-guide" element={<CollaborationHubVideoGuide />} />
      
      <Route path="/support/contact-support" element={<ContactSupportPage />} />
      <Route path="/support" element={<TutorSupport />} />
    </Routes>
  );
}

export default App;
