import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography } from "@material-ui/core";
import HeroBackground from "../../components/HeroBackground";
import CalculatorDialog from "./CalculatorDialog";
// import MovingCalculator from "src/components/MovingCalculator";
import background from "src/assets/img/home.jpg";
import TypedText from "src/components/TypedText";
import { Helmet } from "react-helmet";
// import loadable from "@loadable/component";

// const MovingCalculator = loadable(() =>
//   import("src/components/MovingCalculator")
// );

const MovingCalculator = lazy(() => import("src/components/MovingCalculator"));

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
    position: "relative",
    top: theme.spacing(4),
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
    <div>
      <Helmet>
        <link rel="preload" as="image" href={background} />
      </Helmet>
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
              <Typography className={clsx(classes.textWhite, classes.title)}>
                Insight Moving
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {isMd ? (
                <div className={classes.caluclatorContainer}>
                  <Suspense fallback="loading...">
                    <MovingCalculator showX={false} />
                  </Suspense>
                </div>
              ) : (
                <CalculatorDialog />
              )}
            </Grid>
          </Grid>
        </div>
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
