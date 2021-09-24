import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 740,
    // maxWidth: "100%",
    margin: "auto",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    padding: theme.spacing(10, 2),
    [theme.breakpoints.up("md")]: {
      width: 1200,
      padding: theme.spacing(12, 2),
    },
  },
  fullWidth: {
    maxWidth: "100%",
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));

const Section = (props) => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    alternate,
    background,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div style={{ backgroundColor: `${background}` }}>
      <section
        className={clsx(
          "section",
          classes.root,
          fullWidth ? classes.fullWidth : {},
          narrow ? classes.narrow : {},
          disablePadding ? classes.disablePadding : {},
          alternate ? classes.alternate : {},
          className
        )}
        {...rest}
      >
        {children}
      </section>
    </div>
  );
};

Section.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  narrow: PropTypes.bool,
  /**
   * Should the section be full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Should the section render with no padding
   */
  disablePadding: PropTypes.bool,
};

export default Section;
