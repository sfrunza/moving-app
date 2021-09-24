import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Grid, Link, Typography } from "@material-ui/core";
import ChevronRightIcon from "src/icons/ChevronRight";

function Header({ customer }) {
  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          {customer.first_name + " " + customer.last_name}
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
            to="/dashboard/customers"
            variant="subtitle2"
          >
            Customers
          </Link>
          <Typography color="textSecondary" variant="subtitle2">
            {customer.first_name + " " + customer.last_name}
          </Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}

export default Header;
