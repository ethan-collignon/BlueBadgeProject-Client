import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import "./Auth.css";
import welcome from "../../assets/Welcome.gif";
import intro from "../../assets/Intro.gif";
const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const title = () => {
    return !login ? "Signup" : "Login";
  };
  const loginToggle = (e) => {
    e.preventDefault();
    setLogin(!login);
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let reqBody = login
      ? {
          user: {
            email: email,
            password: password,
          },
        }
      : {
          user: {
            email: email,
            password: password,
          },
        };
    let url = login
      ? "http://localhost:3001/user/login"
      : "http://localhost:3001/user/register";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((json) => props.updateLocalStorage(json.sessionToken))
      .catch((err) => console.log(err));
  };
  return (
    <body style={{backgroundColor: "grey"}}>
    <Form className="login-form">
      <h1>{title()}</h1>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button
        type="submit"
        onClick={handleSubmit}
        className="btn-lg btn-dark btn-block"
      >
        Submit
      </Button>

      <br />

      <br />

      <p onClick={loginToggle} style={{cursor: "pointer"}}><b><u>Login/Signup</u></b></p>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <div>
      <FacebookLoginButton className="mt-3 mb-3" align="center" />
      </div>
      <div className="text-center">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <img
        src={welcome}
        alt="loading..."
        height="400"
        width="400"
        className="welcome"
      />
      <img
        src={intro}
        alt="loading..."
        height="400"
        width="400"
        className="intro"
      />
    </Form>
    <br />
    
    <br />
    </body>
  );
};
export default Auth;
















// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

// const Auth = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [login, setLogin] = useState(true);

// const title = () => {
//     return !login ? 'Signup' : 'Login'
// }

// const loginToggle = (e) => {
//     e.preventDefault();

//     setLogin(!login)

//     setEmail('');
//     setPassword('');
// }

// const handleSubmit = event => {
//     event.preventDefault();

//     let reqBody = login ? 
//      {
//     user: {
//         email: email,
//         password: password
//     }
//     } : {
//     user: {
//         email: email,
//         password: password,
//     }
//     }

//     let url = login ? 
//     'http://localhost:3001/user/login': 
//     'http://localhost:3001/user/register';

//     fetch(url, {
//         method: 'POST', 
//         body: JSON.stringify(reqBody),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         }),
//     })
//     .then(response => response.json())
//     .then(json => props.updateLocalStorage(json.sessionToken))
//     .catch(err => console.log(err))
// }

//     return (
//         <div>
//             <form>
//             <button onClick={loginToggle}>Login/Signup</button>
//             <br/>
//             <h1>{title()}</h1>
//             <label htmlFor="email">Email:</label>
//             <br/>
//             <input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//             <br/>
//             <label htmlFor="password">Password:</label>
//             <br/>
//             <input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//             <br/>
//             <button type='submit' onClick={handleSubmit}>Submit</button>
//             </form>
//             {/* <img href="../../" alt="intro"/> */}
//         </div>

//     )
// }

// export default Auth;