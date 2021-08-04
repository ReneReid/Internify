import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import {
  ChevronLeft,
  CreateOutlined,
  Link as LinkIcon,
  HighlightOff,
} from "@material-ui/icons";
import { ButtonClear, ButtonOutlined } from "../atoms";
import { ChipEye } from "../atoms/Chips";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { ViewPosting, ViewFeedback } from "../molecules/index";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import "./styles/View.css";

const View = (props) => {
  let user = props.user;
  let { slug } = useParams();
  const [job, setJob] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/jobs/${slug}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  function copyToClipboard() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      })
      .catch((err) => console.error(err));
  }

  function handleDelete() {
    axios
      .delete(`/api/jobs/${slug}`, { data: { userId: user.uid } })
      .then((res) => {
        window.open("/profile", "_self");
      })
      .catch((err) => console.error(err));
  }

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
                <li key={"date-created"}>
                  <b>Date created: </b>
                  {job.dateCreated
                    ? new Date(job.dateCreated).getDate() +
                      "/" +
                      (new Date(job.dateCreated).getMonth() + 1) +
                      "/" +
                      new Date(job.dateCreated).getFullYear()
                    : null}
                </li>
                <li key={"job-posting-matches"}>
                  Matches: <b>{job.matches}</b>
                </li>
              </ul>
            </div>
            <div className="view_page_buttons_list">
              <ButtonOutlined
                style={{ marginRight: "0.5em", marginBottom: "0.5em" }}
                startIcon={<CreateOutlined />}
              >
                Edit
              </ButtonOutlined>
              <ButtonOutlined
                style={{ marginRight: "0.5em", marginBottom: "0.5em" }}
                startIcon={<LinkIcon />}
                onClick={copyToClipboard}
              >
                Copy Link
              </ButtonOutlined>
              <ButtonOutlined
                style={{ marginRight: "0.5em", marginBottom: "0.5em" }}
                startIcon={<HighlightOff />}
                onClick={() => handleDelete()}
              >
                Delete
              </ButtonOutlined>
              {copySuccess && (
                <Alert
                  variant="outlined"
                  severity="success"
                  style={{ marginTop: "1em" }}
                >
                  Successful copy to clipboard!
                </Alert>
              )}
            </div>
            <div className="view_page_feedback">
              <h2> 1000 total students </h2>
              <ViewFeedback data={job.notes} display={display} />
              {display ? (
                <ChipEye
                  icon={
                    <IconButton
                      aria-label="display-toggle"
                      onClick={() => {
                        setDisplay(!display);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  }
                  label={job.matches + " total matches"}
                />
              ) : (
                <ChipEye
                  icon={
                    <IconButton
                      aria-label="display-toggle"
                      onClick={() => {
                        setDisplay(!display);
                      }}
                    >
                      <VisibilityOffIcon />
                    </IconButton>
                  }
                  label={job.matches + " total matches"}
                />
              )}
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
