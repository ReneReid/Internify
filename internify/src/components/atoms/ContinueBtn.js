import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    purpleButton: {
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
        width: 100
    }
  }));

function ContinueBtn() {
    const classes = useStyles();

    return (
        <div>
        <Button className={classes.purpleButton}>Continue</Button>
        </div>
    )
}

export default ContinueBtn;


