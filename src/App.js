import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/site/Home1';
import Navbar from './components/site/Navbar'
// import Auth from './components/Auth/Auth';

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
    return sessionToken !== undefined ? <Home updateLocalStorage={updateLocalStorage} /> : <Home updateLocalStorage ={updateLocalStorage} />;
  };
  return (
    <div className="App">
    <Router>
      <Navbar />
    </Router>
      {viewConductor()}
    </div>
  );
}
export default App;
