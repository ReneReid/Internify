import React, {useState} from "react";
import { ButtonWhite, GoogleLoginButton } from "../atoms/index.js";
import firebase from "firebase/app";
import "./styles/LoginForm.css";

const LoginForm = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  
  const handleGoogleLogin = () => {
    console.log("continue with google");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (event, email, password) => {
    event.preventDefault();
    console.log("We are attempting to login a pre-existing user!");

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // signed in
      var user = userCredential.user;
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "fEmail") {
      setEmail(value);
    } else if (name === "fPassword") {
      setPassword(value);
    }
  }

  // instead of using empty divs, use margins
  return (
    <div className="login_container">
      <p className="login_header">Welcome back 👋</p>
      <div className="login_form_container">
        <GoogleLoginButton onClick={handleGoogleLogin} />
        <div className="linebreak">
          <p>────────── or ──────────</p>
        </div>
        <form>
          <input
            className="login_form_input"
            type="text"
            id="login_email"
            name="fEmail"
            value = {email}
            placeholder="Email"
            onChange = {event => onChangeHandler(event)}
          />
          <br></br>
          <input
            className="login_form_input"
            type="text"
            id="login_password"
            name="fPassword"
            value = {password}
            placeholder="Password"
            onChange = {event => onChangeHandler(event)}
          ></input>
          <br></br>
        </form>
        <div className="login_form_button">
          <ButtonWhite style={{ width: "100%" }} onClick={event => {login(event, email, password)}}>
            Login
          </ButtonWhite>
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
