import React from "react";
import HomeApp from "./components/HomeApp";
import HomeCarousel from "./components/HomeCarousel";
import HomeCinema from "./components/HomeCinema";
import HomeMovie from "./components/HomeMovie";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <React.Fragment>
      <HomeCarousel />
      <HomeMovie />
      <HomeCinema />
      <HomeApp />
    </React.Fragment>
  );
}

export default HomePage;
