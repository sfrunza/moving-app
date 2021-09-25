import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "src/store";
import JobsTable from "./JobsTable";
import { getUserJobs, cleanUserJobs } from "src/slices/employees";

function Jobs({ user }) {
  const dispatch = useDispatch();
  const { userJobs } = useSelector((state) => state.employees);

  const name = user.first_name + " " + user.last_name;

  useEffect(() => {
    dispatch(getUserJobs(name));
    return () => {
      dispatch(cleanUserJobs());
    };
  }, [dispatch, name]);

  if (!userJobs) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <JobsTable userJobs={userJobs} />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        {/* <GeneralSettings
          user={user}
          handleUpdate={handleUpdate}
          isUpdating={isUpdating}
        /> */}
      </Grid>
    </Grid>
  );
}

export default Jobs;
