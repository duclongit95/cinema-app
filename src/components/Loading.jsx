import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, makeStyles } from "@material-ui/core";

Loading.propTypes = {};

const useStyles = makeStyles((theme) => ({
  loadingRoot: {
    width: "100%",
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Loading(props) {
  const classes = useStyles();
  return (
    <div className={classes.loadingRoot}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
