import { Container, makeStyles, Paper } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryGroupCinemaListAct,
  groupCinemaListAct,
  setGroupCinemaMovieList,
} from "redux/slice/cinemaSlice";
import CinemaList from "./CinemaList";
import CinemaMovieList from "./CinemaMovieList";
import PCinemaList from "../../../components/PCinemaList";

const useStyles = makeStyles((theme) => ({
  homeCinema: {
    height: 700,
    position: "relative",
    maxWidth: 1000,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  paper: {
    display: "flex",
    height: 500,
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

function HomeCinema() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [groupCinemaId, setGroupCinemaId] = useState("BHDStar");

  const pCinemaList = useSelector(
    (state) => state.cinemaReducer.categoryGroupCinemaList
  );

  const cinemaList = useSelector(
    (state) => state.cinemaReducer.groupCinemaList
  );

  const cinemaMovieList = useSelector(
    (state) => state.cinemaReducer.groupCinemaMovieList
  );

  useEffect(() => {
    try {
      const fetchPCinemaList = async () => {
        const result = await dispatch(categoryGroupCinemaListAct());
        unwrapResult(result);
      };
      fetchPCinemaList();
    } catch (error) {
      console.log({ error });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchCinemaList = async () => {
      try {
        const params = {
          maHeThongRap: groupCinemaId,
          maNhom: "GP10",
        };
        const result = await dispatch(groupCinemaListAct(params));
        unwrapResult(result);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchCinemaList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupCinemaId]);

  const handleGroupCinemaId = (value) => {
    setGroupCinemaId(value);
  };
  const handleCinemaId = (value) => {
    dispatch(setGroupCinemaMovieList(value));
  };

  return (
    <Container className={classes.homeCinema}>
      <Paper className={classes.paper} elevation={3}>
        <PCinemaList
          pCinemaList={pCinemaList}
          handleGroupCinemaId={handleGroupCinemaId}
        />
        <CinemaList cinemaList={cinemaList} handleCinemaId={handleCinemaId} />
        <CinemaMovieList cinemaMovieList={cinemaMovieList} />
      </Paper>
    </Container>
  );
}

export default HomeCinema;
