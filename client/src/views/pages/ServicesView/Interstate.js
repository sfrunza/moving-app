import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Box, } from '@material-ui/core';
import { Image, LearnMoreLink } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { Alert } from '@material-ui/lab';
import img from 'src/assets/img/inter-img-min.png'

const useStyles = makeStyles(theme => ({
  root: {
    // '& > div:nth-child(1) > div':{
    //   maxWidth: '80%',
    //   margin: 'auto',
    // }
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    maxWidth: 400,
  },
  benefit: {
    display: 'flex',
    width: '100%',
    '& div': {
      backgroundColor: 'transparent',
    }
  },
}));

const Interstate = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2} data-aos="fade-up">
        <SectionHeader
          title={
            <span>
              <span className="text-highlighted">Interstate{' '}</span>
                Moving
              <br />
            </span>
          }
          subtitle="Flat rate moving. Gas, mileage, tolls and insurance are included. No hidden fees. Same or next day delivery on distances up to 1,500 miles."
          align="center"
          disableGutter
          subtitleProps={{
            variant: 'body1',
            color: 'textSecondary',
          }}
        />
        <Grid
          item
          container
          justify={isMd ? 'flex-start' : 'center'}
          xs={12}
          md={6}
        >
          <Image
            src={img}

            className={classes.image}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6} display='felx' justify='space-between'>
          <SectionHeader
            title={
              <span className="text-highlighted">Moving from / to Boston</span>
            }
            subtitle="We offer licensed, insured, full-service interstate moves from Boston, which means the best long distance movers will come to your place, package all of your items correctly, secured and safe, load them into one of our moving trucks, deliver them to your new home, unload them, unpack them and arrange them in places."
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
            titleProps={{
              variant: 'h4',
            }}
            data-aos="fade-up"
            align="left"
            ctaGroup={[<LearnMoreLink title="View Flat Rates" to="/pricing" />]}
          />
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
        </Grid>
      </Grid>
    </div>
  );
};

Interstate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Interstate;
