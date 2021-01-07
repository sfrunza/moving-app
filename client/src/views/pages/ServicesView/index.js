import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Tab, Tabs, useMediaQuery, Box, Typography } from '@material-ui/core';
import { Section } from 'src/components/organisms';
import Page from "src/components/Page";
import PropTypes from 'prop-types';
import { Parallax } from "src/components/organisms"; //COSTUM MADE BY ME
import backgroundImage from "src/assets/img/services-background-min2.jpg";
import Interstate from './Interstate'
import Packing from './Packing'
import Storage from './Storage'
import Local from './Local'
import { features } from './data';

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
        <Box p={isMd ? 3 : 1}>
          <Typography>{children}</Typography>
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}




const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',

  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    // marginTop: 54,
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    // background: '#f0f8ffd9',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '18.6rem',
      marginTop: 0,
      left: 0,
      width: '25%',
      maxWidth: 240,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  coverContent: {
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      top: '23%',
      transform: 'translateY(-50%)',
      padding: theme.spacing(0),
    },
  },
  image: {
    width: '100%',
    maxWidth: 500,
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
    },
  },
  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      // flex: '0 0 70%',
      padding: theme.spacing(4,0,0,2),
      maxWidth: '77%',
    },
  },
  contentSection: {
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(12),
    },
  },
  pagePaddingTop: {
    paddingTop: 0,
    maxWidth: 1100,
    position: 'relative',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  tabs: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
  },
  indicator: {
    display: 'none'
  }
}));

const AboutSideCover = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page title="Services | Boston Movers" className={classes.root}>
      <Parallax
        backgroundImage={backgroundImage}
        title="Moving Services"
        typedText={["Reliable", "Responsible", "Efficient"]}
      />
      <Section className={clsx(classes.pagePaddingTop, classes.section)}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <div style={{width: '100%'}}>
              <div className={classes.coverContent}>
                <Tabs
                  orientation={isMd ? 'vertical' : 'horizontal'}
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs"
                  className={classes.tabs}
                  TabIndicatorProps={{
                    className: classes.indicator
                  }}
                >
                  <Tab
                    label="Local"
                    {...a11yProps(0)}
                    onClick={()=> {
                      isMd ? window.scrollTo(0, 635):window.scrollTo(0, 570)
                    }}
                  />
                  <Tab label="Interstate" {...a11yProps(1)}
                    onClick={()=> {
                      isMd ? window.scrollTo(0, 635):window.scrollTo(0, 570)
                    }}
                    />
                  <Tab label="Packing" {...a11yProps(2)}
                    onClick={()=> {
                      isMd ? window.scrollTo(0, 635):window.scrollTo(0, 570)
                    }}
                    />
                  <Tab label="Storage" {...a11yProps(3)}
                    onClick={()=> {
                      isMd ? window.scrollTo(0, 635):window.scrollTo(0, 570)
                    }}
                    />
                </Tabs>
              </div>
            </div>
          </div>
          <div className={classes.content}>
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
          </div>
        </div>
      </Section>
      <Divider />
    </Page>
  );
};

export default AboutSideCover;
