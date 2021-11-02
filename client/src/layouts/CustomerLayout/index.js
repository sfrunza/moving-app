import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Avatar, Typography, Box } from "@material-ui/core";
import NavBar from "./Navbar";
import TopBar from "./TopBar";
import { useDispatch, useSelector } from "src/store";
import { getCustomer } from "src/slices/customers";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.level2,
    width: "100%",
    minHeight: "100vh",
    // height: "100%",
  },
  wrapper: {
    display: "flex",
    background: "#fff",
    margin: "0 1rem",
    boxShadow: "rgb(140 152 164 / 13%) 0px 6px 24px 0px",
    borderRadius: theme.spacing(1),
    width: "100%",
    height: "fit-content",
    [theme.breakpoints.up("md")]: {
      margin: "0 0 1rem 1rem",
      marginLeft: "2rem",
      flex: "1 1 auto",
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
  },
  backgroundHeader: {
    background: "#6600ff",
    overflow: "hidden",
    height: "100%",
    margin: "auto",
  },
  section: {
    // width: "100%",
    height: "100%",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    marginTop: "0px",
    justifyContent: "flex-start",
    padding: theme.spacing(14, 2),
    maxWidth: 1200,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(16, 5),
    },
  },
  childrenSection: {
    maxWidth: 1200,
    margin: "auto",
    display: "flex",
    height: "100%",
    marginTop: "-60px",
    paddingBottom: "3rem",
  },
  avatar: {
    width: 70,
    height: 70,
    margin: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 6),
    },
  },
  header: {
    // display: "inline",
    // width: "auto",
    // [theme.breakpoints.up("sm")]: {
    //   minWidth: 300,
    // },
    // minWidth: 220,
  },
  textWhite: {
    color: "#fff",
  },
  title: {
    fontWeight: "bold",
  },
}));

function CustomerLayout({ children, history }) {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomer(1));
    // return () => {
    //   dispatch(cleanCustomer());
    // };
  }, [dispatch]);

  if (!customer) {
    return null;
  }
  const fullName = customer.first_name + " " + customer.last_name;

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div className={classes.backgroundHeader}>
        <div className={classes.section}>
          <Avatar className={classes.avatar} />
          {/*{getInitials(fullName)}</Avatar>*/}
          <Box>
            <Typography variant="h5" className={classes.textWhite}>
              {fullName}
            </Typography>
            <Typography variant="body2" className={classes.textWhite}>
              {customer.email}
            </Typography>
          </Box>
        </div>
      </div>
      <div className={classes.childrenSection}>
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
          user={customer}
          jobs={customer.jobs}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

CustomerLayout.propTypes = {
  children: PropTypes.any,
};

export default CustomerLayout;
