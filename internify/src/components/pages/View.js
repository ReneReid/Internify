import React from "react";
import { Container, Grid } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
// import { JobPosting } from "../../molecules/index";
import { ButtonFilled, ButtonClear, ButtonOutlined } from "../atoms";

const View = () => {
  return (
    <Grid container direction="row" alignItems="flex-start" justify="flex-end">
      {/** Left side button */}
      <Grid item xs={2}>
        <Grid container justify="flex-end" style={{ paddingTop: "1em" }}>
          <ButtonClear startIcon={<ChevronLeft />}>Back</ButtonClear>
        </Grid>
      </Grid>

      {/** Middle Job Posting */}
      <Grid item xs={7} style={{ padding: "0 5em" }}></Grid>

      {/** Right side edditing -> matches as well? */}
      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-end"
        >
          <div className="view_page_creation_details">
            <ul className="view_page_details_list">
              <li>
                <b>Date created:</b> 05/25/2021
              </li>
              <li>
                <b>Score: </b>80%
              </li>
            </ul>
            <ul className="view_page_buttons_list">
              <li>
                <ButtonOutlined> Edit </ButtonOutlined>
              </li>
              <li>
                <ButtonOutlined> Copy Link </ButtonOutlined>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default View;
