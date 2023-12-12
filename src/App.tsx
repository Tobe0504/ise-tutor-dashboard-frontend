import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage, ForgotPassword } from './Containers';
import { Login, LoginEmailTemplatePage, TutorCompleteProfilePage } from "./Pages";


function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Navigate to="/login-email"></Navigate>} />
      <Route path="/login-email" element={<LoginEmailTemplatePage />} />

      <Route path="/sign-in" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/tutor-complete-profile" element={<TutorCompleteProfilePage />} />

    </Routes>
  );
}

export default App;
