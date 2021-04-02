import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import "./styles.css";

import logoImg from "../../assets/images/helpzen-logo.png";

function NavBar() {
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
          <div className="navBar--appBar--rightItems">
            <p className="navBar--appBar--rightItems--pageText">How It Works</p>
            <p className="navBar--appBar--rightItems--pageText">FAQs</p>
            <Button
              className="navBar--appBar--rightItems--registerButton"
              variant="outlined"
              color="primary"
            >
              Register
            </Button>
            <Button
              className="navBar--appBar--rightItems--loginButton"
              variant="outlined"
              color="primary"
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
