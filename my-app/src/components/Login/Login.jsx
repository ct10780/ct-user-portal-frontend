import { useState } from 'react';
import './Login.css'
//import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitForm = e => {
        e.preventDefault();

       PostData(username, password).then(result => {
            console.log(result);
        });
    };
    return (

        <div className="search_box">
            <form onSubmit={submitForm}>
                <input
                    name="name"
                    type="text"
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="login" />
            </form>
        </div>
    );
}
export default Login;

export function PostData(username, password) {
    
    let BaseUrl = "http://localhost:8080/users/signin";
    BaseUrl.searchParams.append('username',username)
    BaseUrl.searchParams.append('password',password)
    return new Promise((resolve, reject) => {
        fetch(BaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                resolve(responseJson);
            })
            .catch(error => {
                reject(error);
            });
    });
}
