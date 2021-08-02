import React from "react";
import { Container } from "@material-ui/core";
import { JobPosting, Stepper } from "../../molecules/index";
import "./styles/Review.css";

function Review(props) {
  const jobData = props.jobData;
  const user = props.user;

  return props.currentStep === 5 ? (
    <div className="create_form_container">
      <Container maxWidth="md">
        <Stepper stepNumber={4} />
        <h1>5. Review</h1>
        <JobPosting data={jobData} user={user}/>
      </Container>
    </div>
  ) : null;
}

export default Review;
