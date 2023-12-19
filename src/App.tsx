import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from './Containers/404Page/404Page';
import ForgotPassword from './Containers/ForgotPassword/ForgotPassword';
import Login from './Pages/Login';
import LoginEmailTemplatePage from './Pages/LoginEmailTemplatePage';
import TutorCompleteProfilePage from './Pages/TutorCompleteProfilePage';
import TutorDashboardLoadingScreenPage from './Pages/TutorDashboardLoadingScreenPage';
import TutorProfilePage from './Pages/TutorProfilePage';

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Navigate to="/login-email"></Navigate>} />
      <Route path="/login-email" element={<LoginEmailTemplatePage />} />

      <Route path="/sign-in" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/tutor-complete-profile" element={<TutorCompleteProfilePage />} />
      <Route path="/tutor-dashboard-loader" element={<TutorDashboardLoadingScreenPage />} />

      <Route path="/profile-info" element={<TutorProfilePage />} />
    </Routes>
  );
}

export default App;
