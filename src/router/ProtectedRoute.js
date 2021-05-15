import React from "react";
import { protectedRoute } from 'src/config/router/routes'

const ProtectedRoute = () => {
  return (
    <Switch>
      {renderRoutesList(protectedRoute)}
      <Redirect to={protectedRoute.dashboard.path} />
    </Switch>
  );
};

export default ProtectedRoute;
