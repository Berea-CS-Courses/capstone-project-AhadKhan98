import React, { useState } from "react";

import NavBar from "../../../NavBar";
import Footer from "../../../Footer";

import { Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import {
  updatePrevSessionsForUserId,
  modifySessionForUser,
  deleteSession,
} from "../../../../api";

import "./styles.css";

function LeaveReview({ user }) {
  const [rating, setRating] = useState(5);

  const userSession =
    user._id === user.activeSession.currentMatchQuery.userId
      ? user.activeSession.currentMatchQuery
      : user.activeSession.matchFound;

  const userToReviewSession =
    user._id === user.activeSession.currentMatchQuery.userId
      ? user.activeSession.matchFound
      : user.activeSession.currentMatchQuery;

  const submitRating = (helpeeId, helperId, data) => {
    updatePrevSessionsForUserId(helperId, data).then(() => {
      modifySessionForUser({
        userId: helpeeId,
        modifiedSessionStatus: null,
      }).then(() => {
        deleteSession({ roomId: user.activeSession.roomNumber }).then(() => {
          window.location.replace("/");
        });
      });
    });
  };

  const getDate = () => {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  return (
    <div className="leaveReview--container">
      <NavBar user={user} screen={true} />
      <div className="leaveReview--form--container">
        <div className="leaveReview--form">
          <h1>How was your previous help session?</h1>
          <h4>Please provide an overall rating for your previous session.</h4>
          <div className="leaveReview--form--fields">
            <Rating
              className="rating-stars"
              name="rating"
              value={rating}
              onChange={(e, newRating) => {
                setRating(newRating);
              }}
            />
          </div>
          <Button
            className="leaveReview--button"
            variant="contained"
            color="primary"
            onClick={() =>
              submitRating(userSession.userId, userToReviewSession.userId, {
                date: getDate(),
                problemStatement: userSession.problemStatement,
                rating: rating,
              })
            }
          >
            Submit
          </Button>
        </div>
      </div>
      <Footer user={user} />
    </div>
  );
}

export default LeaveReview;
