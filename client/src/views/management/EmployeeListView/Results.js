/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Typography,
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
  makeStyles
} from '@material-ui/core';
import {
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';
import getInitials from 'src/utils/getInitials';

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
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  }
}));

function getInventoryLabel(status) {
  const map = {
    "true": {
      text: 'Active',
      color: 'success'
    },
    "false": {
      text: 'Not Active',
      color: 'error'
    },
  };

  const { text, color } = map[status];

  return (
    <Label color={color}>
      {text}
    </Label>
  );
}

function Results({ className, users, ...rest }) {
  const classes = useStyles();
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);


  // Usually query is done on backend with indexing solutions

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Role
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

            {users.map((user, i) => {
              return (

                  <TableRow
                    hover
                    key={i}
                  >
                    <TableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Avatar
                          className={classes.avatar}
                        >
                          {getInitials(user.first_name + " " + user.last_name)}
                        </Avatar>
                        <div>
                          <Link
                            color="inherit"
                            component={RouterLink}
                            to={`/app/employees/${user.id}`}
                            variant="h6"
                          >
                            {user.first_name + " " + user.last_name}
                          </Link>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                          >
                            {user.email}
                          </Typography>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {user.admin ? 'Boss' : user.role}
                    </TableCell>
                    <TableCell>
                        {getInventoryLabel(user.active)}
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
                        to={`/app/employees/${user.id}`}
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
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array
};

Results.defaultProps = {
  users: []
};

export default Results;
