import React from "react";
import { ButtonWhite, GoogleLoginButton } from "../atoms/index.js";
import firebase from "firebase/app";
import "./styles/Hero.css";

const Hero = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const learnMore = () => {
    console.log("learn more");
  };

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

  const continueWEmail = () => {
    console.log("continue with email");
  };

  return (
    <div className="hero">
      <div className="hero_header_container">
        <div className="hero_header_content">
          <p className="hero_header_line1">Find better candidates</p>
          <p className="hero_header_line2">with better job postings 🥇</p>
        </div>
        <ButtonWhite className="learn_more" onClick={learnMore}>
          Learn More
        </ButtonWhite>
      </div>
      <div className="hero_form_container">
        <GoogleLoginButton onClick={handleGoogleLogin} />
        <div className="linebreak">
          <p>────────── or ──────────</p>
        </div>
        <form>
          <input
            className="hero_form_input"
            type="text"
            id="hero_email"
            name="fEmail"
            placeholder="Create an account with Email"
          />
          <br></br>
          <input
            className="hero_form_input"
            type="text"
            id="hero_password"
            name="fPassword"
            placeholder="Password"
          />
          <br></br>
        </form>
        <ButtonWhite className="hero_form_button" onClick={continueWEmail}>
          Continue with Email
        </ButtonWhite>
      </div>
    </div>
  );
};

export default Hero;
