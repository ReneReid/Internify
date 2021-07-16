import React from "react";
import { ButtonFilled } from "../atoms/index";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import "./styles/ViewPosting.css";

const ViewPosting = (props) => {
  const data = props.data;
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

  return (
    <div className="view_posting_container">
      <h3 className="view_posting_title">{header.title}</h3>
      <h4 className="view_posting_subheader">{header.company}</h4>
      <p className="view_posting_subheader">{header.location}</p>
      <p className="view_posting_description">{details.description}</p>

      <h4 className="view_posting_subheader">Job points</h4>
      <ul className="view_posting_list">
        {jobPoints.map((list) => {
          return <li key={list}>{list}</li>;
        })}
        {details.coOp === "Yes" ? (
          <li>Must be enrolled in an accredited Co-op program</li>
        ) : null}
      </ul>

      <h4 className="view_posting_subheader">Technical Requirements</h4>
      <ul className="view_posting_list_2">
        {requirements.experience ? (
          <li>
            Must have <b>{requirements.experience}</b> of working experience
          </li>
        ) : (
          <li>No prior work experience is required</li>
        )}
        {details.academicReq ? (
          <li>
            Obtained or is currently enrolled in a{" "}
            <b>
              {
                // TODO: Temporary fix for now. We need a way to display all academic requirements if more than 1 is seleced
                details.academicReq[1]
              }
            </b>
          </li>
        ) : null}
        {details.academicReq && requirements.isGpaRequired ? (
          <li>
            Must have at least or is at <b>{requirements.gpaValue} GPA</b>{" "}
            standing or equivalent
          </li>
        ) : null}
        <li style={{ marginBottom: "0.25em" }}>
          Experience with the following programming languages:
        </li>
        <ul className="view_posting_list_nested">
          {requirements.languages.map((language) => {
            return (
              <li key={language}>
                <b>{language}</b>
              </li>
            );
          })}
        </ul>
        <li>Experience with the following frameworks:</li>
        <ul className="view_posting_list_nested">
          {requirements.frameworks.map((framework) => {
            return (
              <li key={framework}>
                <b>{framework}</b>
              </li>
            );
          })}
        </ul>
        <li>Experience with the following work tools:</li>
        <ul className="view_posting_list_nested">
          {requirements.tools.map((tool) => {
            return (
              <li key={tool}>
                <b>{tool}</b>
              </li>
            );
          })}
        </ul>
        <li>General understanding and comprehension of:</li>
        <ul className="view_posting_list_nested">
          {requirements.concepts.map((concept) => {
            return (
              <li key={concept}>
                <b>{concept}</b>
              </li>
            );
          })}
        </ul>
      </ul>

      <h4 className="view_posting_subheader">Application Steps:</h4>
      <p>{contact.applicationSteps}</p>

      <h4 className="view_posting_subheader">Contact details:</h4>
      <p className="view_posting_contact_name">{contact.name}</p>
      <ul className="view_posting_list_nested">
        <li key={contact.email}>{contact.email}</li>
        <li key={contact.linkedIn}>{contact.linkedIn}</li>
        <li key={contact.other}>{contact.other ? contact.other : null}</li>
      </ul>

      <div className="view_posting_submit">
        <ButtonFilled startIcon={<PictureAsPdfIcon />}>
          Export to PDF
        </ButtonFilled>
      </div>
    </div>
  );
};

export default ViewPosting;
