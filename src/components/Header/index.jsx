import React from "react";
import logo from "asset/images/logo.png";
import {
  AppBar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useTheme } from "@material-ui/styles";

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
  },

  webLogo: {
    height: "4em",
    [theme.breakpoints.up("sm")]: {
      height: "5em",
    },
  },

  webLogoContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  tabs: {
    margin: "0 auto",
  },

  tab: {
    color: "#fff",
    fontFamily: "Raleway",
    fontWeight: "700",

    [theme.breakpoints.down("sm")]: {
      minWidth: "120px",
    },
  },

  btnSignIn: {
    fontFamily: "Pacifico",
    color: "#fff",
  },

  menuIconContainer: {
    marginLeft: "auto",
    color: "#fff",
  },
}));

// The app bar elevates on scroll to communicate that the user is not at the top of the page.
function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };

  const menus = (
    <React.Fragment>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleOnChange}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} label="Trang chủ"></Tab>
        <Tab className={classes.tab} label="Lịch chiếu"></Tab>
        <Tab className={classes.tab} label="Cụm rạp"></Tab>
        <Tab className={classes.tab} label="Ứng dụng"></Tab>
      </Tabs>

      <Button
        className={classes.btnSignIn}
        variant="contained"
        color="secondary"
      >
        Đăng nhập
      </Button>
    </React.Fragment>
  );

  const drawers = (
    <React.Fragment>
      <Button
        className={classes.menuIconContainer}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItem divider button>
            <Button
              className={classes.btnSignIn}
              variant="contained"
              color="secondary"
            >
              Đăng nhập
            </Button>
          </ListItem>
          <ListItem divider button>
            Trang chủ
          </ListItem>
          <ListItem divider button>
            Lịch chiếu
          </ListItem>
          <ListItem divider button>
            Cụm rạp
          </ListItem>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <Button className={classes.webLogoContainer}>
              <img className={classes.webLogo} src={logo} alt="Tix" />
            </Button>
            {mediumScreen ? menus : drawers}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.offset}></div>
    </React.Fragment>
  );
}

export default Header;
