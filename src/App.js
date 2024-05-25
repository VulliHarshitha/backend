
import React, { useState } from 'react';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';

const OnlineLearningPlatform = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  return (
    <div>
      <h1 align="center">ONLINE LEARNING PLATFORM FOR UNDERPRIVILEGED STUDENTS</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>

      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </div>
  );
};

export default OnlineLearningPlatform;
