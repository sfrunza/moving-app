import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import HeroBackground from "../../components/HeroBackground";
import background from "src/assets/img/services123.jpg";

const useStyles = makeStyles(() => ({
  title: {
    color: "white",
    fontWeight: "bold",
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroBackground backgroundImg={background}>
        <Typography variant="h3" className={classes.title}>
          Moving Services
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
