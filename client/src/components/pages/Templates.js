import { React, } from "react";
import { Link, } from "react-router-dom";
import { Container, Grid} from "@material-ui/core";
import { ChevronLeft, } from "@material-ui/icons";
import { ButtonClear, } from "../atoms";
import { ViewPosting } from "../molecules/index";
import {
  backendStudent,
  frontendStudent,
  datascienceStudent,
  fullstackStudent,
} from "../../models/mockJobDataObjects";
import "./styles/View.css";

const Templates = () => {

  let templateList = [
    backendStudent,
    frontendStudent,
    datascienceStudent,
    fullstackStudent,
  ];

  // let job = templateList[0];
  return (

    templateList.map((job) => {
      return (
        <Grid
          container
          style={{ paddingTop: "1em" }}
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-end"
        >
          {/** Left side button */}
          <Grid item xs={2}>
            <Grid container justifyContent="flex-end">
              <Link to="/profile">
                <ButtonClear startIcon={<ChevronLeft />}>Back</ButtonClear>
              </Link>
            </Grid>
          </Grid>
  
          {/** Middle Job Posting */}
          <Grid item xs={7}>
            <Container maxWidth="md">
              <ViewPosting data={job} />
            </Container>
          </Grid>
        </Grid>
      );
    })
  )

  
};

export default Templates;
