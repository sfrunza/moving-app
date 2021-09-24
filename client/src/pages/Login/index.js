import React from "react";
import { makeStyles } from "@material-ui/core";
import Page from "src/components/Page";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    // overflow: "hidden",
    // position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {},
}));

function Login(props) {
  const classes = useStyles();

  return (
    <Page title="Login | Company Name" className={classes.root}>
      <LoginForm />
    </Page>
  );
}

export default Login;
