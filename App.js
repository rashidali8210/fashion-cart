import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import { NavLink , Route ,Switch ,Routes} from "react-router-dom";
import './components/cssStyle/styling.css';
import Home from "./Home";
import Title from "./components/heading/Title";
import Navbar from "./components/navbar/Navbar";
import About from "./components/sideBar/About";
import Help from "./components/sideBar/Help";
import Header from "./components/heading/Index"
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import {ON_ADD}  from './Redux/Action';
import Product from './Product';


function App() 
{ 
  
  const Dispatch = useDispatch(); 
 
  console.log( Dispatch(ON_ADD()));

  return (
  <> 
<Header/>
<Navbar/>
<Switch>
<Route exact path="/" component={Home}/> 
{/* <Route exact path="/Home" component={}/>  */}
<Route exact path='/About' component={About}/>
<Route exact path='/Help' component={Help}/>
</Switch> 

  </>
  );
};
export default App;
