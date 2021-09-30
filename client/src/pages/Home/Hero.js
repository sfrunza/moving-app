import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography } from "@material-ui/core";
import HeroBackground from "../../components/HeroBackground";
import CalculatorDialog from "./CalculatorDialog";
import MovingCalculator from "src/components/MovingCalculator";
import background from "src/assets/img/home.webp";
import TypedText from "src/components/TypedText";

const useStyles = makeStyles((theme) => ({
  textWhite: {
    color: "white",
  },
  title: {
    fontWeight: "bold",

    [theme.breakpoints.up("md")]: {
      minWidth: 600,
    },
  },
  section: {
    padding: theme.spacing(10, 2),
    maxWidth: 1200,
  },
  caluclatorContainer: {
    backgroundColor: theme.palette.background.paper,
    width: "fit-content",
    margin: "auto",
    borderRadius: theme.spacing(2),
  },
  typed: {
    position: "absolute",
    bottom: 0,
    left: 8,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
}));

const Hero = (props) => {
  // const { className } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    // <div className={className} {...rest}>
    <HeroBackground backgroundImg={background}>
      <TypedText
        component="span"
        variant="subtitle1"
        className={classes.typed}
        typedProps={{
          strings: ["A Badass Moving Company in Boston"],
          typeSpeed: 70,
          loop: true,
        }}
      />
      <div className={classes.section}>
        <Grid container spacing={isMd ? 4 : 2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              className={clsx(classes.textWhite, classes.title)}
            >
              Insight Moving
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {isMd ? (
              <div className={classes.caluclatorContainer}>
                <MovingCalculator showX={false} />
              </div>
            ) : (
              <CalculatorDialog />
            )}
          </Grid>
        </Grid>
      </div>
    </HeroBackground>
    // </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
