import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

function CustomerInfo({ customer, className, ...rest }) {
  const classes = useStyles();

  const formatPhoneNumber = (phoneNumberString) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Customer info" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Email
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                {customer.email}
              </Typography>
              <Label color={customer.customer ? 'success' : 'error'}>
                {customer.customer
                  ? 'Email verified'
                  : 'Email not verified'}
              </Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Phone
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                {formatPhoneNumber(customer.phone)}
              </Typography>
            </TableCell>
          </TableRow>

          {
            customer.add_phone ?
            <TableRow>
              <TableCell className={classes.fontWeightMedium}>
                Secondary Phone
              </TableCell>
              <TableCell>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  {formatPhoneNumber(customer.add_phone)}
                </Typography>
              </TableCell>
            </TableRow>
            : null

          }
        </TableBody>
      </Table>
      <Box
        p={1}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Button>
          <LockOpenIcon className={classes.actionIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.actionIcon} />
          Login as Customer
        </Button>
      </Box>
    </Card>
  );
}

CustomerInfo.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerInfo;
