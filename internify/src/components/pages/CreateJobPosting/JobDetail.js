import React from "react";
import { Container} from "@material-ui/core";
import { Stepper } from "../../molecules/index";
import ApplicantDetails from "../../molecules/ApplicantDetails";

function JobDetail(props){
    const data = props.data;

    return (
        <div className="Create">
            <Container maxWidth="md" style={{ padding: "0 10em" }}>
                <Stepper stepNumber={3} />
                <h1>3. Job Details</h1>
                <ApplicantDetails 
                location={data.location}
                payment={data.payment}
                citizenship={data.citizenship}
                academicReq={data.academicReq}
                coopReq={data.coopReq}
                />
            </Container>
        </div>
    )
}

export default JobDetail;