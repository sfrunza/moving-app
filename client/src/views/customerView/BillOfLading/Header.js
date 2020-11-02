import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import samplePDF from "./billoflanding.pdf";
import {
  Button,
  Box,
  Link,
  Dialog,
  Grid,
  Typography,
  makeStyles,
  Hidden
} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InvoicePDF from './InvoicePDF';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  download: {
    color: 'rgba(var(--d69,0,149,246),1)'
  }
}));

function Header({ className, pdf, ...rest }) {
  const classes = useStyles();
  const [viewPDF, setViewPDF] = useState(false);

  return (
    <Grid
      container
      justify="space-between"
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Typography
          variant="h4"
          color="textPrimary"
        >
          Invoice Details
        </Typography>
      </Grid>
      <Grid item>
          <Button
            className={classes.action}
          >
            <RouterLink className={classes.download} to={pdf} target="_blank" download>Download PDF</RouterLink>
          </Button>

        <Dialog fullScreen open={viewPDF}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="common.white"
              p={2}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setViewPDF(false)}
              >
                <NavigateBeforeIcon />
                Back
              </Button>
            </Box>
            <Box flexGrow={1}>
              <PDFViewer
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              >
                <InvoicePDF />
              </PDFViewer>
            </Box>
          </Box>
        </Dialog>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
