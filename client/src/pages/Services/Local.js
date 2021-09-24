import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Grid, Button } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import Image from "src/components/Image";
import CustomRouterLink from "src/components/CustomRouterLink";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  listGrid: {
    overflow: "hidden",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(3),
    "&:last-child": {
      marginBottom: theme.spacing(0),
    },
  },
  divider: {
    padding: theme.spacing(4, 0),
    width: "100%",
  },
}));

const Local = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Local moving"
        subtitle="Hourly based full moving services in metro Boston and 150 miles around it."
        border
      />
      <Grid container justifyContent="center">
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            spacing={isMd ? 4 : 2}
            alignItems="center"
            justifyContent="space-between"
            direction={index % 2 === 1 ? "row-reverse" : "row"}
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={6}>
              <SectionHeader
                titleVariant="h6"
                title={item.title}
                subtitle={item.description}
                subtitleVariant="body2"
                align="left"
                disableGutter
              />
            </Grid>
            <Grid item container justifyContent="center" xs={12} sm={6}>
              <Image
                src={item.illustration}
                alt={item.label}
                className={classes.listGrid}
              />
            </Grid>
          </Grid>
        ))}
        <Grid item container justifyContent="center" xs={12}>
          <Button
            variant="contained"
            color="primary"
            component={CustomRouterLink}
            to="/book"
            disableElevation
          >
            Book us now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Local.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Local;
