import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { ButtonClear, ButtonOutlined } from "../atoms";
import { ViewPosting } from "../molecules/index";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import LinkIcon from "@material-ui/icons/Link";
import { mockJobPosting } from "../../models/mockData";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import { getJob } from "../../store/actions/jobPostActions";
import "./styles/View.css";

const View = (props) => {
  let { slug } = useParams();
  const store = useSelector((state) => state.jobs.currentPosting);
  const [job, setJob] = useState({});

  useEffect(() => {
    // TODO: props.actions keeps getting called infinitely
    // props.actions.getJob(slug);
    // setJob(store.currentPosting);
  }, [props.actions, slug, store]);
  console.log(job);
  
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
          <ViewPosting data={mockJobPosting} />
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
              <ButtonOutlined styles={{}} startIcon={<CreateOutlinedIcon />}>
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
  );
};

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getJob: getJob }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(View);
