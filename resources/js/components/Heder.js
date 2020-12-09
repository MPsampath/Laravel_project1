import React, { Component } from 'react';
import '../css/app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Form from './Form';
import Searching from './Search';

class Header extends Component
{
    render(){
    return(
        <Router>
              
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className='nav-link' to="/">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sea">Search</Link>
                            </li>
                        
                        </ul>
                </div>
            </nav>    
        </div>
                <Route exact path ="/" component={Form}/>   
                <Route exact path ="/sea" component={Searching}/> 
    </Router> 

    );
}
};

export default Header;
  
    