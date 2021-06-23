import React from "react";
import { Container} from "@material-ui/core";
import { Stepper } from "../../molecules/index";
import ApplicantDetails from "../../molecules/ApplicantDetails";
import MultiLineTextField from "../../atoms/MultiLineTextField";
import AuthNavbar from "../../organisms/AuthNavbar";
import "./styles/Review.css";

function Review(props){

    return (
        <div className="Create">
            <AuthNavbar/>
            <Container maxWidth="md" style={{ padding: "0 10em" }}>
                <Stepper stepNumber={4} />
                <h1>5. Review</h1>
            </Container>
        </div>
    )
}

export default Review;