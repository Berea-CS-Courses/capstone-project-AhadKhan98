import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/helpzen-logo.png";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <AppBar className="footer--appBar" position="static">
        <Toolbar className="footer--appBar--toolbar">
          <div className="footer--appBar--toolbar--leftItems">
            <Typography className="footer--appBar--toolbar--leftItems--pagesText">
              <a href="#">Home</a> | <a href="#how-it-works">How it Works</a> |{" "}
              <a href="#faqs">FAQs</a>
            </Typography>
          </div>

          <div className="footer--appBar--toolbar--rightItems">
            <img
              src={logoImg}
              className="footer--appBar--toolbar--rightItems--logoImg"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
