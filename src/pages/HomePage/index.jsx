import React from "react";
import MovieList from "./components/MovieList";
import MyCarousel from "./components/MyCarousel";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <React.Fragment>
      <MyCarousel />
      <MovieList />
    </React.Fragment>
  );
}

export default HomePage;
