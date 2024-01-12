import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = (props) => {

    const navigate = useNavigate("");
    const { loggedIn, email } = props

    const OnButtonClick = () => {
        navigate('/login')
    }
    const OnButtonClick2 = () => {
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
                value={loggedIn ? "Log Out" : "Log In"} />
            <div className={'buttonContainer'}>
                <input className={"button button2"}
                    type="button" onClick={OnButtonClick2}
                    value={loggedIn ? "Log Out" : "Register User"} />
                {(loggedIn ? <div>
                    Your email adress is {email}</div> : <div />)}
            </div>
        </div>
    </div>
}

export default Home;