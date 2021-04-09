import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logoImg from "../../assets/images/helpzen-logo.png";
import "./styles.css";

function Footer({ user }) {
  const renderLeftItems = () => {
    if (!user) {
      return (
        <>
          <Typography className="footer--appBar--toolbar--leftItems--pagesText">
            <a href="/">Home</a> | <a href="#how-it-works">How it Works</a> |{" "}
            <a href="#faqs">FAQs</a>
          </Typography>
        </>
      );
    } else {
      return (
        <>
          <Typography className="footer--appBar--toolbar--leftItems--pagesText">
            <a href="/">Edit Profile</a> |{" "}
            <a href="#how-it-works">Helper Stats</a> |{" "}
            <a href="#faqs">Logout</a>
          </Typography>
        </>
      );
    }
  };

  return (
    <div className="footer">
      <AppBar className="footer--appBar" position="static">
        <Toolbar className="footer--appBar--toolbar">
          <div className="footer--appBar--toolbar--leftItems">
            {renderLeftItems()}
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
