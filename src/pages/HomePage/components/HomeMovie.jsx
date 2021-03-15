import { Container, Tab, Tabs } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/styles";
import movieApi from "api/movieApi";
import MySkeleton from "asset/material-ui/MySkeleton";
import TabPanel from "asset/material-ui/TabPanel";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieItem from "./MovieItem";

HomeMovie.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 920,
    overflow: "hidden",
  },
}));

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ fontSize: 20, color: "red" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ fontSize: 20, color: "red" }} />
    </div>
  );
}
//setting for React slick carousel
const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  autoplay: false,
  slidesPerRow: 4,
  rows: 2,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesPerRow: 3,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesPerRow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function HomeMovie(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const movieListComming = movieList.reverse();

  const handleChangeTabs = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const resultApi = await movieApi.getAll({ maNhom: "GP10" });
        setMovieList(resultApi.data);
      } catch (error) {
        console.log("Error get all Movie Api", error);
      }
      setLoading(false);
    };
    fetchMovieList();
  }, []);

  return (
    <Container className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChangeTabs}
        indicatorColor="primary"
        textColor="primary"
        aria-label="simple tabs example"
        centered
      >
        <Tab label="Đang chiếu" />
        <Tab label="Sắp chiếu" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Slider {...settings}>
          {loading ? (
            <MySkeleton />
          ) : (
            movieList.map((movie, index) => (
              <div key={movie.maPhim}>
                <MovieItem movie={movie} />
              </div>
            ))
          )}
        </Slider>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Slider {...settings}>
          {loading ? (
            <MySkeleton />
          ) : (
            movieListComming.map((movie, index) => (
              <div key={movie.maPhim}>
                <MovieItem movie={movie} />
              </div>
            ))
          )}
        </Slider>
      </TabPanel>
    </Container>
  );
}

export default HomeMovie;
