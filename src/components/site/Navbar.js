import { Route, Link, Switch } from "react-router-dom";
import {Button, NavItem} from 'reactstrap'
// import Home from './Auth1';
import SplashPage from './SplashPage2';
import MyReviews from './MyReviews4';



const Nav = (props) => {
    return(
        <div className='navbar'>
            <div className='navbar-list-styling'>
                <ul className='navbar-list list-unstyled'>
                    {/* <li><Link to='/'>Home</Link></li> */}
                    <li><Link to='/'>Splash Page</Link></li>
                    <li><Link to='/MyReviews4'>My Reviews</Link></li>
                </ul>
                <NavItem>
                    <Button onClick={props.clearLocalStorage}>Logout</Button>
                </NavItem>
            </div>
           <div className='navbar-route'>
               <Switch>
                   <Route exact path='/'><SplashPage /></Route>
                   <Route exact path='/MyReviews4'><MyReviews /></Route> 
               </Switch>
           </div>
       </div>
    )
}

export default Nav

