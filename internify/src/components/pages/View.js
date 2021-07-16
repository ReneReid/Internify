import { React, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { ButtonFilled, ButtonClear, ButtonOutlined } from "../atoms";
import { JobPosting } from "../../molecules/index";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import LinkIcon from "@material-ui/icons/Link";
import "./styles/View.css";

const View = () => {
  const [jobData, setJobData] = useState({
    id: uuidv4(), // Add an underscore at some point (all instances of id across all objects and files)
    header: {
      title: "",
      company: "",
      location: "",
      startDate: "",
      position: [],
      length: "",
    },
    requirements: {
      experience: "",
      isGpaRequired: "",
      gpaValue: "",
      languages: [],
      frameworks: [],
      tools: [],
      concepts: [],
    },
    details: {
      description: "",
      position: "",
      pay: "",
      candidates: "",
      academicReq: [],
      coOp: "",
    },
    contact: {
      name: "",
      email: "",
      linkedIn: "",
      other: "",
      applicationSteps: "",
    },
  });
  return (
    <Grid container direction="row" alignItems="flex-start" justify="flex-end">
      {/** Left side button */}
      <Grid item xs={2}>
        <Grid container justify="flex-end" style={{ paddingTop: "1em" }}>
          <ButtonClear startIcon={<ChevronLeft />}>Back</ButtonClear>
        </Grid>
      </Grid>

      {/** Middle Job Posting */}
      <Grid item xs={7} style={{ padding: "0 5em" }}>
        <Container maxWidth="md">
          <JobPosting data={jobData} />
        </Container>
      </Grid>

      {/** Right side edditing -> matches as well? */}
      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-end"
        >
          <div className="view_page_creation_details">
            <div className="view_page_details_list">
              <ul className="view_page_details_list">
                <li>
                  <b>Date created:</b> 05/25/2021
                </li>
                <li>
                  <b>Score: </b>80%
                </li>
              </ul>
            </div>
            <div className="view_page_buttons_list">
              <ButtonOutlined styles={{}}>
                <CreateOutlinedIcon />
                Edit
              </ButtonOutlined>
              {"    "}
              <ButtonOutlined styles={{}}>
                <LinkIcon />
                Copy Link
              </ButtonOutlined>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default View;
