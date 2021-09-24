import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    boxShadow: theme.shadows[2],
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1),
      height: 300,
    },
  },
  media: {
    flex: "1 0 auto",
    backgroundSize: "80%",
  },
}));

export default function PackingCard({ item }) {
  const classes = useStyles();
  const formatter = (price, currency) => {
    if (typeof price === "string") return price;
    return currency + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={formatter(item.price, "$")} />
      <CardMedia className={classes.media} image={item.img} />
      <CardContent>
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {item.size}
        </Typography>
      </CardContent>
    </Card>
  );
}
