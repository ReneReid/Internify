import React from "react";
import "./styles/JobPosting.css";

const JobPosting = ({data}) => {
    const header = data.header;
    const requirements = data.requirements;
    const details = data.details;
    const contact = data.contact;

    return (
        <div className="job_posting_container">
            <h3 className="job_posting_title">{header.title}</h3>
            <h4 className="job_posting_subheader">{header.company}</h4>
            <p className="job_posting_subheader">{header.location}</p>
        </div>
    );
};

export default JobPosting;