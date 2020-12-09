import React, { Component } from 'react';
import '../css/app.css';
import axios from 'axios';



class Form extends Component
{
constructor()
{
    
    super()
    this.onaddDetails = this.onaddDetails.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.state =  
    {
        name:'',
        address:'',
        company:'',
        department:'',
        project:''


    }  
}

    onaddDetails()
    {
        this.setState({
            name:target.value,
            address:target.value,
            company:target.value,
            department:target.value,
            project:target.value
        });
    }

    onSubmit(){
        preventDefult();
        const details ={
            name : this.state.name,
            address : this.state.address,
            company : this.state.company,
            department : this.state.department,
            project:this.state.project
        }

        axios.post('http://127.0.0.1:8000/api/saveEmploy',details)
        .then(res=>console.log(res.data));
    }
    
    render(){
        
    return(

        <header>
    <div className = "logo">
        <form onSubmit={this.onSubmit}>
      
                <div className="form-group">
                   <label htmlFor="name">Your Name </label>
                   <input className="form-control" type="text" name="name" id="name"/>
               </div>
                   <div className="form-group">
                   <label htmlFor="address">Your Address </label>
                   <input className="form-control" type="text" name="address" 
                   id="address"/>
               </div>
               
            <div>
            
                <label>Company</label>
                    <select className="custom-select" name="company" id="company">
                     <option defaultValue = "non">Choose...</option>
                       <option value="company 1">Company 1</option>
                       <option value="company 2">Company 2</option>
                       <option value="company 3">Company 3</option>
                   </select>
            </div>
            <div>
                    <label>Department</label>
                    <select className="custom-select" name="department" id="department">
                    <option defaultValue = "non">Choose...</option>
                       <option value="department 1">Department 1</option>
                       <option value="department 2">Department 2</option>
                       <option value="department 3">Department 3</option>
                   </select>
            </div>
            <div>
                    <label>Project</label>
                    <select className="custom-select" name="project" id="project">
                       <option defaultValue = "non">Choose...</option>
                       <option value="project 1">Project 1</option>
                       <option value="project 2">Project 2</option>
                       <option value="project 3">Project 3</option>
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
  