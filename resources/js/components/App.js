import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import ReactDom from 'react-dom';
import Header from './Heder';
import Footer from './Footer';
import Form from './Form';
import Searching from './Search';

const App = ()=>
{
    return(
    <Router className = "App_container">
        <div>
           
                <Header/>
                
                <Footer/>
           
            
            </div>
    </Router>
    );
};
export default App;
ReactDom.render(<App/>,document.getElementById('app'));
