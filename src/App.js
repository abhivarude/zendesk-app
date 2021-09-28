import logo from './logo.svg';
import './App.css';
import Info from './info';
import Calender from"./calender";
import Query from './query';
import React from 'react';
import Queryview from "./queryview"
import Requirement from './requirements';
import Login from './login';
import {BrowserRouter,Switch,Route,Redirect ,exact} from "react-router-dom"
import signup from './signup';
function App() {

  return (
    <div >
     	<BrowserRouter>
       
       <Switch>

         <Route exact path="/calender" component={Calender}></Route>
         <Route path="/query" component={Query}></Route>
         <Route path="/queryview" component={Queryview}></Route>
         <Route path="/requirements" component={Requirement}></Route>
         <Route path="/login" component={Login}></Route>
         <Route path="/signup" component={signup}></Route>
         <Route path="/" > <Redirect to="/signup"></Redirect></Route>
       </Switch>
       
       </BrowserRouter>

    </div>
  );
}

export default App;