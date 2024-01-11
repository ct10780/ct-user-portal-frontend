import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate("/");

    const onButtonClick = () => {
        setError("")

        if (email === "" || password === "") {
            setError("Please enter email and password correctly")
            return;
        }        
        if(password.length<14){
            setError("please enter password with minimum lengh 14")
            return
        }
    }

    return <div className="mainContainer">
        <div className='titleContainer'>
            <div> Login
            </div><br />
            <div className='inputContainer'>
                <input value={username} placeholder='Enter username here' onChange={ev => setUsername(ev.target.value)}
                    className={"inputBox"}>
                </input>
                <label className='errorlabel'>{error}</label>
            </div><br></br>
            <div className='inputContainer'>
                <input value={password} placeholder='Enter password here' onChange={ev => setPassword(ev.target.value)}
                    className={"inputBox"}>
                </input>
                <label className='errorlabel'>{error}</label><br></br>
                <div className='inputContainer'>
                    <input type="button" className="inputButton" onClick={onButtonClick} value={Login}>
                    </input>
                    <label className='errorlabel'>{error}</label>
                </div>
            </div>
        </div>
    </div>
}

export default Login()