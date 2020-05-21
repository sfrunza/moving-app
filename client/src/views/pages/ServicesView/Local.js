import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  CardMedia
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
    borderRadius: '3px'
  },
  avatar: {
    backgroundColor: deepPurple['A200'],
    color: theme.palette.secondary.contrastText
  },
  button: {
    display: 'flex',
    margin: '3em auto',
    width: '15em',
    fontFamily: "Maison Neue Demi",
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    },
    color: deepPurple[600],
    backgroundColor: theme.palette.common.white,
    borderColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[50],
    }
  },
  subtitle: {
    color: deepPurple['A200']
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      maxWidth: '450px',
      margin: 'auto'
    }
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
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box display="flex" className={classes.item}>
                <Avatar className={classes.avatar}>
                  <HomeIcon/>
                </Avatar>
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
              xs={12}
              md={4}
            >
              <Box display="flex" className={classes.item}>
                <Avatar className={classes.avatar}>
                  <BusinessIcon />
                </Avatar>
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
              xs={12}
              md={4}
            >
              <Box display="flex" className={classes.item}>
                <Avatar className={classes.avatar}>
                  <LocalShippingIcon/>
                </Avatar>
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
        <Button
          variant="outlined"
          component="a"
          href="#"
          className={classes.button}
        >
          Book Us Now
        </Button>
      </Container>
    </div>
  );
}

Local.propTypes = {
  className: PropTypes.string
};

export default Local;
