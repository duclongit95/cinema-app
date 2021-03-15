import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryGroupCinemaList,
  setGroupCinemaList,
} from "redux/slice/cinemaSlice";

CategoryGroupCinema.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down[400]]: {
      display: "none",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  tab: {
    minWidth: 50,
    padding: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },

  imgLogo: {
    height: 50,
  },
}));

function CategoryGroupCinema(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState({
    maHeThongRap: "BHDStar",
    maNhom: "GP10",
  });
  const handleChangeTabs = (e, newValue) => {
    setValue(newValue);
  };

  const categoryGroupCinemaList = useSelector(
    (state) => state.cinemaReducer.categoryGroupCinemaList
  );

  const getIdGroupCinema = (id) => {
    setFilter({ ...filter, maHeThongRap: id });
  };

  useEffect(() => {
    try {
      const getGroupCinemaList = async (params) => {
        const resultAction = await dispatch(setGroupCinemaList(params));
        unwrapResult(resultAction);
      };
      getGroupCinemaList(filter);
    } catch (error) {
      console.log("getGroupCinemaList", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    try {
      const getCategoryGroupCinema = async () => {
        const result = await dispatch(setCategoryGroupCinemaList());
        unwrapResult(result);
      };

      getCategoryGroupCinema();
    } catch (error) {
      console.log("getCategoryGroupCinema Error", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCategoryGroupCinemaList = (categoryGroupCinemaList) =>
    categoryGroupCinemaList.map((item, index) => (
      <Tab
        className={classes.tab}
        key={index}
        onClick={() => getIdGroupCinema(item.maHeThongRap)}
        label={<img className={classes.imgLogo} src={item.logo} alt="" />}
      />
    ));

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChangeTabs}
      aria-label="Vertical tabs example"
      className={classes.tabs}
    >
      {renderCategoryGroupCinemaList(categoryGroupCinemaList)}
    </Tabs>
  );
}

export default CategoryGroupCinema;
