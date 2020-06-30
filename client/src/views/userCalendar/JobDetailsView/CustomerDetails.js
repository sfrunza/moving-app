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
  Avatar,
  Typography
} from '@material-ui/core';
import purple from '@material-ui/core/colors/deepPurple';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


function CustomerDetails({ job, className, ...rest }) {

  const status = job.job.status;

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
      fontWeight: 'bold',
    },
    email: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.grey[700],
    },
    phoneButton: {
      color: purple[500],
      display: 'flex',
      fontSize: '16px',
      alignItems: 'center',
      textDecoration: 'none',
      '&:hover': {
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
  const statusColors = {
    "Needs Attention": colors.orange[600],
    "Canceled": colors.red[600],
    "Completed": colors.blue[600],
    "Confirmed": colors.green[600]
  };
  const classes = useStyles();

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
                  {job.customer.first_name} {job.customer.last_name}
                </Box>
                <Box mt={1}>
                  <a className={classes.phoneButton} href={`tel:${job.customer.phone}`}><PhoneIcon style={{height: '15px'}}/>{formatPhoneNumber(job.customer.phone)}</a>
                </Box>
                <Box mt={1}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    gutterBottom
                    className={classes.email}
                  >
                    <EmailIcon style={{height: '15px'}}/> {job.customer.email}
                  </Typography>
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
  job: PropTypes.object.isRequired
};

export default CustomerDetails;
