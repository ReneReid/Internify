import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import LoginForm from "../molecules/LoginForm";

const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
