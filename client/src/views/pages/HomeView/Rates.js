import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
  Link
} from '@material-ui/core';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import { deepPurple, indigo } from '@material-ui/core/colors'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 20
    }
  },
  rates: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2em 0px',
    '& h5:first-child': {
      paddingTop: '40px'
    }
  },
  ratesSpan: {
    color: deepPurple['A200'],
    fontSize: '60px'
  },
  items: {
    backgroundColor: '#fff',
    padding: '6em 4em',
    display: 'block',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: '6em 0em'
    }
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Maison Neue Normal",
    width: 'fit-content',
    margin: 'auto',
    color: indigo['A400'],
    alignItems: 'center',
    '& svg': {
      width: '0.8em'
    }
  },
  icon: {
    position: 'relative',
    top: '6px',
    margin: '0px 1em'
  },
  xlConatiner: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  },
  title: {
    fontFamily: "Maison Neue Bold",
    marginBottom: '2em'
  },
  subtitle: {
    fontFamily: "Maison Neue",
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      margin: 'auto',
    }

  }
}));

function Rates({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="xl" className={classes.xlConatiner}>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          Clear pricing. Affordable rates.
        </Typography>
        <Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box display="flex" className={classes.items}>
                <Box className={classes.item}>
                  <Typography
                    variant="h2"
                    color="textPrimary"
                    align="center"
                    style={{fontFamily: "Maison Neue Bold" }}
                  >
                    Local Hourly Rates
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    align="center"
                    className={classes.subtitle}
                  >
                    Within Boston & surrounding 125 miles.
                  </Typography>
                  <Box my={2}>
                    <Divider />
                  </Box>
                  <Link
                    component={RouterLink}
                    to="/pricing#hourly-rates"
                    variant="body2"
                    color="secondary"
                    className={classes.link}
                  >
                    View all Pricing Plans <ChevronRightIcon />
                  </Link>
                  <Box className={classes.rates}>
                    <Typography
                      variant="h5"
                      style={{fontFamily: "Maison Neue Demi" }}

                    >
                      2 MOVERS & TRUCK
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{fontFamily: "Maison Neue Demi" }}

                    >
                      <span className={classes.ratesSpan}>$90</span>/ hour
                    </Typography>
                  </Box>
                  <Box className={classes.rates}>
                    <Typography
                      variant="h5"
                      style={{fontFamily: "Maison Neue Demi" }}
                    >
                      3 MOVERS & TRUCK
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{fontFamily: "Maison Neue Demi" }}
                    >
                      <span className={classes.ratesSpan}>$120</span>/ hour
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
            >
              <Box display="flex" className={classes.items}>
                <Box className={classes.item}>
                  <Typography
                    variant="h2"
                    color="textPrimary"
                    align="center"
                    style={{fontFamily: "Maison Neue Bold" }}
                  >
                    Flat Rate Moving
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    align="center"
                    className={classes.subtitle}
                  >
                    House Flat Rate Moving is available upon request.
                  </Typography>
                  <Box my={2}>
                    <Divider />
                  </Box>
                  <Link
                    component={RouterLink}
                    to="/pricing#flat-rates"
                    variant="body2"
                    color="secondary"
                    className={classes.link}
                  >
                    View Flat Rates <ChevronRightIcon />
                  </Link>
                  <Typography
                    variant="h5"
                    style={{ margin: '3em 0em 1em 0em', fontFamily: "Maison Neue Demi"}}
                    align="center"
                  >
                  NEW YORK <SyncAltIcon className={classes.icon}/>BOSTON
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{fontFamily: "Maison Neue Demi" }}
                  >
                    from <span className={classes.ratesSpan}>$950</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

Rates.propTypes = {
  className: PropTypes.string
};

export default Rates;
