/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
import PropTypes from 'prop-types';
import axios from 'axios'
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles,
  ListItem,
  Button,
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import {
  Umbrella as UmbrellaIcon,
  File as FileIcon,
  Lock as LockIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  Truck as TruckIcon,
  PhoneCall as PhoneCallIcon,
} from 'react-feather';
import Logo from 'src/components/Logo';
import NavItem from './NavItem';
import NavItemLink from './NavItemLink';
import logo from 'src/assets/img/looool.png'

const navConfig = [
  {
    subheader: 'Management',
    items: [
      {
        title: 'Jobs',
        icon: TruckIcon,
        href: '/account/jobs',
        items: []
      },
    ]
  },
  {
    subheader: 'Settings',
    items: [
      {
        title: 'Edit Profile',
        icon: SettingsIcon,
        href: '/account/edit'
      },
      {
        title: 'Change Password',
        icon: LockIcon,
        href: '/account/password/change'
      }
    ]
  },
  {
    subheader: 'Helpful Links',
    items: [
      {
        title: 'Certificate of Insurance',
        icon: UmbrellaIcon,
        href: '/account/insurance'
      },
      {
        title: 'Bill of Lading',
        icon: FileIcon,
        href: '/account/bill'
      },
      {
        title: 'Email Us',
        icon: MailIcon,
        href: 'mailto:info@insightmoving.com'
      },
      {
        title: '617-206-0968',
        icon: PhoneCallIcon,
        href: 'tel:6172060968'
      }
    ]
  },
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth = 0
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    if (item.title === "Email Us" || item.title === '617-206-0968') {
      acc.push(
        <NavItemLink
          depth={depth}
          href={item.href}
          icon={item.icon}
          key={key}
          info={item.info}
          title={item.title}
        />
      );
    } else {
      acc.push(
        <NavItem
          depth={depth}
          href={item.href}
          icon={item.icon}
          key={key}
          info={item.info}
          title={item.title}
        />
      );
    }
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    left: 'auto',
    height: 'auto',
    boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
    border: 'none',
    borderRadius: '8px',
    position: 'relative',
    flex: 1,
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

function NavBar({ user, openMobile, onMobileClose, }) {
  const classes = useStyles();
  const location = useLocation();
  const [jobs, setJobs] = useState();
  const isMountedRef = useIsMountedRef();

  const getJobs = useCallback(() => {
    axios
      .get(`/api/v1/users/${user.id}`)
      .then((response) => {
        if (isMountedRef.current) {
          let jobs = response.data.jobs
          jobs.map(job => {
            let date = moment(job.pick_up_date, 'MM/DD/YYYY').format("MMM DD, YYYY")
            let name = date+",  " + job.job_status
            if (navConfig[0].items[0].items.length !== jobs.length) {
              navConfig[0].items[0].items.push({title: name, href: `/account/jobs/${job.id}`})
            }
          })
          setJobs(jobs);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname, user.id]);

  if (!jobs) {
    return null;
  }

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
          >
            <RouterLink to="/">
              <Logo src={logo}/>
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box
            display="flex"
            justifyContent="center"
          >

          </Box>
          <Box
            mt={2}
            textAlign="center"
          >
            <Link
              component={RouterLink}
              to='/account/edit'
              variant="h5"
              color="textPrimary"
              underline="none"
            >
              Welcome, {user.first_name}
            </Link>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={(
                <ListSubheader
                  disableGutters
                  disableSticky
                >
                  {config.subheader}
                </ListSubheader>
              )}
            >
              {renderNavItems({ items: config.items, pathname: location.pathname })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
