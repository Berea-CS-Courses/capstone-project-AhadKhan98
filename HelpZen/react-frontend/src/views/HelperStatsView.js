import React from "react";

import HelperStats from "../components/HelperStats";

function HelperStatsView({ user }) {
  return (
    <div>
      <HelperStats user={user} />
    </div>
  );
}

export default HelperStatsView;
