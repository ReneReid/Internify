import React from "react";
import { ButtonOutlined } from "../atoms/index.js";
import "./styles/LandingCopy.css";
import createMobile from "../../assets/Landing/create-mobile.png";
import triplets from "../../assets/Landing/triplets-display.png";
import other from "../../assets/Landing/other-posts.png";

const LandingCopy = () => {
  const getStarted = () => {
    console.log("getStarted");
  };

  return (
    <div className="container_home_guest">
      <div className="container_one">
        <div className="container_one_left">
          <ul>
            <li>Make job postings with</li>
            <li>
              gradual{" "}
              <strong>
                <u>feedback</u>
              </strong>{" "}
              that help
            </li>
            <li>guide you to make better</li>
            <li>job postings.</li>
          </ul>
        </div>

        <div className="container_one_right">
          <img src={createMobile} alt="Unable to display" />
        </div>
      </div>

      <div className="container_home_text">
        <p>
          Dynamic feedback that helps you add the{" "}
          <strong>
            <u>right details</u>.
          </strong>
        </p>
      </div>

      <div className="container_two">
        <img src={triplets} alt="Unable to display" />
      </div>

      <div className="container_three">
        <div className="container_three_left">
          <ul>
            <li>
              Draw{" "}
              <strong>
                <u>inspiration</u>!
              </strong>{" "}
              Take a{" "}
            </li>
            <li>look at how other recruiters</li>
            <li>are making their job posts.</li>
          </ul>
        </div>

        <div className="container_three_right">
          <img src={other} alt="Unable to display" />
        </div>
      </div>

      <div className="container_four">
        <div className="container_four_left">
          <p>
            Mobile-ready, so you can create your job posting{" "}
            <strong>on the go</strong>.
          </p>
        </div>

        <div className="container_four_right">
          <ButtonOutlined
            className="get_started_button"
            color="white"
            onClick={getStarted}
          >
            Get Started
          </ButtonOutlined>
        </div>
      </div>
    </div>
  );
};

export default LandingCopy;
