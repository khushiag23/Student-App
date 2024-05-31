import { Component } from "react";
import dataList from "./Data.js";
export default class StudentControlledComponent extends Component{
    constructor(){
        super();
        this.state = {
            studentList : dataList,
            branchList: ["CS","IT","EC","MECH"],
            roll : null,
            name: null,
            branch: null,
            mobile: null
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
      this.setState({studentList: [...this.state.studentList,{roll:this.state.roll,name:this.state.name,branch:this.state.branch,mobile: this.state.mobile}]});
    }
    render(){
        return <>
          <hr/>
          <div className="container">
            <div className="row row mt-2 mb-2">
                <div className="col-md-6">
                    <input onChange={(event)=>this.setState({roll: event.target.value})} id="roll" type="text" placeholder="Enter Roll Number" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <input onChange={(event)=>this.setState({name: event.target.value})} id="name" type="text" placeholder="Student name" className="form-control"/>
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-md-6">
                   <select onChange={(event)=>this.setState({branch: event.target.value})} id="branch" className="form-control">
                     <option>Select Branch</option>
                     {this.state.branchList.map((branch,index)=><option key={index}>{branch}</option>)}
                   </select>
                </div>
                <div className="col-md-6">
                    <input onChange={(event)=>this.setState({mobile: event.target.value})}  id="mobile" type="text" placeholder="Enter Contact Number" className="form-control"/>
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-md-6">
                   <button onClick={this.addNewRecord} className="btn btn-success">ADD</button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-danger ml-2">CS({this.state.studentList.filter((student)=>student.branch=="CS").length})</button>
                    <button className="btn btn-warning ml-2">IT({this.state.studentList.filter((student)=>student.branch=="IT").length})</button>
                    <button className="btn btn-danger ml-2">EC({this.state.studentList.filter((student)=>student.branch=="EC").length})</button>
                    <button className="btn btn-success ml-2">MECH({this.state.studentList.filter((student)=>student.branch=="MECH").length})</button>
                    <button className="btn btn-secondary ml-2">Total({this.state.studentList.length})</button>
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