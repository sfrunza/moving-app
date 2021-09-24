import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Grid, Link, Typography } from "@material-ui/core";
import ChevronRightIcon from "src/icons/ChevronRight";

function Header() {
  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          Rates
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
            Rates
          </Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}

export default Header;
