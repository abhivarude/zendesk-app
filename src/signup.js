import React,{useState,useEffect,useRef} from 'react';
import "./auth.css"
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default function signup(props){





    const validate=values=>{
      
//     const emailcheak=async()=>{

//       const emailcheak=await axios.post("http://localhost:3005/cheak",{Email:values.Email})
//       console.log("email")
// return emailcheak;
// }  



const errors={};
if(!values.name)
{
  errors.name='*Name is Required';
}

else if(values.name.length<10)
{
  errors.name='*length should greter than 10 char';
}
if(!values.email)
{
  errors.email="*Email is required";
}
else if(!validateEmail.test(values.email))
{
  errors.email=" *Email is invalid ";
}

// else if()
// {
//   errors.email="Email alerady exists"
// }

if(!values.password)
{
  errors.password='*password is Required';
}

if(!values.password)
{
  errors.cpassword='*password is Required';
}
else if(!(values.password==values.cpassword))
{
  errors.cpassword="*incorrect password";
}

return errors;
    }



    return(
     <>
<div className="navbarde">
        <div className="row"> 
        <div className="col-7">
        <h3>GUVI</h3>
        </div>
        <div className="col"></div>
       <div className="col-1">
         <NavLink to="/login" class="btn btn-dark" id="logout">Login</NavLink>
       </div>

      </div>

      </div>

<div className="container1">
       <div className="container">
          <div className="signupbody">
<div className="row">
<div className="col">

  <img src="signup.jpeg" width="490px" height="400px"></img>
</div>


<div className="col">


<Formik initialValues={{
  name:"",
  email:"",
  password:"",
  cpassword:""
}}

validate={validate}
onSubmit={ async(values)=>{

const data= await axios.post("https://zendesk-routes.herokuapp.com/signup",{Name:values.name,Email:values.email,password:values.password})


if(data.status==201)
{
 alert("Email alerady exists");

}

if(data.status==200)
{
 alert("signup sucsses");
  props.history.push("/login");
}
 
}}

>

{()=>{
return( <>

<Form>
  
<div class="mb-3">  
    <label for="name">Name:</label>
    <Field name="name" type='text'  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></Field>
    <ErrorMessage name="name" />

</div>


<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
    <Field name="email" type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></Field>
    <ErrorMessage name="email" />
</div>




<div class="mb-3">  
    <label for="name">password:</label>
    <Field name="password" type='password'  class="form-control" ></Field>
    <ErrorMessage name="password" />
</div>

<div class="mb-3">  
    <label for="name">Confirm password:</label>
    <Field name="cpassword" type='password'  class="form-control" ></Field>
    <ErrorMessage name="cpassword" /> 

</div>

<div class="mb-3">
<button type="submit" class="btn btn-success" id="signup">Signup</button>


</div>

</Form>


</>)    

}}


</Formik>



</div>
</div>

</div>

</div>





       </div>
       </>
    )
}
