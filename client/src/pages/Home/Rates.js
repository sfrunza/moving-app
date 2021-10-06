import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery, Box, Typography } from "@material-ui/core";
import LearnMoreLink from "src/components/LearnMoreLink";
import SectionHeader from "src/components/SectionHeader";
import SyncAltIcon from "@material-ui/icons/SyncAlt";

const useStyles = makeStyles((theme) => ({
  root: {},
  rates: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    margin: "2em auto",
    width: "100%",
  },
  flatRates: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(0),
    margin: "0px auto",
  },
  ratesSpan: {
    fontSize: 40,
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: 45,
    },
  },
  icon: {
    position: "relative",
    top: "6px",
    margin: "0px 1em",
  },
  gridCard: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    display: "block",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
    // boxShadow: theme.shadows[2],
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    // transition: "transform 250ms ease, box-shadow 250ms ease",
    // "&:hover": {
    //   transform: "translateY(-0.25rem)",
    //   boxShadow: theme.shadows[2],
    // },
  },
  title: {
    fontWeight: 700,
  },
}));

const Rates = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader title="Our Pricing" border />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container className={classes.gridCard}>
            <SectionHeader
              title="Local Hourly Rates"
              titleVariant="h6"
              titleProps={{
                className: classes.title,
              }}
              subtitle="Within Boston & surrounding 125 miles."
              subtitleVariant="body2"
              subtitleColor="textSecondary"
              ctaGroup={[
                <LearnMoreLink
                  title="View all Pricing Plans"
                  to="/pricing"
                  variant="body2"
                  color="primary"
                />,
              ]}
              disableGutter
            />
            <Box className={classes.rates}>
              <Typography color="textPrimary" variant="button">
                2 MOVERS & TRUCK
              </Typography>
              <Typography color="textPrimary">
                <span className={classes.ratesSpan}>$120</span>/ hour
              </Typography>
            </Box>
            <Box className={classes.rates}>
              <Typography color="textPrimary" variant="button">
                3 MOVERS & TRUCK
              </Typography>
              <Typography color="textPrimary">
                <span className={classes.ratesSpan}>$160</span>/ hour
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container className={classes.gridCard}>
            <SectionHeader
              title="Flat Rate Moving"
              titleVariant="h6"
              titleProps={{
                className: classes.title,
              }}
              subtitle="House Flat Rate Moving is available upon request."
              subtitleVariant="body2"
              subtitleColor="textSecondary"
              ctaGroup={[
                <LearnMoreLink
                  title="View Flat Rates"
                  to="/pricing"
                  variant="body2"
                  color="primary"
                />,
              ]}
              disableGutter
            />
            <Box className={classes.flatRates}>
              <Typography
                style={{ margin: "1em 0em 1em 0em" }}
                align="center"
                color="textPrimary"
                variant="button"
              >
                NEW YORK <SyncAltIcon className={classes.icon} />
                BOSTON
              </Typography>
              <Typography align="center" color="textPrimary">
                from <span className={classes.ratesSpan}>$950</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Rates.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Rates;
