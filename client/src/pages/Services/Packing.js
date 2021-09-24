import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import LearnMoreLink from "src/components/LearnMoreLink";
import Image from "src/components/Image";
import ChevronRight from "src/icons/ChevronRight";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Box, Divider, Typography, Button } from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import closet from "src/assets/img/closet.png";
import kitchen from "src/assets/img/kitchen.jpg";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },
  subtitle: {
    whiteSpace: "pre-line",
  },
  imagesBox: {
    width: "50%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Packing = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const paragraph =
    "We will send experienced, professional packers to your place and will deliver all necessary equipment such as boxes, packing paper, bubble wrap, stretch and shrink wrap, rolls of tape, blankets, and home protection. \n Packers will apply their techniques and skills to make sure your belongings are delivered safe and secured to any desired destination, whether it is a local move within Boston area or a long-distance journey.";

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Full packing service"
        subtitle="Our specially trained team of Boston movers packs and unpacks your items safely and efficiently."
        border
      />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <SectionHeader
            title="Packing services for all types of move"
            subtitle={paragraph}
            className={classes.subtitle}
            align="left"
            titleVariant="h6"
            subtitleVariant="body2"
            disableGutter
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
      <Box className={classes.divider} mt={6} mb={6}>
        <Divider />
      </Box>
      <Box display="flex" className={classes.imagesBox}>
        <Image src={kitchen} />
        <Image src={closet} />
      </Box>
      <Box className={classes.divider} mt={6} mb={6}>
        <Divider />
      </Box>
      <SectionHeader
        title="Paking specialty items"
        subtitle="If you are on a budget or you want to lower the cost of your move, we offer packing of specialty items, particularly fragile only: kitchen, artwork, mirrors or other breakables or valuables. You can also inquire about our crating services for extra valuable items."
        titleVariant="h6"
        subtitleVariant="body2"
        ctaGroup={[
          <Box align="center" display="flex" flexDirection="column">
            <Typography variant="h6" color="textPrimary">
              Our packing rates are the same as our hourly rates for moving.
            </Typography>
            <Box mt={2}>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                endIcon={<ChevronRight />}
                component={RouterLink}
                to="/pricing"
              >
                View rates
              </Button>
            </Box>
          </Box>,
        ]}
      />
    </div>
  );
};

Packing.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Packing;
