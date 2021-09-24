import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CardContent,
  Card,
  CardActions,
} from "@material-ui/core";
import ChevronRight from "src/icons/ChevronRight";
import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    transition: "transform 250ms ease, box-shadow 250ms ease",
    "&:hover": {
      transform: "translateY(-0.25rem)",
      boxShadow: theme.shadows[2],
    },
  },
  contentSection: {
    textAlign: "center",
  },
  linkSection: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ServiceCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent classes={{ root: classes.contentSection }}>
        <Typography gutterBottom variant="h6" component="h2">
          {item.location}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.properties}
        </Typography>
      </CardContent>
      <CardActions classes={{ root: classes.linkSection }}>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          endIcon={<ChevronRight />}
          component={RouterLink}
          to={item.href}
        >
          {item.location}
        </Button>
      </CardActions>
    </Card>
  );
}
