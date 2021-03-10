import React from "react";
import PropTypes from "prop-types";
import CarouselSlide from "constant/carousel-slide";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";

HomeCarousel.propTypes = {};

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  imgCarousel: {
    width: "100%",
    objectFit: "cover",
  },
}));

function HomeCarousel(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {CarouselSlide.map((item, index) => (
          <div key={index}>
            <img className={classes.imgCarousel} src={item.IMG} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeCarousel;
