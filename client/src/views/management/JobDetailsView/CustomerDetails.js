import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
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
import green from '@material-ui/core/colors/green';
import { useSnackbar } from 'notistack';
import {
  Phone as PhoneIcon,
  Mail as EmailIcon,
} from 'react-feather';


function CustomerDetails({ job, className, ...rest }) {

  const [user, setUser] = useState();
  const [status, setStatus] = useState(job.job_status);
  const { enqueueSnackbar } = useSnackbar();

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
      color: colors.grey[900],
      fontSize: '16px',
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    emailButton: {
      color: colors.grey[700],
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
    phoneButton: {
      fontSize: '16px',
      color: colors.grey[700],
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      '&:hover': {
        color: purple[500],
        textDecoration: 'none'
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

  useEffect(() => {
    let mounted = true;


    const fetchUser = () => {
      axios.get(`/api/v1/users/${job.user_id}`).then((response) => {
        if (mounted) {
          setUser(response.data.user);
        }
      });
    };

    fetchUser();

    return () => {
      mounted = false;
    };
  }, [job.id]);

  if (!user) {
    return null;
  }


  const handleChange = (event) => {
    event.persist();
    setStatus(event.target.value);
    handleStatusUpdate(event.target.value)
  };


  const handleStatusUpdate = (status) => {
    fetch(`/api/v1/jobs/${job.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({job_status: status}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        setStatus(status)
        enqueueSnackbar('Status Changed', {
          variant: 'success'
        });
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
                  to={`/app/customers/${user.id}`}
                  className={classes.name}
                >
                  {user.first_name} {user.last_name}
                </Link>
                <Box mt={1}>
                  <a className={classes.phoneButton} href={`tel:${user.phone}`}><PhoneIcon style={{height: '15px'}}/>{user.phone.length === 10 ? formatPhoneNumber(user.phone) : user.phone}</a>
                </Box>
                {user.add_phone ?
                  <Box mt={1}>
                    <a className={classes.phoneButton} href={`tel:${user.add_phone}`}><PhoneIcon style={{height: '15px'}}/>{user.add_phone.length === 10 ? formatPhoneNumber(user.add_phone) : user.add_phone}</a>
                  </Box> : null}
                <Box mt={1}>
                  <a className={classes.emailButton} href={`mailto:${user.email}`}><EmailIcon style={{height: '15px'}}/>{user.email}</a>
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
