import { Component } from "react";
import dataList from "./Data.js";
export default class StudentList extends Component{
    constructor(){
        super();
        this.state = {
            studentList : dataList,
            branchList: ["CS","IT","EC","MECH"]
        }
    }
    removeRecord = (roll)=>{
       if(window.confirm("Are you sure ?")){ 
        let index =  this.state.studentList.findIndex((student)=>student.roll == roll);
        this.state.studentList.splice(index,1);
        this.setState({studentList: [...this.state.studentList]});
       }
    }
    addNewRecord = ()=>{
        // let roll = document.getElementById("roll").value;
        // let name = document.getElementById("name").value;
        // let branch = document.getElementById("branch").value;
        // let mobile = document.getElementById("mobile").value;
        let roll = this.roll.value;
        let name = this.name.value;
        let branch = this.branch.value;
        let mobile = this.mobile.value;
        this.setState({studentList: [...this.state.studentList,{roll,name,branch,mobile}]});

    }
    render(){
        return <>
          <hr/>
          <div className="container">
            <div className="row row mt-2 mb-2">
                <div className="col-md-6">
                    <input ref={(obj)=>this.roll=obj} id="roll" type="text" placeholder="Enter Roll Number" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <input ref={(obj)=>this.name=obj} id="name" type="text" placeholder="Student name" className="form-control"/>
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-md-6">
                   <select ref={(obj)=>this.branch=obj} id="branch" className="form-control">
                     {this.state.branchList.map((branch,index)=><option key={index}>{branch}</option>)}
                   </select>
                </div>
                <div className="col-md-6">
                    <input ref={(obj)=>this.mobile=obj} id="mobile" type="text" placeholder="Enter Contact Number" className="form-control"/>
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-md-6">
                   <button onClick={this.addNewRecord} className="btn btn-success">ADD</button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Mobile</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.studentList.map((student,index)=><tr key={index}>
                        <td>{student.roll}</td>
                        <td>{student.name}</td>
                        <td>{student.branch}</td>
                        <td>{student.mobile}</td>
                        <td><button onClick={()=>this.removeRecord(student.roll)} className="btn btn-outline-danger">Remove</button></td>
                    </tr>)}
                </tbody>
            </table>
          </div>
        </>
    }
}