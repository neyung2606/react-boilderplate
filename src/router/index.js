import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FallbackComponent from "src/components/fallbackComponent";
import { publicRoute } from "src/config/router/routes";
import { renderRouteList } from "src/utils";
import { AuthContext } from "src/utils/context";
import ProtectedRoute from "./ProtectedRoute";
import RestrictedRoute from "./RestrictedRoute";

const AppRouter = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  return (
    <Router>
      <Suspense fallback={<FallbackComponent />}>
        <Switch>
          {/* {renderRouteList(publicRoute)} */}
          <Route
            path="/"
            render={() => {
              if (isAuthenticated) {
                return <ProtectedRoute />;
              }
              return <RestrictedRoute />;
            }}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
