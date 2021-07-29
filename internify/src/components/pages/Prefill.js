import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { ButtonFilled } from "../atoms/index";
import { ReactComponent as PrefillFilledIcon } from "../../assets/Prefill/prefill_icon.svg";
import { ReactComponent as PrefillEmptyIcon } from "../../assets/Prefill/prefill_empty_icon.svg";
import "./styles/Prefill.css";

const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: "5em",
    },
    prefill_btn_left: {
      marginLeft: "1.25em",
      marginTop: "-0.5em"
    },
    prefill_btn_right: {
      marginRight: "0.5em",
      marginTop: "-0.5em"
    },
    

  }));

function Prefill() {
    const classes = useStyles();

    function handleUpdate(){
      // TODO: NAVIGATE TO PAGES
    }

    return (
        <div className={classes.root}>
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={7}
        >
          <Grid item xs={12}>
              <h2 className="prefill_option_title">Choose an option:</h2>
          </Grid>
          <Grid item>
            <h2 className="prefill_icon_title">Prefills</h2>
            <PrefillFilledIcon />
          </Grid>
          <Grid item>
            <h2 className="prefill_icon_title">New</h2>
            <PrefillEmptyIcon />
          </Grid>
        </Grid>
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={7}
        >
          <Grid item>
          <ButtonFilled className={classes.prefill_btn_left} onClick={() => handleUpdate()}>Preview Prefills</ButtonFilled>
          </Grid>
          <Grid item>
          <ButtonFilled className={classes.prefill_btn_right} onClick={() => handleUpdate()}>Make New Posting</ButtonFilled>
          </Grid>
        </Grid>
      </div>
    )
}


  export default Prefill;