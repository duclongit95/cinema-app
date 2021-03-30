import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import logo from "asset/images/logo.png";
import { ExpandMore } from "@material-ui/icons";

GroupDetailCinema.propTypes = {
  showTimes: PropTypes.array,
};

GroupDetailCinema.defaultProps = {
  showTimes: [],
};

const useStyles = makeStyles((theme) => ({
  groupDetailCinemaRoot: {
    flexGrow: 1,
    width: "66%",
  },
  styleTab: {
    minWidth: 100,
  },

  dateName: {
    fontWeight: 700,
  },
}));

function GroupDetailCinema(props) {
  const { showTimes } = props;
  const classes = useStyles();
  const [currentDate, setCurrentDate] = useState(1);

  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClickDate = (date) => {
    const currentDate = date.getDate();
    setCurrentDate(currentDate);
  };

  const renderShowTimes = () => {
    const cumRapChieu = showTimes[0].cumRapChieu;
    console.log(cumRapChieu);

    return cumRapChieu.map((item, index) => {
      const cinemaShowTimesList = item.lichChieuPhim;
      console.log(cinemaShowTimesList);

      return (
        <div key={index}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <img className={classes.imgHeading} src={logo} alt="" />
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {item.tenCumRap}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* {todayTimeList.map((item, index) => (
                  <Button
                    key={index}
                    className={classes.showTime}
                    variant="outlined"
                    color="secondary"
                  >
                    {moment(item.ngayChieuGioChieu).format("HH:mm")}
                  </Button>
                ))} */}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    });
  };

  //test

  const renderTab = () => {
    let dayName = [
      "Chủ nhật",
      " Thứ 2",
      " Thứ 3",
      " Thứ 4",
      " Thứ 5",
      " Thứ 6",
      " Thứ 7",
    ];
    //Create Tabs with 14 days
    let arrayTab = [...Array(14)].map((item, index) => {
      let day = new Date("January 1, 2019");
      let nextDay = new Date(day);
      nextDay.setDate(day.getDate() + index);

      return (
        <Tab
          className={classes.styleTab}
          onClick={() => handleClickDate(nextDay)}
          key={index}
          label={
            <>
              <Typography className={classes.dateName}>
                {dayName[nextDay.getDay()]}
              </Typography>
              <Typography className={classes.secondaryDateName}>
                {nextDay.getDate()}
              </Typography>
            </>
          }
        />
      );
    });
    return arrayTab;
  };

  return (
    <div className={classes.groupDetailCinemaRoot}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {renderTab()}
      </Tabs>
      {renderShowTimes()}
    </div>
  );
}

export default GroupDetailCinema;
