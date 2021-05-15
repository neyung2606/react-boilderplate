import React, { lazy } from "react";

const LazyComponent = ({ component, props }) => {
  const Component = lazy(() => import(`src/pages/${component}`));
  return <Component {...props} />;
};

export default LazyComponent;
