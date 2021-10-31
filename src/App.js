import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth1 from './components/site/Auth1';
import Nav from './components/site/Navbar';
import ReviewIndex from './components/pagecomponents/Review/ReviewIndex'

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
    return sessionToken === localStorage.getItem('token') ? <ReviewIndex token={sessionToken} /> : <Auth1 updateToken ={updateToken} />;
  };
  return (
    <div className="App">
    <Router>
      <Nav />
    </Router>
      {protectedView()}
    </div>
  );
}
export default App;
