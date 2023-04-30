import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { ShareContext } from "../../Contexts/Context";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, Logouting } = useContext(ShareContext);
  const handleLogouting = () => {
    return Logouting().then(() => toast.success("Logout Successfully done"));
  };
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
          <Link to="">Blog</Link>
          {user?.email ? (
            <button className="log-btn" onClick={handleLogouting}>
              <Link to="">LogOut</Link>
            </button>
          ) : (
            <button className="log-btn">
              {" "}
              <Link to="/login">Login</Link>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
