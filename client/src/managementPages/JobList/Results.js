/* eslint-disable max-len */
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Box,
  Card,
  InputAdornment,
  IconButton,
  Link,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import Scrollbar from "../Scrollbar";
import SearchIcon from "src/icons/Search";
import ArrowRightIcon from "src/icons/ArrowRight";
import PencilAltIcon from "src/icons/PencilAlt";
import StatusLabel from "src/components/StatusLabel";

const avalabilityOptions = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "completed",
    name: "Completed",
  },
  {
    id: "canceled",
    name: "Canceled",
  },
  {
    id: "needsAttention",
    name: "Needs Attention",
  },
  {
    id: "confirmed",
    name: "Confirmed",
  },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.level2,
    color: theme.palette.text.secondary,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function applyFilters(jobs, users, query, filters) {
  const jobsFilter = jobs.filter((job) => {
    let matches = true;

    if (
      query &&
      !job.user.first_name.toLowerCase().includes(query.toLowerCase()) &&
      !job.user.last_name.toLowerCase().includes(query.toLowerCase()) &&
      !job.id.toString().includes(query.toLowerCase())
    ) {
      matches = false;
    }

    // if (filters.category && job.category !== filters.category) {
    //   matches = false;
    // }

    if (filters.status) {
      if (
        filters.status === "confirmed" &&
        !["Confirmed"].includes(job.job_status)
      ) {
        matches = false;
      }

      if (
        filters.status === "completed" &&
        !["Completed"].includes(job.job_status)
      ) {
        matches = false;
      }

      if (
        filters.status === "needsAttention" &&
        !["Needs Attention"].includes(job.job_status)
      ) {
        matches = false;
      }

      if (
        filters.status === "canceled" &&
        !["Canceled"].includes(job.job_status)
      ) {
        matches = false;
      }
    }

    if (filters.inStock && !["Needs Attention"].includes(job.job_status)) {
      matches = false;
    }

    if (filters.isShippable && !job.isShippable) {
      matches = false;
    }

    return matches;
  });
  return jobsFilter;
}

function applyPagination(jobs, page, limit) {
  return jobs.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    marginRight: theme.spacing(2),
    // marginBottom: theme.spacing(2),
  },
  statusField: {
    marginLeft: theme.spacing(2),
    flexBasis: 200,
  },
  pastDate: {
    // color: theme.palette.error.main,
    opacity: 0.5,
  },
  hoverIcon: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

function Results({ className, jobs, users, ...rest }) {
  const classes = useStyles();
  const today = moment().toJSON().slice(0, 10);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    status: null,
  });

  const isPastJob = (date) => {
    return today > date ? true : false;
  };

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleJobStatusChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== "all") {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  // Usually query is done on backend with indexing solutions
  const filteredJobs = applyFilters(jobs, users, query, filters);
  const paginatedJobs = applyPagination(filteredJobs, page, limit);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={2} minHeight={36} display="flex" alignItems="center">
        <Box alignItems="center" display="flex">
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
            size="small"
            onChange={handleQueryChange}
            placeholder="Search by ID or Name"
            value={query}
            variant="outlined"
          />
          {/* <Box flexGrow={1} /> */}
          <TextField
            // className={classes.statusField}
            name="status"
            onChange={handleJobStatusChange}
            select
            SelectProps={{ native: true }}
            value={filters.status || "all"}
            variant="outlined"
            size="small"
          >
            {avalabilityOptions.map((avalabilityOption) => (
              <option key={avalabilityOption.id} value={avalabilityOption.id}>
                {avalabilityOption.name}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>
      <Scrollbar>
        <Box minWidth={1300}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Service</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Customer</StyledTableCell>
                <StyledTableCell>Size</StyledTableCell>
                <StyledTableCell>Crew</StyledTableCell>
                <StyledTableCell>Created at</StyledTableCell>

                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedJobs.map((job, i) => {
                return (
                  <TableRow hover key={job.id}>
                    <TableCell>
                      <Link
                        variant="subtitle2"
                        color="textPrimary"
                        component={RouterLink}
                        underline="none"
                        to={`/dashboard/jobs/${job.id}`}
                      >
                        {job.id}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <StatusLabel status={job.job_status} />
                    </TableCell>
                    <TableCell>{job.job_type}</TableCell>
                    <TableCell
                      className={
                        isPastJob(
                          moment(job.pick_up_date).format("MMM DD, YYYY")
                        )
                          ? classes.pastDate
                          : classes.date
                      }
                    >
                      {moment(job.pick_up_date).format("MMM DD, YYYY")}
                    </TableCell>
                    <TableCell>
                      {job.user.first_name + " " + job.user.last_name}
                    </TableCell>

                    <TableCell>{job.job_size}</TableCell>
                    <TableCell>{job.crew_size}</TableCell>

                    <TableCell variant="footer">
                      {moment(job.created_at).format("MM/DD/YYYY")}
                    </TableCell>

                    <TableCell align="right">
                      <IconButton classes={{ root: classes.hoverIcon }}>
                        <SvgIcon fontSize="small">
                          <PencilAltIcon />
                        </SvgIcon>
                      </IconButton>
                      <IconButton
                        component={RouterLink}
                        to={`/dashboard/jobs/${job.id}`}
                        classes={{ root: classes.hoverIcon }}
                      >
                        <SvgIcon fontSize="small">
                          <ArrowRightIcon />
                        </SvgIcon>
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
        count={filteredJobs.length}
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
  jobs: PropTypes.array,
};

Results.defaultProps = {
  jobs: [],
};

export default Results;
