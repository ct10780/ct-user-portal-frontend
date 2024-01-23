import { useState } from "react"
import './Dashboard.css'
import CustomerRegisteration from "../Registeration/CustomerRegisteration";


const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [menuOption, setmenuOption] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const menuSelector = (e) => {
        if (e.target.dataset.internalId) {
            setmenuOption(e.target.dataset.internalId)
        }
    }

    const drawerMenu = ['Customer List', 'Modify Customer']
    const loggedInUser =localStorage.getItem('LOGGEDIN_USER')
    return (
        <div className="dashboard-container">
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <ul>
                    {drawerMenu.map(e => <li data-internalid={e} onClick={menuSelector}>{e}</li>)}
                </ul>
            </div>
            <div className="content">
                <button onClick={toggleDrawer} className="toggle-button">
                    {isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}
                </button>
                <button onClick={() => {
                    localStorage.removeItem('LOGGEDIN_USER')
                    window.location.reload();
                }}>Logout</button>
                <h2>Welcome {loggedInUser}</h2>
                {menuOption === 'UserList' && <RenderUserList />}
                {menuOption === 'Modify User' && <CustomerRegisteration feRole={'UPDATE'} />}
 
            </div>
        </div>
    );
}

const RenderUserList =()=>{
    const list=JSON.parse(localStorage.getItem('REGISTER_LIST'));
    return <>{list?.map((dataObj)=><li>{dataObj.username}</li>)}</>
}

export default Dashboard;