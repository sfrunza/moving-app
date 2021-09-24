import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core";
import Section from "src/components/Section";
import { services, faq, properties } from "./data";
import Services from "./Services";
import FAQS from "./FAQS";
import Include from "./Include";
import Contact from "./Contact";
import Rates from "./Rates";
import Hero from "./Hero";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Page title="Company Name" className={classes.root}>
      <Hero />
      <Section>
        <Services data={services} id="next" />
      </Section>
      <Section background={theme.palette.background.level2}>
        <Include data={properties} />
      </Section>
      <Section>
        <Rates />
      </Section>
      <Section>
        <FAQS data={faq} />
      </Section>
      <Section background={theme.palette.background.level2}>
        <Contact />
      </Section>
    </Page>
  );
};

export default Home;
