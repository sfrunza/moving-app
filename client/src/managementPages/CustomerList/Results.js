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
  Badge,
  withStyles,
} from "@material-ui/core";
import ArrowRightIcon from "src/icons/ArrowRight";
import SearchIcon from "src/icons/Search";
import { formatPhoneNumber } from "src/components/FormatPhoneNumber";

function applyFilters(customers, query) {
  return customers.filter((customer) => {
    let matches = true;

    if (query) {
      const properties = ["email", "first_name", "last_name"];
      let containsQuery = false;

      properties.forEach((property) => {
        if (
          customer[property] != null &&
          customer[property].toLowerCase().includes(query.toLowerCase())
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

function applyPagination(customers, page, limit) {
  return customers.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    width: 500,
  },
  bulkOperations: {
    position: "relative",
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 11,
    position: "absolute",
    width: "100%",
    zIndex: 2,
    backgroundColor: theme.palette.background.level2,
  },
  bulkAction: {
    marginLeft: theme.spacing(2),
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  badge: {
    "& span": {
      right: "-12px",
    },
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

function Results({ className, customers, events, ...rest }) {
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
  const filteredCustomers = applyFilters(customers, query);
  const paginatedCustomers = applyPagination(filteredCustomers, page, limit);

  const numberOfJobs = (customer) => {
    let number = 0;
    events.map((event) => {
      if (event.user.id === customer.id) {
        number = number + 1;
      }
      return null;
    });
    return number;
  };

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
          placeholder="Search by Name or Email"
          value={query}
          size="small"
          variant="outlined"
        />
        <Box flexGrow={1} />
      </Box>
      <Scrollbar>
        <Box minWidth={1000}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCustomers.map((customer) => {
                return (
                  <TableRow hover key={customer.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          className={classes.avatar}
                          src={customer.avatar}
                        />
                        <div>
                          <Link
                            color="inherit"
                            component={RouterLink}
                            to={`/dashboard/customers/${customer.id}`}
                            variant="subtitle2"
                          >
                            {numberOfJobs(customer) === 1 ? (
                              customer.first_name + " " + customer.last_name
                            ) : (
                              <Badge
                                badgeContent={numberOfJobs(customer)}
                                color="secondary"
                                className={classes.badge}
                              >
                                {customer.first_name + " " + customer.last_name}
                              </Badge>
                            )}
                          </Link>
                          <Typography color="textSecondary" variant="body2">
                            {customer.email}
                          </Typography>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell>{formatPhoneNumber(customer.phone)}</TableCell>
                    <TableCell align="right">
                      {/* <IconButton
                        classes={{ root: classes.hoverIcon }}
                        component={RouterLink}
                        to={`/dashboard/customers/${customer.id}/edit`}
                      >
                        <PencilAltIcon fontSize="small" />
                      </IconButton> */}
                      <IconButton
                        classes={{ root: classes.hoverIcon }}
                        component={RouterLink}
                        to={`/dashboard/customers/${customer.id}`}
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
        count={filteredCustomers.length}
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
  customers: PropTypes.array,
};

Results.defaultProps = {
  customers: [],
};

export default Results;
