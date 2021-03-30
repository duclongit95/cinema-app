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
  Dialog,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useTheme } from "@material-ui/styles";
import Register from "pages/Auth/components/Register";
import Login from "pages/Auth/components/Login";
import { useDispatch, useSelector } from "react-redux";
import { AccountCircle } from "@material-ui/icons";
import { actLogoutUser } from "redux/slice/userSlice";
import { Link } from "react-router-dom";

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
  user: {
    fontSize: 40,
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
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [isDialog, setIsDialog] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const isLogin = !!currentUser.accessToken;

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleIsDialog = (value) => {
    setIsDialog(value);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.clear("USER");
    dispatch(actLogoutUser());
    setAnchorEl(null);
  };

  const menus = (
    <React.Fragment>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleOnChange}
        indicatorColor="primary"
      >
        <Tab
          component={Link}
          to="/"
          className={classes.tab}
          label="Trang chủ"
        ></Tab>
        <Tab className={classes.tab} label="Lịch chiếu"></Tab>
        <Tab className={classes.tab} label="Cụm rạp"></Tab>
        <Tab className={classes.tab} label="Ứng dụng"></Tab>
      </Tabs>

      {isLogin ? (
        <AccountCircle
          className={classes.user}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClickMenu}
        />
      ) : (
        <Button
          className={classes.btnSignIn}
          variant="contained"
          color="secondary"
          onClick={handleOpenDialog}
        >
          Đăng nhập
        </Button>
      )}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>Thông tin tài khoản</MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        {isDialog ? (
          <Login
            handleIsDialog={handleIsDialog}
            onCloseDialog={handleCloseDialog}
          />
        ) : (
          <Register handleIsDialog={handleIsDialog} />
        )}
      </Dialog>
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
