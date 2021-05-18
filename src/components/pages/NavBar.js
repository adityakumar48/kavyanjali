import React, { useState } from "react";
import logo from "./logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <a href="#" className="navbar-logo">
          <img className='logo-img-nav' src={logo} alt="logo" width="100%" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a to="/contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
