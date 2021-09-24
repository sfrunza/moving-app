import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
  faqTitle: {
    marginBottom: theme.spacing(1),
  },
}));

const Faq = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Answers to commonly asked questions from the experts at Insight Moving."
        border
      />
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <SectionHeader
              title={item.title}
              subtitle={item.text}
              titleVariant="h6"
              subtitleVariant="body2"
              align="left"
              disableGutter
            />
          </Grid>
        ))}
      </Grid>
      <SectionHeader
        title=""
        subtitle="Didn’t find your answer? Contact us here"
      />
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
