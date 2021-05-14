import React from "react";

import EditProfile from "../components/HomeComponent/LoggedIn/EditProfile";

function EditProfileView({ user, userLogoutHandler }) {
  return (
    <div>
      <EditProfile user={user} userLogoutHandler={userLogoutHandler} />
    </div>
  );
}

export default EditProfileView;
