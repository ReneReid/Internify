import React from "react";
import "./styles/TemplatePosting.css";

const TemplatePosting = (props) => {
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

  const JobPosting = (props) => {
    return (
      <div className="template_posting_container">
        <h3 className="template_posting_title">{header.title}</h3>

        <h4 className="template_posting_subheader">Technical Requirements</h4>
        <ul className="template_posting_list_2">
          <li
            key={"coding-language-requirement"}
            style={{ marginBottom: "0.25em" }}
          >
            Experience with the following programming languages:
          </li>
          <ul className="template_posting_list_nested">
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
          <ul className="template_posting_list_nested">
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
          <ul className="template_posting_list_nested">
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
          <ul className="template_posting_list_nested">
            {requirements.concepts.map((concept) => {
              return (
                <li key={concept}>
                  <b>{concept}</b>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  };

  return (
      <JobPosting />
  );
};

export default TemplatePosting;
