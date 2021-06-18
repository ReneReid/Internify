import React from "react";
import { ButtonWhite } from "../atoms/index.js";
import "./styles/LoginForm.css";

const LoginForm = () => {
  const continueWGoogle = () => {
    console.log("continue with google");
  };

  const login = () => {
    console.log("login");
  };

  // instead of using empty divs, use margins
  return (
    <div className="login_container">
      <p className="login_header">Welcome back 👋</p>
      <div className="login_form_container">
        <ButtonWhite style={{ width: "100%" }} onClick={continueWGoogle}>
          Continue with Google
        </ButtonWhite>
        <div className="linebreak">
          <p>────────── or ──────────</p>
        </div>
        <form>
          <input
            className="login_form_input"
            type="text"
            id="login_email"
            name="fEmail"
            placeholder="Email"
          />
          <br></br>
          <input
            className="login_form_input"
            type="text"
            id="login_password"
            name="fPassword"
            placeholder="Password"
          ></input>
          <br></br>
        </form>
        <div className="login_form_button">
          <ButtonWhite style={{ width: "100%" }} onClick={login}>Login</ButtonWhite>
        </div>
        <div className="login_help_container">
          <div className="login_create_account">
            <a href="placeholder1" className="create_account_link">
              Create an account
            </a>
          </div>
          <div className="login_forget_password">
            <a href="placeholder2" className="forgot_password_link">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
