import React, { Component } from 'react';
import '../css/app.css';
import Bootstrap from 'react-bootstrap';



class Searching extends Component
{
    render(){
    return(

        <div className="search_forme">
            
            <form className="searching_emp" action="/saveEmploy" method="post">
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
                
        <div>
            <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        
                    </tbody>
</table>

        </div>
        </div>
    );
}
};

export default Searching;
