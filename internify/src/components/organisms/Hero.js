import React, { useState } from "react";
// import { Link } from "@reach/router";
import { ButtonWhite, GoogleLoginButton } from "../atoms/index.js";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../../store/actions/userActions";
import "./styles/Hero.css";

const Hero = (props) => {
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

        var newUser = {
          authId: result.user.uid,
          profilePhoto: result.user.photoURL,
          name: result.user.displayName,
          email: result.user.email,
          contact: result.user.phoneNumber,
        };

        console.log(newUser);
        console.log(result.user);
        //dispatch
        props.actions.addUser(newUser);

        return result.user;
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createWEmail = (event, email, password) => {
    event.preventDefault();
    console.log("We are creating a new user, via email and password!");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            // Email verification sent!
            // ...
            alert("Please verify email address :)");
            return;
          });
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });

    setEmail("");
    setPassword("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "fEmail") {
      setEmail(value);
    } else if (name === "fPassword") {
      setPassword(value);
    }
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
            value={email}
            placeholder="Create an account with Email"
            onChange={(event) => onChangeHandler(event)}
          />
          <br></br>
          <input
            className="hero_form_input"
            type="password"
            id="hero_password"
            name="fPassword"
            value={password}
            placeholder="Password"
            onChange={(event) => onChangeHandler(event)}
          />
          <br></br>
        </form>
        <ButtonWhite
          className="hero_form_button"
          onClick={(event) => {
            createWEmail(event, email, password);
          }}
        >
          Continue with Email
        </ButtonWhite>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addUser: addUser }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Hero);
