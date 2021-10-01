import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Box,
  Divider,
  Typography,
  Button,
} from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import Image from "src/components/Image";
import ChevronRight from "src/icons/ChevronRight";
import { Link as RouterLink } from "react-router-dom";

import img from "src/assets/img/inter-22.jpg";
import usa from "src/assets/img/usamap2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  benefit: {
    display: "flex",
    width: "100%",
    "& div": {
      backgroundColor: "transparent",
    },
  },
  listGrid: {
    overflow: "hidden",
    marginBottom: theme.spacing(3),
    "&:last-child": {
      marginBottom: theme.spacing(0),
    },
  },
  square: {
    height: 10,
    width: 10,
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  same: {
    backgroundColor: "#36cb98",
  },
  next: {
    backgroundColor: "#9acd33",
  },
  more: {
    backgroundColor: "#ff9966",
  },
}));

const Interstate = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Interstate moving"
        subtitle="Flat rate moving. Gas, mileage, tolls and insurance are included. No hidden fees. Same or next day delivery on distances up to 1,500 miles."
        align="center"
        border
        disableGutter
        className={classes.listGrid}
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid
          item
          container
          justifyContent={isMd ? "flex-start" : "center"}
          xs={12}
          md={6}
        >
          <Image src={img} className={classes.image} />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          display="felx"
          justifyContent="space-between"
        >
          <SectionHeader
            title="Moving from / to Boston"
            subtitle="We offer licensed, insured, full-service interstate moves from Boston, which means the best long distance movers will come to your place, package all of your items correctly, secured and safe, load them into one of our moving trucks, deliver them to your new home, unload them, unpack them and arrange them in places."
            titleVariant="h6"
            subtitleVariant="body2"
            align="left"
            ctaGroup={[
              <Button
                size="small"
                color="primary"
                variant="outlined"
                endIcon={<ChevronRight />}
                component={RouterLink}
                to="/pricing"
              >
                View Flat Rates
              </Button>,
            ]}
          />
        </Grid>
      </Grid>
      <Box className={classes.divider} mt={6} mb={6}>
        <Divider />
      </Box>
      <SectionHeader
        title="How do we work"
        subtitle="We offer single-load service to all long-distance moves. Same workers will load your goods, drive the truck, and make a delivery. Many moving companies will load with one group, another worker will drive, and then they'll hire a new group of workers to unload at the delivery. This is of course a very economical way on one side. On the other, there is a bigger chance, that something will get damaged or lost when third party is involved. We don't take your stuff to a hub and put it on a different truck and then switch it again and again.This eliminates confusion, contamination, chance something will get damaged and you always know where your goods are, who has your goods, and when they are going to arrive."
        titleVariant="h6"
        subtitleVariant="body2"
        align="left"
        disableGutter
        subtitleFullWidth
      />
      <Box className={classes.divider} mt={6} mb={6}>
        <Divider />
      </Box>
      <Box className={classes.divider}>
        <Image src={usa} />
      </Box>
      <Box className={classes.infoContainer} mt={6}>
        <Box display="flex" alignItems="center">
          <Box className={clsx(classes.square, classes.same)} mr={1}></Box>
          <Typography variant="body2" color="textSecondary">
            same/next day delivery
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box className={clsx(classes.square, classes.next)} mr={1}></Box>
          <Typography variant="body2" color="textSecondary">
            1/2 days delivery
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box className={clsx(classes.square, classes.more)} mr={1}></Box>
          <Typography variant="body2" color="textSecondary">
            2/3 days delivery
          </Typography>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" color="textPrimary">
          Do not see your state? Contact our office to see, if we are willing to
          go that far.
        </Typography>
      </Box>
    </div>
  );
};

Interstate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Interstate;
