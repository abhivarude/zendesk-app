import React from "react";
import "./info.css"
import { Component } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import Query from "./query";
export default class Queryview extends Component{

constructor(){
    super();
    this.state={
        description:"",
        querytitle:""
    }
}

handleChange=({target:{name,value}})=>{
    this.setState({[name]:value});
  
 }
handlesubmit=async()=>{
   const data=await axios.post("https://zendesk-routes.herokuapp.com/query",{description:this.state.description,querytitle:this.state.querytitle})

    alert("query submitted");
}

cansel=()=>{
    this.props.history.replace("./query");
    
}
render(){
    return(
<>
<div className="navbarde">
        <div className="row"> 
        <div className="col-7">
        <h3>GUVI</h3>
        </div>
        <div className="col"></div>
       <div className="col-1">
       </div>

      </div>

      </div>
<div className="container">


<h3> Clarify your doubts..</h3>

<div className="querybox">

        <label for="">Query Title</label>
    <input type="text" class="form-control" id="querytitle" placeholder="Query Title" name="querytitle" value={this.state.querytitle} onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
   


 
        <label>Description</label>
    {/* <input type="textarea" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" /> */}

    <textarea name="Text1"  class="form-control"id="textarea" rows="10" name="description" value={this.state.description} onChange={this.handleChange} ></textarea>
   


    <div className="row">
        
    <div className="col">
<button type="button" class="btn btn-success" id="submitquery" onClick={this.handlesubmit}> Submit</button>
</div>

<div className="col">
<button type="button" class="btn btn-success" id="cancelquery" onClick={this.cansel}> Cancel</button>
</div>

    </div>
</div>









</div>

</>)

    }









}