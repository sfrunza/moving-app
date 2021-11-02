import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1),
  },
}));

function OtherActions({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Other actions" />
      <Divider />
      <CardContent>
        <Box mt={1} mb={2}>
          <Typography variant="body2" color="textSecondary">
            Remove this customer’s data if he requested that, if not please be
            aware that what has been deleted can never brough back
          </Typography>
        </Box>
        <Button variant="contained" color="secondary" disableElevation>
          <DeleteIcon className={classes.actionIcon} />
          Delete Account
        </Button>
      </CardContent>
    </Card>
  );
}

OtherActions.propTypes = {
  className: PropTypes.string,
};

export default OtherActions;
