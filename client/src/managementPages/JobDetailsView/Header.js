import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Typography,
  Box,
} from "@material-ui/core";
import ChevronRightIcon from "src/icons/ChevronRight";
import PencilAltIcon from "src/icons/PencilAlt";

function Header({ job }) {
  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          Request ID: {job.id}
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<ChevronRightIcon fontSize="small" />}
          style={{ marginTop: 8 }}
        >
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/dashboard"
            variant="subtitle2"
          >
            Dashboard
          </Link>
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/dashboard/jobs"
            variant="subtitle2"
          >
            Jobs
          </Link>
          <Typography color="textSecondary" variant="subtitle2">
            {job.id}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item>
        <Box m={-1}>
          <Button
            color="primary"
            disableElevation
            // onClick={handleAddClick}
            startIcon={<PencilAltIcon fontSize="small" />}
            style={{ margin: 8 }}
            variant="contained"
          >
            Edit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
