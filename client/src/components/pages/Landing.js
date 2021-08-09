import React from "react";
import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";
import Footer from "../organisms/Footer";
import CircleBlue from "../../assets/Landing/circle_blue.png";
import CircleRed from "../../assets/Landing/circle_red.png";
import { ReactComponent as JobTemplates } from "../../assets/Landing/job_templates.svg";
import { ReactComponent as MatchesData } from "../../assets/Landing/matches_data.svg";
import { ReactComponent as TableAsset } from "../../assets/Landing/table_asset.svg";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing_page">
      <Navbar />
      <Hero />
      <div className="landing_section_matches">
        <div className="landing_section_matches_paragraph">
          <h2>Create job posts with gradual, dynamic feedback.</h2>
          <p>
            Internify is a tool that helps you create job postings that match
            with the appropriate student or new grad demographic.
          </p>
        </div>
        <MatchesData className="landing_section_matches_asset" />
      </div>
      <div className="landing_section_templates">
        <JobTemplates className="landing_section_templates_asset" />
        <div className="landing_section_templates_paragraph">
          <h2>Select from prefilled templates.</h2>
          <p>
            Not sure how to get started on your job posting? We offer prefilled
            templates that fill in the important details to help you get
            started.
          </p>
        </div>
      </div>
      <div className="landing_section_table">
        <div className="landing_section_table_paragraph">
          <h2>Share, collaborate, and learn from others.</h2>
          <p>
            Create job postings, share, and see how others are performing! Get
            an insight on how well other people’s job postings are making
            matches in our database.
          </p>
        </div>
        <div className="landing_section_table_asset">
          <img
            src={CircleRed}
            alt="red circle"
            className="landing_section_table_asset_circle_red"
          />
          <img
            src={CircleBlue}
            alt="blue circle"
            className="landing_section_table_asset_circle_blue"
          />
          <TableAsset className="landing_section_table_asset_table" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
