import React from "react";
import CustomRouterLink from "src/components/CustomRouterLink";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
  colors,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "react-feather";
import Account from "./Account";
import Menu from "src/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 54,
    color: "rgba(0,0,0,.54)",
    // borderBottom: `1px solid ${colors.grey[200]}`,
    boxShadow: "none",
    backgroundColor: "#fff",
  },
  toolbar: {
    padding: theme.spacing(0, 1),
    minHeight: 54,
    display: "flex",
    justifyContent: "space-between",
  },
}));

function TopBar({ onMobileNavOpen, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} {...rest}>
      <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={onMobileNavOpen}
            >
              <SvgIcon fontSize="small">
                <Menu />
              </SvgIcon>
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Typography
              variant="body2"
              color="textSecondary"
              component={CustomRouterLink}
              to="/"
            >
              Company Name
            </Typography>
          </Hidden>
          <Box ml={2} flexGrow={1} />
          <Box p={1.5}>
            <Account />
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}

TopBar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
