import React from "react";
import { Container } from "@material-ui/core";
import AuthNavbar from "../../organisms/AuthNavbar";
import { JobPosting, Stepper } from "../../molecules/index";
import "./styles/Review.css";

function Review(props) {
  return (
    <div className="create_form_container">
      <AuthNavbar />
      <Container maxWidth="md" style={{ padding: "0 10em" }}>
        <Stepper stepNumber={4} />
        <h1>5. Review</h1>
        <JobPosting data={props.data} />
      </Container>
    </div>
  );
}

export default Review;
