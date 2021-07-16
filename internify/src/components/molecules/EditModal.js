import React, { useState } from "react";
import { ButtonFilled, ButtonWhite } from "../atoms/index";
import { Dialog, DialogContent, DialogTitle, Grid } from "@material-ui/core";
import { TextFieldInput, MultiLineTextField } from "../atoms/index";
import "./styles/EditModal.css";

const EditModal = (props) => {
  let toggle = props.toggle;
  let setToggle = props.setToggle;
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    handle: "",
    email: "",
    location: "",
    bio: "",
    contactNumber: "",
    website: "",
    linkedIn: "",
    status: "",
    company: "",
  });

  const handleCancel = () => {
    setProfile({
      name: "",
      title: "",
      handle: "",
      email: "",
      location: "",
      bio: "",
      contactNumber: "",
      website: "",
      linkedIn: "",
      status: "",
      company: "",
    });
    setToggle(false);
  };

  const handleUpdate = () => {
    //TODO: Make POST request to update user information with `profile`
    console.log(profile);
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
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              defaultValue={profile.name}
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
                setProfile({ ...profile, handle: e.target.value })
              }
              defaultValue={profile.handle}
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
                setProfile({ ...profile, title: e.target.value })
              }
              defaultValue={profile.title}
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
                setProfile({ ...profile, company: e.target.value })
              }
              defaultValue={profile.company}
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
            defaultValue={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
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
                setProfile({ ...profile, email: e.target.value })
              }
              defaultValue={profile.email}
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
                setProfile({ ...profile, website: e.target.value })
              }
              defaultValue={profile.website}
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
                setProfile({ ...profile, linkedIn: e.target.value })
              }
              defaultValue={profile.linkedIn}
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
                setProfile({ ...profile, location: e.target.value })
              }
              defaultValue={profile.location}
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

export default EditModal;
