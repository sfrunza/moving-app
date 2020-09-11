import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
} from '@material-ui/core';
import { SectionHeader } from 'src/components/molecules';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  list: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
  },
  listItem: {
    justifyContent: 'flex-start',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
  listItemAvatar: {
    backgroundColor: 'orange',
    margin: theme.spacing(0, 2),
  },
  button: {
    borderRadius: '24px',
  }
}));

const Team = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Why Choose Us"
        subtitle="We are a small company of professional movers. Unlike movers from big companies, we will treat your belongings as ours. We will walk you through our smooth and simple process."
        ctaGroup={[
          <Button
            variant="outlined"
            size={isMd ? 'large' : 'medium'}
            color="secondary"
            className={classes.button}
            component={RouterLink}
            to='/book'
          >
            Book Us Now
          </Button>,
        ]}
        fadeUp
      />
      <List disablePadding className={classes.list}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <Avatar className={classes.listItemAvatar}>
            <PhoneRoundedIcon className={classes.icon}/>
          </Avatar>
          <ListItemText
            className={classes.listItemText}
            primary="Phone"
            secondary="+1 617-206-0968"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <Avatar className={classes.listItemAvatar}>
            <EmailIcon className={classes.icon}/>
          </Avatar>
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="info@insightmoving.com"
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >

          <Avatar className={classes.listItemAvatar}>
            <RoomIcon className={classes.icon}/>
          </Avatar>

          <ListItemText
            className={classes.listItemText}
            primary="Head Office"
            secondary="100 Washington st. Boston, MA "
            primaryTypographyProps={{
              className: classes.title,
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

Team.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Team;
