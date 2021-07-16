import React, { useState } from "react";
import { ButtonWhite, GoogleLoginButton } from "../atoms/index.js";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../../store/actions/userActions";
import "./styles/LoginForm.css";

const LoginForm = (props) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const handleGoogleLogin = () => {
    console.log("continue with google");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const authId = result.user.uid;
        props.actions.getUser(authId);

        return authId;
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event, email, password) => {
    event.preventDefault();
    console.log("We are attempting to login a pre-existing user!");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // signed in
        const authId = result.user.uid;
        props.actions.getUser(authId);

        return authId;
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "fEmail") {
      setEmail(value);
    } else if (name === "fPassword") {
      setPassword(value);
    }
  };

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
            value={email}
            placeholder="Email"
            onChange={(event) => onChangeHandler(event)}
          />
          <br></br>
          <input
            className="login_form_input"
            type="password"
            id="login_password"
            name="fPassword"
            value={password.password}
            placeholder="Password"
            onChange={(event) => onChangeHandler(event)}
          ></input>
          <br></br>
        </form>
        <div className="login_form_button">
          <ButtonWhite
            style={{ width: "100%" }}
            onClick={(event) => {
              login(event, email, password);
            }}
          >
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

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getUser: getUser }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
