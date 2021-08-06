import { React } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { ButtonClear } from "../atoms";
import { ViewPosting } from "../molecules/index";
import {
  backEndStudent,
  frontEndStudent,
  dataScienceStudent,
  fullStackStudent,
} from "../../models/templateJobDataObjects";
import "./styles/View.css";

const Templates = () => {

  function dummyfunction() {
    console.log("Hello");
  }

  return (

    <Grid>
      <div className="page_title">
      <h1 >Select Prefills</h1>
      <h4>Select from 4 available templates</h4>
      </div>
      

    <Grid
      container
      style={{ paddingTop: "1em" }}
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-end"
    >
      {/** Left side button */}
      <Grid item xs={2}>
        <Grid container justifyContent="flex-end">
          <Link to="/selection">
            <ButtonClear startIcon={<ChevronLeft />}>Back</ButtonClear>
          </Link>
        </Grid>
      </Grid>

      {/** Right-hand templates */}
      <Grid item xs={10}>
        <Grid container direction="row">
          <div className="templates_container">
            <div class="template" onClick={() => dummyfunction()}>
              <ViewPosting data={backEndStudent} hide={true}/>
            </div>
            <div class="template">
              <ViewPosting data={frontEndStudent} hide={true}/>
            </div>
            <div class="template">
              <ViewPosting data={dataScienceStudent} hide={true}/>
            </div>
            <div class="template">
              <ViewPosting data={fullStackStudent} hide={true}/>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );

};

export default Templates;
