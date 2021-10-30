import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
// import { BroswerRouter as Router } from 'react-router-dom';
import Home from './components/site/Home1';
import Nav from './components/site/Nav';
import MoviePage from './components/site/MoviePage'
import SearchArea from './components/site/SearchArea';

// import Navbar from './components/Navbar/Navbar';
// import Auth from './components/Auth/Auth';
function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])
  const updateLocalStorage = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  };
  const viewConductor = () => {
    return sessionToken !== undefined ? <Home updateLocalStorage={updateLocalStorage} /> : <Home updateLocalStorage={updateLocalStorage} />;
  };
  return (
    <div className="App">
      {/*<h1>This is a test.</h1>
      {sessionToken} */}
      {/* <Navbar clearLocalStorage={clearLocalStorage} /> */}
      {viewConductor()}
      <Nav />
      <MoviePage />
      <SearchArea />


    </div>
  );
}
export default App;