import React from "react";
import "./Register.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
        {/* register form animation ban er  */}
      <div className="login-from-animation">
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_tpa51dr0.json"
          style={{ height: "500", width: "500px" }}
        >
          <Controls
            // visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>

      <form className="register-from">
        <h2 className="text-center">Register</h2>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <label htmlFor="ConPassword">
          Confrim Password
          <input
            type="password"
            id="ConPassword"
            name="ConPassword"
            placeholder="Confrim Password"
            required
          />
        </label>
        <div className="error-container"> 
          {/* <p>{error}</p> */}
        </div>
        <button type="submit" className="btn-sigin">
          Register
        </button>
        <div className="hr-block">
          <hr className="login-hr" />
          or
          <hr className="login-hr" />
        </div>

        <p className="text-center mt-5">
          {" "}
          Already haven an Account.Please{" "}
          <Link to="/login" className="resgiter-link">
          login
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Register;
