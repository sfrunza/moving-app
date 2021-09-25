import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";
import ChevronRightIcon from "src/icons/ChevronRight";

function Header({ user }) {
  return (
    <div>
      <Typography color="textPrimary" variant="h5">
        Settings
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
          to="/dashboard/employees"
          variant="subtitle2"
        >
          Employees
        </Link>
        <Typography color="textSecondary" variant="subtitle2">
          {user.first_name + " " + user.last_name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Header;
