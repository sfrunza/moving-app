import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[1],
  },
  name: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: 70,
    width: 70,
  },
  // action: {
  //   display: "flex",
  //   justifyContent: "center",
  // },
  // input: {
  //   display: "none",
  // },
}));

function ProfileDetails({ user }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" alignItems="center" flexDirection="column" pt={2}>
          <Avatar className={classes.avatar} src={""} />
          <Typography
            className={classes.name}
            gutterBottom
            variant="h6"
            color="textPrimary"
          >
            {user.first_name + " " + user.last_name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {user.email}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {user.active ? "Active" : "Not active"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProfileDetails;
