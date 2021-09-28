
import axios from 'axios';
import "./auth.css";
import "./info.css"
import {NavLink} from "react-router-dom";
import Calender from './calender';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


export default function Login (props){



const validate=values=>{
const errors={}

if(!values.email)
{errors.email="* Email is required";}
else if(!validateEmail.test(values.email))
{errors.email="* Enter valid Email id"}


if(!values.password)
{
  errors.password="* password required";
}

return errors;
}



return(<>


<Formik initialValues={{
  email:"",
  password:""
}}
validate={validate}
onSubmit={async (values)=>{

  const login= await axios.post("https://zendesk-routes.herokuapp.com/login",{Email:values.email,password:values.password})
  console.log(login);
 
  if(login.status===200)
  {
      alert("logged in")

      props.history.push("./calender");
}
else{
  alert("invalid user credentials")
}








}
}

>


{()=>{


return(
<>

<div className="navbarde">
        <div className="row"> 
        <div className="col-7">
        <h3>GUVI</h3>
        </div>
        <div className="col"></div>
       <div className="col-1">
         <NavLink to="/signup" class="btn btn-dark" id="logout">Signup</NavLink>
       </div>

      </div>

      </div>
<div className="all">

<div className="container">
<div className="login">
<h3 id="title">ZEN DESK</h3>
<div className="row">
  <div className="col">

<div className="loginimage">

<img src="login.png" width="400rem" height="350px"></img>
    </div>
    </div>


    <div className="col">
      
<div className="loginbody">
<Form>

<div class="mb-3">  
    <label for="email">Email:</label>
    <Field name="email" type='text'  class="form-control" ></Field>
    <ErrorMessage style="color:red" name="email" />

</div>

<div class="mb-3">  
    <label for="password">Password:</label>
    <Field name="password" type="password"  class="form-control"></Field>
    <ErrorMessage name="password" />

</div>

<div class="mb-3">
<button type="submit" class="btn btn-success" id="login">Login</button>


</div>

</Form>
</div>

      
      </div>
  
  
  </div>

  </div>

  </div>


</div>

</>)
}}




</Formik>



</>)



}