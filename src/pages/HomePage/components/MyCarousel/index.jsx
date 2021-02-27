import React from "react";
import { makeStyles } from "@material-ui/styles";
import Carousel from "react-material-ui-carousel";
import CarouselOne from "asset/images/carousel-1.jpg";
import CarouselTwo from "asset/images/carousel-2.jpg";
import CarouselThree from "asset/images/carousel-3.jpg";

MyCarousel.propTypes = {};

const useStyles = makeStyles({
  imgCarousel: {
    width: "100%",

    objectFit: "cover",
  },

  btnIcon: {
    backgroundColor: "transparent",
  },
});

function MyCarousel(props) {
  const classes = useStyles();
  let items = [
    {
      image: CarouselOne,
    },
    {
      image: CarouselTwo,
    },
    {
      image: CarouselThree,
    },
  ];
  return (
    <Carousel className={classes.carouselContainer} indicators={false}>
      {items.map((item, index) => {
        return (
          <img
            className={classes.imgCarousel}
            src={item.image}
            key={index}
            alt="myCarousel"
          />
        );
      })}
    </Carousel>
  );
}

export default MyCarousel;
