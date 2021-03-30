import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import logo from "asset/images/logo.png";

CinemaList.propTypes = {
  handleCinemaId: PropTypes.func,
};

CinemaList.detaultProps = {
  handleCinemaId: null,
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    height: "100%",
  },
  imgCinema: {
    width: "100%",
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
}));

function CinemaList(props) {
  const { cinemaList, handleCinemaId } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, newVavlue) => {
    setValue(newVavlue);
  };

  useEffect(() => {
    setValue(0);
  }, [cinemaList]);

  const renderCinemaList = (cinemaList) =>
    cinemaList.map((item, index) => {
      return (
        <Tab
          key={index}
          className={classes.tab}
          onClick={() => handleCinemaId(item.maCumRap)}
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
      );
    });

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {renderCinemaList(cinemaList)}
      </Tabs>
    </div>
  );
}

export default CinemaList;
