import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ChevronRight from "src/icons/ChevronRight";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  icon: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  arrowIcon: {
    width: 18,
    height: 18,
    position: "relative",
    top: 1,
  },
}));

/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */
const LearnMoreLink = (props) => {
  const {
    color,
    component,
    variant,
    title,
    href,
    className,
    typographyProps,
    ...rest
  } = props;

  const classes = useStyles();

  const children = (
    <>
      <Typography
        component="span"
        className={clsx("learn-more-link__typography", classes.title)}
        variant={variant}
        color={color || "secondary"}
        {...typographyProps}
      >
        {title}
      </Typography>
      <ChevronRight
        className={classes.arrowIcon}
        color={color || "secondary"}
      />
    </>
  );

  if (component === "Link") {
    return (
      <Link
        to={href}
        className={clsx("learn-more-link", classes.root, className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={clsx("learn-more-link", classes.root, className)}
      {...rest}
    >
      {children}
    </a>
  );
};

LearnMoreLink.defaultProps = {
  variant: "h6",
  href: "#",
  typographyProps: {},
  component: "Link",
};

LearnMoreLink.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The component to load as a main DOM
   */
  component: PropTypes.oneOf(["Link", "a"]),
  /**
   * Title of the link
   */
  title: PropTypes.string.isRequired,
  /**
   * Variant of the link
   */
  variant: PropTypes.oneOf(["h6", "subtitle1", "subtitle2", "body1", "body2"]),
  /**
   * Href of the link
   */
  href: PropTypes.string,
  /**
   * Color of the link
   */
  color: PropTypes.string,
  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: PropTypes.object,
};

export default LearnMoreLink;
