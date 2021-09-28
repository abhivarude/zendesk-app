import React from "react";
import "./info.css";
import { NavLink } from "react-router-dom";
export default function Requirement(){



  const logout=()=>{
    this.props.history.replace("./logout");
}
    return(<div>

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

      <div className="requirements">

<h3>Requirements...</h3>

          <p id="progress">Your course still in progress....</p>
      </div>
      </div>

    </div>)
}