import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import GO from "asset/images/123go.png";
import AGRIBANK from "asset/images/AGRIBANK.png";
import ANDROID from "asset/images/android-logo.png";
import APPLE from "asset/images/apple-logo.png";
import BHD from "asset/images/bhd.png";
import BOCONGTHUONG from "asset/images/bocongthuong.png";
import BETE from "asset/images/bt.jpeg";
import CGV from "asset/images/cgv.png";
import CINETAR from "asset/images/cinestar.png";
import CNX from "asset/images/cnx.jpeg";
import DCINE from "asset/images/dcine.png";
import DONGDA from "asset/images/dongdacinema.png";
import FACEBOOK from "asset/images/facebook-logo.png";
import GALAXY from "asset/images/galaxycine.png";
import IVB from "asset/images/IVB.png";
import LABAN from "asset/images/laban.png";
import LOTTE from "asset/images/lotte.png";
import MEGAGS from "asset/images/megags.png";
import PAYOO from "asset/images/payoo.jpeg";
import STARLIGHT from "asset/images/STARLIGHT.png";
import TOUCH from "asset/images/TOUCH.png";
import VCB from "asset/images/VCB.png";
import VIETTINBANK from "asset/images/VIETTINBANK.png";
import ZALO from "asset/images/zalo-logo.png";
import ZALOPAY from "asset/images/zalopay_icon.png";
import ZION from "asset/images/zion-logo.jpeg";
import React from "react";
import { Link } from "react-router-dom";

Footer.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#222323",
    paddingTop: theme.spacing(1),
  },
  logo: {
    width: 30,
    borderRadius: 50,
    backgroundColor: theme.palette.common.white,
    marginRight: "15px",
    "&:hover": {
      transition: "all .5s",
      opacity: ".7",
    },
  },
  logoPrimary: {
    width: 30,
    marginRight: "15px",
  },
  gridContainer: {
    marginBottom: "15px",
  },
  heading: {
    color: theme.palette.common.white,
    marginBottom: "1rem",
    textTransform: "uppercase",
  },
  link: {
    fontSize: 12,
    color: theme.palette.grey[500],
    display: "block",
    textDecoration: "none",
    marginBottom: theme.spacing(1),
    "&:hover": {
      color: theme.palette.common.white,
      transition: "all .5s",
    },
  },
  secondContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  iconZion: {
    width: 80,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  iconBoCongThuong: {
    width: 130,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  footerHeading: {
    color: theme.palette.common.white,
  },
  footerBottomContainer: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" className={classes.heading}>
              Tix
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Link className={classes.link} to="#">
                  FAQ
                </Link>
                <Link className={classes.link} to="#">
                  Brand Guidelines
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link className={classes.link} to="#">
                  Thoả thuận sử dụng
                </Link>
                <Link className={classes.link} to="#">
                  Chính sách bảo mật
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.secondContainer} item xs={12} md={4}>
            <Typography variant="subtitle2" className={classes.heading}>
              Đối tác
            </Typography>
            <Grid container>
              <Grid item xs={12} className={classes.gridContainer}>
                <Link to="#">
                  <img className={classes.logo} src={CGV} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={BHD} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={GALAXY} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={CINETAR} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={LOTTE} alt="" />
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.gridContainer}>
                <Link to="#">
                  <img className={classes.logo} src={MEGAGS} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={BETE} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={DONGDA} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={TOUCH} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={CNX} alt="" />
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.gridContainer}>
                <Link to="#">
                  <img className={classes.logo} src={STARLIGHT} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={DCINE} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={ZALOPAY} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={PAYOO} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={VCB} alt="" />
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.gridContainer}>
                <Link to="#">
                  <img className={classes.logo} src={AGRIBANK} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={VIETTINBANK} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={IVB} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={GO} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logo} src={LABAN} alt="" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.heading}>
                  Mobile App
                </Typography>
                <Link to="#">
                  <img className={classes.logoPrimary} src={APPLE} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logoPrimary} src={ANDROID} alt="" />
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.heading}>
                  Social
                </Typography>
                <Link to="#">
                  <img className={classes.logoPrimary} src={FACEBOOK} alt="" />
                </Link>
                <Link to="#">
                  <img className={classes.logoPrimary} src={ZALO} alt="" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Grid className={classes.footerBottomContainer} container>
          <Grid item xs={12} md={1}>
            <img className={classes.iconZion} src={ZION} alt="" />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography className={classes.footerHeading} variant="h6">
              Đồ án cuối khoá CyberSoft
            </Typography>
            <Typography className={classes.footerHeading}>
              Người thực hiện: Trần Đức Long
            </Typography>
            <Typography className={classes.footerHeading}>
              Số điện thoại: 0844 444 112
            </Typography>
            <Typography className={classes.footerHeading}>
              Email: longtd688@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <img
              className={classes.iconBoCongThuong}
              src={BOCONGTHUONG}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
