import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  Box,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    background: theme.palette.background.level2,
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
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
    <div {...rest} className={classes.root}>
      <Grid className={classes.root} container spacing={2}>
        {/* <Grid item>
          <List>
            <ListItem  className={classes.logoContainerItem}>
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
            </ListItem> 
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
        </Grid> */}

        <Box display="inline-flex">
          <Typography variant="body2">
            © InsigntMoving {new Date().getFullYear()}, Make moving chill.
          </Typography>
        </Box>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            style={{ fontSize: 12, textAlign: "center" }}
            // color="textSecondary"
          >
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
