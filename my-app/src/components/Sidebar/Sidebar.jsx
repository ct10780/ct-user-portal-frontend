import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <button className="hamburger" type="button" onClick={showSidebar}>
          <div></div>
        </button>
        <ul onClick={showSidebar}>
          <li><Link to="/">Customer Details</Link></li>
          <li><Link to="/customer-details/modify">Modify Customer Details</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Sidebar;