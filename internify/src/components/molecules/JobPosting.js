import React from "react";
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

      <h4 className="job_posting_points">Job points</h4>
      <ul className="job_posting_points_list">
        {jobPoints.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>

      <h4 className="job_posting_technical_requirements">Technical Requirements</h4>
    </div>
  );
};

export default JobPosting;
