import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BroswerRouter as Router} from 'react-router-dom';
import Auth from './components/site/Auth';
import ReviewIndex from './components/pagecomponents/Review/ReviewIndex';
import Splash from './components/site/SplashPage2';

// import Auth from './components/site/Auth';
// import Navbar from './components/site/Navbar';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);
  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])
const updateLocalStorage = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
};

  const viewConductor = () => {
    return sessionToken !== undefined ? <Auth updateLocalStorage={updateLocalStorage} /> : <Splash updateLocalStorage ={updateLocalStorage} />;
  };
  return (
    <div className="App">
      {/*<h1>This is a test.</h1>
      {sessionToken} */}
      {/* <Navbar clearLocalStorage={clearLocalStorage} /> */}
      {viewConductor()}
    </div>
  );
}
export default App;