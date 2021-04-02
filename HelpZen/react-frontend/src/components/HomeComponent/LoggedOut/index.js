import React from "react";

import "./styles.css";
import firstblockImg from "../../../assets/images/firstblock.png";
import NavBar from "../../NavBar";

function LoggedOut({ user }) {
  return (
    <div className="home--loggedOut">
      <NavBar user={user} />
      <div className="home--loggedOut--contentArea">
        <div className="home--loggedOut--contentArea--block1">
          <div className="home--loggedOut--contentArea--block1--leftItems">
            <h1>The Real-Time Helping Platform</h1>
            <h4>
              Helpzen is an online community where programmers can help out each
              other.
            </h4>
          </div>
          <div className="home--loggedOut--contentArea--block1--rightItems">
            <img
              className="home--loggedOut--contentArea--block1--rightItems--image"
              src={firstblockImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoggedOut;
