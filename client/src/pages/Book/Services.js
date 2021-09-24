import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Service from "./Service";

const Services = ({ services, service }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={isMd ? 6 : 2} justifyContent="center">
      {services.map((ser, i) => {
        return (
          <Grid item xs={12} md={4} sm={6} key={i}>
            <Service service={ser} category={service} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Services;
