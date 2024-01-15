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
        console.log("username", username);
        console.log("password", password);
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
                    placeholder="search"
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="login" />
            </form>
        </div>
    );
}
export default Login;

export function PostData(userData) {
    let BaseUrl = "http://localhost:8080/users/signin";
    console.log("userData", userData);
    var details = {
        'username': userData.username,
        'password': userData.password
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody)
    return new Promise((resolve, reject) => {
        fetch(BaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "*/*"
            },
            body: formBody
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
