import React from "react";
import eyIcon from "../Asset/EY logo 1.svg"
import "./Navbar.css";
import {  NavLink } from "react-router-dom";

export const Navbar = () => {
 

  return (
    <nav >
        <div className='logo-icon'>
            <img src={eyIcon} style={{height:"25px"}}/>
        </div>
      
        <ul >
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/zone">Experience Zone</NavLink>
          </li>
          <li>
          <NavLink to="/usecases">Use Cases</NavLink>
          </li>
          <li>
          <NavLink to="/assets">Assets</NavLink>
          </li>
          <div className='contact-div'>
              Contact Us
          </div>
        </ul>
        
    </nav>
  );
};