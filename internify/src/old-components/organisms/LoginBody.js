import React from "react";
import LoginForm from "../molecules/LoginForm";
import Footer from "../molecules/Footer";
import "./styles/LoginBody.css";

const LoginBody = () => {
  return (
    <div className="login_body">
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginBody;
