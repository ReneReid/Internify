import React from "react";
import Container from "@material-ui/core/Container";
import {
  PositionSubHeader,
  InputFormJobHeader,
  LengthSubHeader,
  Stepper,
} from "../../molecules/index";
import AuthNavbar from "../../organisms/AuthNavbar";
import { ButtonFilled } from "../../atoms/Button";
import "./styles/CreateJobHeader.css";

function CreateJobHeader(props) {
  return (
    <div className="create">
      <Container maxWidth="md" className={"container"}>
        <AuthNavbar />
        <Stepper stepNumber={0} />
        <div className="create_job_header_container">
          <h1>1. Create a Job Header</h1>
          <InputFormJobHeader />
          <LengthSubHeader />
          <PositionSubHeader />
        </div>
        <ButtonFilled>Continue</ButtonFilled>
      </Container>
    </div>
  );
}

export default CreateJobHeader;
