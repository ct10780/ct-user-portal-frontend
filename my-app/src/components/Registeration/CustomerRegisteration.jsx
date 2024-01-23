import React, { useState } from 'react';
import './CustomerRegisteration.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
 
const CustomerRegisteration = ({ onRegister , feRole}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
    const navigate = useNavigate();
 
  const handleRegister = () => {
    // For simplicity, let's assume the registration is successful if all fields are filled
    if (username && password && role) {
     let obj ={ username,password, role };
     const list = localStorage.getItem("REGISTER_LIST");
 
     if(feRole ==='UPDATE'){
        const username = localStorage.getItem("LOGGEDIN_USER");
        const parsedList = JSON.parse(list);
        const newList = parsedList.filter(e=>e.username !== username)
        newList.push(obj);
        localStorage.setItem("REGISTER_LIST",JSON.stringify(newList));
         localStorage.removeItem("LOGGEDIN_USER");
         navigate('/login')
        return
     }
 
 
 
      if(list){
            const parsedList = JSON.parse(list);
            parsedList.push(obj)
            localStorage.setItem("REGISTER_LIST",JSON.stringify(parsedList));
      } else {
        let objList = [obj];
        localStorage.setItem("REGISTER_LIST",JSON.stringify(objList));
      }
      navigate('/login')
    } else {
      alert('Please fill in all fields');
    }
  };
 
  useEffect(()=>{
 
    if(feRole === 'UPDATE'){
 
        const userloggedIn = localStorage.getItem('LOGGEDIN_USER');
        const registedUser = JSON.parse(localStorage.getItem('REGISTER_LIST'));
        const user = registedUser?.filter(e=> e.username === userloggedIn)?.[0]
 
        setUsername(user?.username)
        setPassword(user?.password)
        setRole(user.role)
    }
  },[feRole])
 
  return (
    <div className="register-container">
      <h2>Customer Registeration</h2>
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
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="customer">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};
 

export default CustomerRegisteration;