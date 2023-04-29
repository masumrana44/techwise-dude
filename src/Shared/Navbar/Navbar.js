import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="com-navbar" id="navbar">
        <div className="com-logo">
          <img src={logo} alt="" />
          <h1>
            <span id="logo-first">techwise</span>dude
          </h1>
        </div>
        <nav className="com-nav">
          <Link to="/home">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="">Support</Link>
          <Link to="/login">Login</Link>
          <Link to="">Blog</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
