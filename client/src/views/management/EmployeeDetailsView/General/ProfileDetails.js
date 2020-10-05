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
  makeStyles
} from '@material-ui/core';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  }
}));

function getStatus(status) {
  const map = {
    "true": {
      text: 'Active',
      color: 'success'
    },
    "false": {
      text: 'Not Active',
      color: 'error'
    },
  };

  const { text, color } = map[status];

  return (
    <Label color={color}>
      {text}
    </Label>
  );
}

function ProfileDetails({ user, className, ...rest }) {
  const classes = useStyles();
  
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Avatar
            className={classes.avatar}

          />
          <Typography
            className={classes.name}
            gutterBottom
            variant="h3"
            color="textPrimary"
          >
            {user.first_name + ' ' + user.last_name}
          </Typography>
          <Typography
            color="textPrimary"
            variant="body1"
          >
            {user.email}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.role}{' '}{getStatus(user.active)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          Remove picture
        </Button>
      </CardActions>
    </Card>
  );
}

ProfileDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ProfileDetails;
