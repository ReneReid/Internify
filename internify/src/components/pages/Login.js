import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import LoginForm from "../molecules/LoginForm";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <LoginForm />
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
