import React from "react";
import { Button } from "@material-ui/core";
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
          <h1 className="home--loggedOut--contentArea--block2--header">
            How it Works
          </h1>
          <div className="home--loggedOut--contentArea--block2--steps">
            <div className="home--loggedOut--contentArea--block2--steps--container">
              <PersonIcon className="home--loggedOut--contentArea--block2--icon icon--person" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 1
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Create a new account or login to an existing account.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--container">
              <PhoneAndroidIcon className="home--loggedOut--contentArea--block2--icon icon--phone" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 2
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Select the technology that you need help with or wish to provide
                help with.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--container">
              <CodeIcon className="home--loggedOut--contentArea--block2--icon icon--code" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 3
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Select the programming language and describe your problem if you
                are seeking help.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--container">
              <TimerIcon className="home--loggedOut--contentArea--block2--icon icon--clock" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 4
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Wait for the system to match you with someone.
              </h4>
            </div>
            <DoubleArrowIcon />
            <div className="home--loggedOut--contentArea--block2--steps--container">
              <ChatIcon className="home--loggedOut--contentArea--block2--icon icon--chat" />
              <h2 className="home--loggedOut--contentArea--block2--stepTitle">
                STEP 5
              </h2>
              <h4 className="home--loggedOut--contentArea--block2--stepDescription">
                Start chatting with the matched user and try to come up with a
                solution to the problem together.
              </h4>
            </div>
          </div>
          <div className="home--loggedOut--contentArea--buttonContainer">
            <Button
              className="home--loggedOut--contentArea--joinButton"
              variant="outlined"
            >
              Join The Community
            </Button>
          </div>
        </div>

        <div className="home--loggedOut--contentArea--footer"></div>
      </div>
    </div>
  );
}

export default LoggedOut;
