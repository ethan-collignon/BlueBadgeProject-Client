import React, {useState, useEffect} from 'react';
import Navbar from './components/site/Navbar'
import Auth from './components/site/Auth1';
import ReviewIndex from './components/pagecomponents/Review/ReviewIndex';
// import 'bootstrap/dist/css/bootstrap.css'
// import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';


// import Splash from './components/site/SplashPage2';

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

 const mainApp = (
   <ReviewIndex token={sessionToken} />
 )

  const protectedView = () => {
    return (sessionToken === localStorage.getItem('token') ? mainApp : 
    <Auth updateToken={updateToken} />);
  };

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
