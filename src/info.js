import React from "react";
import "./info.css"

export default function Info(props)
{


return(props.trigger)?(
    <div className="popup">

<div className="popup-inner">
    <button className="close-btn" id="close" onClick={()=>{props.setTrigger(false)}}> &#10006; </button>


    {props.children}
</div>
    </div>
):"";
   



}