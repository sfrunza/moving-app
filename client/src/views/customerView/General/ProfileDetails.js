import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
  colors,
  Divider,
} from '@material-ui/core';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 40,
    width: 40
  },
  button: {
    width: 'fit-content',
    margin: 'auto',
    color: colors.lightBlue[500],
    textTransform: 'none',
  }
}));


function ProfileDetails({ user, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        textAlign="center"
        justifyContent="center"
        pb={2}
      >
        <Box
        >
          <Avatar
            className={classes.avatar}
          />
        </Box>

        <Box ml={1}>
          <Button
            fullWidth
            variant="text"
            className={classes.button}
          >
            Change Profile Photo
          </Button>
        </Box>
      </Box>
      <Divider />
    </div>
  );
}

ProfileDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ProfileDetails;
