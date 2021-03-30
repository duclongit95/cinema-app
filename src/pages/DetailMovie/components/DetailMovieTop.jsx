import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import moment from "moment";

DetailMovieTop.propTypes = {
  detailMovieTop: PropTypes.object,
};

DetailMovieTop.defaultProps = {
  detailMovieTop: null,
};

const useStyles = makeStyles((theme) => ({
  detailInfo: {
    height: 700,
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: 500,
    },
  },
  wraper: {
    position: "absolute",
    top: "0",
    left: "0",
    backgroundImage: "linear-gradient(to top,#0a2029,transparent 150%)",

    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  styleBlur: {
    position: "absolute",
    top: "0",
    left: "0",

    width: "100%",
    height: "100%",
  },

  detailInfoContent: {
    zIndex: 3,
    maxWidth: 1000,
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      transform: "translate(-50%, 0%)",
    },
  },
  movieImg: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },

    width: 150,
    height: 300,
    object: "cover",
  },
  movieNameContainer: {
    flexGrow: 3,
    color: theme.palette.common.white,
    padding: "0 20px",
  },
  movieNameDate: {
    fontWeight: 700,
  },
  movieName: {
    fontSize: 24,
    fontWeight: 700,
    padding: "10px 0",
  },
  movieNameTime: {
    padding: "10px 0",
  },
  c13: {
    padding: "5px",
    backgroundColor: theme.palette.common.red,
    borderRadius: "10px",
  },

  movieRating: {
    flexGrow: 1,
    textAlign: "center",
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  movieRatingList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    "&>li": {
      padding: "0 5px",
      color: theme.palette.secondary.main,
    },
  },
  movieRatingNumber: {
    padding: "18px 20px",
    border: `5px solid ${theme.palette.secondary.main}`,
    borderRadius: 50,
    fontSize: 24,
    fontWeight: 500,
    display: "inline-block",
  },
}));

function DetailMovieTop(props) {
  const { detailMovieTop } = props;

  const classes = useStyles();
  return (
    <div className={classes.detailInfo}>
      <div className={classes.wraper}></div>
      <div>
        <img
          className={classes.styleBlur}
          src={detailMovieTop.hinhAnh}
          alt=""
        />
      </div>
      <div className={classes.detailInfoContent}>
        <img className={classes.movieImg} src={detailMovieTop.hinhAnh} alt="" />
        <div className={classes.movieNameContainer}>
          <Typography className={classes.movieNameDate}>
            {moment(detailMovieTop.ngayKhoiChieu).format("DD.MM.YYYY")}
          </Typography>
          <Typography className={classes.movieName}>
            <span className={classes.c13}>C13</span> {detailMovieTop.tenPhim}
          </Typography>
          <Typography className={classes.movieNameTime}>
            128 phút - 0 IMDb -
          </Typography>
          <Button color="secondary" variant="contained" size="large">
            Mua vé
          </Button>
        </div>
        <div className={classes.movieRating}>
          <Typography className={classes.movieRatingNumber}>10</Typography>
          <ul className={classes.movieRatingList}>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
          </ul>
          <Typography>272 người đánh giá</Typography>
        </div>
      </div>
    </div>
  );
}

export default DetailMovieTop;
