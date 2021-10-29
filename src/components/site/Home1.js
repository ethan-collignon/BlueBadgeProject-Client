import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Home = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);
const title = () => {
    return !login ? 'Signup' : 'Login'
}
const loginToggle = (e) => {
    e.preventDefault();
    setLogin(!login)
    setEmail('');
    setPassword('');
}
const handleSubmit = event => {
    event.preventDefault();
    let reqBody = login ?
     {
    user: {
        email: email,
        password: password
    }
    } : {
    user: {
        email: email,
        password: password,
    }
    }
    let url = login ?
    'http://localhost:3001/user/login':
    'http://localhost:3001/user/register';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    })
    .then(response => response.json())
    .then(json => props.updateLocalStorage(json.sessionToken))
    .catch(err => console.log(err))
}
    return (
        <div>
            <form>
            <button onClick={loginToggle}>Login/Signup</button>
            <br/>
            <h1>{title()}</h1>
            <label htmlFor="email">Email:</label>
            <br/>
            <input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label htmlFor="password">Password:</label>
            <br/>
            <input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Home;