import React from "react";
import { Box, Container, Divider, makeStyles } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import InvoicePDF from "./InvoicePDF";
import bill from "./billoflading.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function BillOfLading() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Bill of Lading | Company Name">
      <Container maxWidth="lg">
        <Header pdf={bill} />
        <Box mt={2}>
          <Divider />
        </Box>
        <InvoicePDF pdf={bill} />
      </Container>
    </Page>
  );
}

export default BillOfLading;
