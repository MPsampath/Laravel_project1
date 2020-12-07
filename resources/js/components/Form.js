import React, { Component } from 'react';
import '../css/app.css';
import Bootstrap from 'react-bootstrap'
import '../css/app.css';


class Form extends Component
{
    render(){
    return(

        <header>
    <div className = "logo">
        <form action="/saveEmploy" method="post">
            
      
                <div className="form-group">
                   <label for="name">Your Name </label>
                   <input className="form-control" type="text" name="name" id="name"/>
               </div>
                   <div className="form-group">
                   <label for="name">Your Address </label>
                   <input className="form-control" type="text" name="name" id="name"/>
               </div>
               
            <div>
            
                <label>Company</label>
                    <select className="custom-select" name="project" id="project">
                     <option defaultValue = "non">Choose...</option>
                       <option value="Company 1">Company 1</option>
                       <option value="Company 2">Company 2</option>
                       <option value="Company 3">Company 3</option>
                   </select>
            </div>
            <div>
                    <label>Department</label>
                    <select className="custom-select" name="project" id="project">
                    <option defaultValue = "non">Choose...</option>
                       <option value="Department 1">Department 1</option>
                       <option value="Department 2">Department 2</option>
                       <option value="Department 3">Department 3</option>
                   </select>
            </div>
            <div>
                    <label>Project</label>
                    <select className="custom-select" name="project" id="project">
                       <option defaultValue = "non">Choose...</option>
                       <option value="Project 1">Project 1</option>
                       <option value="Project 2">Project 2</option>
                       <option value="Project 3">Project 3</option>
                   </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </header>
    );
}
};

export default Form;
  