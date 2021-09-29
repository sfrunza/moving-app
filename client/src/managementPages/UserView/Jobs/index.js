import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import JobsTable from "./JobsTable";
import TotalHours from "./TotalHours";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";

function Jobs({ jobs, user }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const calculateSum = (filteredJobs) => {
    if (filteredJobs && filteredJobs.length > 0) {
      return filteredJobs
        .map((job) => job.job_duration)
        .reduce((prev, next) => prev + next);
    }
    return 0;
  };

  let startDate = moment(start).format("MM/DD/YY");
  let endDate = moment(end).format("MM/DD/YY");

  const resultProductData = jobs.filter((a) => {
    let date = moment(a.pick_up_date).format("MM/DD/YY");
    return startDate <= date && date <= endDate;
  });

  const handleFilter = () => {
    setFilteredJobs(resultProductData);
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} xl={9} xs={12}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={4} xs={4}>
            <Typography>From</Typography>
            <DatePicker
              variant="inline"
              inputVariant="outlined"
              id="start"
              name="start"
              format="MM/DD/YYYY"
              size="small"
              autoOk
              disableToolbar
              value={start}
              onChange={(date) => {
                setStart(moment(date));
              }}
            />
          </Grid>
          <Grid item md={4} xs={4}>
            <Typography>To</Typography>
            <DatePicker
              variant="inline"
              inputVariant="outlined"
              id="end"
              name="end"
              format="MM/DD/YYYY"
              size="small"
              autoOk
              disableToolbar
              value={end}
              onChange={(date) => {
                setEnd(moment(date));
              }}
            />
          </Grid>
          <Grid item md={4} xs={4}>
            <Button
              onClick={() => handleFilter()}
              fullWidth
              variant="outlined"
              color="primary"
              disableElevation
              style={{ padding: 7 }}
            >
              Filter
            </Button>
          </Grid>
          <Grid item xs={12}>
            <JobsTable jobs={filteredJobs} />
          </Grid>
          <Grid item xs={12}>
            <TotalHours
              rate={user.rate}
              jobs={filteredJobs}
              calculateSum={calculateSum}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={2} md={4} xl={3} xs={12}></Grid>
    </Grid>
  );
}

export default Jobs;
