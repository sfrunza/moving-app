import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(3),
    boxShadow: "1px 1px 5px 0 rgb(1 1 1 / 5%)",
    transition: "transform 250ms ease, box-shadow 250ms ease",

    "&:hover": {
      transform: "translateY(-0.25rem)",
      boxShadow:
        "0px 2px 4px rgb(46 41 51 / 8%), 0px 5px 10px rgb(71 63 79 / 16%)",
    },
  },
  media: {
    height: 0,
    paddingTop: "90%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function CocktailCard({ cocktail }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let arr = [];
  let aaa = "strIngredient";
  for (let i = 1; i <= 15; i++) {
    if (cocktail[aaa + i]) {
      arr.push(cocktail[aaa + i]);
    }
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={cocktail.strDrinkThumb}
        title={cocktail.strDrink}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {cocktail.strDrink}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          {cocktail.strCategory}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {cocktail.strAlcoholic}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph color="textSecondary">
            {arr.map((ing, i) => {
              if (ing) {
                let dot = i === arr.length - 1 ? ". " : ", ";
                return (
                  <span key={i}>
                    {ing}
                    {dot}
                  </span>
                );
              }
              return null;
            })}
          </Typography>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph color="textSecondary">
            {cocktail.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
