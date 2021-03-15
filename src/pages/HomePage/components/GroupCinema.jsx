import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupCinemaMovie from "./GroupCinemaMovie";
import logo from "asset/images/logo.png";
import { setGroupCinemaMovieList } from "redux/slice/cinemaSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 444,
    flexGrow: 1,
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  tab: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },

  imgCinema: {
    width: 50,
    height: 50,
    objectFit: "cover",
  },

  name: {
    fontSize: 14,
    fontWeight: 700,
    textTransform: "none",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  address: {
    fontSize: 12,
    textAlign: "left",
    textTransform: "none",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: theme.palette.grey[600],
  },
  detail: {
    fontSize: 14,
    textAlign: "left",
    textTransform: "none",
    color: theme.palette.common.red,
  },
  groupCinemaList: {
    flexGrow: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
}));

GroupCinema.propTypes = {};

function GroupCinema(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleChangeTabs = (e, newValues) => {
    setValue(newValues);
  };

  const groupCinemaList = useSelector(
    (state) => state.cinemaReducer.groupCinemaList
  );

  const groupCinemaMovieList =
    useSelector((state) => state.cinemaReducer.groupCinemaMovieList) || [];

  const getGroupCinemaId = (newId) => {
    const findGroupCinemaMovie = groupCinemaList.filter(
      (item) => item.maCumRap === newId
    );
    const groupCinemaMovieList = findGroupCinemaMovie[0].danhSachPhim;
    dispatch(setGroupCinemaMovieList(groupCinemaMovieList));
  };

  const renderGroupCinemaList = (groupCinemaList) =>
    groupCinemaList.map((item, index) => (
      <Tab
        className={classes.tab}
        key={index}
        onClick={() => getGroupCinemaId(item.maCumRap)}
        label={
          <Grid container>
            <Grid item xs={3}>
              <img className={classes.imgCinema} src={logo} alt="#" />
            </Grid>
            <Grid item xs={9}>
              <Box>
                <Typography className={classes.name}>
                  {item.tenCumRap}
                </Typography>
                <Typography className={classes.address}>
                  {item.diaChi}
                </Typography>
                <Typography className={classes.detail}>[Chi tiết]</Typography>
              </Box>
            </Grid>
          </Grid>
        }
      />
    ));

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChangeTabs}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {renderGroupCinemaList(groupCinemaList)}
      </Tabs>
      <div className={classes.groupCinemaList}>
        {groupCinemaMovieList.map((item, index) => (
          <GroupCinemaMovie cinemaMovieItem={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default GroupCinema;
