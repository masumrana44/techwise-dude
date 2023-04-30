import React, { useContext } from "react";
import "./Register.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { ShareContext } from "../../Contexts/Context";
import { useState } from "react";
import Modal from "../../Shared/Modal/Modal";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateName, isOpen, setIsOpen } =
    useContext(ShareContext);
  const [error, setError] = useState(null);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const conPassword = form.ConPassword.value;
    // console.log(name,email,password,conPassword)
    if (password !== conPassword) {
      return toast.error("Your Password did not match");
    }

    if (!/(?=.*[0-9])/.test(conPassword)) {
      return toast.error("Password should be at least one number character");
    }
    if (!/(?=.*?[A-Z])/.test(conPassword) && /(?=.*?[a-z])/.test(conPassword)) {
      return setError(
        "Please. Password should be at least one Uppercase and one LowerCase"
      );
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(conPassword)) {
      return toast.error("Password should be at least one Special Character");
    }
    if (!/.{6,}/.test(conPassword)) {
      return toast.error("Password should be at least 6 character");
    }

    createUser(email, conPassword)
      .then((result) => {
        updateName(name)
          .then(() => {})
          .catch((err) => console.error(err));

        setIsOpen(true);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="register-container">
      {isOpen && <Modal />}
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

      <form onSubmit={handleCreateUser} className="register-from">
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
          <p>{error}</p>
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
          
        </p>
      </form>
    </div>
  );
};

export default Register;
