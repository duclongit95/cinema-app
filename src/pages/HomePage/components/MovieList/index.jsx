import React from "react";
import PropTypes from "prop-types";
import { Container, Paper, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import TabPanel from "asset/material-ui/TabPanel";

MovieList.propTypes = {};

function MovieList(props) {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Đang chiếu" />
        <Tab label="Sắp chiếu" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Đang chiếu
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sắp chiếu
      </TabPanel>
    </Container>
  );
}

export default MovieList;
