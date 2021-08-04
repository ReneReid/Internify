import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonFilled } from "../atoms/index";
import { AddCircleOutline } from "@material-ui/icons";
import "./styles/JobPosting.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addJob } from "../../store/actions/jobPostActions";
import { updateJobsOfUser } from "../../store/actions/userActions";
import { addMatch } from "../../store/actions/matchesActions";

const JobPosting = (props) => {
  const user = props.user;
  const data = props.data;
  const jobId = data.jobId;
  const header = data?.header
    ? data.header
    : {
        title: "",
        company: "",
        location: "",
        description: "",
      };
  const requirements = data?.requirements;
  const details = data?.details;
  const contact = data?.contact;

  const jobPoints = [
    ...header.position,
    details.position,
    details.pay,
    details.candidates,
  ];

  data.matches = useSelector(
    (state) => state.matches.page3Object?.page3Students?.length
  );

  const matchesObject = props.matches;

  function sendJob() {
    props.actions.addJob({ ...data, dateCreated: Date.now() });
    props.actions.updateJobsOfUser({ authId: user.uid, jobPostings: [jobId] });
    window.scrollTo(0, 0);
  }

  function sendMatch() {
    const allStudents = matchesObject.page3Object.page3Students;
    let studentIDs = [];
    for (let i = 0; i < allStudents.length; i++) {
      studentIDs.push(allStudents[i]["_id"]);
    }

    let matchesObj = {};
    matchesObj["jobId"] = jobId;
    matchesObj["matches"] = studentIDs;

    let notesObj = {};
    notesObj["seeking"] = matchesObject.page1Object.seeking;
    notesObj["concepts"] = matchesObject.page2Object.concepts;
    notesObj["experience"] = matchesObject.page2Object.experience;
    notesObj["frameworks"] = matchesObject.page2Object.frameworks;
    notesObj["gpa"] = matchesObject.page2Object.gpa;
    notesObj["languages"] = matchesObject.page2Object.languages;
    notesObj["academicReq"] = matchesObject.page3Object.academicReq;
    notesObj["candidates"] = matchesObject.page3Object.candidates;
    notesObj["coop"] = matchesObject.page3Object.coop;

    matchesObj["notes"] = notesObj;

    props.actions.addMatch(matchesObj);
  }

  return (
    <div className="job_posting_container">
      <h3 className="job_posting_title">{header.title}</h3>
      <h4 className="job_posting_subheader">{header.company}</h4>
      <p className="job_posting_subheader">{header.location}</p>
      <p className="job_posting_description">{details.description}</p>

      <h4 className="job_posting_subheader">Job points</h4>
      <ul className="job_posting_list">
        {jobPoints.map((list) => {
          return <li key={list}>{list}</li>;
        })}
        {details.coOp === "Yes" ? (
          <li key={"coop-true"}>
            Must be enrolled in an accredited Co-op program
          </li>
        ) : null}
      </ul>

      <h4 className="job_posting_subheader">Technical Requirements</h4>
      <ul className="job_posting_list_2">
        {requirements.experience ? (
          <li key={"working-experience"}>
            Must have <b>{requirements.experience}</b> of working experience
          </li>
        ) : (
          <li key={"no-working-experience"}>
            No prior work experience is required
          </li>
        )}
        {details.academicReq ? (
          <li key={"academic-requirements"}>
            Obtained or is currently enrolled in one or either:{" "}
            <ul>
              {details.academicReq.map((req) => {
                return (
                  <li key={req}>
                    <b>{req}</b>
                  </li>
                );
              })}
            </ul>
          </li>
        ) : null}
        {details.academicReq && requirements.isGpaRequired ? (
          <li key={"gpa-requirement"}>
            Must have at least or is at <b>{requirements.gpaValue} GPA</b>{" "}
            standing or equivalent
          </li>
        ) : null}
        <li
          key={"coding-language-requirement"}
          style={{ marginBottom: "0.25em" }}
        >
          Experience with the following programming languages:
        </li>
        <ul className="job_posting_list_nested">
          {requirements.languages.map((language) => {
            return (
              <li key={language}>
                <b>{language}</b>
              </li>
            );
          })}
        </ul>
        <li key={"framework-requirement"}>
          Experience with the following frameworks:
        </li>
        <ul className="job_posting_list_nested">
          {requirements.frameworks.map((framework) => {
            return (
              <li key={framework}>
                <b>{framework}</b>
              </li>
            );
          })}
        </ul>
        <li key={"tool-requirement"}>
          Experience with the following work tools:
        </li>
        <ul className="job_posting_list_nested">
          {requirements.tools.map((tool) => {
            return (
              <li key={tool}>
                <b>{tool}</b>
              </li>
            );
          })}
        </ul>
        <li key={"concept-requirement"}>
          General understanding and comprehension of:
        </li>
        <ul className="job_posting_list_nested">
          {requirements.concepts.map((concept) => {
            return (
              <li key={concept}>
                <b>{concept}</b>
              </li>
            );
          })}
        </ul>
      </ul>

      <h4 className="job_posting_subheader">Application Steps:</h4>
      <p>{contact.applicationSteps}</p>

      <h4 className="job_posting_subheader">Contact details:</h4>
      <p className="job_posting_contact_name">{contact.name}</p>
      <ul className="job_posting_list_nested">
        <li key={contact.email}>{contact.email}</li>
        <li key={contact.linkedIn}>{contact.linkedIn}</li>
        <li key={contact.other}>{contact.other ? contact.other : null}</li>
      </ul>

      <div className="job_posting_submit">
        <Link to={`/profile`}>
          <ButtonFilled
            onClick={() => {
              sendJob();
              sendMatch();
            }}
            startIcon={<AddCircleOutline />}
          >
            Create
          </ButtonFilled>
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    users: state.users,
    matches: state.matches,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addJob: addJob,
        updateJobsOfUser: updateJobsOfUser,
        addMatch: addMatch,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(JobPosting);
