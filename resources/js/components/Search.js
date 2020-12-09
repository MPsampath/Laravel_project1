import React, { Component } from 'react';
import '../css/app.css';
import axios from 'axios';


export default class Searching extends Component
{
    
    constructor()
    {
      
        super();

        this.onaddDetails = this.onaddDetails.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            search:[],
            company:target.value,
            department:target.value,
            project:target.value
        };
    }
    onaddDetails()
    {
        this.setState({
            company:target.value,
            department:target.value,
            project:target.value
        });
    }

    componentDidMount()
    {
        const details ={
            company : this.state.company,
            department : this.state.department,
            project:this.state.project
        }
        axios.get('http://127.0.0.1:8000/api/search',details)
        .then(response=>
            {
                this.setState({search:response.data});
                console.log(response);
            });
    }
   
    render(){
    return(
        
       
        <div className="search_forme">
            
            
            <form className="searching_emp" onSubmit={this.onSubmitserch} method="get">
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
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
                
               
        <div>
            <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Id</th>
                        <th scope="col">Address</th>
                        <th scope="col">Company</th>
                        <th scope="col">Department</th>
                        <th scope="col">Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            //allway need to define key to <tr> tag
                    
                            this.state.search.map((search, index) =>{
                                return(
                                        <tr key={index}>
                                        <th>{search.emp_name}</th>
                                        <td>{search.id}</td>
                                        <td>{search.emp_address}</td>
                                        <td>{search.com_nsme}</td>
                                        <td>{search.dep_name}</td>
                                        <td>{search.pro_name}</td>
                                        </tr>
                                       
                        );
                        })
                        } */}
                    </tbody>
                    
</table>

        </div>
        
         </div>
      
        
    );
}
};

// export default Searching;
