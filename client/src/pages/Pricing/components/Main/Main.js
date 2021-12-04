import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography, Button } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import CardPricingStandard from "src/components/CardPricingStandard";
import Section from "src/components/Section";
import Check from "src/icons/CheckCircle";
import Hero from "../../Hero";
import CustomRouterLink from "src/components/CustomRouterLink";

const useStyles = makeStyles((theme) => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    paddingBottom: theme.spacing(4),
    marginTop: "-17rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "-15rem",
    },
  },
  textWhite: {
    color: theme.palette.primary.contrastText,
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: "transparent",
  },
  toggleButton: {
    background: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    padding: theme.spacing(0.5, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0.5, 2),
    },
  },
  toggleButtonActive: {
    backgroundColor: `${theme.palette.primary.contrastText} !important`,
  },
  toggleTitle: {
    textTransform: "capitalize",
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
  pricingContainer: {
    position: "relative",
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
    [theme.breakpoints.up("md")]: {
      maxWidth: 1100,
    },
  },
  cardPricing: {
    "& .countup-number__count-wrapper": {
      textAlign: "left",
      marginBottom: 0,
      fontWeight: "bold",
    },
  },
}));

const Main = (props) => {
  const { flat, local, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = React.useState("local");

  const handleClick = (event, newPricingOption) => {
    if (newPricingOption) {
      setPricingOption(newPricingOption);
    } else return null;
  };

  return (
    <div className={className} {...rest}>
      <Hero />
      <div className={classes.sectionContainer}>
        <Section className={classes.pagePaddingTop}>
          <>
            <div className={classes.toggleContainer} data-aos="fade-up">
              <ToggleButtonGroup
                value={pricingOption}
                exclusive
                onChange={handleClick}
                className={classes.toggleButtonGroup}
                size="small"
              >
                <ToggleButton
                  value="local"
                  className={clsx(
                    classes.toggleButton,
                    pricingOption === "local" ? classes.toggleButtonActive : {}
                  )}
                >
                  <Typography
                    variant="subtitle1"
                    className={clsx(
                      classes.fontWeightBold,
                      classes.textWhite,
                      classes.toggleTitle,
                      pricingOption === "local" ? classes.toggleTitleActive : {}
                    )}
                  >
                    Local moving
                  </Typography>
                </ToggleButton>
                <ToggleButton
                  value="flat"
                  className={clsx(
                    classes.toggleButton,
                    pricingOption === "flat" ? classes.toggleButtonActive : {}
                  )}
                >
                  <Typography
                    variant="subtitle1"
                    className={clsx(
                      classes.fontWeightBold,
                      classes.textWhite,
                      classes.toggleTitle,
                      pricingOption === "flat" ? classes.toggleTitleActive : {}
                    )}
                  >
                    long distance
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </>
        </Section>
      </div>
      <div className={classes.pricingContainer}>
        {pricingOption === "local" ? (
          <div>
            <Section className={classes.sectionNoPaddingTop}>
              <Grid container spacing={isMd ? 4 : 2}>
                {local.map((item, index) => (
                  <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                    <CardPricingStandard
                      variant="outlined"
                      withShadow={item.isHighlighted ? true : false}
                      title={item.title}
                      liftUp
                      subtitle={item.subtitle}
                      priceComponent={
                        <Typography
                          variant="h3"
                          color="textPrimary"
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            marginTop: 24,
                          }}
                        >
                          ${item.hourly}
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            style={{ marginLeft: 8 }}
                          >
                            per hour
                          </Typography>
                        </Typography>
                      }
                      features={item.features}
                      featureCheckComponent={<Check color="primary" />}
                      cta={
                        <Button
                          color="primary"
                          variant={
                            item.isHighlighted ? "contained" : "outlined"
                          }
                          fullWidth
                          size="large"
                          disableElevation
                          component={CustomRouterLink}
                          to="/book"
                        >
                          Book now
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
        ) : (
          <div>
            <Section className={classes.sectionNoPaddingTop}>
              <Grid container spacing={isMd ? 4 : 2}>
                {flat.map((item, index) => (
                  <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                    <CardPricingStandard
                      variant="outlined"
                      withShadow={item.isHighlighted ? true : false}
                      title={item.title}
                      liftUp
                      subtitle={item.subtitle}
                      priceComponent={
                        <Typography
                          variant="h3"
                          color="textPrimary"
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            marginTop: 24,
                          }}
                        >
                          ${item.hourly}
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            style={{ marginLeft: 8 }}
                          >
                            studio / 1 bedroom
                          </Typography>
                        </Typography>
                      }
                      features={item.features}
                      featureCheckComponent={<Check color="primary" />}
                      cta={
                        <Button
                          color="primary"
                          disableElevation
                          variant={
                            item.isHighlighted ? "contained" : "outlined"
                          }
                          fullWidth
                          size="large"
                        >
                          Book now
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
        )}
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  flat: PropTypes.array.isRequired,
  local: PropTypes.array.isRequired,
};

export default Main;
