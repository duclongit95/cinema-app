import React from "react";
import HomeCarousel from "./components/HomeCarousel";
import HomeMovie from "./components/HomeMovie";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <React.Fragment>
      <HomeCarousel />
      <HomeMovie />
    </React.Fragment>
  );
}

export default HomePage;
