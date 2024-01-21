import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CustomerRegisteration from './components/Registeration/CustomerRegisteration';
import ModifyCustomerDetails from './components/LandingPageMenu/ModifyCustomerDetails';
import CustomerDetails from './components/LandingPageMenu/CustomerDetails';
import Sidebar from './components/Sidebar/Sidebar';

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
        <Route path="/login" element={<Login setUsername={props.setUsername} setLoggedIn={props.setLoggedIn} />} />
        <Route path="/register" element={<CustomerRegisteration setUsername={setUsername} setPassword={setPassword} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
      {/* <Router>
      <Sidebar />
            <Routes>
                <Route
                    path="/cusomer-details"
                    element={<CustomerDetails />}
                />
                <Route
                    path="/customer-details/modify"
                    element={<ModifyCustomerDetails />}
                />
                </Routes>
      </Router> */}
    </div>
  );
}
export default App;
