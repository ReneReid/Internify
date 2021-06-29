import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import LoginForm from "../molecules/LoginForm";
import { EditModal } from "../molecules/index";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <LoginForm/>
      <EditModal toggle={true}/>
      <Footer />
    </div>
  );
};

export default Login;
