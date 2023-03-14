import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
     return (
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              {/* <Brand /> */}
            </div>

            <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
  }
  
  

export default NavBar;