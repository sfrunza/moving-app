import Page from "src/components/Page";
import Section from "src/components/Section";
import React, { useRef, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Tab, Tabs, useMediaQuery, Box, Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import Interstate from "./Interstate";
import Packing from "./Packing";
import Storage from "./Storage";
import Local from "./Local";
import { features } from "./data";
import BoxIcon from "src/icons/Box";
import MapIcon from "src/icons/Interstate";
import StorageIcon from "src/icons/Storage";
import { Link as RouterLink } from "react-router-dom";
import TruckFill from "src/icons/TruckFill";
import Hero from "./Hero";
import FAQS from "../Home/FAQS";
import { faq } from "../Home/data";

function TabPanel(props) {
  const { children, value, index, isMd, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  cover: {
    display: "flex",
    justifyContent: "center",
  },
  coverContent: {
    // [theme.breakpoints.up("md")]: {
    //   position: "sticky",
    //   top: "54px",
    // },
  },

  content: {
    marginTop: theme.spacing(4),
  },
  tabs: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: "100%",
    "&>div>div": {
      maxWidth: 1400,
      margin: "auto",
    },
  },
}));

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 200,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
    "&$selected": {
      color: theme.palette.primary.main,
    },
    "& span": {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
        maxWidth: 100,
        justifyContent: "flex-start",
        "& svg": {
          marginRight: theme.spacing(3),
        },
      },
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const tabs = [
  {
    label: "Local",
    icon: <TruckFill />,
    href: "/services/local-moving",
    value: 0,
  },
  {
    label: "Interstate",
    icon: <MapIcon />,
    href: "/services/interstate-moving",
    value: 1,
  },
  {
    label: "Packing",
    icon: <BoxIcon />,
    href: "/services/packing",
    value: 2,
  },
  {
    label: "Storage",
    icon: <StorageIcon />,
    href: "/services/storage",
    value: 3,
  },
];

const Services = (props) => {
  const path = props.location.pathname;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const infoRef = useRef(null);

  useEffect(() => {
    var val = 0;
    tabs.map((tab) => {
      if (path === tab.href) {
        val = tab.value;
      }
      return null;
    });
    if (path.includes("/services/")) {
      infoRef.current.scrollIntoView();
      window.scrollBy(0, -54);
    }

    setValue(val);
  }, [path, infoRef]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Services | Company Name" className={classes.root}>
      <Hero />
      <div ref={infoRef}>
        <StyledTabs
          orientation={"horizontal"}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          className={classes.tabs}
        >
          {tabs.map((tab, i) => {
            return (
              <StyledTab
                key={i}
                icon={tab.icon}
                label={tab.label}
                {...a11yProps(i)}
                component={RouterLink}
                to={tab.href}
              />
            );
          })}
        </StyledTabs>
      </div>
      <Section>
        <TabPanel value={value} isMd={isMd} index={0}>
          <Local data={features} />
        </TabPanel>
        <TabPanel value={value} isMd={isMd} index={1}>
          <Interstate />
        </TabPanel>
        <TabPanel value={value} isMd={isMd} index={2}>
          <Packing />
        </TabPanel>
        <TabPanel value={value} isMd={isMd} index={3}>
          <Storage />
        </TabPanel>
      </Section>
      <Divider />

      <FAQS data={faq} />
    </Page>
  );
};

export default Services;
