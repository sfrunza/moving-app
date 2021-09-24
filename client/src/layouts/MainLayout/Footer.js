import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  Link,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
// import logoWhite from 'src/assets/img/logowhite.png'

// import { Image } from "src/components/atoms";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    background: theme.palette.background.footer,
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: theme.spacing(4, 0),
    color: "#fff",

    minWidth: "370px",
    margin: "auto",
  },
  link: {
    cursor: "pointer",
    color: "#fff",
  },
  content: {
    color: "#fff",
  },

  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 60,
    padding: "3px 3px",
  },
  socialContainer: {
    justifyContent: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid className={classes.root}>
        <Grid item>
          <List>
            {/* <ListItem  className={classes.logoContainerItem}>
              <div className={classes.logoContainer}>
                <Link to="/" component={RouterLink}>
                  <Image
                    className={classes.logoImage}
                    src={logoWhite}
                    alt="insightlogo"
                    lazy={false}
                  />
                </Link>
              </div>
            </ListItem> */}
            <ListItem className={classes.socialContainer}>
              <IconButton className={classes.socialIcon}>
                <FacebookIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <InstagramIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <TwitterIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <PinterestIcon className={classes.icon} />
              </IconButton>
            </ListItem>
          </List>
        </Grid>

        <Grid item className={classes.wrapper}>
          <Typography className={classes.content}>
            Make moving chill.
          </Typography>
          <Typography className={classes.content}>
            © {new Date().getFullYear()}
          </Typography>
          <Typography className={classes.content}>
            <Link to="/privacy" component={RouterLink} className={classes.link}>
              Privacy
            </Link>
          </Typography>
          <Typography className={classes.content}>
            <Link to="/terms" component={RouterLink} className={classes.link}>
              Terms
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
};

export default Footer;
