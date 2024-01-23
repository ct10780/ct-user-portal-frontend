import { useNavigate } from 'react-router-dom';
import './Home.css';
import Dashboard from '../Dashboard/Dashboard';
const Home = (props) => {

    const isLoggedIn = localStorage.getItem('LOGGEDIN_USER')

    return isLoggedIn ? <Dashboard /> : <NonLoggedInPage />
}

const NonLoggedInPage = () => {
    const navigate = useNavigate()
    const OnButtonClick = () => {
        navigate('/login')
    }

    const OnRegisterButtonClick = () => {
        navigate('/register')
    }
    return <div className='mainContainer'>
        <div className={'titleContainer'}>
            <div><h1>Welcome!</h1></div>
        </div>
        <div><h3>This Is The Home Page.</h3></div>
        <div className={'buttonContainer'}>
            <input className={"button button1"}
                type="button" onClick={OnButtonClick}
                value={"Log In"} />
            <div className={'buttonContainer'}>
                <input className={"button button2"}
                    type="button" onClick={OnRegisterButtonClick}
                    value={"Register User"} />
            </div>
        </div>
    </div>
}

export default Home;