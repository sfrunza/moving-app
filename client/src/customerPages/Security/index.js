import React from "react";
import { makeStyles, Grid, Divider } from "@material-ui/core";
import Page from "src/components/Page";
import PasswordChange from "./PasswordChange";
import SectionHeader from "src/components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    height: "100%",
  },
}));

function Security() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Change Password | Comany Name">
      <SectionHeader
        title="Change password"
        titleVariant="h5"
        subtitleVariant="h6"
        subtitle={<Divider style={{ width: "auto", flexShrink: "unset" }} />}
      />
      <Grid container>
        <PasswordChange />
      </Grid>
    </Page>
  );
}

export default Security;
