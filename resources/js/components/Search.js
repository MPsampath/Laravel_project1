import React, { Component } from 'react';
import '../css/app.css';
import axios from 'axios';
import { result } from 'lodash';


class Searching extends Component
{
    
    constructor(props)
    {
      
        super(props);

        //this.onaddDetails = this.onaddDetails.bind(this);
        //this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            search:[],
            project:'',
           
            
        };
        
    }
    onaddDetails()
    {
        this.setState({
            companys:target.value,
            departments:target.value,
            projects:target.value
        });
    }

    componentDidMount()
    
    {
        
      

        fetch('http://127.0.0.1:8000/api/search')
        .then(res => res.json())
        .then(result=>{
            this.setState({
               
                search: result
                
                
            });
        });
        // const details ={
        //     company : this.state.companys,
        //     department : this.state.departments,
        //     project:this.state.projects
        // }
        // axios.get('http://127.0.0.1:8000/api/search',details)
        // .then(response=>
        //     {
        //         this.setState({search:response.data});
        //         //console.log(response);
        //     });
    }
   
    render(){

        
        const {search} = this.state;
       
    return(
        
        
       
        <div className="search_forme">
            
            
            <form className="searching_emp" method="get">
            {/* <div>
                    <label>Company</label>
                    <select className="custom-select" name="companys" id="companys">
                     <option defaultValue = "non">Choose...</option>
                       <option value="company 1">Company 1</option>
                       <option value="company 2">Company 2</option>
                       <option value="company 3">Company 3</option>
                   </select>
            </div> */}
            {/* <div>
                    <label>Department</label>
                    <select className="custom-select" name="departments" id="departments">
                    <option defaultValue = "non">Choose...</option>
                       <option value="department 1">Department 1</option>
                       <option value="department 2">Department 2</option>
                       <option value="department 3">Department 3</option>
                   </select>
            </div> */}
            <div>
                    <label>Project</label>
                    <select className="custom-select" name="projects" id="projects">
                       <option defaultValue = "non">Choose...</option>
                       <option value="project 1">Project 1</option>
                       <option value="project 2">Project 2</option>
                       <option value="project 3">Project 3</option>
                   </select>
            </div>
            <button onClick = {this.componentDidMount} className="btn btn-primary" >Submit</button>
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
                       
                        {
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
                        }
                        
                    </tbody>
                    
            </table>

        </div>
        
         </div>
      
        
    );

    
}

};
 export default Searching;
