import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors,
  Box,
  Avatar
} from '@material-ui/core';
import purple from '@material-ui/core/colors/deepPurple';
import {
  Phone as PhoneIcon,
  Mail as EmailIcon,
} from 'react-feather';


function CustomerDetails({ user, className, job, ...rest }) {

  const status = job === undefined ? null : job.job_status;

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
  const statusColors = {
    "Needs Attention": colors.orange[600],
    "Canceled": colors.red[600],
    "Completed": colors.blue[600],
    "Confirmed": colors.green[600]
  };
  const classes = useStyles();

  if(job === undefined){
    return null
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
                <Box className={classes.name}>
                  {user.first_name} {user.last_name}
                </Box>
                <Box mt={1} className={classes.phoneButton}>
                  <PhoneIcon style={{height: '15px'}}/>{user.phone.length === 10 ? formatPhoneNumber(user.phone) : user.phone}
                </Box>
                {user.add_phone ?
                  <Box mt={1} className={classes.phoneButton}>
                    <PhoneIcon style={{height: '15px'}}/>{user.add_phone.length === 10 ? formatPhoneNumber(user.add_phone) : user.add_phone}
                  </Box> : null}
                <Box mt={1} className={classes.emailButton}>
                  <EmailIcon style={{height: '15px'}}/>{user.email}
                </Box>

              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

CustomerDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default CustomerDetails;
