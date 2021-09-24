import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import TypedText from "src/components/TypedText";
import { Parallax } from "react-parallax";
import ChevronDown from "src/icons/ChevronDown";

const useStyles = makeStyles((theme) => ({
  bgImage: {
    // marginTop: 0,
    // width: "100% !important",
    // minWidth: "1000px !important",
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
    // background: "linear-gradient(to right, #00361a, #000000)",
    // position: "relative",
    // opacity: 0.9,
  },
  textWhite: {
    color: "white",
  },
  typed: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  title: {
    letterSpacing: 1,
    lineHeight: "64px",
  },
  subtitle: {
    letterSpacing: 2,
  },
  scrollIcon: {
    [theme.breakpoints.down("xs")]: {
      top: 170,
    },
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

const Parallaxx = (props) => {
  const { backgroundImage, title, subtitle, typedText, buttons, scrollId } =
    props;

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
      bgImage={backgroundImage}
      bgImageAlt="bg"
      strength={200}
      bgClassName={classes.bgImage}
    >
      <div className={classes.fullHeight}>
        <SectionHeader
          title={
            <>
              <span className={classes.textWhite}>{title}</span>
              <br />
              <TypedText
                component="span"
                variant="h4"
                className={classes.typed}
                typedProps={{
                  strings: typedText,
                  typeSpeed: 150,
                  loop: true,
                }}
              />
            </>
          }
          subtitle={<span className={classes.textWhite}>{subtitle}</span>}
          align="center"
          titleProps={{
            variant: "h3",
            className: classes.title,
          }}
          subtitleProps={{
            variant: "h6",
            className: classes.subtitle,
          }}
          ctaGroup={buttons}
          data-aos="fade-up"
          disableGutter
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
      <div style={{ position: "absolute", bottom: -32 }}>
        <img
          src="http://dorsin.react.themesbrand.com/assets/images/bg-pattern.png"
          alt="Asdasd"
          style={{ maxWidth: "100%" }}
        />
        /
      </div>
    </Parallax>
  );
};

Parallaxx.propTypes = {
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

export default Parallaxx;
