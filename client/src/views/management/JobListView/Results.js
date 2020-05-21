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
  FormControlLabel,
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
  makeStyles
} from '@material-ui/core';
import {
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';

const categoryOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'dress',
    name: 'Dress'
  },
  {
    id: 'jewelry',
    name: 'Jewelry'
  },
  {
    id: 'blouse',
    name: 'Blouse'
  },
  {
    id: 'beauty',
    name: 'Beauty'
  }
];

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

const sortOptions = [
  {
    value: 'updatedAt|desc',
    label: 'Last update (newest first)'
  },
  {
    value: 'updatedAt|asc',
    label: 'Last update (oldest first)'
  },
  {
    value: 'createdAt|desc',
    label: 'Creation date (newest first)'
  },
  {
    value: 'createdAt|asc',
    label: 'Creation date (oldest first)'
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

function applyFilters(jobs, query, filters) {

  return jobs.filter((job) => {
    let matches = true;

    if (query && !job.customer.last_name.toLowerCase().includes(query.toLowerCase()) && !job.customer.first_name.toLowerCase().includes(query.toLowerCase()) && !job.id.toString().includes(query.toLowerCase())) {
      matches = false;
    }

    if (filters.category && job.category !== filters.category) {
      matches = false;
    }

    if (filters.availability) {
      if (filters.availability === 'confirmed' && !['Confirmed'].includes(job.status)) {
        matches = false;
      }

      if (filters.availability === 'completed' && !['Completed'].includes(job.status)) {
        matches = false;
      }

      if (filters.availability === 'needsAttention' && !['Needs Attention'].includes(job.status)) {
        matches = false;
      }

      if (filters.availability === 'canceled' && !['Canceled'].includes(job.status)) {
        matches = false;
      }
    }

    if (filters.inStock && !['Needs Attention'].includes(job.status)) {
      matches = false;
    }

    if (filters.isShippable && !job.isShippable) {
      matches = false;
    }

    return matches;
  });
}

function applyPagination(customers, page, limit) {
  return customers.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
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
  }
}));

function Results({ className, jobs, ...rest }) {
  const classes = useStyles();
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState(sortOptions[0].value);
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

  const handleCategoryChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value
    }));
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

  const handleStockChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      inStock: value
    }));
  };

  const handleShippableChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      isShippable: value
    }));
  };

  const handleSortChange = (event) => {
    event.persist();
    setSort(event.target.value);
  };

  const handleSelectAllJobs = (event) => {
    setSelectedJobs(event.target.checked
      ? jobs.map((job) => job.id)
      : []);
  };

  const handleSelectOneJob = (event, jobId) => {
    if (!selectedJobs.includes(jobId)) {
      setSelectedJobs((prevSelected) => [...prevSelected, jobId]);
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
  const filteredJobs = applyFilters(jobs, query, filters);
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
            placeholder="Search Job"
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
            <Checkbox
              checked={selectedAllJobs}
              indeterminate={selectedSomeJobs}
              onChange={handleSelectAllJobs}
            />
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
                  <Checkbox
                    checked={selectedAllJobs}
                    indeterminate={selectedSomeJobs}
                    onChange={handleSelectAllJobs}
                  />
                </TableCell>
                <TableCell>
                  Job ID
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  Pickup Date
                </TableCell>
                <TableCell>
                  Type of Service
                </TableCell>
                <TableCell>
                  Status
                </TableCell>

                <TableCell align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedJobs.map((job) => {
                const isJobSelected = selectedJobs.includes(job.id);

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
                      to={`/app/management/jobs/${job.id}`}
                    >
                      {job.id}
                    </Link>
                    </TableCell>
                    <TableCell>
                        {(job.customer === null  || job.customer === null) ? " " : job.customer.first_name + " " + job.customer.last_name}
                    </TableCell>
                    <TableCell>
                      {moment(job.pick_up_date).format('MMMM DD YYYY')}
                    </TableCell>
                    <TableCell>
                      {job.move_type}
                    </TableCell>
                    <TableCell>
                      {getInventoryLabel(job.status)}
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
                        to={`/app/management/jobs/${job.id}`}
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
