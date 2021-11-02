import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  Card,
  CardMedia,
  CardActionArea,
  Box,
} from "@material-ui/core";
import ChevronRight from "src/icons/ChevronRight";
import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    height: "100%",
    transition: "box-shadow 250ms ease",
    "&:hover": {
      boxShadow: "rgb(90 105 120 / 20%) 1px 1px 20px 0px",
    },
  },
  focus: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {},
  arrowIcon: {
    width: 18,
    height: 18,
    verticalAlign: "middle",
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
      <CardActionArea
        component={RouterLink}
        to={item.href}
        classes={{ focusHighlight: classes.focus }}
      >
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.location}
        />
        <CardContent classes={{ root: classes.contentSection }}>
          <Typography gutterBottom variant="h2">
            {item.location}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ width: "70%", margin: "auto" }}
          >
            {item.properties}
          </Typography>
          <Box mt={2} mb={2} justifyContent="center" display="flex">
            <Typography
              component="p"
              className={classes.title}
              variant="body2"
              color="primary"
            >
              <b>Learn more</b>
              <ChevronRight className={classes.arrowIcon} color="primary" />
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
