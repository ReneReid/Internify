import React from "react";
import Container from "@material-ui/core/Container";
import { Stepper, InputFormContactDetails } from "../../molecules/index";

const ContactDetails = (props) => {
  return props.currentStep === 4 ? (
    <div className="create_form_container">
      <Container
        maxWidth="md"
        className={"container"}
        style={{ padding: "0 10em" }}
      >
        <Stepper stepNumber={3} />
        <div className="contact_details_container">
          <h1>4. Contact Details</h1>
          <InputFormContactDetails jobData={props.jobData} />
        </div>
      </Container>
    </div>
  ) : null;
};

export default ContactDetails;
