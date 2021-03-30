import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";

PCinemaList.propTypes = {
  pCinemaList: PropTypes.array,
  handleGroupCinemaId: PropTypes.func,
  withLabel: PropTypes.bool,
};

PCinemaList.defaultProps = {
  pCinemaList: [],
  handleGroupCinemaId: null,
  withLabel: false,
};

const useStyles = makeStyles((theme) => ({
  pCinemaList: {},
  imgLogo: {
    width: 50,
    height: 50,
    objectFit: "cover",
  },
  styleTab: {
    minWidth: 80,
    padding: theme.spacing(3),
    "& > span": {
      alignItems: "flex-start",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    height: "100%",
  },
  boxContainer: {
    display: "flex",
    alignItems: "center",
  },
  nameMovie: {
    marginLeft: 10,
    fontWeight: 700,
    textTransform: "none",
  },
}));

function PCinemaList(props) {
  const { pCinemaList, handleGroupCinemaId, withLabel } = props;
  const classes = useStyles();
  //Material UI
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleGroupCinema = (id) => {
    if (handleGroupCinemaId) {
      handleGroupCinemaId(id);
    }
  };

  const renderPCinemaList = (pCinemaList) => {
    // return pCinemaList.map((item, index) => {
    //   if (withLabel) {
    //     return (
    //       <Tab
    //         key={index}
    //         onClick={() => handleGroupCinema(item.maHeThongRap)}
    //         className={classes.styleTab}
    //         label={
    //           <Box className={classes.boxContainer}>
    //             <img className={classes.imgLogo} src={item.logo} alt="" />
    //             <Typography className={classes.nameMovie}>
    //               {item.maHeThongRap}
    //             </Typography>
    //           </Box>
    //         }
    //       ></Tab>
    //     );
    //   }
    //   return (
    //     <Tab
    //       key={index}
    //       onClick={() => handleGroupCinema(item.maHeThongRap)}
    //       className={classes.styleTab}
    //       label={<img className={classes.imgLogo} src={item.logo} alt="" />}
    //     ></Tab>
    //   );
    // });
    if (withLabel && pCinemaList.length > 0) {
      return pCinemaList.map((item, index) => {
        return (
          <Tab
            key={index}
            onClick={() => handleGroupCinema(item.maHeThongRap)}
            className={classes.styleTab}
            label={
              <Box className={classes.boxContainer}>
                <img className={classes.imgLogo} src={item.logo} alt="" />
                <Typography className={classes.nameMovie}>
                  {item.maHeThongRap}
                </Typography>
              </Box>
            }
          />
        );
      });
    }
    return pCinemaList.map((item, index) => {
      return (
        <Tab
          key={index}
          onClick={() => handleGroupCinema(item.maHeThongRap)}
          className={classes.styleTab}
          label={<img className={classes.imgLogo} src={item.logo} alt="" />}
        />
      );
    });
  };

  return (
    <div className={classes.pCinemaList}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        textColor="secondary"
      >
        {renderPCinemaList(pCinemaList)}
      </Tabs>
    </div>
  );
}

export default PCinemaList;
