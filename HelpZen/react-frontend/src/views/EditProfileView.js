import React from "react";

import EditProfile from "../components/HomeComponent/LoggedIn/EditProfile";

function EditProfileView({ user, userLogoutHandler }) {
  // Renders the edit profile component passing in the user and the function to log user out
  return (
    <div>
      <EditProfile user={user} userLogoutHandler={userLogoutHandler} />
    </div>
  );
}

export default EditProfileView;
