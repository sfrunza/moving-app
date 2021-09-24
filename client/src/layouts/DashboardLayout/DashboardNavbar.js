import PropTypes from "prop-types";
import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
// import AccountPopover from "./AccountPopover";
import Auth from "src/components/Auth";
import { useHistory } from "react-router-dom";
import CustomRouterLink from "src/components/CustomRouterLink";
import ThemeToggler from "src/components/ThemeToggler";
import Menu from "src/icons/Menu";
// import ContactsPopover from './ContactsPopover';
// import ContentSearch from './ContentSearch';
// import LanguagePopover from './LanguagePopover';
// import Logo from '../Logo';
// import NotificationsPopover from './NotificationsPopover';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.navbar,
  boxShadow: "none",
  color: theme.palette.primary.contrastText,
  zIndex: theme.zIndex.drawer + 100,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    height: 64,
    justifyContent: "center",
    background: theme.palette.background.default,
    backdropFilter: "saturate(180%) blur(20px)",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(0),
  },
  toolbar: {
    width: "100%",
    // maxWidth: 1300,
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  listItem: {
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  listItemText: {
    flex: "0 0 auto",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  listItemLogin: {
    marginRight: theme.spacing(1),
  },
}));

const DashboardNavbar = (props) => {
  const { onSidebarMobileOpen, ...other } = props;
  const history = useHistory();
  const classes = useStyles();

  return (
    <DashboardNavbarRoot {...other} className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        <List className={classes.navigationContainer}>
          <Hidden lgUp>
            <ListItem className={classes.listItem}>
              <IconButton
                className={classes.iconButton}
                onClick={onSidebarMobileOpen}
                aria-label="Menu"
              >
                <Menu className={classes.listItemText} />
              </IconButton>
            </ListItem>
          </Hidden>
          <Hidden lgUp>
            <div className={classes.flexGrow} />
          </Hidden>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component={CustomRouterLink}
              to="/"
            >
              Company Logo
            </Typography>
          </ListItem>
          <div className={classes.flexGrow} />
          <Hidden smDown>
            <ListItem className={classes.listItem}>
              <ThemeToggler />
            </ListItem>
          </Hidden>
          <ListItem className={classes.listItem}>
            <Auth history={history} />
          </ListItem>
        </List>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

export default DashboardNavbar;
