import { makeStyles, Paper } from "@material-ui/core";
import PCinemaList from "components/PCinemaList";
import React, { useState } from "react";
// import CategoryGroupCinema from "components/CategoryGroupCinema";
import GroupDetailCinema from "./GroupDetailCinema";
import PropTypes from "prop-types";

ShowTimes.propTypes = {
  detailMovie: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  showTimeRoot: {
    display: "flex",
    height: 444,
    maxWidth: 900,
    margin: "0 auto",
  },
}));

function ShowTimes(props) {
  const { detailMovie } = props;
  const [showTimeId, setShowTimeId] = useState("BHDStar");
  const classes = useStyles();

  const { heThongRapChieu } = detailMovie;
  const handleGroupCinemaId = (id) => {
    setShowTimeId(id);
  };

  const showTimes = heThongRapChieu.filter(
    (item) => item.maHeThongRap === showTimeId
  );

  return (
    <Paper className={classes.showTimeRoot}>
      <PCinemaList
        pCinemaList={heThongRapChieu}
        withLabel={true}
        handleGroupCinemaId={handleGroupCinemaId}
      />
      <GroupDetailCinema
        className={classes.groupDetailCinema}
        showTimes={showTimes}
      />
    </Paper>
  );
}

export default ShowTimes;
