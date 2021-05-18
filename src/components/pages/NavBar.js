import React, { useState } from "react";
import logo from "./logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to='/' className="navbar-logo">
          <img className='logo-img-nav' src={logo} alt="logo" width="100%" />
          <h2 className="logo-text-nav">Kavyanjali</h2>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to='/' className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/About' className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/Team' className="nav-links">
              Committe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Events" className="nav-links">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
