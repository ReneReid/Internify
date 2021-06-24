import React from 'react'
import Container from "@material-ui/core/Container";
import { ButtonFilled } from "../../atoms/Button";
import {
    Stepper,
    InputFormContactDetails
  } from "../../molecules/index";

const ContactDetails = () => {
    return (
        <div className="create_form_container">
            <Container maxWidth="md" className={"container"} style={{ padding: "0 10em" }}>
                <Stepper stepNumber={3} />
                <div className="contact_details_container">
                    <h1>4. Contact Details</h1>
                    <InputFormContactDetails />
                </div>
                <ButtonFilled>Continue</ButtonFilled>
                <br/>
                </Container>
        </div>
    )
}

export default ContactDetails
