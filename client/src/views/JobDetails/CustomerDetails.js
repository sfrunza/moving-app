import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Link,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import purple from '@material-ui/core/colors/deepPurple';


function CustomerDetails({ job, className, ...rest }) {

  const [status, setStatus] = useState(job.job.status);

  const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
      padding: 0
    },
    heading: {
      textAlign: 'center',
      color: statusColors[status],
      border: `1px solid`,
      borderRadius: '3px',
      margin: 'auto',
      display: 'inline-block',
      padding: '5px 5px',
    },
    actions: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& > * + *': {
        marginLeft: 0
      }
    },
    emailButton: {
      color: theme.palette.grey[700],
      '&:hover': {
        color: purple[500],
        textDecoration: 'underline'
      }
    },
    phoneButton: {
      color: theme.palette.grey[700],
      '&:hover': {
        color: purple[500],
        textDecoration: 'underline'
      }
    },
    buttonIcon: {
      marginRight: theme.spacing(1)
    }
  }));
  const statusOptions = ['Needs Attention', 'Confirmed','Canceled', 'Completed'];
  const statusColors = {
    "Needs Attention": colors.orange[600],
    "Canceled": colors.red[600],
    "Completed": colors.blue[600],
    "Confirmed": colors.green[600]
  };
  const classes = useStyles();


  const handleChange = (event) => {
    event.persist();
    setStatus(event.target.value);
    handleStatusUpdate(event.target.value)
  };


  const handleStatusUpdate = (status) => {
    fetch(`http://localhost:3001/api/v1/jobs/${job.job.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({status: status}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        setStatus(status)
      })
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader style={{ textAlign: 'center'}} classes={{
          title: classes.heading,
        }} title={status} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>
                <Link
                  component={RouterLink}
                  to={`/admin/customers/${job.customer.id}`}
                >
                  {job.customer.first_name} {job.customer.last_name}
                </Link>
                <div >
                  <a className={classes.emailButton} href={`mailto:${job.customer.email}`}>{job.customer.email}</a>
                </div>
                <div >
                  <a className={classes.phoneButton} href={`tel:${job.customer.phone}`}>{job.customer.phone}</a>
                </div>
              </TableCell>
            </TableRow>

            <TableRow selected>
              <TableCell>Moving Date</TableCell>
              <TableCell>
                {moment(job.job.pick_up_date).format('MM/DD/YYYY')}
              </TableCell>
            </TableRow>

            <TableRow >
              <TableCell>Time</TableCell>
              <TableCell>
                {job.job.job_time}
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Change Status</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  name="option"
                  onChange={handleChange}
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={status}
                  variant="outlined"
                >
                  {statusOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}

                </TextField>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Resend invoice
        </Button>
      </CardActions>
    </Card>
  );
}

CustomerDetails.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

export default CustomerDetails;
