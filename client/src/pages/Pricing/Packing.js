import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SectionHeader from "src/components/SectionHeader";
import PackingCard from "./PackingCard";
import { useMediaQuery } from "@material-ui/core";
import Slider from "react-slick";
import blanket from "src/assets/img/blanket.jpg";
import wardrobe from "src/assets/img/wardrobe-box.jpg";
import picture from "src/assets/img/picture-box.jpg";
import paper from "src/assets/img/paper.jpg";
import sm from "src/assets/img/sm.jpg";
import md from "src/assets/img/md.jpg";
import lg from "src/assets/img/lg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const itemData = [
  {
    img: blanket,
    price: "Free",
    name: "Moving Blanckets",
    size: `72" x 0.2" x 80`,
  },
  {
    img: sm,
    price: 3.0,
    name: "Small Box",
    size: `17" x 12 3/8" x 12 3/8`,
  },
  {
    img: md,
    price: 4.0,
    name: "Medium Box",
    size: `18" x 18" x 16`,
  },
  {
    img: lg,
    price: 7.0,
    name: "Large Box",
    size: `18" x 18" x 24`,
  },
  //   {
  //     img: "https://media.istockphoto.com/photos/isolated-shot-of-opened-blank-cardboard-box-on-white-background-picture-id520619396?k=20&m=520619396&s=612x612&w=0&h=4f0ZqIMkVHEIhq76j8qmI-nc55cBhx-nqgITFtoW6WI=",
  //     price: 9.0,
  //     name: "Dish Barrel",
  //     size: `18" x 18" x 26`,
  //   },
  {
    img: wardrobe,
    price: 15.0,
    name: "Wardrobe",
    size: `21" x 18" x 46`,
  },
  {
    img: picture,
    price: 6.0,
    name: "Picture Box",
    size: `37" x 4" x 27`,
  },
  {
    img: paper,
    price: 40,
    name: "Packing Paper",
    size: `approx. 450 sheets`,
  },
];

export default function Packing() {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  //   consy;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMd ? 4 : 2,
    slidesToScroll: 2,
  };

  return (
    <div className={classes.root}>
      <SectionHeader title="Packing supplies" border />
      <Slider {...settings}>
        {itemData.map((item, i) => {
          return (
            <div key={i}>
              <PackingCard item={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
