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
        <a href="#home" className="navbar-logo">
          <img className='logo-img-nav' src={logo} alt="logo" width="100%" />
          <h2 className="logo-text-nav">Kavyanjali</h2>
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#committe" className="nav-links">
              Committe
            </a>
          </li>
          <li className="nav-item">
            <a href="#events" className="nav-links">
              Events
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
