/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Document,
  Page,
  pdfjs
} from 'react-pdf';
import {
  makeStyles
} from '@material-ui/core';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  page: {
    '& div' :{
      '& canvas': {
        width: '100% !important',
        height: 'auto !important',
        [theme.breakpoints.up('sm')]: {
          height: 'auto !important',
        },
      },
      '& div': {
        display: 'none',
      }
    },

  },
}));

function InvoicePDF({ pdf }) {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
      <Document
        file={pdf}
        className={classes.page}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
  );
}

export default InvoicePDF;
