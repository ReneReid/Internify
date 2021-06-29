import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Grid } from "@material-ui/core";
import { TextFieldInput, MultiLineTextField } from "../atoms/index";
import "./styles/EditModal.css";

const EditModal = (props) => {
  let toggle = props.toggle;
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    handle: "",
    email: "",
    location: "",
    bio: "",
    contactNumber: "",
    website: "",
    status: "",
    company: "",
  });

  return toggle ? (
    <Dialog open={toggle} onClose={() => (toggle = !toggle)}>
      <DialogTitle className="dialog_title">Edit Profile</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_name"
              className="edit_profile_name"
              label="Name"
              type="text"
              placeholder="Tommy Tho"
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
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
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextFieldInput
              id="edit_profile_email"
              className="edit_profile_email"
              label="Email"
              type="text"
              placeholder="tommytho@internify.com"
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
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
                setProfile({ ...profile, location: e.target.value })
              }
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
          />
        </div>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default EditModal;
