import React from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import box from 'src/assets/img/box.png';
import packing from 'src/assets/img/PikPng.com_moving-png_2431322.png'

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.papper,
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
    padding: theme.spacing(8, 4, 3, 4)
  },
  icon: {
    backgroundColor: colors.orange[400],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    right: theme.spacing(3),
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
    backgroundSize: '100%',
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
    margin : '0.5em 0px 2em 0px'
  }
}));

function Packing({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          Full Packing Service
        </Typography>
        <Typography
          component="p"
          variant="overline"
          color="secondary"
          align="center"
          style={{marginBottom: '3em'}}
        >
          Let us make your move even easier with our full home packing services.
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={packing}
            title="Cover"
          >
          </CardMedia>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <img src={box} className={classes.iconBox} alt=""/>
            </Avatar>
            <Typography
              variant="h4"
              color="textPrimary"
            >
              RATES
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.subtitle}
            >
              Our packing rates are the same as our hourly rates for moving. We like to keep it simple and keep it consistent.
            </Typography>
            <Typography
              variant="h4"
              color="textPrimary"
            >
              PACKING MATERIALS
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.subtitle}
            >
              Our experienced movers will have all necessary packing materials to pack up everything - with the utmost care - from the attic to the basement.
            </Typography>
            <Typography
              variant="h4"
              color="textPrimary"
            >
              ESTIMATES
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.subtitle}
            >
            For all pack jobs we do require an onsite estimate so we can make sure we provide you with an accurate quote.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Packing;
