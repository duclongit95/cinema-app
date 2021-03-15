import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import bgHomeApp from "asset/images/backapp.jpeg";
import mobie from "asset/images/mobile.png";
import slide from "asset/images/slide9.jpeg";

HomeApp.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "contain",
    padding: "120px 0 80px 0",
    backgroundImage: `url(${bgHomeApp})`,
  },

  container: {
    height: 400,
  },

  rightContainer: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  imgMobile: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 400,
  },
  imgSlide: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 400,
  },

  heading: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 30,
    letterSpacing: 2,
  },
  headingPrimary: {
    color: theme.palette.common.white,
    flexWrap: 700,
    fontSize: 24,
    padding: "20px 0",
  },
  desc: {
    color: theme.palette.common.white,
    flexWrap: 700,
    fontSize: 16,
    padding: "20px 0",
  },
}));

function HomeApp(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.container}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography className={classes.heading}>
                Ứng dụng tiện lợi dành cho người yêu điện ảnh
              </Typography>
              <Typography className={classes.headingPrimary}>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </Typography>
              <Button variant="contained" color="secondary" size="large">
                App miễn phí - Tải về ngay
              </Button>
              <Typography className={classes.desc}>
                Tix có 2 phiên bản IOS và Android
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} className={classes.rightContainer}>
            <Box>
              <img className={classes.imgMobile} src={mobie} alt="" />
              <img className={classes.imgSlide} src={slide} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeApp;
