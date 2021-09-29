import React from "react";
import { Grid } from "@material-ui/core";
import UserInfo from "./UserInfo";
import { useSelector, useDispatch } from "src/store";
import { updateUser } from "src/slices/employees";

function Settings({ user }) {
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.employees);

  const handleUpdate = (id, updatedUser) => {
    dispatch(updateUser(id, updatedUser));
  };

  const init = {
    address: user.address ? user.address : "",
    rate: user.rate ? user.rate : "",
    ssn: user.ssn ? user.ssn : "",
    active: user.active,
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={6} md={6} xl={3} xs={12}>
        <UserInfo
          user={user}
          handleUpdate={handleUpdate}
          isUpdating={isUpdating}
          init={init}
        />
      </Grid>
    </Grid>
  );
}

export default Settings;
