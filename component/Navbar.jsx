import React from "react";
import { NavLink , BrowserRouter } from "react-router-dom" ;
import Side from "../sideBar/Side";
const Navbar = () => {
    return(
      <BrowserRouter>
      <div className="container-fluid nav_bg">
      <div className="row">
    <div className="col-12 mx-auto">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
      <NavLink className="nav-link active"  exact to="/Home">Home</NavLink>
    </li>
  
    <li className="nav-item">
          <BrowserRouter>
          <NavLink
           className="nav-link" to="/About">Link</NavLink>
          </BrowserRouter>
         </li>
         </ul>
         </div>
      <form className="d-flex"> 
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      </div>
      </nav>
      </div>
      </div>
      </div>
      <Side/>
      </BrowserRouter>
     )}

export default Navbar;