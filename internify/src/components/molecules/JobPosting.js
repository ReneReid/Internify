import React from "react";
import { ButtonFilled } from "../atoms/index";
import { AddCircleOutline } from "@material-ui/icons";
import "./styles/JobPosting.css";

const JobPosting = ({ data }) => {
  const header = data.header;
  const requirements = data.requirements;
  const details = data.details;
  const contact = data.contact;

  const jobPoints = [
    ...header.position,
    details.position,
    details.pay,
    details.candidates,
  ];

  return (
    <div className="job_posting_container">
      <h3 className="job_posting_title">{header.title}</h3>
      <h4 className="job_posting_subheader">{header.company}</h4>
      <p className="job_posting_subheader">{header.location}</p>
      <p className="job_posting_description">{details.description}</p>

      <h4 className="job_posting_subheader">Job points</h4>
      <ul className="job_posting_list">
        {jobPoints.map((list) => {
          return <li>{list}</li>;
        })}
        {details.coOp ? (
          <li>Must be enrolled in an accredited Co-op program</li>
        ) : null}
      </ul>

      <h4 className="job_posting_subheader">Technical Requirements</h4>
      <ul className="job_posting_list_2">
        {requirements.experience ? (
          <li>
            Must have <b>{requirements.experience}</b> of working experience
          </li>
        ) : (
          <li>No prior work experience is required</li>
        )}
        {details.academicReq ? (
          <li>
            Obtained or is currently enrolled in a <b>{details.academicReq}</b>
          </li>
        ) : null}
        {details.academicReq && requirements.gpa ? (
          <li>
            Must have at least or is at <b>{requirements.gpa} GPA</b> standing
            or equivalent
          </li>
        ) : null}
        <li style={{ marginBottom: "0.25em" }}>
          Experience with the following programming languages:
        </li>
        <ul className="job_posting_list_nested">
          {requirements.languages.map((language) => {
            return (
              <li>
                <b>{language}</b>
              </li>
            );
          })}
        </ul>
        <li>Experience with the following frameworks:</li>
        <ul className="job_posting_list_nested">
          {requirements.frameworks.map((framework) => {
            return (
              <li>
                <b>{framework}</b>
              </li>
            );
          })}
        </ul>
        <li>Experience with the following work tools:</li>
        <ul className="job_posting_list_nested">
          {requirements.workTools.map((tool) => {
            return (
              <li>
                <b>{tool}</b>
              </li>
            );
          })}
        </ul>
        <li>General understanding and comprehension of:</li>
        <ul className="job_posting_list_nested">
          {requirements.csConcepts.map((concept) => {
            return (
              <li>
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
        <li>{contact.email}</li>
        <li>{contact.linkedIn}</li>
        <li>{contact.other ? contact.other : null}</li>
      </ul>

      <div className="job_posting_submit">
        <ButtonFilled startIcon={<AddCircleOutline />}>Create</ButtonFilled>
      </div>
    </div>
  );
};

export default JobPosting;