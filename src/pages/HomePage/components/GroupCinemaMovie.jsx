import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";

GroupCinemaMovie.propTypes = {
  cinemaMovieItem: PropTypes.object,
};

GroupCinemaMovie.defaultProps = {
  cinemaMovieItem: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    marginRight: theme.spacing(2),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  imgHeading: {
    width: 50,
    height: 50,
    objectFit: "cover",
  },
  showTime: {
    marginRight: theme.spacing(1),
  },
}));

function GroupCinemaMovie({ cinemaMovieItem }) {
  const classes = useStyles();
  const { lstLichChieuTheoPhim } = cinemaMovieItem;

  const currentDay = "2019-01-01";
  const todayTimeList = lstLichChieuTheoPhim.filter(
    (lichChieu) => lichChieu.ngayChieuGioChieu.slice(0, 10) === currentDay
  );

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          <img
            className={classes.imgHeading}
            src={cinemaMovieItem.hinhAnh}
            alt=""
          />
        </Typography>
        <Typography className={classes.secondaryHeading}>
          {cinemaMovieItem.tenPhim}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {todayTimeList.map((item, index) => (
            <Button
              key={index}
              className={classes.showTime}
              variant="outlined"
              color="secondary"
            >
              {moment(item.ngayChieuGioChieu).format("HH:mm")}
            </Button>
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default GroupCinemaMovie;
