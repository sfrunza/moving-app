import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import { makeStyles } from "@material-ui/styles";
import RatesForm from "./RatesForm";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
  },
}));

function RatesView() {
  const classes = useStyles();
  return (
    <Page title="Rates">
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Header />
          <Grid className={classes.grid} container spacing={2}>
            <Grid item md={5} xs={12} sm={8} xl={6}>
              <Grid item>
                <RatesForm />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Page>
  );
}

export default RatesView;
