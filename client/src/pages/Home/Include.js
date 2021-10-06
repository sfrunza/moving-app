import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { useMediaQuery, Grid, Button, Typography } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import { Link as RouterLink } from "react-router-dom";
import Check from "src/icons/Check";
import Section from "src/components/Section";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.level2,
    // padding: "4rem 0px",
    // borderRadius: 8,
    // [theme.breakpoints.up("md")]: {
    //   padding: "9rem 0px",
    // },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
}));

const Include = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Section className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        spacing={isMd ? 4 : 0}
        alignItems={isMd ? "center" : "flex-start"}
      >
        <Grid item xs={12} md={4}>
          <SectionHeader
            title="What's included"
            className={classes.header}
            ctaGroup={[
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/book"
                disableElevation
              >
                Book now
              </Button>,
            ]}
            fadeUp
            align={isMd ? "left" : "center"}
            disableGutter={isMd}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid
            container
            spacing={isMd ? 4 : 3}
            style={{ padding: isMd ? 0 : "0 16px" }}
          >
            {data.map((item, index) => (
              <Grid key={index} item xs={12} sm={6}>
                <Typography className={classes.title}>
                  <Check className={classes.icon} />
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

Include.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Include;
