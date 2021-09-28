import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import Queryview from "./queryview";
export default class Query extends Component{


constructor(){

   super()
 this.state={

 }
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

        
<h4>Queries</h4>

<div className="row">
    <div className="col">
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />

</div>
    </div>

<div className="col">
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
 
</div>
</div>
<div className="col">
<NavLink  class="btn btn-success" to="#">Export as Exel</NavLink>
</div>

<div className="col">
<NavLink to="/queryview" class="btn btn-success" >Add +</NavLink>
</div>

</div>




    </div>
    </>)
}
  











}