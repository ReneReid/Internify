import { Grade } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as AddCircle } from "../../assets/atoms/plus-btn-icon.svg";

export const StarPlain = withStyles(() => ({
  root: {
    cursor: "pointer",
    color: "white",
    stroke: "black",
    strokeWidth: "2px",
    "&:hover": {
      opacity: 0.7,
    },
    "&:active": {
      opacity: 1.0,
    },
  },
}))(Grade);

export const StarColoured = withStyles(() => ({
  root: {
    cursor: "pointer",
    color: "#F8D144",
    stroke: "black",
    strokeWidth: "2px",
    "&:hover": {
      opacity: 0.7,
    },
    "&:active": {
      opacity: 1.0,
    },
  },
}))(Grade);

export const Add = () => {
  return (
    <AddCircle className="add_circle_button"/>
  )
};
