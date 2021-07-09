import { Link } from "react-router-dom";
import { Add } from "../atoms/Icon";
import "./styles/CreateJobButton.css";

const CreateJobButton = () => {
  return (
    <Link className="create_job_button" to="/create">
      <Add style={{ fontSize: 70 }} />
    </Link>
  );
};

export default CreateJobButton;
