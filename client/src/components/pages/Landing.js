import React from "react";
import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";
import Footer from "../organisms/Footer";
import CircleBlue from "../../assets/Landing/circle_blue.png";
import CircleRed from "../../assets/Landing/circle_red.png";
import { ReactComponent as JobTemplates } from "../../assets/Landing/job_templates.svg";
import { ReactComponent as MatchesData } from "../../assets/Landing/matches_data.svg";
import { ReactComponent as TableAsset } from "../../assets/Landing/table_asset.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ButtonOutlined } from "../atoms";
import "./styles/Landing.css";

const Landing = () => {
  const [templateRef, templateRefInView] = useInView({
    triggerOnce: true,
  });
  const [redCircleRef, redCircleRefInView] = useInView({
    triggerOnce: true,
  });
  const [blueCircleRef, blueCircleRefInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="landing_page">
      <Navbar />
      <Hero />
      <div id="landing_section_matches" className="landing_section_matches">
        <div className="landing_section_matches_paragraph">
          <h2>Create job posts with gradual, dynamic feedback.</h2>
          <p>
            Internify is a tool that helps you create job postings that match
            with the appropriate student or new grad demographic.
          </p>
        </div>
        <motion.div
          animate={{ x: -800 }}
          transition={{ duration: 0.25, type: "tween" }}
        >
          <MatchesData className="landing_section_matches_asset" />
        </motion.div>
      </div>
      <div className="landing_section_templates">
        <motion.div
          ref={templateRef}
          animate={{ x: templateRefInView ? 900 : 0 }}
          transition={{ duration: 1, type: "tween" }}
        >
          <JobTemplates className="landing_section_templates_asset" />
        </motion.div>
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
          <motion.div
            ref={redCircleRef}
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: redCircleRefInView ? -50 : 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween", delay: 1 }}
          >
            <img
              src={CircleRed}
              alt="red circle"
              className="landing_section_table_asset_circle_red"
            />
          </motion.div>
          <motion.div
            ref={blueCircleRef}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: blueCircleRefInView ? 250 : 0, opacity: 1 }}
            transition={{ duration: 1, type: "tween" }}
          >
            <img
              src={CircleBlue}
              alt="blue circle"
              className="landing_section_table_asset_circle_blue"
            />
          </motion.div>
          <TableAsset className="landing_section_table_asset_table" />
        </div>
      </div>
      <div className="landing_section_final">
        <h2>Interested? Great, let's get started.</h2>
        <ButtonOutlined
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          Let's go
        </ButtonOutlined>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
