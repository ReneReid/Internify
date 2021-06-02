import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const ButtonFilled = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: 700,
    padding: "0.5em 1em",
    backgroundColor: "#043A74",
    color: "white",
    "&:hover": {
      backgroundColor: "#043A74",
      color: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    },
  },
  disabled: {
    backgroundColor: "rgba(34, 34, 34, 0.4)",
    color: "#FFFFFF",
  },
}))(Button);
