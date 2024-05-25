
import React from 'react';
import './RegisterForm.css'; // Import the CSS file
    
const RegisterForm = () => {
  return (
    <form>
      <h2>Register Form</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br/>
      <br/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br/><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br/><br/>
      <label htmlFor="password">Confirm Password:</label>
      <input type="password" id="password" name="password" />
      <br/><br/>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;