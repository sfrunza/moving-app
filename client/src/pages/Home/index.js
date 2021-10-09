import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, useMediaQuery } from "@material-ui/core";
import Section from "src/components/Section";
import { services, faq, properties } from "./data";
import Services from "./Services";
import FAQS from "./FAQS";
import Include from "./Include";
import Contact from "./Contact";
import Rates from "./Rates";
import Hero from "./Hero";
import Footer from "src/layouts/MainLayout/Footer";

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
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Page
      title="Insight Moving | Boston Movers Who Care (Free Estimate)"
      className={classes.root}
    >
      <Hero />
      <Section>
        <Services data={services} id="next" />
      </Section>
      <div style={{ backgroundColor: theme.palette.background.level2 }}>
        <Include data={properties} />
      </div>
      <Section>
        <Rates />
      </Section>
      <div
        style={{
          backgroundImage: ` linear-gradient(rgba(255, 255, 255, 0), ${theme.palette.background.level2}`,
        }}
      >
        <FAQS data={faq} />
      </div>
      <svg
        width="100%"
        height={isMd ? 80 : 60}
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
        style={{ marginTop: isMd ? -40 : -30 }}
      >
        <path
          d="M0,0 L0,40 Q250,80 500,40 L500,0 Z"
          fill={`${theme.palette.background.level2}`}
        />
      </svg>
      <Contact />
      <Footer />
    </Page>
  );
};

export default Home;
