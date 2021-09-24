import React from "react";
import {
  Divider,
  makeStyles,
  Button,
  Tabs,
  Tab,
  withStyles,
} from "@material-ui/core";
import { PrevIcon } from "src/components/dayTimePicker/Icons";
import { useDispatch } from "src/store";
import { handlePrev } from "src/slices/booking";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: theme.spacing(5),
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  },
  listItem: {
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      padding: theme.spacing(0.5),
    },
  },
  listItemSelected: {
    backgroundColor: "transparent !important",
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  listItemText: {
    textTransform: "capitalize",
    "&:hover": {
      cursor: "pointer",
    },
  },
  flexGrow: {
    flexGrow: 0.5,
  },
  toolbar: {
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  tabsScroller: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      display: "flex",
    },
  },
  tabsIndicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    marginRight: theme.spacing(1),
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.text.primary,
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const ServicesHeader = ({ onServiceChnage, services, setService }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allCategories = [
    "all",
    ...new Set(services.map((item) => item.category)),
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Button
        variant="text"
        onClick={() => {
          setService("all");
          dispatch(handlePrev());
        }}
        startIcon={<PrevIcon fontSize="large" />}
        style={{
          marginBottom: 16,
          justifyContent: "flex-start",
          width: "fit-content",
        }}
      >
        Technicians
      </Button>
      <Tabs
        value={value}
        classes={{
          scroller: classes.tabsScroller,
          indicator: classes.tabsIndicator,
        }}
        TabIndicatorProps={{ children: <span /> }}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
      >
        {/* <StyledTab label={"all"} onClick={() => onServiceChnage("all")} /> */}
        {allCategories.map((cat, i) => {
          return (
            <StyledTab
              key={i}
              label={cat}
              onClick={() => onServiceChnage(cat)}
            />
          );
        })}
      </Tabs>
      {/* <List className={classes.navigationContainer}>
        <ListItem
          classes={{
            root: classes.listItem,
            selected: classes.listItemSelected,
          }}
          onClick={() => onServiceChnage("all")}
          selected={"all" === service ? true : false}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            className={classes.listItemText}
          >
            All
          </Typography>
        </ListItem>
        {allCategories.map((cat, i) => {
          return (
            <ListItem
              classes={{
                root: classes.listItem,
                selected: classes.listItemSelected,
              }}
              key={i}
              onClick={() => onServiceChnage(cat)}
              selected={cat === service ? true : false}
            >
              <Typography
                variant="body2"
                color="textPrimary"
                className={classes.listItemText}
              >
                {cat}
              </Typography>
            </ListItem>
          );
        })}
      </List> */}
      <Divider style={{ width: "100%", marginTop: 20 }} />
    </div>
  );
};

export default ServicesHeader;
