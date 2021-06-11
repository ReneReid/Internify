import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const ButtonFilled = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: 700,
    padding: "0.5em 1em",
    backgroundColor: "#043A74",
    color: "white",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#043A74",
      color: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    },
  }
}))(Button);

export const ButtonOutlined = withStyles(() => ({
    root: {
        textTransform: "none",
        fontWeight: 700,
        padding: "0.5em 1em",
        backgroundColor: "white",
        color: "#043A74",
        border: "2px solid #043A74",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "white",
          color: "#043A74",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
        },
      }
}))(Button);

export const ButtonClear = withStyles(() => ({
    root: {
        textTransform: "none",
        fontWeight: 700,
        padding: "0.5em 1em",
        backgroundColor: "transparent",
        color: "black",
        "&:hover": {
          backgroundColor: "transparent",
          color: "black",
          textShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
        },
      }
}))(Button);

export const ButtonWhite = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: 700,
    padding: "0.5em 1em",
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    },
  }
}))(Button);