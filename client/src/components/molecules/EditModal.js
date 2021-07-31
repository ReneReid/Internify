import React from "react";
import { ButtonFilled, ButtonWhite } from "../atoms/index";
import { Dialog, DialogContent, DialogTitle, Grid } from "@material-ui/core";
import { TextFieldInput, MultiLineTextField } from "../atoms/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUser } from "../../store/actions/userActions";
import "./styles/EditModal.css";

const EditModal = (props) => {
  let toggle = props.toggle;
  let setToggle = props.setToggle;

  const handleCancel = () => {
    setToggle(false);
  };

  const handleUpdate = () => {
    props.actions.updateUser(props.users.user);
    setToggle(false);
  };

  const handleChange = (e, v) => {
    props.users.user[v] = e.target.value;
  }

  return toggle ? (
    <Dialog open={toggle} onClose={() => (toggle = !toggle)} fullWidth>
      <DialogTitle style={{ padding: "2em 0 0 2em"}} className="dialog_title">Edit Profile</DialogTitle>
      <DialogContent style={{ padding: "2em"}} className="dialog_content">
        <Grid container spacing={2} style={{ padding: "0.5em 0"}}>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_name"
              className="edit_profile_name"
              label="Name"
              type="text"
              placeholder="Tommy Tho"
              onChange={(e) => handleChange(e, "name")}
              defaultValue={props.users.user.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_handle"
              className="edit_profile_handle"
              label="Handle"
              type="text"
              placeholder="@tommytho"
              onChange={(e) => 
                handleChange(e, "handle")
              }
              defaultValue={props.users.user.handle}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ padding: "0.5em 0"}}>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_title"
              className="edit_profile_title"
              label="Job Title"
              type="text"
              placeholder="Technical Recruiter"
              onChange={(e) =>
                handleChange(e, "jobTitle")
              }
              defaultValue={props.users.user.jobTitle}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_location"
              className="edit_profile_location"
              label="Company"
              type="text"
              placeholder="Internify Solutions Inc."
              onChange={(e) =>
                handleChange(e, "company")
              }
              defaultValue={props.users.user.company}
            />
          </Grid>
        </Grid>
        <div className={"edit_profile_bio"}>
          <MultiLineTextField
            id={"edit_profile_bio"}
            className={"edit_profile_bio"}
            label={"Bio"}
            type={"text"}
            rows={4}
            defaultValue={props.users.user.bio}
            onChange={(e) => 
              handleChange(e, "bio")
            }
            helperText={"Required"}
          />
        </div>
        <Grid container spacing={2} style={{ padding: "0.5em 0"}}>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_email"
              className="edit_profile_email"
              label="Email"
              type="text"
              placeholder="tommy@internify.com"
              onChange={(e) =>
                handleChange(e, "email")
              }
              defaultValue={props.users.user.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_website"
              className="edit_profile_website"
              label="Website"
              type="text"
              placeholder="tommytho.com"
              onChange={(e) =>
                handleChange(e, "website")
              }
              defaultValue={props.users.user.website}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ padding: "0.5em 0"}}>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_linkedin"
              className="edit_profile_linkedin"
              label="LinkedIn"
              type="text"
              placeholder="linkedin.com/in/tommythowm"
              onChange={(e) =>
                handleChange(e, "linkedIn")
              }
              defaultValue={props.users.user.linkedIn}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_location"
              className="edit_profile_location"
              label="Location"
              type="text"
              placeholder="Vancouver, BC"
              onChange={(e) =>
                handleChange(e, "location")
              }
              defaultValue={props.users.user.location}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <ButtonWhite onClick={() => handleCancel()}>Cancel</ButtonWhite>
          </Grid>
          <Grid item>
            <ButtonFilled onClick={() => handleUpdate()}>Update</ButtonFilled>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  ) : null;
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ updateUser: updateUser }, dispatch),
  };
}


export default connect(mapStateToProps, matchDispatchToProps)(EditModal);
