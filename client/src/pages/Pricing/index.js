import React from "react";
import Page from "src/components/Page";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, useTheme } from "@material-ui/core";
import Section from "src/components/Section";
import PricingTable from "./PricingTable";
import Main from "./components/Main";
import { pricings, flatPricings, flatRates } from "./data";
import Contact from "../Home/Contact";
import FlatRates from "./FlatRates";
import Packing from "./Packing";
import Footer from "src/layouts/MainLayout/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

const Pricing = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Page title="Pricing | Company Name" className={classes.root}>
      <Main flat={flatPricings} local={pricings} />
      <Divider />
      <Section className={classes.pagePaddingTop}>
        <PricingTable />
      </Section>
      <Divider />
      <Section className={classes.pagePaddingTop}>
        <FlatRates data={flatRates} />
      </Section>
      <Divider />
      <Section className={classes.pagePaddingTop}>
        <Packing />
      </Section>
      <div style={{ backgroundColor: theme.palette.background.level2 }}>
        <Contact />
      </div>
      <Divider />
      <Footer />
    </Page>
  );
};

export default Pricing;
