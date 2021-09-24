import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "./Hero";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

const Book = () => {
  const classes = useStyles();

  return (
    <Page title="Get Free Quote | Insight Moving" className={classes.root}>
      <Hero />
    </Page>
  );
};

export default Book;