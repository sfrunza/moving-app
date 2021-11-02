import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  makeStyles,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import PencilAltIcon from "src/icons/PencilAlt";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1),
  },
  headerAction: {
    margin: 0,
  },
  editIcon: {
    color: theme.palette.primary.main,
  },
}));

function CustomerInfo({ customer, className, ...rest }) {
  const classes = useStyles();

  const formatPhoneNumber = (phoneNumberString) => {
    let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };

  return (
    <Card>
      <CardHeader
        title="Customer info"
        action={
          <Tooltip title="Edit">
            <IconButton aria-label="edit" classes={{ root: classes.editIcon }}>
              <PencilAltIcon />
            </IconButton>
          </Tooltip>
        }
        classes={{
          action: classes.headerAction,
        }}
      />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.first_name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last name</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.last_name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.email}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {formatPhoneNumber(customer.phone)}
              </Typography>
            </TableCell>
          </TableRow>

          {customer.add_phone ? (
            <TableRow>
              <TableCell className={classes.fontWeightMedium}>
                Secondary Phone
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="textSecondary">
                  {formatPhoneNumber(customer.add_phone)}
                </Typography>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </Card>
  );
}

CustomerInfo.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired,
};

export default CustomerInfo;
