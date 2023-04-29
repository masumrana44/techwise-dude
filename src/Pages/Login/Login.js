import React from "react";
import "./Login.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_nc1bp7st.json"
          style={{ height: "500px", width: "500px" }}
        >
          <Controls
            // visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
      <form className="login-form-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <input type="submit" defaultValue="Login" />
      </form>
    </div>
  );
};

export default Login;
