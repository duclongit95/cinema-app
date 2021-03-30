import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import CinemaMovieItem from "./CinemaMovieItem";

CinemaMovieList.propTypes = {
  cinemaMovieList: PropTypes.array,
};

CinemaMovieList.defaultProps = {
  cinemaMovieList: [],
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    overflowY: "auto",
    overflowX: "hidden",
    height: "100%",
  },
}));

function CinemaMovieList(props) {
  const { cinemaMovieList } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {cinemaMovieList.map((item, index) => {
        return <CinemaMovieItem cinemaMovie={item} key={index} />;
      })}
    </div>
  );
}

export default CinemaMovieList;
