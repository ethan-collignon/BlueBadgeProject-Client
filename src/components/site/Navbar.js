import { Route, Link, Switch } from "react-router-dom";
import Home from './Home1';
import SplashPage from './SplashPage2';
import SearchPage from './SearchPage3';
import MyReviews from './MyReviews4'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-list-styling'>
                <ul className='navbar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/SplashPage2'>Splash Page</Link></li>
                    <li><Link to='/SearchPage3'>Search Page</Link></li>
                    <li><Link to='/MyReviews4'>My Reviews</Link></li>
                </ul>
            </div>
           <div className='navbar-route'>
               <Switch>
                   <Route exact path='/home'><Home /></Route>
                   <Route exact path='/SplashPage2'><SplashPage /></Route>
                   <Route exact path='/SearchPage3'><SearchPage /></Route>
                   <Route exact path='/MyReviews4'><MyReviews /></Route> 
               </Switch>
           </div>
       </div>
    )
}

export default Navbar

