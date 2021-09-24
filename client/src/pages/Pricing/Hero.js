import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import HeroBackground from "../../components/HeroBackground";
import background from "src/assets/img/pricing.jpg";

const useStyles = makeStyles(() => ({
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroBackground backgroundImg={background}>
        <Typography
          variant="h3"
          className={clsx(classes.textWhite, classes.title)}
        >
          Pricing
        </Typography>
      </HeroBackground>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
