/**
 * Displays bottom navigation for the app
 * Renders items based on user login status
 */
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logoImg from "../../assets/images/helpzen-logo.png";
import "./styles.css";

function Footer({ user, userLogoutHandler }) {
  // Render items on the left dynamically based on user login status
  const renderLeftItems = () => {
    if (!user) {
      // User doest not exist
      return (
        <>
          <Typography className="footer--appBar--toolbar--leftItems--pagesText">
            <a href="/">Home</a> | <a href="#how-it-works">How it Works</a> |{" "}
            <a href="#faqs">FAQs</a>
          </Typography>
        </>
      );
    } else {
      // User exists
      return (
        <>
          <Typography className="footer--appBar--toolbar--leftItems--pagesText">
            <Link to="/edit-profile">Edit Profile</Link> |{" "}
            <Link to="/helper-stats">Helper Stats</Link> |{" "}
            <a onClick={userLogoutHandler}>Logout</a>
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
