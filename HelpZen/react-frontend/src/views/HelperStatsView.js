import React from "react";

import HelperStats from "../components/HelperStats";

function HelperStatsView({ user, userLogoutHandler }) {
  return (
    <div>
      <HelperStats user={user} userLogoutHandler={userLogoutHandler} />
    </div>
  );
}

export default HelperStatsView;
