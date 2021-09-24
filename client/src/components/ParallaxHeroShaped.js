import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import TypedText from "src/components/TypedText";
import { Parallax } from "react-parallax";
import ChevronDown from "src/icons/ChevronDown";
import HeroShaped from "./HeroBackground";

const useStyles = makeStyles((theme) => ({
  bgImage: {
    marginTop: 0,
    width: "100% !important",
    minWidth: "1000px !important",
    // minHeight: "100vh !important",
    // height: "100% !important",
  },
  fullHeight: {
    width: "100%",
    height: "fit-content",
    minHeight: "80vh",
    padding: "1rem 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000b3",
    // paddingTop: "10em",
    // backgroundColor: "purple",
  },
  textWhite: {
    color: "white",
  },
  typed: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  title: {
    letterSpacing: 2,
  },
  subtitle: {
    letterSpacing: 2,
  },
  scrollIcon: {
    color: theme.palette.secondary.contrastText,
    position: "relative",
    top: 200,
    animation: "$updown 2s ease infinite",
  },
  "@keyframes updown": {
    "0%": {
      transform: "translateY(-5%)",
    },

    "50%": {
      transform: " translateY(5%)",
    },

    "100%": {
      transform: "translateY(-5%)",
    },
  },
}));

const ParallaxHeroShaped = (props) => {
  const { backgroundImage, leftSide, rightSide } = props;

  const classes = useStyles();

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({
        left: 0,
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    });
  };

  return (
    <Parallax
      // bgImage={backgroundImage}
      bgImageAlt="bg"
      strength={0}
      bgClassName={classes.bgImage}
    >
      <div className={classes.fullHeight}>
        <HeroShaped
          leftSide={
            <SectionHeader
              title={
                <span>
                  Don't listen to what they say{" "}
                  <Typography
                    color="secondary"
                    variant="inherit"
                    component="span"
                  >
                    go and see
                  </Typography>
                </span>
              }
              subtitle="Travelling with our app is easy. Join the biggest community of travellers."
              ctaGroup={[
                <img
                  src="https://assets.maccarianagency.com/the-front/mobile-addons/app-store.png"
                  alt="Get in on App Store"
                  className={classes.appStore}
                  lazy={false}
                />,
                <img
                  src="https://assets.maccarianagency.com/the-front/mobile-addons/play-store.png"
                  alt="Get in on Play Market"
                  className={classes.googlePlayBtn}
                  lazy={false}
                />,
              ]}
              align="left"
              disableGutter
              data-aos="fade-up"
              titleVariant="h3"
            />
          }
          rightSide={
            <div className={classes.cover}>
              <img
                src="https://assets.maccarianagency.com/the-front/illustrations/city-driver.svg"
                alt="..."
                className={classes.coverImg}
                data-aos="fade-up"
                lazy={false}
              />
            </div>
          }
        />
        {scrollId && (
          <IconButton
            aria-label="delete"
            // color="inherit"
            className={classes.scrollIcon}
            onClick={() => scrollTo(scrollId)}
          >
            <ChevronDown />
          </IconButton>
        )}
      </div>
    </Parallax>
  );
};

ParallaxHeroShaped.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  scrollId: PropTypes.string,

  backgroundImage: PropTypes.string.isRequired,

  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  typedText: PropTypes.array,
  buttons: PropTypes.array,
};

export default ParallaxHeroShaped;
