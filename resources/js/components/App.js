import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import ReactDom from 'react-dom';

import Form from './Form';
import Searching from './Search';
import Header from './Heder';
import Footer from './Footer';

const App = ()=>
{
    return(
    <Router className = "App_container">
        <div>
           
                <Header/>
                 {/* <Link to= "/">Register</Link>
                 <Link to= "/Search">Search</Link>
                <Route exact path ="/" component={Form}/>
                <Route exact path ="/Search" component={Searching}/>  */}
                <Footer/>
           
            
            </div>
    </Router>
    );
};
export default App;
ReactDom.render(<App/>,document.getElementById('app'));
