import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import { ChevronLeft, CreateOutlined } from "@material-ui/icons";
import { ButtonClear, ButtonOutlined } from "../atoms";
import { ViewPosting } from "../molecules/index";
import LinkIcon from "@material-ui/icons/Link";
import "./styles/View.css";
import axios from "axios";

const View = () => {
  let { slug } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/jobs/${slug}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  return job ? (
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

      {/** Right side edditing -> matches as well? */}
      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-end"
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
              <ButtonOutlined styles={{}} startIcon={<CreateOutlined />}>
                Edit
              </ButtonOutlined>
              {"    "}
              <ButtonOutlined styles={{}} startIcon={<LinkIcon />}>
                Copy Link
              </ButtonOutlined>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Typography>Loading</Typography>
  );
};

export default View;
