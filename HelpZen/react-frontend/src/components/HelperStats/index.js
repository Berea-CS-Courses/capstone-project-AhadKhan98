/**
 * Takes the user data and displays their stats as a helper
 */
import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SessionCard from "./SessionCard";
import StarIcon from "@material-ui/icons/Star";

import "./styles.css";

function HelperStats({ user, userLogoutHandler }) {
  if (!user) {
    window.location.replace("/"); // Redirect to homepage if user is not logged in
  }

  // Renders stars dynamically by calculating the average rating
  const renderStars = () => {
    let rating = 0;
    for (let i = 0; i < user.prevSessions.length; i++) {
      rating += user.prevSessions[i].rating;
    }
    rating = Math.floor(rating / user.prevSessions.length);

    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon className="helperStats--star--icon" />);
    }

    return stars;
  };

  // Displays cards summarizing each session in the past
  const renderSessionCards = () => {
    const reversedPrevSessions = user.prevSessions.reverse();
    let counter = reversedPrevSessions.length + 1;
    return reversedPrevSessions.map((session) => {
      counter -= 1;
      return (
        <SessionCard
          sessionNumber={counter}
          problemStatement={session.problemStatement}
          duration={session.duration}
          date={session.date}
          rating={session.rating}
        />
      );
    });
  };

  return (
    <div className="helperStats--container">
      <NavBar
        user={user}
        screen={"helperstats"}
        userLogoutHandler={userLogoutHandler}
      />
      <div className="helperStats--container--stats-screen--container">
        <div className="helperStats--container--stats-screen">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h2>
            Helper Rating:
            {renderStars()}
          </h2>
          <h2>Times Helped: {user.prevSessions.length}</h2>
          <h2>History</h2>
          {renderSessionCards()}
        </div>
      </div>
      <Footer user={user} userLogoutHandler={userLogoutHandler} />
    </div>
  );
}

export default HelperStats;
