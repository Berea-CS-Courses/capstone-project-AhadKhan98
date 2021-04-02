import React from "react";

import "./styles.css";
import firstblockImg from "../../../assets/images/firstblock.png";
import NavBar from "../../NavBar";
import PersonIcon from "@material-ui/icons/Person";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import CodeIcon from "@material-ui/icons/Code";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import TimerIcon from "@material-ui/icons/Timer";
import ChatIcon from "@material-ui/icons/Chat";

function LoggedOut({ user }) {
  return (
    <div className="home--loggedOut">
      <NavBar user={user} />
      <div className="home--loggedOut--contentArea">
        <div className="home--loggedOut--contentArea--block1">
          <div className="home--loggedOut--contentArea--block1--leftItems">
            <h1 className="home--loggedOut--contentArea--block1--leftItems--title">
              The Real-Time Helping Platform
            </h1>
            <h4 className="home--loggedOut--contentArea--block1--leftItems--paragraph">
              Helpzen is an online community where programmers can help out each
              other. Consisting of a wide range of technologies and programming
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
        <div className="home--loggedOut--contentArea--block2">
          <h1>How it Works</h1>
          <div className="home--loggedOut--contentArea--block2--steps">
            <div className="home--loggedOut--contentArea--block2--steps--1">
              <PersonIcon className="home--loggedOut--contentArea--block2--icon" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 1
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Create a new account or login to an existing account.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--1">
              <PhoneAndroidIcon className="home--loggedOut--contentArea--block2--icon" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 2
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Create a new account or login to an existing account.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--1">
              <CodeIcon className="home--loggedOut--contentArea--block2--icon" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 3
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Create a new account or login to an existing account.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--1">
              <TimerIcon className="home--loggedOut--contentArea--block2--icon" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 4
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Create a new account or login to an existing account.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--1">
              <ChatIcon className="home--loggedOut--contentArea--block2--icon" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 5
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Create a new account or login to an existing account.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoggedOut;
