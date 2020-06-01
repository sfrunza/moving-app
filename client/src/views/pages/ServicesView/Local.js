import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  CardMedia,
  Link
} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  media: {
    height: 165,
    marginBottom: '3em',
    borderRadius: '3px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    }
  },
  avatar: {
    backgroundColor: deepPurple['A200'],
    color: theme.palette.secondary.contrastText
  },
  button: {
    display: 'flex',
    textTransform: 'uppercase',
    margin: '3em auto',
    width: '15em',
    justifyContent: 'center',
    padding: '0.7em',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontFamily: "Maison Neue Demi",
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    },
    color: deepPurple[600],
    backgroundColor: theme.palette.common.white,
    border: '1.4px solid',
    borderColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[50],
    }
  },
  subtitle: {
    color: deepPurple['A200']
  },
  item: {
    width: '30%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      // maxWidth: '450px',
      margin: '2em auto'
    }
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'

  }
}));

function Local({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          Local Moving
        </Typography>
        <Typography
          component="p"
          variant="overline"
          align="center"
          className={classes.subtitle}
        >
          Hourly based full moving services in Metro Boston and 150 miles around it.
        </Typography>
        <Box mt={8}>
          <Grid
            container
            className={classes.gridContainer}
          >
            <Grid
              item
              // xs={12}
              // md={4}
              className={classes.item}
            >
              <Box display="flex" >
                <Box ml={2}>
                  <CardMedia
                    className={classes.media}
                    image="https://static1.squarespace.com/static/586174e1ff7c506c994738d2/5861f218d2b857ddbd7d08f9/5871b4ea1e5b6c9fdaa8424e/1484338685487/?format=1500w"
                    title="Residential"
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                  >
                    Residential
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                  >
                    From small apartments to large houses we treat your belongings with the utmost care and safekeeping.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              // xs={12}
              // md={4}
              className={classes.item}
            >
              <Box display="flex" >
                <Box ml={2}>
                  <CardMedia
                    className={classes.media}
                    image="https://dealerplatformnet.blob.core.windows.net/wwwblacktiemovingcom/gallery/medium/7a5beed7-00c9-4920-a7fe-c7388755925b.jpg"
                    title="Residential"
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                  >
                    Commercial
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                  >
                    Office moving services and corporate relocation for busy professionals and companies as well.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              // xs={12}
              // md={4}
              className={classes.item}
            >
              <Box display="flex">
                <Box ml={2}>
                  <CardMedia
                    className={classes.media}
                    image="https://www.movinghelper.com/img/full-time.jpg"
                    title="Residential"
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                  >
                    Loading/Unloading Help
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    gutterBottom
                  >
                    Loading and unloading help. Moving help within house, building, office or apartment or condo complex.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
          <Link
            className={classes.button}
            color="textSecondary"
            component={RouterLink}
            to="/book"
            underline="none"
            variant="body2"
          >
            Book Us Now
          </Link>
      </Container>
    </div>
  );
}

Local.propTypes = {
  className: PropTypes.string
};

export default Local;
