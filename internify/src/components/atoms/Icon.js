import { AddCircle, Grade } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

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

export const Add = withStyles(() => ({
  root: {
    cursor: "pointer",
    color: "#E61A4D",
    borderRadius: "50px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      borderRadius: "50px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    },
    "&:active": {
      opacity: 0.8,
    },
  },
}))(AddCircle);
