import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles,
  Badge,
} from '@material-ui/core';
import axios from 'axios';
import getInitials from 'src/utils/getInitials';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  badge: {
    '& span': {
      backgroundColor: 'green'
    }
  }
}));

function CustomerActivity({ className, users, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [total, setTotal] = useState(null);
  const [online, setOnline] = useState(null);


  useEffect(() => {
    let total = 0
    let active = 0
    users.map(user => {
      if (user.customer){
        total += 1
      }
      if (user.active){
        active += 1
      }
    })
    setTotal(total);
    setOnline(active)
  }, [total, online]);

  if (!online || !total) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Customer Activity"
        action={<GenericMoreButton />}
      />
      <Divider />
      <Box display="flex">
        <div className={classes.item}>
          <Typography
            align="center"
            variant="h3"
            color="textPrimary"
          >
            {total}
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Registered
          </Typography>
        </div>
        <Divider />
        <div className={classes.item}>
          <Typography
            align="center"
            variant="h3"
            color="textPrimary"
          >
            {online}
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Online
          </Typography>
        </div>
      </Box>
      <Divider />
      <List disablePadding>
        {users.map((user, i) => {
          if(user.active){
            return (
              <ListItem
                divider={i < users.length - 1}
                key={user.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Customer"
                    component={RouterLink}
                    src={user.customer.avatar}
                    to="#"
                  >
                    {getInitials(user.first_name + " " + user.last_name)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Link
                      color="textPrimary"
                      component={RouterLink}
                      to={`/app/customers/${user.id}`}
                      underline="none"
                      variant="h6"
                    >
                      {user.first_name + " " +user.last_name}
                    </Link>
                  )}
                />
                <Badge variant="dot" className={classes.badge}>

                </Badge>
              </ListItem>
            )
          }
        }
      )}
      </List>
    </Card>
  );
}

CustomerActivity.propTypes = {
  className: PropTypes.string
};

export default CustomerActivity;
