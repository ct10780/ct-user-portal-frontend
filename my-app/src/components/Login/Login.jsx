import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = () => {
    // For simplicity, let's assume the login is successful if both fields are filled
    if (username && password) {
        let loginList =[]
        try {
            loginList = JSON.parse(localStorage.getItem('REGISTER_LIST'));
        } catch (error) {
            
        }
       const loggedIn = loginList?.filter(log =>{
            return log.username ===username && log.password === password
        })
        if(loggedIn?.length>0){
            const data =loggedIn[0].username
            localStorage.setItem('LOGGEDIN_USER',data);
            navigate('/')
        } else {
            alert('Wrong Username or Password')
        }
    } else {
      alert('Please enter both username and password');
    }
  };
 
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
 
export default Login;