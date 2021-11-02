import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import ServiceCard from "./ServiceCard";
import Section from "src/components/Section";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Services = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Section className={clsx(classes.root, className)} {...rest}>
      <SectionHeader title="Our Services" border />
      <Grid container spacing={3} justifyContent="center">
        {data.map((item, i) => {
          return (
            <Grid item xs={12} md={6} key={i}>
              <ServiceCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Services;
