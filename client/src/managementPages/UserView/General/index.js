import React from "react";
import { Grid } from "@material-ui/core";
import ProfileDetails from "./ProfileDetails";
import GeneralSettings from "./GeneralSettings";
import { useSelector, useDispatch } from "src/store";
import { updateUser } from "src/slices/auth";

function General() {
  const dispatch = useDispatch();
  const { user, isUpdating } = useSelector((state) => state.auth);

  const handleUpdate = (id, updatedUser) => {
    dispatch(updateUser(id, updatedUser));
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <ProfileDetails user={user} />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings
          user={user}
          handleUpdate={handleUpdate}
          isUpdating={isUpdating}
        />
      </Grid>
    </Grid>
  );
}

export default General;
