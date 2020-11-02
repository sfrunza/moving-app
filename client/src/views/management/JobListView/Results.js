/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Checkbox,
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
  colors,
} from '@material-ui/core';
import {
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';
import {
  Package as PackageIcon,
} from 'react-feather';

const avalabilityOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'completed',
    name: 'Completed'
  },
  {
    id: 'canceled',
    name: 'Canceled'
  },
  {
    id: 'needsAttention',
    name: 'Needs Attention'
  }
  ,
  {
    id: 'confirmed',
    name: 'Confirmed'
  }
];

function getInventoryLabel(status) {
  const map = {
    "Completed": {
      text: 'Completed',
      color: 'secondary'
    },
    "Canceled": {
      text: 'Canceled',
      color: 'error'
    },
    "Needs Attention" : {
      text: 'Needs Attention',
      color: 'warning'
    },
    "Confirmed" : {
      text: 'Confirmed',
      color: 'success'
    }
  };

  const { text, color } = map[status];

  return (
    <Label color={color}>
      {text}
    </Label>
  );
}

function applyFilters(jobs, users, query, filters) {

  return jobs.filter((job) => {
    let matches = true;
    let lol = job.user_id
    let firstName = '';
    let lastName = '';
    users.map(user => {
      if (lol === user.id){
        firstName = user.first_name;
        lastName = user.last_name;
      }
    })

    if (query && !firstName.toLowerCase().includes(query.toLowerCase()) && !lastName.toLowerCase().includes(query.toLowerCase()) && !job.id.toString().includes(query.toLowerCase())) {
      matches = false;
    }

    if (filters.category && job.category !== filters.category) {
      matches = false;
    }

    if (filters.availability) {
      if (filters.availability === 'confirmed' && !['Confirmed'].includes(job.job_status)) {
        matches = false;
      }

      if (filters.availability === 'completed' && !['Completed'].includes(job.job_status)) {
        matches = false;
      }

      if (filters.availability === 'needsAttention' && !['Needs Attention'].includes(job.job_status)) {
        matches = false;
      }

      if (filters.availability === 'canceled' && !['Canceled'].includes(job.job_status)) {
        matches = false;
      }
    }

    if (filters.inStock && !['Needs Attention'].includes(job.job_status)) {
      matches = false;
    }

    if (filters.isShippable && !job.isShippable) {
      matches = false;
    }

    return matches;
  });
}

function applyPagination(jobs, page, limit) {
  return jobs.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  queryField: {
    width: 500
  },
  categoryField: {
    flexBasis: 200
  },
  availabilityField: {
    marginLeft: theme.spacing(2),
    flexBasis: 200
  },
  stockField: {
    marginLeft: theme.spacing(2)
  },
  shippableField: {
    marginLeft: theme.spacing(2)
  },
  imageCell: {
    fontSize: 0,
    width: 68,
    flexBasis: 68,
    flexGrow: 0,
    flexShrink: 0
  },
  image: {
    height: 68,
    width: 68
  },
  pastDate: {
    color: colors.deepOrange[500],
  },
}));

function Results({ className, jobs, users, ...rest }) {
  const classes = useStyles();
  const today = moment().toJSON().slice(0, 10)
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    category: null,
    availability: null,
    inStock: null,
    isShippable: null
  });

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: value
    }));
  };


  const handleSelectOneJob = (event, jobId) => {
    if (!selectedJobs.includes(jobId)) {
      setSelectedJobs([jobId]);
    } else {
      setSelectedJobs((prevSelected) => prevSelected.filter((id) => id !== jobId));
    }
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
  const enableBulkOperations = selectedJobs.length > 0;
  const selectedSomeJobs = selectedJobs.length > 0 && selectedJobs.length < jobs.length;
  const selectedAllJobs = selectedJobs.length === jobs.length;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box p={2}>
        <Box
          display="flex"
          alignItems="center"
        >
          <TextField
            className={classes.queryField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon
                    fontSize="small"
                    color="action"
                  >
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            placeholder="Search by ID or Name"
            value={query}
            variant="outlined"
          />
          <Box flexGrow={1} />
          <TextField
            className={classes.availabilityField}
            label="Sort By Status"
            name="availability"
            onChange={handleAvailabilityChange}
            select
            SelectProps={{ native: true }}
            value={filters.availability || 'all'}
            variant="outlined"
          >
            {avalabilityOptions.map((avalabilityOption) => (
              <option
                key={avalabilityOption.id}
                value={avalabilityOption.id}
              >
                {avalabilityOption.name}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>
      {enableBulkOperations && (
        <div className={classes.bulkOperations}>
          <div className={classes.bulkActions}>
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Edit
            </Button>
          </div>
        </div>
      )}
      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                <TableCell>
                  Job ID
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  Moving Date
                </TableCell>
                <TableCell>
                  Type of Service
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Submitted
                </TableCell>

                <TableCell align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {paginatedJobs.map((job) => {
              const isJobSelected = selectedJobs.includes(job.id);
              let lol = job.user_id
              let customer = ''
              users.map(user => {
                if (lol === user.id){
                  customer = user.first_name + " " +user.last_name
                }
              })
                return (
                  <TableRow
                    hover
                    key={job.id}
                    selected={isJobSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isJobSelected}
                        onChange={(event) => handleSelectOneJob(event, job.id)}
                        value={isJobSelected}
                      />
                    </TableCell>
                    <TableCell >
                    <Link
                      variant="subtitle2"
                      color="textPrimary"
                      component={RouterLink}
                      underline="none"
                      to={`/app/jobs/${job.id}`}
                    >
                      #{job.id}
                    </Link>
                    </TableCell>
                    <TableCell>
                        {customer}
                    </TableCell>
                    {
                      today > moment(job.pick_up_date).format('YYYY-MM-DD') ?
                      <TableCell className={classes.pastDate}>
                      {moment(job.pick_up_date).format('MMM DD YYYY')}
                      </TableCell>
                       :
                       <TableCell>
                       {moment(job.pick_up_date).format('MMM DD YYYY')}
                       </TableCell>
                    }
                    <TableCell>
                      {job.job_type}
                    </TableCell>
                    <TableCell>
                      {getInventoryLabel(job.job_status)}
                    </TableCell>
                    <TableCell>
                      {moment(job.created_at).format('MMM DD YYYY')}
                    </TableCell>

                    <TableCell align="right">
                      <IconButton>
                        <SvgIcon fontSize="small">
                          <EditIcon />
                        </SvgIcon>
                      </IconButton>
                      <IconButton>
                      <Link
                        variant="subtitle2"
                        color="textPrimary"
                        component={RouterLink}
                        underline="none"
                        to={`/app/jobs/${job.id}`}
                      >
                        <SvgIcon fontSize="small">
                          <ArrowRightIcon />
                        </SvgIcon>
                      </Link>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredJobs.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  jobs: PropTypes.array
};

Results.defaultProps = {
  jobs: []
};

export default Results;
