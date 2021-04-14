import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Switch,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import "./styles.css";

import logoImg from "../../assets/images/helpzen-logo.png";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function NavBar({
  user,
  loginModalHandler,
  registerModalHandler,
  handleUserStatusToggle,
  screen,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserMenuButtonClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const renderRightItems = () => {
    if (!user) {
      return (
        <>
          <a href="#how-it-works">
            <p className="navBar--appBar--rightItems--pageText">How It Works</p>
          </a>
          <a href="#faqs">
            <p className="navBar--appBar--rightItems--pageText">FAQs</p>
          </a>
          <Button
            className="navBar--appBar--rightItems--registerButton"
            variant="outlined"
            color="primary"
            onClick={registerModalHandler}
          >
            Register
          </Button>
          <Button
            className="navBar--appBar--rightItems--loginButton"
            variant="outlined"
            color="primary"
            onClick={loginModalHandler}
          >
            Login
          </Button>
        </>
      );
    } else {
      return (
        <>
          {screen ? (
            <>null</>
          ) : (
            <>
              <div className="navBar--appBar--rightItems--userStatus">
                <Typography>Get Help</Typography>
                <Switch onChange={handleUserStatusToggle} color="default" />
                <Typography>Offer Help</Typography>
              </div>
            </>
          )}

          <div className="navBar--appBar--rightItems--userProfile">
            <Button
              aria-controls="userMenu"
              aria-haspopup="true"
              onClick={handleUserMenuButtonClick}
              variant="outlined"
            >
              <Typography>{user.firstName}</Typography>
              <ArrowDropDownIcon />
            </Button>
            <Menu
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              id="userMenu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
            >
              <MenuItem>Edit Profile</MenuItem>
              <MenuItem>
                <Link className="navbar--link" to="/helper-stats">
                  Helper Stats
                </Link>
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
        </>
      );
    }
  };

  return (
    <div className="navBar">
      <AppBar className="navBar--appBar" position="static">
        <Toolbar>
          <div className="navBar--appBar--leftItems">
            <Link to="/">
              <img
                className="navBar--logoImg"
                src={logoImg}
                alt="helpzen logo"
              />
            </Link>
          </div>
          <div className="navBar--appBar--rightItems">{renderRightItems()}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
