import React from "react";
import { Grid, makeStyles, Divider } from "@material-ui/core";
import EditProfile from "./EditProfile";
import Page from "src/components/Page";
import SectionHeader from "src/components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    height: "100%",
  },
}));

function General() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Edit Profile | Comany Name">
      <SectionHeader
        title="Edit profile"
        titleVariant="h5"
        subtitleVariant="h6"
        subtitle={<Divider style={{ width: "auto", flexShrink: "unset" }} />}
      />
      <Grid container>
        <EditProfile />
      </Grid>
    </Page>
  );
}

export default General;
