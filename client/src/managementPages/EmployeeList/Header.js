import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Grid, Link, Typography, Box } from "@material-ui/core";
import ChevronRightIcon from "src/icons/ChevronRight";
import NewEmployeeForm from "./NewEmployeeForm";

function Header({ dispatch }) {
  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          Employee list
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
          <Typography color="textSecondary" variant="subtitle2">
            Employees
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item>
        <Box m={-1}>
          <NewEmployeeForm dispatch={dispatch} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
