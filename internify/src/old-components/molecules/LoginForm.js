import React from "react";
import Button from "../atoms/Button";
import "./styles/LoginForm.css";
import "../atoms/styles/Button.css";

const LoginForm = () => {
  const continueWGoogle = () => {
    console.log("continue with google");
  };

  const login = () => {
    console.log("login");
  };

  // instead of using empty divs, use margins
  return (
    <div className="login-container">
      <div className="welcome_message">
        <p className="welcome_text">Welcome back 👋</p>
      </div>
      <div className="fields_buttons">
        <Button
          className="continue_with_Google"
          text="Continue with Google"
          onClick={continueWGoogle}
        />
        <div className="linebreak">
          <p>────────── or ──────────</p>
        </div>
        <form>
          <input
            className="fEmail"
            type="text"
            id="fEmail"
            name="fEmail"
            placeholder="Email"
          />
          <br></br>
          <input
            className="fPassword"
            type="text"
            id="fPassword"
            name="fPassword"
            placeholder="Password"
          ></input>
          <br></br>
        </form>
        <Button className="login_button" text="Login" onClick={login} />
        <div className="create_forgot">
        <div className="create_account">
          <a href="placeholder1" className="create_account_link">
            Create an account
          </a>
        </div>
        <div className="forgot_password">
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
