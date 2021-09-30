import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";

import Analytics from "./Analytics";
import ChevronRight from "src/icons/ChevronRight";
import Download from "src/icons/Download";
import ChevronDown from "src/icons/ChevronDown";

const AnalyticsOverview = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography color="textPrimary" variant="h5">
                Analytics
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRight fontSize="small" />}
                style={{ marginTop: 8 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Typography color="textSecondary" variant="subtitle2">
                  Analytics
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              <Button
                endIcon={<Download fontSize="small" />}
                variant="outlined"
              >
                Export
              </Button>
              <Button
                color="primary"
                endIcon={<ChevronDown fontSize="small" />}
                sx={{ ml: 2 }}
                variant="contained"
              >
                Last month
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ py: 3 }}>
            <Analytics />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AnalyticsOverview;