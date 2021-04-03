import React from "react";

import "./styles.css";
import firstblockImg from "../../../../assets/images/firstblock.png";
function BlockOne() {
  return (
    <div className="home--loggedOut--contentArea--block1">
      <div className="home--loggedOut--contentArea--block1--leftItems">
        <h1 className="home--loggedOut--contentArea--block1--leftItems--title">
          The Real-Time Helping Platform
        </h1>
        <h4 className="home--loggedOut--contentArea--block1--leftItems--paragraph">
          Helpzen is an online community where programmers can help each other
          out. Consisting of a wide range of technologies and programming
          languages, you can find help catered to fit your needs.
        </h4>
      </div>
      <div className="home--loggedOut--contentArea--block1--rightItems">
        <img
          className="home--loggedOut--contentArea--block1--rightItems--image"
          src={firstblockImg}
        />
      </div>
    </div>
  );
}

export default BlockOne;
