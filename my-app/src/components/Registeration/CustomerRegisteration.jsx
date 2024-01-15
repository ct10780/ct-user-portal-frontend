import React, { useState } from 'react';


const CustomerRegisteration = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [reEnterPassword, setReEnterPassword] = useState("")
    const [role, setRole] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [reEnterPasswordError, setReEnterPasswordError] = useState("")
    const [roleError, setRoleError] = useState("")
    const [companyNameError, setCompanyNameError] = useState("")

    const onButtonClick = (data) => {
        setPasswordError("")
        setUsernameError("")
        setRoleError("")
        setCompanyNameError("")

        if (username === "" || password === "") {
            setUsernameError("Please enter values  correctly")
            return;
        }
        if (password.length < 14) {
            setPasswordError("please enter password with minimum lengh 14")
            return
        }
        if (password.length !== reEnterPassword.length) {
            setReEnterPasswordError("please enter correct password")
            return
        }
        if (role === "") {
            setRoleError("please assign role")
            return
        }
        if (companyName === "") {
            setCompanyNameError("please enter company name")
            return
        }
    }
    return <div className="mainContainer">
        <div className='titleContainer'>
            <div> <h2>Register User</h2>
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
                <label className='errorlabel'>{setPasswordError}</label><br />
                <div className='inputContainer'>
                    <input value={companyName} placeholder='Enter company name here' onChange={ev => setCompanyName(ev.target.value)}
                        className={"inputBox"}>
                    </input>
                    <label className='errorlabel'>{setCompanyNameError}</label><br />
                    <div className='inputContainer'>
                        <input value={password} placeholder='Re-enter password here' onChange={ev => setReEnterPassword(ev.target.value)}
                            className={"inputBox"}>
                        </input>
                        <label className='errorlabel'>{setReEnterPasswordError}</label><br />
                        <div className='inputContainer'>
                            <label for="roles">Choose a role:</label>
                            <select name="roles" id="roles">
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                            <label className='errorlabel'>{setRoleError}</label><br />
                            <div className='inputContainer'>
                                <input type="button" className="button button1" onClick={onButtonClick} value={"Register"}>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CustomerRegisteration;