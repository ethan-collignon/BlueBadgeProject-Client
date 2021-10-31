import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth1 from './components/site/Auth1';
import Nav from './components/site/Navbar';
import SplashPage2 from './components/site/SplashPage2';
import Splash from './components/site/SplashPage2';
import SearchPage from './components/site/SearchPage3';


function App() {
  const [sessionToken, setSessionToken] = useState('');
  console.log(sessionToken);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
};

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedView = () => {
    return sessionToken === localStorage.getItem('token') ? <Splash token={sessionToken} /> : <Auth1 updateToken ={updateToken} />;
  };


  return (
    <div className="App">
      {protectedView()}
    <Router>
      <Nav />
    </Router>
      
    </div>
  );
}
export default App;
