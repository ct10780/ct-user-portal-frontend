import  { useState } from 'react';
import './Login.css'
//import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    // const navigate = useNavigate("");

    const onButtonClick = () => {
        setPasswordError("")
        setUsernameError("")

        if (username === "" || password === "") {
            setUsernameError("Please enter values  correctly")
            return;
        } 
        if(password.length<14){
            setPasswordError("please enter password with minimum lengh 14")
            return
        }
    }

    return <div className="mainContainer">
        <div className='titleContainer'>
            <div> <h2>Login</h2>
            </div>
            <div className='inputContainer'>
                <input value={username} placeholder='Enter username here' onChange={ev => setUsername(ev.target.value)}
                    className={"inputBox"}>
                </input>
                <label className='errorlabel'>{setUsernameError}</label>
            </div><br></br>
            <div className='inputContainer'>
                <input value={password} placeholder='Enter password here' onChange={ev => setPassword(ev.target.value)}
                    className={"inputBox"}>
                </input>
                <label className='errorlabel'>{setPasswordError}</label><br></br><br/>
                <div className='inputContainer'>
                    <input type="button" className="button button1" onClick={onButtonClick} value={"Log In"}>
                    </input>
                </div>
            </div>
        </div>
    </div>
}

export default Login;