
import React from 'react';
import './LoginForm.css'; // Import the CSS file


const LoginForm = () => {
  return (
    <form>
      <h2>Login Form</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br/><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br/><br/>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;