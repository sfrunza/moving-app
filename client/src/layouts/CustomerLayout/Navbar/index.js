import React, { useEffect, useState, useCallback } from "react";
import { useLocation, matchPath } from "react-router";
import moment from "moment";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Umbrella as UmbrellaIcon,
  Layout as LayoutIcon,
  File as FileIcon,
  Lock as LockIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  Truck as TruckIcon,
  PhoneCall as PhoneCallIcon,
} from "react-feather";
import NavItem from "./NavItem";
import NavItemLink from "./NavItemLink";

const navConfig = [
  {
    subheader: "Management",
    items: [
      {
        title: "Account Overview",
        icon: LayoutIcon,
        href: "/account",
      },
      {
        title: "My Moves",
        icon: TruckIcon,
        href: "/account/moves",
        items: [],
      },
    ],
  },
  {
    subheader: "Settings",
    items: [
      {
        title: "Edit Profile",
        icon: SettingsIcon,
        href: "/account/edit",
      },
      {
        title: "Change Password",
        icon: LockIcon,
        href: "/account/password/change",
      },
    ],
  },
  {
    subheader: "Helpful Links",
    items: [
      {
        title: "Certificate of Insurance",
        icon: UmbrellaIcon,
        href: "/account/insurance",
      },
      {
        title: "Bill of Lading",
        icon: FileIcon,
        href: "/account/bill-of-lading",
      },
      {
        title: "Email Us",
        icon: MailIcon,
        href: "mailto:info@insightmoving.com",
      },
      {
        title: "617-206-0968",
        icon: PhoneCallIcon,
        href: "tel:6172060968",
      },
    ],
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

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={open}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    if (item.title === "Email Us" || item.title === "617-206-0968") {
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

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    left: "auto",
    height: "auto",
    boxShadow: "rgb(140 152 164 / 13%) 0px 6px 24px 0px",
    border: "none",
    borderRadius: theme.spacing(1),
    position: "relative",
    flex: 1,
    zIndex: "2",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

function NavBar({ user, jobs, openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();
  const [jobList, setJobLsit] = useState([]);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const fetchJobs = useCallback(() => {
    let allJobs = [];
    jobs.map((job) => {
      let date = moment(job.pick_up_date).format("MMM DD, YYYY");
      let name = date + ",  " + job.job_status;

      allJobs.push({
        title: name,
        href: `/account/requests/${job.id}`,
      });
      return null;
    });

    setJobLsit(allJobs);
  }, [jobs]);

  useEffect(() => {
    fetchJobs();
    return () => {
      setJobLsit([]);
    };
  }, [fetchJobs]);

  navConfig[0].items[1].items = jobList;
  // if (jobList.length < 1) {
  //   return <LoadingScreen />;
  // }

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <div>
        <Box p={2}>
          <Box display="flex" justifyContent="center"></Box>
          <Box mt={2} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Welcome, {user.first_name}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky color="inherit">
                  {config.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: config.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
      </div>
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
          transitionDuration={500}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden smDown>
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
  openMobile: PropTypes.bool,
};

export default NavBar;
