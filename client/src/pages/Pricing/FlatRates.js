import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery, Typography, Box } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    "&:hover": {
      boxShadow: "rgb(140 152 164 / 10%) 0px 12px 15px",
    },
  },
  city: {
    fontWeight: "bold",
  },
  startingText: {
    marginRight: theme.spacing(1),
  },
  startingAmount: {
    // fontWeight: "bold",
  },
}));

const FlatRates = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Flat rates"
        subtitle="Call us for more infomation and rates."
        subtitleProps={{
          variant: "body1",
          color: "textSecondary",
        }}
        border
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index} md={6}>
            <Box
              className={classes.box}
              display="flex"
              justifyContent="space-between"
            >
              <Typography className={classes.city}>{item.city}</Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className={classes.startingText}
                >
                  Starting From
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.startingAmount}
                >
                  {item.amount}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

FlatRates.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default FlatRates;
