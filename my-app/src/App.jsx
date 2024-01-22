import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CustomerRegisteration from './components/Registeration/CustomerRegisteration';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CustomerRegisteration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
