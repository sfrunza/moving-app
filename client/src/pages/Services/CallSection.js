import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import Section from "src/components/Section";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(10, 2),
  },
  container: {
    justifyContent: "center",
    textAlign: "center",
  },
}));

const CallSection = () => {
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={7}>
          <SectionHeader
            title="Have a moving need? Contact us for a free consultation"
            titleProps={{
              className: classes.title,
              variant: "h5",
            }}
            disableGutter
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="tel:0000000000"
            disableElevation
          >
            +1 (000) 000-0000
          </Button>
        </Grid>
      </Grid>
    </Section>
  );
};

export default CallSection;
