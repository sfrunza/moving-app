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
  colors,
  Box,
  Avatar
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import purple from '@material-ui/core/colors/deepPurple';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


function CustomerDetails({ job, className, ...rest }) {

  const [status, setStatus] = useState(job.job.status);

  const formatPhoneNumber = (phoneNumberString) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
      padding: 0,
      '& .MuiTableCell-root': {
        borderBottom: 'none'
      }
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
    name: {
      fontSize: '16px',
      color: purple[700],
      fontWeight: 'bold',
      fontSize: '16px'
    },
    emailButton: {
      color: theme.palette.grey[700],
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      '&:hover': {
        color: purple[500],
        textDecoration: 'underline'
      }
    },
    phoneButton: {
      color: theme.palette.grey[700],
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      '&:hover': {
        color: purple[500],
        textDecoration: 'underline'
      }
    },
    buttonIcon: {
      marginRight: theme.spacing(1)
    },
    infoField: {
      display :'flex',
      flexDirection: 'column',
      alignItems: 'center'
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
          <TableBody style={{display: 'flex', flexDirection: 'column'}}>
            <TableRow>
              <TableCell className={classes.infoField}>
                <Avatar src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" style={{height: '70px', width: '70px', marginBottom: '1em'}}/>
                <Link
                  component={RouterLink}
                  to={`/app/management/customers/${job.customer.id}`}
                  className={classes.name}
                >
                  {job.customer.first_name} {job.customer.last_name}
                </Link>
                <Box mt={1}>
                  <a className={classes.phoneButton} href={`tel:${job.customer.phone}`}><PhoneIcon style={{height: '15px'}}/>{formatPhoneNumber(job.customer.phone)}</a>
                </Box>
                <Box mt={1}>
                  <a className={classes.emailButton} href={`mailto:${job.customer.email}`}><EmailIcon style={{height: '15px'}}/>{job.customer.email}</a>
                </Box>

              </TableCell>
            </TableRow>
            
            <TableRow>
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
