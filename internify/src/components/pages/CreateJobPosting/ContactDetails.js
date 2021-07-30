import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Stepper, InputFormContactDetails } from "../../molecules/index";

const ContactDetails = (props) => {
  const [contact, setContact] = useState({
    name: props.jobData.contact.name,
    email: props.jobData.contact.email,
    linkedIn: props.jobData.contact.linkedIn,
    other: props.jobData.contact.other,
    applicationSteps: props.jobData.contact.applicationSteps,
  });

  useEffect(() => {
    props.jobData.contact = contact;
  });

  return props.currentStep === 4 ? (
    <div className="create_form_container">
      <Container maxWidth="md" className={"container"}>
        <Stepper stepNumber={3} />
        <div className="contact_details_container">
          <h1>4. Contact Details</h1>
          <InputFormContactDetails
            handleChange={setContact}
            jobData={contact}
          />
        </div>
      </Container>
    </div>
  ) : null;
};

export default ContactDetails;
