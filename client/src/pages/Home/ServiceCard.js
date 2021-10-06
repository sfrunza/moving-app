import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CardContent,
  Card,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import ChevronRight from "src/icons/ChevronRight";
import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    // boxShadow: theme.shadows[1],
    // backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
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
    padding: theme.spacing(3, 1),
  },
  media: {
    height: 0,
    paddingTop: "30%", // 16:9
    backgroundSize: "50%",
  },
}));

export default function ServiceCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image}
        title={item.location}
      />
      <CardContent classes={{ root: classes.contentSection }}>
        <Typography gutterBottom variant="h6">
          {item.location}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ width: "70%", margin: "auto" }}
        >
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
