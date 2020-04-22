import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

function JobCard({ job, className, ...rest }) {
  const classes = useStyles();
  const statusColors = {
    "Needs Attention": colors.orange[400],
    "Canceled": colors.red[400],
    "Completed": colors.blue[400],
    "Confirmed": colors.green[400]
  };
  console.log(job);
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar
            alt="Author"
            className={classes.avatar}

          >
            {getInitials("asdasd asfasfasf")}
          </Avatar>
          <div>

              <Link
                color="textPrimary"
                component={RouterLink}
                to={`/admin/jobs/${job.id}`}
                variant="h6"
              >
                # {job.id + 10000}
              </Link>
          </div>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
          {
            (job.customer == null) ?
            " "
           :
            job.customer.first_name + " " + job.customer.last_name
          }
          </Typography>
          <Typography variant="body2">Customer Name</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{job.id}</Typography>
          <Typography variant="body2">Team members</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(job.pick_up_date).format('MMMM DD YYYY')}
          </Typography>
          <Typography variant="body2">Pickup</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(job.delivery_date).format('MMMM DD YYYY')}
          </Typography>
          <Typography variant="body2">Delivery</Typography>
        </div>
        <div className={classes.stats}>
            <Label
              color={
                statusColors[job.status]
              }
            >
              {job.status}
            </Label>
          <Typography variant="body2">Status</Typography>
        </div>
        <div className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="outlined"
            to={`/admin/jobs/${job.id}`}
            component={RouterLink}
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

JobCard.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

export default JobCard;
