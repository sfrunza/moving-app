import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  Divider,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import InvoicePDF from './InvoicePDF';
import samplePDF from "./billoflading2222.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function BillOfLading() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Bill of Lading"
    >
      <Container maxWidth="lg">
        <Header pdf={samplePDF}/>
        <Box my={2}>
          <Divider />
        </Box>
        <InvoicePDF pdf={samplePDF}/>
      </Container>
    </Page>
  );
}

export default BillOfLading;
