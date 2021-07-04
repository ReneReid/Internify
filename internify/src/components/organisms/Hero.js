import React from "react";
import { ButtonWhite } from "../atoms/index.js";
import "./styles/Hero.css";

const Hero = () => {
  const learnMore = () => {
    console.log("learn more");
  };

  const continueWGoogle = () => {
    console.log("continue with google");
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
        <ButtonWhite className="hero_form_button" onClick={continueWGoogle}>
          Continue with Google
        </ButtonWhite>
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
