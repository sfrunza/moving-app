import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { Image, Icon } from 'src/components/atoms';
import { SectionHeader, TypedText } from 'src/components/molecules';
import { Section, CardPricingStandard } from 'src/components/organisms';
import { Parallax, Background } from 'react-parallax';
import backgroundImage from 'src/assets/img/pricing-background-min.jpg'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  pagePaddingTop: {
    // paddingTop: theme.spacing(3),
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: theme.spacing(5),
    // },
  },
  sectionContainer: {
    // backgroundColor: theme.palette.primary.main,
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: 'transparent',
  },
  toggleButton: {
    background: 'transparent',
    border: '1px solid white',
    padding: theme.spacing(1, 5),
  },
  toggleButtonActive: {
    backgroundColor: 'white !important',
  },
  toggleTitle: {
    textTransform: 'capitalize',
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
  pricingContainer: {
    position: 'relative',
    bottom: '5em',
  },
  shapeContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    background: theme.palette.primary.main,
    height: 171,
  },
  shapeImage: {
    objectFit: 'cover',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  cardPricing: {
    '& .countup-number__count-wrapper': {
      textAlign: 'left',
      marginBottom: 0,
      fontWeight: 'bold',
    },
  },
  headerSection: {
    backgroundColor: '#00000080',
  },
  fullHeight: {
    width: '100%',
    height: 'auto',
    minHeight: '73vh',
    padding: '1rem 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    // height: '75vh !important',
    width: '100% !important',
    // top: '20% !important',
    minWidth: '1000px !important',
    minHeight: '80vh !important',
  },
  typed: {
    fontWeight: 'bold',
    color: 'orange'
  },
  button: {
    borderRadius: '24px',
  }
}));

const Header = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = React.useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Parallax
            bgImage={backgroundImage}
            bgImageAlt="bg"
            strength={300}
            bgClassName={classes.bgImage}
        >
        <div className={clsx(classes.fullHeight, classes.headerSection)}>
          <Section>
          <div className={classes.sectionContainer}>
            <Section narrow className={classes.pagePaddingTop}>
              <SectionHeader
                title={
                  <>
                    <span className={classes.textWhite}>
                      Pricing
                    </span>
                    <br />
                    <TypedText
                      component="span"
                      variant="h1"
                      className={classes.typed}
                      typedProps={{
                        strings: [
                          'No Hidden Fees',
                          'No Extra Charges',
                        ],
                        typeSpeed: 100,
                        loop: true,
                      }}

                    />
                  </>
                }
                titleProps={{
                  variant: 'h1',
                }}
                data-aos="fade-up"
              />
            </Section>
          </div>
          </Section>
        </div>
      </Parallax>

      <div className={classes.pricingContainer}>
        <div className={classes.pricingWrapper}>
          <Section className={classes.sectionNoPaddingTop}>
            <Grid container spacing={isMd ? 4 : 2}>
              {data.map((item, index) => (
                <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                  <CardPricingStandard
                    variant="outlined"
                    withShadow={item.isHighlighted ? true : false}
                    title={item.title}
                    liftUp
                    subtitle={item.subtitle}
                    priceComponent={
                      <Typography variant="h1" color="textPrimary">
                        $
                        {pricingOption === 'annual'
                          ? item.annual
                          : item.monthly}/<span style={{fontSize: '24px'}}>hr</span>
                      </Typography>
                    }
                    features={item.features}
                    featureCheckComponent={
                      <Icon
                        fontIconClass="far fa-check-circle"
                        fontIconColor={colors.green[500]}
                      />
                    }
                    cta={
                      <Button
                        variant={item.isHighlighted ? 'contained' : 'outlined'}
                        fullWidth
                        color="secondary"
                        className={classes.button}
                        size={isMd ? 'large' : 'medium'}
                        component={RouterLink}
                        to='/book'
                      >
                        Book Now
                      </Button>
                    }
                    disclaimer={item.disclaimer}
                    className={classes.cardPricing}
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Header;
