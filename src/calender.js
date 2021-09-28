import logo from './logo.svg';
import './App.css';
import Info from './info';
import Queryview from './queryview';
import Query from './query';

 import React, { useState } from 'react';
 import {NavLink} from "react-router-dom";
 import Calendar from 'react-calendar';
    import "./info.css"


  
export default   function Calender(props) {
      const [value, onChange] = useState(new Date());
   
      const [buttonpopup,setButtonPopup]=useState(false);

 const classlink=(value, event)=>{
  

let container=document.querySelector(".infocoloumn");
let classlink=document.createElement("p","classlink");
classlink.innerHTML=" https://zoom.us/meeting/register/tJYtd-CqqzMoGNAN_pmd73fGIYzUlh6zkFc9";

container.append(classlink);

}
const recording=(value, event)=>{
  

  let container=document.querySelector(".infocoloumn2");
  let classlink=document.createElement("p","classlink");
  classlink.innerHTML="https://zoom.us/rec/share/6JJBgEdPn_vzUHZpcogaXmJo0pSf5OaXUxT";
  container.append(classlink);
  
  }
  
  const logout=()=>{
    props.history.replace("./logout");
  }

      return (<>
<div className="navbarde">
        <div className="row"> 
        <div className="col-7">
        <h3>GUVI</h3>
        </div>
        <div className="col"></div>
       <div className="col-1">
         <button onClick={logout} class="btn btn-dark" id="logout">LOGOUT</button>
       </div>

      </div>

      </div>
        <div className="calender">

         
        <div className="container-lx">
          <div className="row">

          <div className="col">
              <div class="vertical-menu">
             
                <NavLink to="/calender" class="btn btn-dark">Calender</NavLink>
                <NavLink to="/query"  class="btn btn-dark">Queries</NavLink>
                <NavLink to="/requirements"  class="btn btn-dark">Requirement</NavLink>
               
            </div>
            </div>
<div className="col-10">
<Calendar
            onChange={onChange}
            value={value}
            onClickDay={()=>{setButtonPopup(true)}}
          />

</div>

</div>
         
       





          <div className="poput">
            <Info trigger={buttonpopup} setTrigger={setButtonPopup}> 
            
           <div className="row"> 
                 <div className="col">
                    <div className="infocoloumn1">
                  
                            <div class="btn-group-vertical">
                                <button class="btn btn-dark" id="classlink" onClick={classlink}>Class Link </button>

       <div className="infocoloumn"></div>
                                <button class="btn btn-light" id="recording" onClick={recording}>Recording</button>
                                <div className="infocoloumn2"></div>
                            </div>
                    </div>
                    </div>
                    
              <div className="col">

              

              </div>
              </div>


            
            
              </Info>
              </div>
        </div>
        </div>
        </>
      );
    }

