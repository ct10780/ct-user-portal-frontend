import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setUsername={setUsername} setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<CustomerRegisteration setUsername={setUsername} setPassword={setPassword} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
