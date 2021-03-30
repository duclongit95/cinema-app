import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, makeStyles, Tab, Tabs } from "@material-ui/core";
import TabPanel from "asset/material-ui/TabPanel";
import ShowTimes from "./ShowTimes";

DetailMovieBottom.propTypes = {
  detailMovie: PropTypes.object,
};

DetailMovieBottom.defaultProps = {
  detailMovie: null,
};

const useStyles = makeStyles((theme) => ({
  detailContent: {
    backgroundColor: "#0a2029",
  },
  detailMovieBottomTabs: {
    color: theme.palette.common.white,
    fontSize: 24,
    textTransform: "none",
  },
}));

function DetailMovieBottom(props) {
  const { detailMovie } = props;
  const classes = useStyles();
  const [valueTabs, setValueTabs] = useState(0);
  const handleChangeTabs = (e, newValue) => {
    setValueTabs(newValue);
  };
  return (
    <div className={classes.detailContent}>
      <Container>
        <Tabs
          value={valueTabs}
          onChange={handleChangeTabs}
          aria-label="simple tabs example"
          centered
        >
          <Tab className={classes.detailMovieBottomTabs} label="Lịch chiếu" />
          <Tab className={classes.detailMovieBottomTabs} label="Thông tin" />
        </Tabs>
        <TabPanel value={valueTabs} index={0}>
          <ShowTimes detailMovie={detailMovie} />
        </TabPanel>
        <TabPanel value={valueTabs} index={1}>
          Thông tin
        </TabPanel>
      </Container>
    </div>
  );
}

export default DetailMovieBottom;
