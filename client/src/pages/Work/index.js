import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Section from "src/components/Section";
import Hero from "./Hero";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

const Work = () => {
  const classes = useStyles();

  return (
    <Page title="Our work | Company Name" className={classes.root}>
      <Hero />
      <Section className={classes.pagePaddingTop}></Section>
      <Divider />
    </Page>
  );
};

export default Work;
