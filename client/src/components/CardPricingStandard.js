import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, ListItem, List, Grid } from "@material-ui/core";
import CardBase from "./CardBase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  featureCheck: {
    marginRight: theme.spacing(1),
  },
  featrueAlign: {
    alignItems: "unset",
  },
}));

/**
 * Component to display the job card
 *
 * @param {Object} props
 */
const CardPricingStandard = (props) => {
  const {
    title,
    subtitle,
    priceComponent,
    featureCheckComponent,
    features,
    cta,
    disclaimer,
    className,
    titleProps,
    subtitleProps,
    disclaimerProps,
    featureTitleProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <CardBase
      className={clsx("card-pricing-standard", classes.root, className)}
      align="left"
      {...rest}
    >
      <Grid container className={"card-pricing-standard__wrapper"}>
        <Grid item xs={12} className="card-pricing-standard__headline">
          <Typography
            variant="h6"
            gutterBottom
            className="card-pricing-standard__title"
            {...titleProps}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className="card-pricing-standard__subtitle"
              {...subtitleProps}
            >
              {subtitle}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} className="card-pricing-standard__divider-container">
          {/* <Divider className="card-pricing-standard__divider" /> */}
        </Grid>
        <Grid item xs={12} className="card-pricing-standard__content">
          {priceComponent}
        </Grid>
        {features && (
          <Grid item xs={12} className="card-pricing-standard__feature-wrapper">
            <List className="card-pricing-standard__feature-list">
              {features.map((item, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  className={classes.featrueAlign}
                >
                  {featureCheckComponent && (
                    <div
                      className={clsx(
                        "card-pricing-standard__feature-check",
                        classes.featureCheck
                      )}
                    >
                      {featureCheckComponent}
                    </div>
                  )}
                  <Typography
                    variant="body2"
                    noWrap
                    className="card-pricing-standard__feature-title"
                    {...featureTitleProps}
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          className="card-pricing-standard__cta-wrapper"
          style={{ marginTop: 30, textAlign: "end" }}
        >
          {cta}
        </Grid>
        {disclaimer && (
          <Grid
            item
            xs={12}
            className="card-pricing-standard__disclaimer-wrapper"
          >
            <Typography
              style={{ marginTop: 8 }}
              variant="caption"
              component="p"
              align="center"
              className="card-pricing-standard__disclaimer-title"
              {...disclaimerProps}
            >
              {disclaimer}
            </Typography>
          </Grid>
        )}
      </Grid>
    </CardBase>
  );
};

CardPricingStandard.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  disclaimerProps: {},
  featureTitleProps: {},
};

CardPricingStandard.propTypes = {
  /**
   *  External classes
   */
  className: PropTypes.string,
  /**
   * Title of the pricing card
   */
  title: PropTypes.string.isRequired,
  /**
   *  Subtitle of the pricing card
   */
  subtitle: PropTypes.string,
  /**
   * The pricing component of the pricing card
   */
  priceComponent: PropTypes.node.isRequired,
  /**
   * The features check component of the pricing card
   */
  featureCheckComponent: PropTypes.node,
  /**
   * Features array of the pricing card
   */
  features: PropTypes.array,
  /**
   *  CTA button of the pricing card
   */
  cta: PropTypes.node.isRequired,
  /**
   * Diclaimer of the pricing card
   */
  disclaimer: PropTypes.string,
  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: PropTypes.object,
  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: PropTypes.object,
  /**
   * Additional props to pass to the disclaimer Typography component
   */
  disclaimerProps: PropTypes.object,
  /**
   * Additional props to pass to the feature title Typography component
   */
  featureTitleProps: PropTypes.object,
};

export default CardPricingStandard;
