/* eslint-disable max-len */
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import Scrollbar from "../Scrollbar";
import {
  Avatar,
  Box,
  Card,
  IconButton,
  InputAdornment,
  Link,
  SvgIcon,
  Table,
  TableBody,
  TableHead,
  TablePagination,
  TableCell,
  TableRow,
  TextField,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import ArrowRightIcon from "src/icons/ArrowRight";
import SearchIcon from "src/icons/Search";

function applyFilters(users, query) {
  return users.filter((user) => {
    let matches = true;

    if (query) {
      const properties = ["role", "first_name", "last_name"];
      let containsQuery = false;

      properties.forEach((property) => {
        if (
          user[property] != null &&
          user[property].toLowerCase().includes(query.toLowerCase())
        ) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }
    return matches;
  });
}

function applyPagination(users, page, limit) {
  return users.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    width: 300,
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  hoverIcon: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.level2,
    color: theme.palette.text.secondary,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function Results({ className, users, events, ...rest }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  // Usually query is done on backend with indexing solutions
  const filteredUsers = applyFilters(users, query);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={2} minHeight={56} display="flex" alignItems="center">
        <TextField
          className={classes.queryField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize="small" color="action">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          onChange={handleQueryChange}
          placeholder="Search by Name or Role"
          value={query}
          size="small"
          variant="outlined"
        />
        <Box flexGrow={1} />
      </Box>
      <Scrollbar>
        <Box minWidth={650}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.map((user) => {
                const isCustomerSelected = filteredUsers.includes(user.id);
                return (
                  <TableRow
                    hover
                    key={user.id}
                    selected={isCustomerSelected}
                    style={{ verticalAlign: "inherit" }}
                  >
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar className={classes.avatar} src={user.avatar} />
                        <div>
                          <Link
                            color="inherit"
                            component={RouterLink}
                            to={`/dashboard/users/${user.id}`}
                            variant="subtitle2"
                          >
                            {user.first_name + " " + user.last_name}
                          </Link>
                          <Typography color="textSecondary" variant="body2">
                            {user.email}
                          </Typography>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      {user.active ? "Active" : "Not Active"}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        classes={{ root: classes.hoverIcon }}
                        component={RouterLink}
                        to={`/dashboard/users/${user.id}`}
                      >
                        <ArrowRightIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={filteredUsers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array,
};

Results.defaultProps = {
  users: [],
};

export default Results;
