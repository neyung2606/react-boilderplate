import React from 'react'
import { Redirect, Switch } from "react-router-dom";
import { restrictedRoutes } from "src/config/router/routes";
import { renderRouteList } from "src/utils";

const RestrictedRoute = () => {
  return (
    <Switch>
      {renderRouteList(restrictedRoutes)}
      <Redirect to={restrictedRoutes.login.path} />
    </Switch>
  );
};

export default RestrictedRoute