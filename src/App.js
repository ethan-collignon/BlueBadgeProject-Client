import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Auth from './components/site/Auth';
import ReviewIndex from './components/pagecomponents/Review/ReviewIndex';

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

const clearLocalStorage = () => {
  localStorage.clear();
  setSessionToken(undefined);
}
  const mainApp = (
    <ReviewIndex token={sessionToken} updateLocalStorage={updateLocalStorage} clearLocalStorage={clearLocalStorage} />
  )
  const viewConductor = () => {
    return sessionToken !== undefined ? mainApp : <Auth updateLocalStorage ={updateLocalStorage} />;
  };
  
  return (
    <div className="App">
      {/* {sessionToken} */}
      {/* <Navbar clearLocalStorage={clearLocalStorage} /> */}
      {viewConductor()}
    </div>
  );
}
export default App;