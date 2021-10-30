import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth from './components/site/Auth';
import Navbar from './components/site/Navbar'
import ReviewIndex from './components/pagecomponents/Review/ReviewIndex';
import Splash from './components/site/SplashPage2';

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
  console.log(sessionToken); //eli was missing this. Not sure if we need this or not 
};

  // const viewConductor = () => {
  //   return sessionToken !== undefined ? <Home updateLocalStorage={updateLocalStorage} /> : <Home updateLocalStorage ={updateLocalStorage} />;
  // };

  const protectedView = () => {
    return(sessionToken) === localStorage.getItem('token') ? <ReviewIndex token={sessionToken} />
    : <Auth updateLocalStorage={sessionToken} /> //This is a combo code from Workoutlog and Eli's
  }

  return (
    <div className="App">
    <Router>
      <Navbar />
    </Router>
      {protectedView()}
    </div>
  );
}
export default App;
