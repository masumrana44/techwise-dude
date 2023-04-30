import React from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { ShareContext } from "../../Contexts/Context";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loginWithEP, loginWithG } = useContext(ShareContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/home";

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    loginWithG()
      .then((res) => {
        toast.success("Login Succesfully Done");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEP(email, password)
      .then((res) => {
        form.reset();
        toast.success("Login Successfully Done");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="login-container">
      <div className="login-from-animation">
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_nc1bp7st.json"
          style={{ height: "500", width: "500px" }}
        >
          <Controls buttons={["play", "repeat", "frame", "debug"]} />
        </Player>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        <h2 className="text-center">Login</h2>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
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
        <div className="error-container">
          <p> </p>
        </div>

        <button type="submit" className="btn-sigin">
          Login
        </button>

        <div className="hr-block">
          <hr className="login-hr" />
          or
          <hr className="login-hr" />
        </div>

        <div className="another-login-container">
          <button onClick={handleGoogleLogin} className="withAnotherlogin-btn">
            <FaGoogle className="icon-styles" />
            Sign in with Google
          </button>
          <button className="withAnotherlogin-btn">
            <FaGithubSquare className="icon-styles" />
            Sign in with Github
          </button>
        </div>
        <p className="text-center mt-5">
          You have no any account.Please <Link to="/register">register</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
