import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import { ChevronLeft, CreateOutlined } from "@material-ui/icons";
import { ButtonClear, ButtonOutlined } from "../atoms";
import { ViewPosting } from "../molecules/index";
import Alert from "@material-ui/lab/Alert";
import LinkIcon from "@material-ui/icons/Link";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import axios from "axios";
import "./styles/View.css";

const View = ({ user }) => {
  let { slug } = useParams();
  const [job, setJob] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/jobs/${slug}`)
      .then((res) => setJob(res.data))
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

  function deleteJob() {
    axios
      .delete(`/api/jobs/${slug}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  // Make this a promise
  function handleUserUpdate(authId) {
    axios
      .get(`/api/users/${authId}`)
      .then((res) => {
        // Create the object here, pass into updateUser, ensure the new jobPosting removes slug
        updateUser(res.data);
      })
      .catch((err) => console.log(err));
  }

  function updateUser(data) {
    let newJobPostings = data.jobPostings.filter((posting) => {
      return posting !== slug;
    });
    // create new User
    const newUser = {
      authId: data.authId,
      _id: data._id,
      bio: data.bio,
      company: data.company,
      email: data.email,
      jobTitle: data.jobTitle,
      name: data.name,
      jobPostings: newJobPostings,
    };

    // Send patch request
    axios
      .patch(`/api/users/${newUser._id}`, newUser)
      .then((res) => res.status(200).json({ success: true }))
      .catch((err) => err.status(404).json({ success: false }));
  }

  function deleteMatch() {
    // Endpoints not in this branch yet
    console.log("Not done yet!");
  }

  // Need to make this a Promise chain
  function deleteButtonHandle() {
    handleUserUpdate(user.uid);
    deleteJob();
    deleteMatch();
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
              <ButtonOutlined styles={{}} startIcon={<CreateOutlined />}>
                Edit
              </ButtonOutlined>
              {"    "}
              <ButtonOutlined
                startIcon={<LinkIcon />}
                onClick={copyToClipboard}
              >
                Copy Link
              </ButtonOutlined>
              {"    "}
              <ButtonOutlined
                styles={{}}
                startIcon={<HighlightOffIcon />}
                onClick={() => deleteButtonHandle()}
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
          </div>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Typography>Loading</Typography>
  );
};

export default View;
