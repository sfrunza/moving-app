import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
// import Image from "src/components/Image";
import SectionHeader from "src/components/SectionHeader";
// import LearnMoreLink from "src/components/LearnMoreLink";
import ServiceCard from "./ServiceCard";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    // borderRadius: 8,
    // padding: theme.spacing(10, 6),
    // backgroundColor: theme.palette.background.level2,
  },
  // image: {
  //   objectFit: "cover",
  // },
  // textWhite: {
  //   color: theme.palette.primary.contrastText,
  // },
  // title: {
  //   fontWeight: 600,
  // },
  // starting: {},
  // gridListTile: {
  //   position: "relative",
  //   "& .MuiGridListTile-tile": {
  //     borderRadius: theme.spacing(1),
  //   },
  // },
  // gridListSection: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "85%",
  //   margin: "auto",
  // },
}));

const Services = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader title="Our Services" border />
      <Grid container spacing={isMd ? 6 : 2} justifyContent="center">
        {data.map((item, i) => {
          return (
            <Grid item xs={12} md={6} key={i}>
              <ServiceCard item={item} />
            </Grid>
          );
        })}
      </Grid>
      {/* <ImageList rowHeight={isSm ? 350 : 350} cols={4} gap={isSm ? 24 : 16}>
        {data.map((item, index) => (
          // <GridListTile
          //   key={index}
          //   cols={isSm ? item.cols : 4 || 1}
          //   className={classes.gridListTile}
          // >
          //   <Image
          //     {...item.image}
          //     alt={item.location}
          //     className={classes.image}
          //     lazyProps={{
          //       width: "100%",
          //       height: "100%",
          //     }}
          //   />
          //   <SectionHeader
          //     title={item.location}
          //     subtitle={item.properties}
          //     subtitleProps={{
          //       variant: "body1",
          //       className: classes.textWhite,
          //     }}
          //     titleProps={{
          //       variant: "h3",
          //       className: classes.textWhite,
          //     }}
          //     disableGutter
          //     className={classes.gridListSection}
          //     align="center"
          //     ctaGroup={[
          //       <LearnMoreLink
          //         title="Learn more"
          //         to="/services"
          //         variant="subtitle1"
          //       />,
          //     ]}
          //   />
          // </GridListTile>
          <Card item={item} />
        ))}
      </ImageList> */}
    </div>
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
