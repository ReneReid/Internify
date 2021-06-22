import React from "react";
import { Container} from "@material-ui/core";
import { Stepper } from "../../molecules/index";
import ApplicantDetails from "../../molecules/ApplicantDetails";
import MultiLineTextField from "../../atoms/MultiLineTextField";
import AuthNavbar from "../../organisms/AuthNavbar";
import "./styles/JobDetail.css";

function JobDetail(props){
    const data = props.data;

    return (
        <div className="Create">
            <AuthNavbar/>
            <Container maxWidth="md" style={{ padding: "0 10em" }}>
                <Stepper stepNumber={2} />
                <h1>3. Job Details</h1>
                <MultiLineTextField 
                className={"job_detail_multi_p"}
                id={"job_detail_p1"}
                label={"Job Description"}
                type={"text"}
                rowsMax={200}
                />
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