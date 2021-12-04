import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MovingCalculator from "src/components/MovingCalculator";
import road from "src/assets/img/road4.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.level2,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${road})`,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calcBox: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    width: "fit-content",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <section className={classes.section}>
        <div className={classes.calcBox}>
          <MovingCalculator showX={false} />
        </div>
      </section>
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
