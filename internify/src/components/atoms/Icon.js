import {
    AddCircle,
    Grade,
  } from "@material-ui/icons";
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
    }
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
    }
}))(Grade);