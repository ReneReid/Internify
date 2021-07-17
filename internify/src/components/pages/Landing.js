import React from "react";
import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";
import LandingCopy from "../organisms/LandingCopy";
import Footer from "../organisms/Footer";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing_page">
      <Navbar />
      <Hero />
      <LandingCopy />
      <Footer landing={true}/>
    </div>
  );
};

export default Landing;
