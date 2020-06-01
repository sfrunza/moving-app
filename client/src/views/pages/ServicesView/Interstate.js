import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import inter from 'src/assets/img/inter2.jpg'
import road from 'src/assets/img/road.png'
import { deepPurple, indigo } from '@material-ui/core/colors'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 128,
    paddingTop: 128,
    boxShadow: 'none'
  },
  backButton: {
    marginLeft: theme.spacing(2)
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    },
    boxShadow: 'none'
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
    backgroundColor: theme.palette.background.dark,
  },
  icon: {
    backgroundColor: colors.blue[400],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64
  },
  iconPlane: {
    width: '2em',
    height: '2em',
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  benefit: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '3em 0px'
  },
  iconBox: {
    width: '100%'
  },
  subtitle: {
    marginBottom: '3em',
    color: deepPurple['A200']
  },
  link: {
    color: indigo['A400'],
    '& svg': {
      width: '0.8em'
    },
    display: 'flex',
    alignItems: 'center'
  }
}));

function Interstate({ className, ...rest }) {
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
          Interstate Moving
        </Typography>
        <Typography
          component="p"
          variant="overline"
          align="center"
          className={classes.subtitle}
        >
          Flat Rate Moving. Gas, mileage, tolls, insurance are included. No hidden fees. Same or Next Day moving services on distance up to 1,500 miles.
        </Typography>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <img src={road} className={classes.iconBox} alt=""/>
            </Avatar>
            <Typography
              variant="h2"
              color="textPrimary"
            >
              Moving from / to Boston
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{marginTop: '3em'}}
            >
              We offer licensed, insured, full-service interstate moves from Boston, which means the best long distance movers will come to your place, package all of your items correctly, secured and safe, load them into one of our moving trucks, deliver them to your new home, unload them, unpack them and arrange them in places.
            </Typography>
            <Box className={classes.benefit}>
              <Alert
                severity="success"
              >
                <div>
                  Licensed
                </div>
              </Alert>
              <Alert
                severity="success"
              >
                <div>
                  Insured
                </div>
              </Alert>
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/pricing#flat-rates"
              variant="body2"
              className={classes.link}
            >
              View Flat Rates <ChevronRightIcon />
            </Link>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={inter}
            title="Cover"
          >
            <Typography
              color="inherit"
              variant="subtitle1"
            >
              Hella narvwhal Cosby sweater McSweeney&apos;s,
              salvia kitsch before they sold out High Life.
            </Typography>
            <Box
              alignItems="center"
              display="flex"
              mt={3}
            >
              <Avatar
                alt="Person"
                src="/static/images/avatars/avatar_2.png"
              />
              <Box ml={3}>
                <Typography
                  color="inherit"
                  variant="body1"
                >
                  Ekaterina Tankova
                </Typography>
                <Typography
                  color="inherit"
                  variant="body2"
                >
                  Manager at inVision
                </Typography>
              </Box>
            </Box>
          </CardMedia>
        </Card>
      </Container>
    </div>
  );
}

Interstate.propTypes = {
  className: PropTypes.string
};

export default Interstate;
