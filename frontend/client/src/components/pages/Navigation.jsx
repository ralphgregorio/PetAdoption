import React from "react";
import { NavLink } from "react-router-dom";
import '../navbar/Nav.css'

function Navigation() {
    return (
      <div className="navigation">
        <nav className="NavbarItems">
            <NavLink className="navbar-logo" to="/">
              <h1 className="navbar-logo">SK Pet Shelter</h1>
            </NavLink>
            <div>
              <ul className="nav-menu">
                <li>
                  <NavLink className="nav-links" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-links" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-links" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-links" to="/adopt">
                    Adopt a Pet
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-links" to="/login">
                    Staff Login
                  </NavLink>
                </li>
               
              </ul>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;