import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Label from 'src/components/Label';
import GenericMoreButton from 'src/components/GenericMoreButton';


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

const useStyles = makeStyles((theme) => ({
  root: {},
  navigateNextIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function LatestOrders({ className, users, jobs, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Latest Jobs"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Job ID
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  Size
                </TableCell>

                <TableCell>
                  Status
                </TableCell>
                <TableCell align="right">
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => {
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
                  >
                    <TableCell># {job.id}</TableCell>
                    <TableCell>{customer}</TableCell>
                    <TableCell>{job.job_size}</TableCell>

                    <TableCell>
                      {getInventoryLabel(job.job_status)}
                    </TableCell>
                    <TableCell align="right">
                      {moment(job.pick_up_date).format('MMM DD, YYYY')}
                    </TableCell>
                  </TableRow>
                )
              }
            )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        p={2}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          component={RouterLink}
          size="small"
          to="/app/jobs"
        >
          See all
          <NavigateNextIcon className={classes.navigateNextIcon} />
        </Button>
      </Box>
    </Card>
  );
}

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
