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
import React from "react";

CinemaMovieItem.propTypes = {};

const useStyles = makeStyles((theme) => ({
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

function CinemaMovieItem(props) {
  const { cinemaMovie } = props;

  const currentDay = "2019-01-01";
  const todayTimeList = cinemaMovie.lstLichChieuTheoPhim.filter(
    (lichChieu) => lichChieu.ngayChieuGioChieu.slice(0, 10) === currentDay
  );

  const classes = useStyles();
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
            src={cinemaMovie.hinhAnh}
            alt=""
          />
        </Typography>
        <Typography className={classes.secondaryHeading}>
          {cinemaMovie.tenPhim}
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

export default CinemaMovieItem;
