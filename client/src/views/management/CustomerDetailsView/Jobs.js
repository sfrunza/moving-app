import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from '@material-ui/core';
import { ArrowRight as ArrowRightIcon } from 'react-feather';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Label from 'src/components/Label';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles(() => ({
  root: {},
  idButton: {
    fontSize: '16px',
  }
}));

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

function Jobs({ className, customer, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [jobs, setJobs] = useState()

  const getJobs = useCallback(() => {
      axios.get(`/api/v1/users/${customer.id}`)
      .then((response) => {
        if (isMountedRef.current) {
          setJobs(response.data.jobs);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
  }, [customer.id]);

  if (!jobs) {
    return null;
  }
  console.log(jobs);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Customer jobs"
        />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={1150}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <IconButton
                        component={RouterLink}
                        to={`/app/jobs/${job.id}`}
                        className={classes.idButton}
                      >
                        #
                        {" " + job.id}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {moment(job.pick_up_date).format('MMM DD, YYYY')}
                    </TableCell>
                    <TableCell>{job.job_size}</TableCell>
                    <TableCell>
                      {getInventoryLabel(job.job_status)}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        component={RouterLink}
                        to={`/app/jobs/${job.id}`}
                      >
                        <SvgIcon fontSize="small">
                          <ArrowRightIcon />
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={jobs.length}
          onChangePage={() => {}}
          onChangeRowsPerPage={() => {}}
          page={0}
          rowsPerPage={5}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </div>
  );
}

Jobs.propTypes = {
  className: PropTypes.string
};

export default Jobs;
