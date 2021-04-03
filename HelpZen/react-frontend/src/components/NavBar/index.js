import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import "./styles.css";

import logoImg from "../../assets/images/helpzen-logo.png";

function NavBar({ user, loginModalHandler, registerModalHandler }) {
  const renderRightItems = () => {
    if (!user) {
      return (
        <>
          <a href="#how-it-works">
            <p className="navBar--appBar--rightItems--pageText">How It Works</p>
          </a>
          <p className="navBar--appBar--rightItems--pageText">FAQs</p>
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
      return <p>USER</p>;
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
