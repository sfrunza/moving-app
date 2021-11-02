import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, ListItem, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  startIcon: {
    marginRight: 16,
  },
  root: {
    "&:hover": {
      backgroundColor: "#f5f8ff",
    },
  },
}));

const NavItem = (props) => {
  const { active, icon, info, path, title } = props;
  const theme = useTheme();
  const classes = useStyles();
  // Leaf
  return (
    <ListItem
      disableGutters
      style={{
        display: "flex",
        paddingY: 0,
      }}
    >
      <Button
        component={path && RouterLink}
        startIcon={icon}
        style={{
          color: theme.palette.text.secondary,
          justifyContent: "flex-start",
          textAlign: "left",
          paddingLeft: 16,
          paddingRight: 8,
          paddingY: 12,
          textTransform: "none",
          ...(active && {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.level2,
            fontWeight: "bold",
            "& svg": {
              color: theme.palette.primary.main,
            },
          }),
        }}
        classes={{ startIcon: classes.startIcon, root: classes.root }}
        fullWidth
        variant="text"
        to={path}
      >
        <Box style={{ flexGrow: 1 }}>{title}</Box>
        {info}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  icon: PropTypes.node,
  info: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  active: false,
  open: false,
};

export default NavItem;
