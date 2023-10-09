import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../dist/login.css';


function Login() {
  const navigate = useNavigate(); // Use useNavigate to access navigation function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminLogin = () => {
    if (email === 'admin@example.com' && password === 'admin') {
      alert('Admin login successful!');
      // Redirect to ListOperation page
      navigate('/ListOperation');
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending request with email:', email, 'and password:', password);

      const response = await axios.post('http://localhost:8080/customer/login', {
        email: email,
        password: password,
      });

      console.log('Response:', response);

      if (response.status === 200) {
        alert('Login successful!');
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed!');
    }
  };

  return (
    <div className="page-container">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleAdminLogin}>
          Admin Login
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;
